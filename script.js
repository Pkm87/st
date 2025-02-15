// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert for Call to Action buttons
document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function () {
        alert('Thank you for your interest! Our team will contact you shortly.');
    });
});
