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
                projectInformation.nameArray.splice(id, 1)
                projectInformation.projectArray.splice(id, 1)
                let projectName = btn.previousElementSibling.dataset.projectName.trim()
                console.log(projectName)
                console.log(projectInformation.projectArray[0].tasks.length)
                if (projectInformation.projectArray[0].tasks.length > 0) {
                    for (let i = 0; i < projectInformation.projectArray[0].tasks.length; i++) {
                        if (projectInformation.projectArray[0].tasks[i].project == projectName) {
                            projectInformation.projectArray[0].tasks.splice(i, 1)
                            console.log('its going through')
                            i -= 1
                        }
                    }
                }
                storage.updateProjectInfo(projectInformation)
                btn.parentElement.remove()
            })
        })
    }
}