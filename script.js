let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

console.log(hamburger);