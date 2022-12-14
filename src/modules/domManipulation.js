import projectInformation from "./projectInformation";
import updateButtons from "./updateButtons";
import iFactory from "./informationFactory";
import killProject from "./killProject";


const domMan = (() => {
    const buttonChange = () => {
        let domBtn = document.querySelectorAll('.directory')
        domBtn.forEach( btn => {
            btn.addEventListener('click', () => {
                domBtn.forEach ( btn => {
                    if (btn.classList.contains('toggled')) {
                        btn.classList.remove('toggled');
                    }
                })
                btn.classList.add('toggled')
            })
        })
    };

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

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal-active')
            modals.foreEach( modal => {
                closeModal(modal)
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
            const projectName = document.getElementById('name').value
            document.getElementById('name').value = ''
            let i = 0
            let j =0
            while (i < projectInformation.nameArray.length) {
                if (projectInformation.nameArray[i] === projectName) {
                    j++
                    break
                }
                i++
            }

            if (j == 0) {
                let element = iFactory(projectName)
                projectInformation.projectArray.push(element)
                console.log(projectInformation.projectArray)
                const addOn = document.getElementById('additionalProjects')
                projectInformation.nameArray.push(projectName)
                const btn = makeBtn(["hover:bg-[#cccccc]", "rounded-md", "w-full", "py-2", "flex", "justify-between", "items-center", "h-12", "px-1", 'directory'])
                const img = makeImg(["h-[1.3rem]", "w-[1.3rem]", "flex", "justify-start", "items-center", "mx-4", "box-content"])
                const div = makeDiv(projectName)
                const x = makeX(['ml-4','z-10','flex','justify-end', 'killbill'])
                btn.append(img)
                btn.append(div)
                btn.append(x)
                addOn.insertBefore(btn, document.getElementById('addBefore'))
                updateButtons(document.querySelectorAll('.directory'))
                buttonChange()
                killProject()
                
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
    }

    return {
        buttonChange,
        navToggle,
        activateModals,
        addProject,
    }
})();

export default domMan;