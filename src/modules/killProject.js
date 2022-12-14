import updateButtons from "./updateButtons"
import projectInformation from "./projectInformation"

export default function killProject() {
    let kill = document.querySelectorAll('.killbill')
    updateButtons(kill)
    killBillChange()

    function killBillChange() {
        let kill = document.querySelectorAll('.killbill')
        kill.forEach( btn => {
            btn.addEventListener('click', () => {
                let prev = btn.previousElementSibling
                let id = prev.dataset.id
                projectInformation.nameArray.splice(id, 1)
                projectInformation.projectArray.splice(id, 1)
                btn.parentElement.remove()
            })
        })
    }
}