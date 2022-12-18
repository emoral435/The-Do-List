import projectInformation from "./projectInformation"
import uploadTasks from "./uploadTasks"

const storage = (() => {
    const initialize = () => {
        let newObject = getProjectItem()
        updateProjectInfo(newObject)
        if (getProjectItem().projectArray[0].tasks.length === 0) {
            // uploadTasks(getProjectItem().projectArray[0].tasks)
        }
    }

    const updateProjectInfo = (updatedObject) => {
        localStorage.setItem('projectInfo', JSON.stringify(updatedObject))
    }

    const getProjectItem = () => {
        let item = JSON.parse(localStorage.getItem('projectInfo'))
        return item
    }

    return { updateProjectInfo, getProjectItem, initialize, }
})()

export default storage