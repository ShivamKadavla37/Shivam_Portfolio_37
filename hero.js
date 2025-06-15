
// Typing Animation
class TypingAnimation {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.delayBetweenTexts = options.delayBetweenTexts || 2000;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            // Deleting characters
            this.element.textContent = currentText.slice(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                setTimeout(() => this.type(), 500);
                return;
            }
            
            setTimeout(() => this.type(), this.deleteSpeed);
        } else {
            // Typing characters
            this.element.textContent = currentText.slice(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentText.length) {
                this.isDeleting = true;
                setTimeout(() => this.type(), this.delayBetweenTexts);
                return;
            }
            
            setTimeout(() => this.type(), this.typeSpeed);
        }
    }
}

// Smooth Scroll Function
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

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.profile-photo, .main-title, .typing-container, .description, .cta-buttons');
    animatedElements.forEach(el => observer.observe(el));
}

// Button click handlers
function setupButtonHandlers() {
    const viewWorkBtn = document.querySelector('.btn-primary');
    const downloadResumeBtn = document.querySelector('.btn-outline');
    
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', () => {
            // Scroll to projects section (if it exists)
            smoothScrollTo('#projects', 1000);
        });
    }
    
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', () => {
            // Handle resume download
            console.log('Resume download clicked');
            // You can add actual resume download logic here
        });
    }
}

// Scroll indicator handler
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            // Scroll to next section
            const heroHeight = document.querySelector('.hero-container').offsetHeight;
            window.scrollTo({
                top: heroHeight,
                behavior: 'smooth'
            });
        });
    }
}

// Parallax effect for background elements
function setupParallaxEffect() {
    const backgroundElements = document.querySelector('.background-elements');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (backgroundElements) {
            backgroundElements.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation
    const typedTextElement = document.getElementById('typed-text');
    const texts = [
        'Full-Stack Developer',
        'AI Enthusiast', 
        'Problem Solver',
        'Code Architect'
    ];
    
    if (typedTextElement) {
        new TypingAnimation(typedTextElement, texts, {
            typeSpeed: 100,
            deleteSpeed: 50,
            delayBetweenTexts: 2000
        });
    }
    
    // Setup other functionality
    setupIntersectionObserver();
    setupButtonHandlers();
    setupScrollIndicator();
    setupParallaxEffect();
    
    // Add fade-in animation to main content
    setTimeout(() => {
        document.querySelector('.main-content').classList.add('loaded');
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any position-dependent calculations
    console.log('Window resized');
});
