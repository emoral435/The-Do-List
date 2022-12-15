import projectInformation from "./projectInformation"

const storage = (() => {
    const initialize = () => {
        updateProjectInfo(projectInformation)
    }

    const updateProjectInfo = (updatedObject) => {
        localStorage.setItem('projectInfo', JSON.stringify(updatedObject))
    }

    const getProjectItem = () => {
        let item = localStorage.getItem('projectInfo')
        return item
    }
    
    const check = () => {
        let item = getProjectItem()
    }

    return { updateProjectInfo, getProjectItem, check, initialize, }
})()

export default storage