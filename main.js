/* open and close the menu when click n icon */
const nav = document.querySelector('#header nav ')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* when clicking on a menu item, hide the menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* change the page header when scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll higher than header height
    header.classList.add('scroll')
  } else {
    //scroll smaller than header height
    header.classList.remove('scroll')
  }
})
