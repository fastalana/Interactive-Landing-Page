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

const navigationElements = document.querySelectorAll('section')
const navigationList = document.getElementById('navbar__list')

// Build a menu by iterating through the NavigationElements
navigationElements.forEach(element => {
  const navigationListElement = `<li class='menu__link ${element.className}' data-link=${element.id}><a href="#${element.id}">${element.dataset.nav}</li>`
  navigationList.insertAdjacentHTML('beforeend', navigationListElement)
})

// Scroll to the section by listenting to a click-event in the NavigationList
navigationList.addEventListener('click', event => {
    event.preventDefault()
    const parent = event.target.hasAttribute('data-link')
      ? event.target
      : event.target.parentElement
    const elementToScrollTo = document.getElementById(parent.dataset.link)
    elementToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'})
  })
  
// Set section and nav link as active using IntersectionObserver
const callback = entries => {
    entries.forEach(entry => {
      const navigationListElement = document.querySelector(
        `.menu__link[data-link='${entry.target.id}']`,
      )
      const section = document.getElementById(entry.target.id)
  
      if (entry && entry.isIntersecting) {
        navigationListElement.classList.add('active')
        section.classList.add('active')
      } else {
        if (navigationListElement.classList.contains('active')) {
          navigationListElement.classList.remove('active')
        }
  
        if (section.classList.contains('active')) {
          section.classList.remove('active')
        }
      }
    })
  }
  
// Options for the observer. Used in the IntersectionObserver function.
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.6,
//   }
  
// Setting an observer with options and a callback which checks if the navigation element should be active
// const observer = new IntersectionObserver(callback, options)
const observer = new IntersectionObserver(callback)
navigationElements.forEach(element => {
    observer.observe(document.getElementById(element.id))
  })