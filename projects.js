
// Projects data
const projectsData = [
    {
        title: 'AI-Powered Analytics Dashboard',
        description: 'A comprehensive analytics platform using machine learning to provide predictive insights and real-time data visualization.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
        github: '#',
        live: '#',
        icon: 'brain',
    },
    {
        title: 'Full-Stack E-commerce Platform',
        description: 'Modern e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
        tech: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
        github: '#',
        live: '#',
        icon: 'globe',
    },
    {
        title: 'Cloud-Native Microservices',
        description: 'Scalable microservices architecture deployed on AWS with containerization and automated CI/CD pipelines.',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop',
        tech: ['Docker', 'Kubernetes', 'AWS', 'GraphQL'],
        github: '#',
        live: '#',
        icon: 'database',
    },
    {
        title: 'Mobile-First Social App',
        description: 'React Native social media application with real-time messaging, photo sharing, and location-based features.',
        image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
        tech: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
        github: '#',
        live: '#',
        icon: 'smartphone',
    },
    {
        title: 'Real-Time Collaboration Tool',
        description: 'Web-based collaborative workspace with real-time editing, video calls, and project management features.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
        tech: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
        github: '#',
        live: '#',
        icon: 'server',
    },
    {
        title: 'AI Design Assistant',
        description: 'Machine learning powered design tool that generates UI components and provides design suggestions.',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop',
        tech: ['React', 'Python', 'OpenAI', 'Figma API'],
        github: '#',
        live: '#',
        icon: 'palette',
    },
];

// Icon SVGs
const icons = {
    brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m3 12 8.5-8.5a4.94 4.94 0 0 1 7 7L12 19l-5.5-7L3 12Z"/></svg>`,
    database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`,
    smartphone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    palette: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    externalLink: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`
};

// Projects Animation Controller
class ProjectsAnimations {
    constructor() {
        this.showAllProjects = false;
        this.init();
    }
    
    init() {
        this.renderProjects();
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupFloatingAnimation();
        this.setupParallax();
    }
    
    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        const projectsToShow = this.showAllProjects ? projectsData : projectsData.slice(0, 3);
        
        projectsGrid.innerHTML = '';
        
        projectsToShow.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
        
        this.updateViewAllButton();
    }
    
    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="image-overlay">
                    <div class="overlay-buttons">
                        <a href="${project.github}" class="overlay-btn secondary" target="_blank" rel="noopener noreferrer">
                            ${icons.github}
                            Code
                        </a>
                        <a href="${project.live}" class="overlay-btn primary" target="_blank" rel="noopener noreferrer">
                            ${icons.externalLink}
                            Live
                        </a>
                    </div>
                </div>
                <div class="project-icon">
                    ${icons[project.icon]}
                </div>
            </div>
            
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        return card;
    }
    
    updateViewAllButton() {
        const viewAllBtn = document.getElementById('viewAllBtn');
        const btnText = viewAllBtn.querySelector('.btn-text');
        
        btnText.textContent = this.showAllProjects ? 'Show Less Projects' : 'View All Projects';
    }
    
    setupEventListeners() {
        const viewAllBtn = document.getElementById('viewAllBtn');
        viewAllBtn.addEventListener('click', () => {
            this.showAllProjects = !this.showAllProjects;
            this.renderProjects();
        });
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
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe animated elements
        const animatedElements = document.querySelectorAll('.animate-fade-in');
        animatedElements.forEach(el => {
            if (el.dataset.delay) {
                el.style.animationPlayState = 'paused';
            }
            observer.observe(el);
        });
    }
    
    setupFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.floating-circle');
        
        floatingElements.forEach((element, index) => {
            const delay = index * 2;
            const duration = 8 + (index * 2);
            
            element.style.animationDelay = `${delay}s`;
            element.style.animationDuration = `${duration}s`;
        });
    }
    
    setupParallax() {
        const optimizedScrollHandler = this.debounce(() => {
            const scrolled = window.pageYOffset;
            const floatingElements = document.querySelectorAll('.floating-circle');
            
            floatingElements.forEach((element, index) => {
                const rate = scrolled * (0.02 + index * 0.01);
                element.style.transform = `translateY(${rate}px) rotate(${rate * 0.5}deg)`;
            });
        }, 16);
        
        window.addEventListener('scroll', optimizedScrollHandler);
    }
    
    debounce(func, wait) {
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
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsAnimations();
    
    // Add loaded class for any additional animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    console.log('Projects section initialized successfully');
});

// Handle window resize
window.addEventListener('resize', () => {
    console.log('Projects section: Window resized');
});

// Export for potential integration
window.ProjectsSection = {
    ProjectsAnimations
};
