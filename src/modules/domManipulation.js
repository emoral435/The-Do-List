import projectInformation from "./projectInformation";
import updateButtons from "./updateButtons";
import iFactory from "./informationFactory";
import killProject from "./killProject";
import getId from "./getId";
import makeTask from "./makeTask";
import storage from "./localStorage";
import uploadTasks from "./uploadTasks";
import updateDirectory from "./updateDirectory";

const domMan = (() => {

    const buttonChange = () => {
        let domBtn = document.querySelectorAll('.directory')
        for (let i = 0; i < domBtn.length; i++) {
            domBtn[i].addEventListener('click', () => {
                domBtn.forEach( btn => {
                    if (btn.classList.contains('toggled')) {
                        btn.classList.remove('toggled')
                    }
                })
                const title = document.getElementById('title')
                let divChild = domBtn[i].childNodes
                let text
                if (divChild.length > 3) {
                    text = divChild[3].textContent
                } else {
                    text = divChild[1].textContent
                }
                domBtn[i].classList.add('toggled')
                title.textContent = text
                })
            }
        let clicked = document.querySelectorAll('.directory')
        clicked.forEach( btn => {
            btn.addEventListener('click', () => {
                updateDirectory.refresh(btn)
            })
        })
        }

    const navToggle = () => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLink = document.getElementById('nav')
        const main = document.getElementById('main')
        toggleButton.addEventListener('click', () => {
            navbarLink.classList.toggle('active')
            main.classList.toggle('active')
        })
    };

    const activateModals = () => {
        const openModalButtons = document.querySelectorAll('[data-modal-target')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')

        openModalButtons.forEach( btn => {
            btn.addEventListener('click', () => {
                const modal = document.querySelector(btn.dataset.modalTarget)
                openModal(modal)
            })
        })

        closeModalButtons.forEach( btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal')
                closeModal(modal)
            })
        })

        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }
    };

    const addProject = () => {
        document.getElementById('addProject').addEventListener('click', (event) => {
            event.preventDefault();
            additionalProject()
        })

        function additionalProject() {
            const projectName = document.getElementById('name').value.trim()
            document.getElementById('name').value = ''
            let i = 0
            let j =0
            while (i < storage.getProjectItem().nameArray.length) {
                if (storage.getProjectItem().nameArray[i] === projectName) {
                    j++
                    break
                }
                i++
            }

            if (j == 0) {
                let element = iFactory(projectName)
                let updatedProject = storage.getProjectItem()
                updatedProject.projectArray.push(element)
                updatedProject.nameArray.push(projectName)
                const addOn = document.getElementById('additionalProjects')
                const btn = makeBtn(["hover:bg-[#cccccc]", "rounded-md", "w-full", "py-2", "flex", "justify-between", "items-center", "h-12", "px-1", 'directory'])
                const img = makeImg(["h-[1.3rem]", "w-[1.3rem]", "flex", "justify-start", "items-center", "mx-4", "box-content"])
                const div = makeDiv(projectName)
                div.classList.add('closest')
                const x = makeX(['ml-4','z-10','flex','justify-end', 'killbill'])
                btn.append(img)
                btn.append(div)
                btn.append(x)
                addOn.insertBefore(btn, document.getElementById('addBefore'))
                updateButtons(document.querySelectorAll('.directory'))
                buttonChange()
                killProject()
                storage.updateProjectInfo(updatedProject)
            }
        }
    }

    function makeBtn(array) {
        const btn = document.createElement('button')
        for (let i = 0; i < array.length; i++) {
            btn.classList.add(array[i])
        }
        return btn
    }

    function makeX(array) {
        const x = document.createElement('div')
        x.innerHTML = '&times;'
        for(let i =0; i < array.length; i++) {
            x.classList.add(array[i])
        }
        return x
    }

    function makeImg(array) {
        const img = new Image(20,20)
        img.src = '/src/modules/project-image.png'
        for (let i = 0; i < array.length; i++) {
            img.classList.add(array[i])
        }
        return img
    }

    function makeDiv(projectName) {
        const div = document.createElement('div')
        div.textContent = projectName
        div.dataset.projectName = projectName
        div.dataset.id = projectInformation.nameArray.length - 1
        return div
    }

    const addTask = () => {
        document.getElementById('addTask').addEventListener('click', (event) => {
            event.preventDefault();
            additionalTask()
        })
    }
    
    function additionalTask() {
        // this checks where the task is being placed in
        const title = document.getElementById('title')
        let index = getId(title.innerHTML)
        console.log('clicked')
        let objective = document.getElementById('objective').value
        let description = document.getElementById('description').value
        let priority = document.getElementById('priority').value
        let date = document.getElementById('date').value
        if (title.textContent != 'Inbox') {
            projectInformation.projectArray[0].tasks.push(makeTask(objective,description,priority,date, title.textContent.trim()))
            projectInformation.projectArray[index].tasks.push(makeTask(objective,description,priority,date, title.textContent.trim()))
        } else {
            projectInformation.projectArray[0].tasks.push(makeTask(objective,description,priority,date, title.textContent.trim()))
        }
        storage.updateProjectInfo(projectInformation)
        document.getElementById('objective').value = ''
        document.getElementById('description').value = ''
        document.getElementById('priority').value = '0'
        document.getElementById('date').value = ''
        let taskIndex = projectInformation.projectArray[index].tasks.length - 1
        let newTask = uploadTasks.upload(taskIndex)
        document.getElementById('content').insertBefore(newTask, document.getElementById('taskButton'))
    }

    return {
        buttonChange,
        navToggle,
        activateModals,
        addProject,
        addTask,
        makeBtn,
        makeDiv,
        makeImg,
        makeX,
    }
})();

export default domMan;