
const images = [
  '../assets/computer-2565478.jpg',
  '../assets/desk-1284085.jpg',
  '../assets/job-5382501.jpg'
];

let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
  hero.style.setProperty('--bg-image', `url(${images[currentIndex]})`);
  currentIndex = (currentIndex + 1) % images.length;
}

hero.style.setProperty('--bg-image', `url(${images[0]})`);
setInterval(changeBackground, 5000); 