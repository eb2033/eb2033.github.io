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
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections - DO NOT set opacity to 0
    document.querySelectorAll('.project-card, .blog-card, .social-card, .about-card').forEach(el => {
        // Add a class instead to handle initial state with CSS
        el.classList.add('card-hidden');
        observer.observe(el);
    });

    // Typing animation for hero text
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        typeText(typedText, 'whoami', 120);
    }

    // Add smooth transitions to links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
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