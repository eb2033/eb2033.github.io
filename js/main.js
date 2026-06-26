/**
 * Main Portfolio Script
 * Handles animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards and blog cards
    document.querySelectorAll('.project-card, .blog-card, .social-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Typing animation for hero text
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        typeText(typedText, 'whoami', 100);
    }
});

/**
 * Typing animation function
 */
function typeText(element, text, speed) {
    element.textContent = '';
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };

    type();
}