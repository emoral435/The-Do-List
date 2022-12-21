import getId from "./getId"
import storage from "./localStorage"
import uploadTasks from "./uploadTasks"

const killTask = (() => {
    const kill = (taskId) => {
        let projectIndex = getId(document.getElementById('title'))
        let updatedProject = storage.getProjectItem()
        updatedProject.projectArray[projectIndex].tasks.splice(taskId, 1)
        storage.updateProjectInfo(updatedProject)
        let taskContainer = document.getElementById('content')
            while (taskContainer.childNodes.length > 4) {
                taskContainer.removeChild(taskContainer.firstChild)
            }
        if (storage.getProjectItem().projectArray[projectIndex].tasks.length > 0) {
            console.log('this is getting clickedddd')
            for (let i = 0; i < storage.getProjectItem().projectArray[projectIndex].tasks.length; i++) {
                let newTask = uploadTasks.upload(i)
                document.getElementById('content').insertBefore(newTask, document.getElementById('taskButton'))
            }
        }
    }

    return { kill }
})()

export default killTask