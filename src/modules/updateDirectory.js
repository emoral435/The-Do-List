import uploadTasks from "./uploadTasks";
import getId from "./getId";
import storage from "./localStorage";
import killTask from "./killTask";


const updateDirectory = (() => {
        let refresh = (btn) => {
            killTask.reptitions = 0
            let projectName = document.getElementById('title').innerHTML.trim()
            let index = getId(projectName)
            let taskContainer = document.getElementById('content')
            while (taskContainer.childNodes.length > 4) {
                taskContainer.removeChild(taskContainer.firstChild)
            }
            if (!btn.classList.contains('gettingDeleted')) {
                let projectInfo = storage.getProjectItem()
                if (projectInfo.projectArray[index].tasks.length > 0) {
                    for (let i = 0; i < projectInfo.projectArray[index].tasks.length; i++) {
                        let newTask = uploadTasks.upload(i)
                        document.getElementById('content').insertBefore(newTask, document.getElementById('taskButton'))
                    }
                }
            }
            
        }
    return { refresh, }
})()

export default updateDirectory