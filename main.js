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
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll higher than header height
    header.classList.add('scroll')
  } else {
    //scroll smaller than header height
    header.classList.remove('scroll')
  }
}

/* ScrollReveal: show elements when scrolling the page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text, #about .image, #about .text, #seasons .title, #seasons .card, #community .text, #community .image, footer .brand, footer .social',
  {
    interval: 100
  }
)

/* Button back to top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

/* When scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
