import domMan from './modules/domManipulation'
import projectInformation from './modules/projectInformation'
 
console.log({testString: 'This is working, along with Tailwind!'})

// this controls the buttons changing color so that they hold their hover effect for when they are clicked 
domMan.buttonChange() 
// this insures that the nav bar shows up and properly works when clicked
domMan.navToggle() 
// this actives the popups that come up when you press add project and add task
domMan.activateModals()
// this makes it so that each time you submit a project, it appears on the dom 
domMan.addProject()
// this makes it so that each time you submit a task, it goes into the respective object
domMan.addTask()