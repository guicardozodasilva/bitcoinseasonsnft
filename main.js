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
function changeHeaderWhenScroll() {
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
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

/* active menu according to the visible section on the page */
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
  const limit = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const limitStart = limit >= sectionTop
    const limitEnd = limit <= sectionTop + sectionHeight

    if (limitStart && limitEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeMenuAtCurrentSection()
})
