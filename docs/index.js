let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;


    stars.style.transform = `translateX(-${value * 0.25}px)`;

    moon.style.transform = `translateY(${value * 1.05}px)`;

    // mountains_behind.style.top = `${value * 0.5}px`;

    text.style.transform = `translateX(-${value * 4}px)`;
    // text.style.marginTop = `${value * 1.5}px`;
    // btn.style.marginTop = `${value * 1.5}px`;
    // header.style.marginTop = `${value * 0.5}px`;
})