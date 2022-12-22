import uploadTasks from "./uploadTasks";
import getId from "./getId";
import storage from "./localStorage";
import killTask from "./killTask";
import dates from "./datesFNS";


const updateDirectory = (() => {
        let refresh = (btn) => {
            killTask.reptitions = 0
            let projectName = document.getElementById('title').innerHTML.trim()
            let index = getId(projectName)
            let taskContainer = document.getElementById('content')
            while (taskContainer.childNodes.length > 4) {
                taskContainer.removeChild(taskContainer.firstChild)
            }
            const addTaskYa = document.getElementById('taskButton')
            addTaskYa.classList.remove('hidden')
            if (!btn.classList.contains('gettingDeleted')) {
                let projectInfo = storage.getProjectItem()
                if (btn.childNodes.length > 3 && btn.childNodes[3].innerHTML != 'Inbox') {
                    if (btn.childNodes[3].innerHTML == 'Today') {
                        const addTask = document.getElementById('taskButton')
                        addTask.classList.add('hidden')
                        projectInfo.projectArray[1].tasks = dates.today()
                        storage.updateProjectInfo(projectInfo)
                        if (projectInfo.projectArray[1].tasks.length > 0) {
                            for (let i =0; i < projectInfo.projectArray[1].tasks.length; i++) {
                                let newTask = uploadTasks.upload(i)
                                document.getElementById('content').insertBefore(newTask, document.getElementById('taskButton'))
                            }
                        }
                    } else if (btn.childNodes[3].innerHTML == 'Upcoming') {
                        const addTask = document.getElementById('taskButton')
                        addTask.classList.add('hidden')
                        projectInfo.projectArray[2].tasks = dates.upcoming()
                        storage.updateProjectInfo(projectInfo)
                        if (projectInfo.projectArray[2].tasks.length > 0) {
                            for (let i =0; i < projectInfo.projectArray[2].tasks.length; i++) {
                                let newTask = uploadTasks.upload(i)
                                document.getElementById('content').insertBefore(newTask, document.getElementById('taskButton'))
                            }
                        }
                    }
                } else if (projectInfo.projectArray[index].tasks.length > 0) {
                    const addTask = document.getElementById('taskButton')
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