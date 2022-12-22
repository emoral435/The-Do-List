import storage from "./localStorage"
import { endOfToday, isBefore, parseISO, startOfTomorrow, differenceInCalendarDays, add } from 'date-fns'

const dates = (() => {
    const today = () => {
        let todayArray = []
        let project = storage.getProjectItem()
        for (let i = 1; i < project.projectArray.length; i++) {
           if (i != 1) {
                if (project.projectArray[i].tasks.length != 0) {
                    for (let j = 0; j < project.projectArray[i].tasks.length; j++) {
                        if (project.projectArray[i].tasks[j].date != '') {
                            if (isBefore(parseISO(project.projectArray[i].tasks[j].date), endOfToday())) {
                                todayArray.push(project.projectArray[i].tasks[j])
                            }
                        }
                    }
                }
           }
        }
        return todayArray
    }
 
    
    const upcoming = () => {
        let upArray = []
        let project = storage.getProjectItem()
        for (let i = 1; i < project.projectArray.length; i++) {
            if (i != 2) {
                if (project.projectArray[i].tasks.length != 0) {
                    for (let j = 0; j < project.projectArray[i].tasks.length; j++) {
                        if (project.projectArray[i].tasks[j].date != '') {
                            if (differenceInCalendarDays((add(startOfTomorrow(), {days: 7})), parseISO(project.projectArray[i].tasks[j].date)) <= 7) {
                                upArray.push(project.projectArray[i].tasks[j])
                            } // the difference between the start of tomorrow + 7 and the task due date is <= 7
                        }
                    }
                }
            }
        }
        return upArray
        }
    

    return {
        today,
        upcoming
    }
})()

export default dates