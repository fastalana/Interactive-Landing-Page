/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Global variables
const navigationElements = document.querySelectorAll('section');  // captures all items with the <section> tag
const navigationList = document.getElementById('navbar__list');  // captures the id of the unordered list which will be populated with javascript below.
const activeSection = document.querySelectorAll('.active'); // to start nothing is active, sections get set to active in the javascript below.

// Build navigation list
navigationElements.forEach(element => {
  const navigationListElement = `<li class='menu__link' data-link=${element.id}><a href="#${element.id}">${element.dataset.nav}</li>`
  navigationList.insertAdjacentHTML('beforeend', navigationListElement) // 'beforeend': Just inside the element (li), after its last child.
})
