import getId from "./getId"
import storage from "./localStorage"

const killTask = (() => {
    const kill = (taskId) => {
        let taskIdName = 'task' + taskId
        let projectIndex = getId(document.getElementById('title'))
        console.log(projectIndex)
        let contentDiv = document.getElementById('content')
        contentDiv.removeChild(document.getElementById(taskIdName))
        let updatedProject = storage.getProjectItem()
        updatedProject.projectArray[projectIndex].tasks.splice(taskId, 1)
        storage.updateProjectInfo(updatedProject)
    }

    return { kill }
})()

export default killTask