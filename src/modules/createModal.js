import newElement from "./createElements"
import projectInformation from "./projectInformation"
import getId from "./getId"
import storage from "./localStorage"

const createModal = (() => {
    const taskModal = (id) => {
        let strModal = id + 'Modal'
        let godDiv = newElement.makeDiv('modal break-normal', strModal)
        let modalHeader = newElement.makeDiv('modal-header')
        let closeBtn = newElement.makeButton('close-button', '', '')
        closeBtn.innerHTML = '&times;'
        closeBtn.dataset.closeButton
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal')
            closeModal(modal)
        })
        modalHeader.append(newElement.makeDiv('title', '', 'Task Details'), closeBtn)
        godDiv.append(modalHeader)
        let modalBody = newElement.makeDiv('modal-body')
        let title = document.getElementById('title').textContent
        let newIndex = getId(title)
        let projectName = storage.getProjectItem().projectArray[newIndex].projectName + " / " + storage.getProjectItem().projectArray[newIndex].tasks[id].project
        modalBody.append(newElement.makeDiv('','', ('Project: ' + projectName)))
        modalBody.append(newElement.makeDiv('','', ('Title: ' + storage.getProjectItem().projectArray[newIndex].tasks[id].objective)))
        modalBody.append(newElement.makeDiv('','', ('Description: ' + storage.getProjectItem().projectArray[newIndex].tasks[id].desc)))
        modalBody.append(newElement.makeDiv('','', ('Due Date: ' + storage.getProjectItem().projectArray[newIndex].tasks[id].date)))
        modalBody.append(newElement.makeDiv('','', ('Priority: ' + storage.getProjectItem().projectArray[newIndex].tasks[id].priority)))
        godDiv.append(modalBody)
        return godDiv
    }

    const editModal = (id) => {
        let strModal = id + 'otherModal'
        let godDiv = newElement.makeDiv('modal', strModal)
        let modalHeader = newElement.makeDiv('modal-header')
        let closeBtn = newElement.makeButton('close-button')
        closeBtn.innerHTML = '&times;'
        closeBtn.dataset.closeButton
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal')
            closeModal(modal)
        })
        modalHeader.append(newElement.makeDiv('title', '', 'Edit Task'), closeBtn)
        godDiv.append(modalHeader)
        let modalBody = newElement.makeDiv('modal-body')
        let form = newElement.makeForm(id)
        let container = newElement.makeDiv('flex flex-col gap-2')
        let objectiveDiv = newElement.makeDiv("flex flex-col")
        let objectiveLabel = newElement.makeLabel(id, 'objective')
        let objectiveInput = newElement.makeInput('text', id, 'objective', "bg-white border-[1px] border-black h-[2em] focus:border-[2px] focus:border-[#2994b2] focus:outline-none")
        objectiveDiv.append(objectiveLabel, objectiveInput)
        container.append(objectiveDiv)
        let descDiv = newElement.makeDiv("flex flex-col")
        let descLabel = newElement.makeLabel(id, 'description')
        let descText = newElement.makeTextArea(id, "bg-white border-[1px] border-black focus:border-[2px] focus:border-[#2994b2] focus:outline-none")
        descDiv.append(descLabel, descText)
        container.append(descDiv)
        let twoSelectors = newElement.makeDiv("flex justify-around")
        let parentDiv = newElement.makeDiv('flex justify-start gap-12')
        let priorityDiv = newElement.makeDiv("flex flex-col")
        let priorityLabel = newElement.makeLabel(id, "priority")
        let prioritySelect = newElement.makeSelect(id, 'bg-white border-[1px] border-black h-7 focus:border-[2px] focus:border-[#2994b2] focus:outline-none')
        priorityDiv.append(priorityLabel, prioritySelect)
        parentDiv.append(priorityDiv)
        let dateDiv = newElement.makeDiv("flex flex-col")
        let dateLabel = newElement.makeLabel(id, "date")
        let dateInput = newElement.makeInput('date', id, 'date', "bg-white border-[1px] border-black focus:border-[2px] focus:border-[#2994b2] focus:outline-none")
        dateDiv.append(dateLabel, dateInput)
        parentDiv.append(dateDiv)
        twoSelectors.append(parentDiv)
        let lastBtn = newElement.makeButton("flex text-xl my-2 items-center")
        lastBtn.setAttribute('type', 'submit')
        lastBtn.setAttribute('form', 'taskForm')
        const title = document.getElementById('title').innerHTML
        let index = getId(title)
        lastBtn.addEventListener('click', () =>{
            let objectId = id + 'objective'
            let descId = id + 'desc'
            let priorityId = id + 'priority'
            let dateId = id + 'date'
            let objective = document.getElementById(objectId).value
            let description = document.getElementById(descId).value
            let priority = document.getElementById(priorityId).value
            let date = document.getElementById(dateId).value
            projectInformation.projectArray[index].tasks.push(makeTask(objective,description,priority,date))
            projectInformation.projectArray[0].tasks.push(makeTask(objective,description,priority,date))
            document.getElementById(objectId).value = ''
            document.getElementById(descId).value = ''
            document.getElementById(priorityId).value = '0'
            document.getElementById(dateId).value = ''
            storage.updateProjectInfo(projectInformation)
        })
        let lastDiv = newElement.makeDiv("mx-2 relative")
        let firstSpan = newElement.otherSpan(true)
        let secSpan = newElement.otherSpan(false)
        let iLiedDiv = newElement.makeDiv('','','Add')
        lastDiv.append(firstSpan, secSpan)
        lastBtn.append(lastDiv, iLiedDiv)
        // lastBtn.textContent = 'Add'
        twoSelectors.append(lastBtn)
        container.append(twoSelectors)
        form.append(container)
        modalBody.append(form)
        godDiv.append(modalBody)
        return godDiv
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }

    return { taskModal, editModal}
})()

export default createModal