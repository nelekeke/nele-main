// Description: Helper functions for the application.

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});

window.addEventListener('resize', function() {
    const nav = document.querySelector('nav');
    if (window.innerWidth > 700) {
        nav.classList.remove('open');
    }
});

const images = [
  'assets/computer-2565478.jpg',
  'assets/desk-1284085.jpg',
  'assets/job-5382501.jpg'
];

let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
  hero.style.setProperty('--bg-image', `url(${images[currentIndex]})`);
  currentIndex = (currentIndex + 1) % images.length;
}

// Alustetaan ensimmäinen kuva
hero.style.setProperty('--bg-image', `url(${images[0]})`);
setInterval(changeBackground, 5000); // vaihtuu 5 sekunnin välein