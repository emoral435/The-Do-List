import projectInformation from "./projectInformation"
import uploadTasks from "./uploadTasks"
import updateDirectory from "./updateDirectory"
import domMan from "./domManipulation"
import updateButtons from "./updateButtons"
import killProject from "./killProject"

const storage = (() => {
    const initialize = () => {
        let newObject = getProjectItem()
        updateProjectInfo(newObject)
        if (getProjectItem().projectArray[0].tasks.length != 0) {
            for (let i = 0; i < getProjectItem().projectArray[0].tasks.length; i++) {
                let newTask = uploadTasks.upload(i)
                document.getElementById('content').insertBefore(newTask, document.getElementById('taskButton'))
            }
        }
        loadProjectDom()
    }

    const updateProjectInfo = (updatedObject) => {
        localStorage.setItem('projectInfo', JSON.stringify(updatedObject))
    }

    const getProjectItem = () => {
        let item = JSON.parse(localStorage.getItem('projectInfo'))
        return item
    }

    const loadProjectDom = () => {
        for (let i = 3; i < getProjectItem().nameArray.length; i++) {
            let projectName = getProjectItem().nameArray[i]
            const addOn = document.getElementById('additionalProjects')
            const btn = domMan.makeBtn(["hover:bg-[#cccccc]", "rounded-md", "w-full", "py-2", "flex", "justify-between", "items-center", "h-12", "px-1", 'directory'])
            const img = domMan.makeImg(["h-[1.3rem]", "w-[1.3rem]", "flex", "justify-start", "items-center", "mx-4", "box-content"])
            const div = domMan.makeDiv(projectName)
            div.classList.add('closest')
            const x = domMan.makeX(['ml-4','z-10','flex','justify-end', 'killbill'])
            btn.append(img)
            btn.append(div)
            btn.append(x)
            addOn.insertBefore(btn, document.getElementById('addBefore'))
            updateButtons(document.querySelectorAll('.directory'))
            domMan.buttonChange()
            killProject()
        }
    }

    return { updateProjectInfo, getProjectItem, initialize, }
})()

export default storage