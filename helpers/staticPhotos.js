// Static background photo setter for individual pages
// Usage: Call setStaticBackground('path/to/image.jpg') to set a static background

function setStaticBackground(imagePath) {
  const hero = document.querySelector('.hero');
  if (hero && imagePath) {
    hero.style.setProperty('--bg-image', `url(${imagePath})`);
  }
}

// Page-specific background images
const pageBackgrounds = {
  'devices.html': '../assets/työpöytä2-1920.jpg',
  'consumer.html': '../assets/Cyberpunk-pelitietokone.jpg',
  'aboutus.html': '../assets/job-5382501.jpg',
  'contactus.html': '../assets/läppäri2-1920.jpg'
};

// Auto-detect current page and set appropriate background
function initializeStaticBackground() {
  const currentPagePath = window.location.pathname;
  const currentPage = currentPagePath.split('/').pop() || 'index.html';
  
  if (pageBackgrounds[currentPage]) {
    setStaticBackground(pageBackgrounds[currentPage]);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeStaticBackground);
