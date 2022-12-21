import getId from "./getId"
import storage from "./localStorage"

const killTask = (() => {
    const kill = (taskId) => {
        console.log(reptitions)
        let taskIdName = 'task' + taskId
        let projectIndex = getId(document.getElementById('title').innerHTML)
        let contentDiv = document.getElementById('content')
        contentDiv.removeChild(document.getElementById(taskIdName))
        let updatedProject = storage.getProjectItem()
        console.log(updatedProject)
        console.log(projectIndex)
        console.log(updatedProject.projectArray[projectIndex].tasks)
        updatedProject.projectArray[projectIndex].tasks.splice((taskId - reptitions), 1)
        console.log(updatedProject.projectArray[projectIndex].tasks)
        storage.updateProjectInfo(updatedProject)
        if (updatedProject.projectArray[projectIndex].tasks.length == 0) {
            reptitions = 0
        } else {reptitions++}
    }

    let reptitions = 0

    return { kill, reptitions }
})()

export default killTask