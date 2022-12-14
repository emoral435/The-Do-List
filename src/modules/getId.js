import projectInformation from "./projectInformation"

export default function getId(title) {
    let index = 0
    for (let i = 0; i < projectInformation.nameArray.length; i++) {
        if (projectInformation.nameArray[i] === title.textContent) {
            index = i
        }
        return index
    }
}