import getId from "./getId"

const killTask = (() => {
    const kill = (taskId) => {
        console.log("killTask")
        // let projectIndex = getId(document.getElementById('title'))
        // console.log(projectIndex)
    }

    return { kill }
})()

export default killTask