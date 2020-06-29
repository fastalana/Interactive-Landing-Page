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

// Global Variables
const navigationElements = document.querySelectorAll('section');  //captures all items with the <section> tag
const navigationList = document.getElementById('navbar__list');  //captures the id of the unordered list which will be populated with javascript below.

navigationElements.forEach(element => {
  const navigationListElement = `<li class='menu__link' data-link=${element.id}><a href="#${element.id}">${element.dataset.nav}</li>`
  // navigationList.insertAdjacentHTML('afterend', navigationListElement)  // ascending, aligned left
  // navigationList.insertAdjacentHTML('beforebegin', navigationListElement) // descending, aligned left
  navigationList.insertAdjacentHTML('beforeend', navigationListElement) // ascending, aligned right
  // navigationList.insertAdjacentHTML('afterbegin', navigationListElement) // descending, aligned left
})
