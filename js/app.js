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

// Show what section from the navigation has been selected 
// and/or is being viewed while scrolling

// When the target meets a threshold specified for the IntersectionObserver, the callback is invoked.
let callback = entries => {
  entries.forEach(entry => { 
    const navigationListElement = document.querySelector(`.menu__link[data-link='${entry.target.id}']`) // captures the current navigation element
    const section = document.getElementById(entry.target.id)  // and finds the cooresponding section

    if (entry && entry.isIntersecting) {  // If the target is intersecting the root, make the <section> and the <li> tag have an "active" class
      navigationListElement.classList.add('active')
      section.classList.add('active')
    } else {
      if (navigationListElement.classList.contains('active')){
        navigationListElement.classList.remove('active')
      }
      if (section.classList.contains('active')){
        section.classList.remove('active')
      }
    }
  })
}

// Options object that will be passed into the IntersectionObserver() constructor
// Controls the when the callback is invoked
let options = {
  root: null, // Element that is used as the viewport for checking visibility of the target; null = defaults to the browser default
  rootMargin: '0px', // Margin around the root
  threshold: 0.8  //  The percentage of the target's visibility the observer's callback should be executed
}

let observer = new IntersectionObserver(callback, options);

// Target element to watch in the IntersectionObserver
navigationElements.forEach(element => {
  let target = document.getElementById(element.id)
  observer.observe(target);
})


