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

const particlesOnScreen = 50;
const particles = [];
let w = canvas.width;
let h = canvas.height;

function random(min, max) {
    return min + Math.random() * (max-min + 1);
}

function clientResize() {
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
            speedX: random(-0.1, 0.1),
            speedY: random(0.05, 0.2),
            radius: random(0.2, 1)
        })
    }
}

function drawSnowflakes() {
    for (let i=0; i<particles.length; i++) {
        let gradient = ctx.createRadialGradient(
            particles[i].x,
            particles[i].y,
            0,
            particles[i].x,
            particles[i].y,
            particles[i].radius
        );

        gradient.addColorStop(0, `rgba(255, 255, 255,${particles[i].opacity})`);
        gradient.addColorStop(0.8, `rgba(210, 236, 242,${particles[i].opacity})`);
        gradient.addColorStop(1, `rgba(237, 247, 249,${particles[i].opacity})`);

        ctx.beginPath();
        ctx.arc(
            particles[i].x,
            particles[i].y,
            particles[i].radius,
            0,
            Math.PI * 2,
            false
        );

        ctx.fillStyle = gradient;
        ctx.fill();
     }
}

function moveSnowflakes() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX;
        particles[i].y += particles[i].speedY;

        if (particles[i].y > h) {
            particles[i].x = Math.random() * w * 1.5;
            particles[i].y = -50;
        }
    }
}

function updateSnowflakes() {
    ctx.clearRect(0, 0, w, h);
    drawSnowflakes();
    moveSnowflakes();

    requestAnimationFrame(updateSnowflakes);
}

requestAnimationFrame(updateSnowflakes)
getSnoflakes();

