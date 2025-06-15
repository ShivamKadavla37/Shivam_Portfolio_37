
// Skills Animation Controller
class SkillsAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupSkillBarsAnimation();
        this.setupDelayedAnimations();
        this.setupCardHoverEffects();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    
                    setTimeout(() => {
                        entry.target.style.animationPlayState = 'running';
                        entry.target.classList.add('animate-in');
                        
                        // Trigger skill bar animations for cards
                        if (entry.target.classList.contains('skill-card')) {
                            this.animateSkillBars(entry.target);
                        }
                    }, parseFloat(delay) * 1000);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.animate-fade-in');
        animatedElements.forEach(el => {
            if (el.dataset.delay) {
                el.style.animationPlayState = 'paused';
            }
            observer.observe(el);
        });
    }
    
    setupSkillBarsAnimation() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        this.animateSkillBars(entry.target);
                    }, 500);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        skillCards.forEach(card => cardObserver.observe(card));
    }
    
    animateSkillBars(card) {
        const skillBars = card.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            const progress = bar.dataset.progress;
            
            setTimeout(() => {
                bar.style.width = `${progress}%`;
            }, index * 100);
        });
    }
    
    setupDelayedAnimations() {
        const delayedElements = document.querySelectorAll('[data-delay]');
        delayedElements.forEach(el => {
            const delay = parseFloat(el.dataset.delay);
            el.style.animationDelay = `${delay}s`;
        });
    }
    
    setupCardHoverEffects() {
        const skillCards = document.querySelectorAll('.skill-card');
        const toolItems = document.querySelectorAll('.tool-item');
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover.bind(this));
            card.addEventListener('mouseleave', this.handleCardLeave.bind(this));
        });
        
        toolItems.forEach(tool => {
            tool.addEventListener('mouseenter', this.handleToolHover.bind(this));
            tool.addEventListener('mouseleave', this.handleToolLeave.bind(this));
        });
    }
    
    handleCardHover(event) {
        const card = event.currentTarget;
        const icon = card.querySelector('.icon');
        
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    }
    
    handleCardLeave(event) {
        const card = event.currentTarget;
        const icon = card.querySelector('.icon');
        
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    }
    
    handleToolHover(event) {
        const tool = event.currentTarget;
        const icon = tool.querySelector('.tool-icon');
        
        if (icon) {
            icon.style.background = 'rgba(139, 92, 246, 0.2)';
        }
    }
    
    handleToolLeave(event) {
        const tool = event.currentTarget;
        const icon = tool.querySelector('.tool-icon');
        
        if (icon) {
            icon.style.background = 'rgba(139, 92, 246, 0.1)';
        }
    }
}

// Floating elements animation
class FloatingElements {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupFloatingAnimation();
    }
    
    setupFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.floating-circle');
        
        floatingElements.forEach((element, index) => {
            // Add random delays and variations
            const delay = index * 2;
            const duration = 8 + (index * 2);
            
            element.style.animationDelay = `${delay}s`;
            element.style.animationDuration = `${duration}s`;
        });
    }
}

// Skill progress counter animation
class SkillCounter {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupCounters();
    }
    
    setupCounters() {
        const percentages = document.querySelectorAll('.skill-percentage');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        percentages.forEach(percentage => observer.observe(percentage));
    }
    
    animateCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const steps = 50;
        const increment = target / steps;
        const stepTime = duration / steps;
        
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            element.textContent = `${Math.floor(current)}%`;
        }, stepTime);
    }
}

// Parallax effect for floating elements
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
        const floatingElements = document.querySelectorAll('.floating-circle');
        
        floatingElements.forEach((element, index) => {
            const rate = scrolled * (0.05 + index * 0.02);
            element.style.transform = `translateY(${rate}px)`;
        });
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations
    const scrolled = window.pageYOffset;
    
    // Update floating elements with parallax
    const floatingElements = document.querySelectorAll('.floating-circle');
    floatingElements.forEach((element, index) => {
        const rate = scrolled * (0.02 + index * 0.01);
        element.style.transform = `translateY(${rate}px) rotate(${rate * 0.5}deg)`;
    });
}, 16); // ~60fps

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    new SkillsAnimations();
    new FloatingElements();
    new SkillCounter();
    new ParallaxEffect();
    
    // Setup optimized scroll handler
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Add loaded class for any additional animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    console.log('Skills section initialized successfully');
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate any position-dependent calculations
    console.log('Skills section: Window resized');
}, 250));

// Export functions for potential integration
window.SkillsSection = {
    smoothScrollTo,
    debounce
};

// Add CSS for enhanced animations
const additionalStyles = `
    .skill-card.animate-in {
        transform: translateY(0);
        opacity: 1;
    }
    
    .skill-progress {
        box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
    }
    
    .tool-item:hover .tool-name {
        color: var(--accent);
    }
    
    .floating-circle {
        will-change: transform;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
