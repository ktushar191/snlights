// JavaScript for About Us Page

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements when they are in the viewport
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
           rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Add animation when elements come into the viewport
function checkAnimation() {
    elementsToAnimate.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fadeIn'); // Add the animation class when element is in view
        }
    });
}

// Event listener to trigger the animation check when scrolling
window.addEventListener('scroll', checkAnimation);

// Run on load as well
document.addEventListener('DOMContentLoaded', checkAnimation);
