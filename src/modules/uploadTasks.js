import newElement from "./createElements"
import createModal from "./createModal"

const uploadTasks = (() => {
    const upload = (id, priority) => {
        let taskDiv = newElement.makeDiv()
        let grandFather = newElement.makeDiv('rounded-[10px] flex justify-between hover:bg-[#cccccc] min-h-[3rem] items-center hover:relative hover:bottom-1 hover:shadow-xl flex-col lg:flex-row py-2')
        let taskName = makeDiv('flex items-start justify-start lg:justify-start lg:items-center w-full')
        let circle = newElement.circleSpan(id)
        circle.addEventListener('click', deleteTask(id))
        let taskNameStringDiv = newElement.makeDiv('','','Task Details')
        taskName.append(circle, taskNameStringDiv)
        grandFather.append(taskName)
        let taskHub = newElement.makeDiv("flex gap-6 mr-8")
        let detailDiv = newElement.makeDiv()
        let detailsButton = newElement.makeButton("hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300", "", "Details")
        detailsButton.dataset.modalTarget = '#' + id + 'Modal'
        detailsButton.addEventListener('click', () => {
            let detailsModal = document.querySelector(detailsButton.dataset.modalTarget)
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
        taskHub.append(trashImg)
        grandFather.append(taskHub)
        taskDiv.append(grandFather)
        return taskDiv
    }

    function deleteTask(id) {
        console.log('work in progress, will either use closest or see the title id contents!')
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