import uploadTasks from "./uploadTasks";
import getId from "./getId";
import storage from "./localStorage";


const updateDirectory = (() => {
        let refresh = (projectName) => {
            console.log('working on it')
            let index = getId(projectName)
            let taskContainer = document.getElementById('content')
            console.log(taskContainer.childNodes)
            while (taskContainer.childNodes.length > 5) {
                taskContainer.removeChild(taskContainer.firstChild)
            }
            let projectInfo = storage.getProjectItem()
            if (projectInfo.projectArray[index].tasks.length > 0) {
                for (let i = 0; i < projectInfo.projectArray.length; i++) {
                    uploadTasks.upload(i)
                }
            }
            
        }
    return { refresh, }
})()

export default updateDirectory