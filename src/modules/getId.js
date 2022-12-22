import storage from "./localStorage"

export default function getId(title) {
    let index = 0
    for (let i = 0; i < storage.getProjectItem().nameArray.length; i++) {
        if (storage.getProjectItem().nameArray[i] == title) {
            index = i
        } 
    }
    return index
}