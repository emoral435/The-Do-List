import domMan from './modules/domManipulation'
 
console.log({testString: 'This is working, along with Tailwind!'})

// this controls the buttons changing color so that they hold their hover effect for when they are clicked 
domMan.buttonChange() 
// this insures that the nav bar shows up and properly works when clicked
domMan.navToggle() 
