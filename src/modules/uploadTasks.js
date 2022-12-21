import newElement from "./createElements"
import createModal from "./createModal"
import projectInformation from "./projectInformation"
import getId from "./getId"
import killTask from "./killTask"
import storage from "./localStorage"

const uploadTasks = (() => {
    const upload = (id, priority) => {
        let taskId = 'task' + id
        let taskDiv = newElement.makeDiv('', taskId)
        let grandFather = newElement.makeDiv('rounded-[10px] flex justify-between hover:bg-[#cccccc] min-h-[3rem] items-center hover:relative hover:bottom-1 hover:shadow-xl flex-col lg:flex-row py-2')
        let taskName = newElement.makeDiv('flex items-start justify-start lg:justify-start lg:items-center w-full')
        let circle = newElement.circleSpan(id)
        circle.addEventListener('click', () => {
            killTask.kill(id)
        })
        let title = document.getElementById('title')
        let index = getId(title.innerHTML)
        let objectTitle = storage.getProjectItem().projectArray[index].tasks[id].objective
        let taskNameStringDiv = newElement.makeDiv('','', objectTitle)
        taskName.append(circle, taskNameStringDiv)
        grandFather.append(taskName)
        let taskHub = newElement.makeDiv("flex gap-6 mr-8")
        let detailDiv = newElement.makeDiv()
        let detailsButton = newElement.makeButton("hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300", "", "Details")
        detailsButton.dataset.modalTarget = id + 'Modal'
        detailsButton.addEventListener('click', () => {
            let detailsModal = document.getElementById(detailsButton.dataset.modalTarget)
            openModal(detailsModal)
        })
        let taskModal = createModal.taskModal(id)
        detailDiv.append(detailsButton, taskModal)
        taskHub.append(detailDiv)
        let editImg = newElement.makeEditImg(id)
        editImg.addEventListener('click', () => {
            const editModal = document.querySelector(editImg.dataset.modalTarget)
            closeModal(editModal)
        })
        let otherEditModal = createModal.editModal(id)
        taskHub.append(editImg, otherEditModal)
        let trashImg = newElement.makeTrashImg(id)
        trashImg.addEventListener('click', () => {
            killTask.kill(id)
        })
        taskHub.append(trashImg)
        grandFather.append(taskHub)
        taskDiv.append(grandFather)
        return taskDiv
    }

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
     
    return { upload }
})()

export default uploadTasks
// the array here is an array of objects that where made with makeTasks function, check it out if you do not know what properties the object has