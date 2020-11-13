function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
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
