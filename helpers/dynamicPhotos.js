// Dynamic background photo changer for index page
const images = [
  '../assets/työpöytä3-1920.jpg',
  '../assets/toimisto2-1920.jpg',
  '../assets/läppäri2-1920.jpg'
];

let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
  if (hero) {
    hero.style.setProperty('--bg-image', `url(${images[currentIndex]})`);
    currentIndex = (currentIndex + 1) % images.length;
  }
}

// Initialize with first image
if (hero) {
  hero.style.setProperty('--bg-image', `url(${images[0]})`);
  // Change background every 5 seconds
  setInterval(changeBackground, 5000);
}
