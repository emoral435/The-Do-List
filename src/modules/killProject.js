import updateButtons from "./updateButtons"
import projectInformation from "./projectInformation"
import storage from "./localStorage"

export default function killProject() {
    let kill = document.querySelectorAll('.killbill')
    updateButtons(kill)
    killBillChange()

    function killBillChange() {
        let kill = document.querySelectorAll('.killbill')
        kill.forEach( btn => {
            btn.addEventListener('click', () => {
                console.log('killbill is getting clicked')
                btn.parentElement.classList.add('gettingDeleted')
                let prev = btn.previousElementSibling
                let id = prev.dataset.id
                let updatedProject = storage.getProjectItem()
                updatedProject.nameArray.splice(id, 1)
                updatedProject.projectArray.splice(id, 1)
                let projectName = btn.previousElementSibling.dataset.projectName.trim()
                console.log(projectName)
                console.log(updatedProject.projectArray[0].tasks.length)
                if (updatedProject.projectArray[0].tasks.length > 0) {
                    for (let i = 0; i < updatedProject.projectArray[0].tasks.length; i++) {
                        if (updatedProject.projectArray[0].tasks[i].project == projectName) {
                            updatedProject.projectArray[0].tasks.splice(i, 1)
                            console.log('its going through')
                            i -= 1
                        }
                    }
                }
                storage.updateProjectInfo(updatedProject)
                btn.parentElement.remove()
            })
        })
    }
}