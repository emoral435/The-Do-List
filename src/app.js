import domMan from './modules/domManipulation'
import storage from './modules/localStorage'

// this makes sure that the storage works on first load of the page!
storage.setup()
// this controls the buttons changing color so that they hold their hover effect for when they are clicked 
domMan.buttonChange() 
// this checks local storage if there are any previous projects, and it loads it
storage.initialize()
// this insures that the nav bar shows up and properly works when clicked
domMan.navToggle() 
// this actives the popups that come up when you press add project and add task
domMan.activateModals()
// this makes it so that each time you submit a project, it appears on the dom 
domMan.addProject()
// this makes it so that each time you submit a task, it goes into the respective object
domMan.addTask()

console.log({testString: 'This is working, along with Tailwind!'})