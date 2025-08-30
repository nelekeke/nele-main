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
