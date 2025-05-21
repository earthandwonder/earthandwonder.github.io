document.addEventListener('DOMContentLoaded', function() {
    // Add a slight hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .faq-item, .testimonial');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.2s ease';
            
            // Don't apply to elements that already have rotation
            if (!this.style.transform || this.style.transform === 'none') {
                this.style.transform = 'translateY(-5px)';
            } else if (this.classList.contains('testimonial') || this.classList.contains('faq-item')) {
                // Just enhance the existing rotation slightly
                if (this.style.transform.includes('rotate(1deg)')) {
                    this.style.transform = 'rotate(2deg) translateY(-5px)';
                } else if (this.style.transform.includes('rotate(-1deg)')) {
                    this.style.transform = 'rotate(-2deg) translateY(-5px)';
                } else if (this.style.transform.includes('rotate(0.5deg)')) {
                    this.style.transform = 'rotate(1deg) translateY(-5px)';
                } else if (this.style.transform.includes('rotate(-0.5deg)')) {
                    this.style.transform = 'rotate(-1deg) translateY(-5px)';
                }
            }
        });
        
        element.addEventListener('mouseleave', function() {
            // Reset to original transform
            if (this.classList.contains('testimonial')) {
                if (this.classList.contains('testimonial:nth-child(odd)')) {
                    this.style.transform = 'rotate(1deg)';
                } else {
                    this.style.transform = 'rotate(-1deg)';
                }
            } else if (this.classList.contains('faq-item')) {
                if (this.classList.contains('faq-item:nth-child(odd)')) {
                    this.style.transform = 'rotate(0.5deg)';
                } else {
                    this.style.transform = 'rotate(-0.5deg)';
                }
            } else {
                this.style.transform = '';
            }
        });
    });

    // Add a simple scroll animation for sections
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    // Add CSS for the animation in JS to keep it all together
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Check on load and scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
}); 