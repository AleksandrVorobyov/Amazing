const menuBtn = document.querySelector('.nav__menu');
const burgerNav = document.querySelector('.nav__burger');
const body = document.querySelector('body');
const burgerLink = document.querySelectorAll('.nav__burger-link');

menuBtn.addEventListener('click', function () {
    burgerNav.classList.toggle('nav__burger--active');
    body.classList.toggle('lock');
})

burgerLink.forEach(function(item) {
    item.addEventListener('click', function() {
        burgerNav.classList.remove('nav__burger--active');
        body.classList.remove('lock');
    })
})