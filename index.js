const menuBtn = document.querySelector('.menu__button');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav__link');


menuBtn.addEventListener('click', function(){
    document.body.classList.toggle('change');
})

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLink.forEach(navLink => {
    navLink.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
        document.body.classList.remove('change');
    })
})
