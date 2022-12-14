import iFactory from "./informationFactory";

const projectInformation = (() => {
    // this is the project name information array that will be associated with the task information object array
    const nameArray = []
    const projectArray = []
    // these are the base project files that will be preloaded into the dom
    const baseProjects = document.querySelectorAll('[data-project-name]')
    baseProjects.forEach( project => {
        nameArray.push(project.dataset.projectName)
        let element = iFactory(project.dataset.projectName)
        projectArray.push(element)
    })
    return {nameArray, projectArray}
})();

export default projectInformation