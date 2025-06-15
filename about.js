
// Intersection Observer for animations
class AboutAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupDelayedAnimations();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    
                    setTimeout(() => {
                        entry.target.style.animationPlayState = 'running';
                        entry.target.classList.add('animate-in');
                    }, parseFloat(delay) * 1000);
                    
                    // Unobserve after animation starts
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.animate-fade-in');
        animatedElements.forEach(el => {
            // Pause animation initially for delayed elements
            if (el.dataset.delay) {
                el.style.animationPlayState = 'paused';
            }
            observer.observe(el);
        });
    }
    
    setupDelayedAnimations() {
        // Set custom animation delays
        const delayedElements = document.querySelectorAll('[data-delay]');
        delayedElements.forEach(el => {
            const delay = parseFloat(el.dataset.delay);
            el.style.animationDelay = `${delay}s`;
        });
    }
}

// Card hover effects
class CardEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupCardHoverEffects();
        this.setupTechTagEffects();
    }
    
    setupCardHoverEffects() {
        const cards = document.querySelectorAll('.highlight-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover.bind(this));
            card.addEventListener('mouseleave', this.handleCardLeave.bind(this));
        });
    }
    
    setupTechTagEffects() {
        const techTags = document.querySelectorAll('.tech-tag');
        
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', this.handleTagHover.bind(this));
            tag.addEventListener('mouseleave', this.handleTagLeave.bind(this));
        });
    }
    
    handleCardHover(event) {
        const card = event.currentTarget;
        const icon = card.querySelector('.icon-wrapper');
        
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.background = 'rgba(37, 99, 235, 0.15)';
        }
    }
    
    handleCardLeave(event) {
        const card = event.currentTarget;
        const icon = card.querySelector('.icon-wrapper');
        
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.background = 'rgba(37, 99, 235, 0.1)';
        }
    }
    
    handleTagHover(event) {
        const tag = event.currentTarget;
        tag.style.background = 'rgba(139, 92, 246, 0.2)';
        tag.style.color = '#7c3aed';
    }
    
    handleTagLeave(event) {
        const tag = event.currentTarget;
        tag.style.background = 'rgba(139, 92, 246, 0.1)';
        tag.style.color = 'var(--text-primary)';
    }
}

// Stats counter animation
class StatsCounter {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupStatsAnimation();
    }
    
    setupStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }
    
    animateCounter(element) {
        const target = element.textContent;
        const isPlus = target.includes('+');
        const number = parseInt(target.replace('+', ''));
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        const stepTime = duration / steps;
        
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            element.textContent = Math.floor(current) + (isPlus ? '+' : '');
        }, stepTime);
    }
}

// Smooth scroll utility
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Parallax effect for background
class ParallaxEffect {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupParallax();
    }
    
    setupParallax() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset;
        const aboutContainer = document.querySelector('.about-container');
        
        if (aboutContainer) {
            const rate = scrolled * -0.1;
            aboutContainer.style.backgroundPosition = `50% ${rate}px`;
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    new AboutAnimations();
    new CardEffects();
    new StatsCounter();
    new ParallaxEffect();
    
    // Add loaded class for any additional animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    console.log('About section initialized successfully');
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any position-dependent calculations
    console.log('About section: Window resized');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential integration with other sections
window.AboutSection = {
    smoothScrollTo,
    debounce
};
