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
});


const canvas = document.getElementById('snowflake');
const ctx = canvas.getContext("2d");
const particlesOnScreen = 245;
const particles = [];
let w = canvas.width;
let h = canvas.height;

function random(min, max) {
    return min + Math.random() * (max-min + 1);
}

function clientResize(ev) {
    w = canvas.width;
    h = canvas.height;
}
window.addEventListener('resize', clientResize);

function getSnoflakes() {
    for (let i=0; i<particlesOnScreen; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            opacity: Math.random(0.2, 1),
            speedX: random(-11,11),
            speedY: random(7,15),
            radius: random(0.5, 4)
        })
    }
}

function drawSnowflakes() {
    for (let i=0; i<particles.length; i++) {

    }
}


