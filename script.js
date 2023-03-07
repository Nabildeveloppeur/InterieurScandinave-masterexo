const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('header nav ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('header nav ul li').forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))