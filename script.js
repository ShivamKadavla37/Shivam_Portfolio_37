
// Global variables
let allProjects = [];
let showAllProjects = false;
let allBlogPosts = [];
let currentCategory = 'all';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollToTop();
    initializeAnimations();
    loadProjects();
    loadBlogPosts();
    initializeContactForm();
    initializeSkillBars();
    initializeNewsletterForm();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Scroll to top functionality
function initializeScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-to-top');
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .blog-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Projects data and functionality
function loadProjects() {
    allProjects = [
        {
            title: 'AI-Powered Analytics Dashboard',
            description: 'A comprehensive analytics platform using machine learning to provide predictive insights and real-time data visualization.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
            tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Full-Stack E-commerce Platform',
            description: 'Modern e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
            tech: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Cloud-Native Microservices',
            description: 'Scalable microservices architecture deployed on AWS with containerization and automated CI/CD pipelines.',
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop',
            tech: ['Docker', 'Kubernetes', 'AWS', 'GraphQL'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Mobile-First Social App',
            description: 'React Native social media application with real-time messaging, photo sharing, and location-based features.',
            image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
            tech: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Real-Time Collaboration Tool',
            description: 'Web-based collaborative workspace with real-time editing, video calls, and project management features.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            tech: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'AI Design Assistant',
            description: 'Machine learning powered design tool that generates UI components and provides design suggestions.',
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop',
            tech: ['React', 'Python', 'OpenAI', 'Figma API'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Blockchain Voting System',
            description: 'Secure and transparent voting platform built on blockchain technology with smart contracts.',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
            tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'IoT Smart Home System',
            description: 'Complete smart home automation system with IoT sensors, mobile app, and voice control integration.',
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop',
            tech: ['Arduino', 'React Native', 'MQTT', 'Firebase'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Machine Learning Trading Bot',
            description: 'Algorithmic trading bot using machine learning models to analyze market trends and execute trades.',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
            tech: ['Python', 'TensorFlow', 'Pandas', 'Alpha Vantage API'],
            github: 'https://github.com',
            live: 'https://example.com'
        }
    ];

    renderProjects();
    
    // View all projects button functionality
    const viewAllBtn = document.getElementById('view-all-projects');
    viewAllBtn.addEventListener('click', () => {
        showAllProjects = !showAllProjects;
        renderProjects();
        viewAllBtn.textContent = showAllProjects ? 'Show Less Projects' : 'View All Projects';
    });
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const projectsToShow = showAllProjects ? allProjects : allProjects.slice(0, 3);
    
    projectsGrid.innerHTML = '';
    
    projectsToShow.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        
        projectCard.innerHTML = `
            <div class="project-image-container" style="position: relative;">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <button class="project-btn" onclick="window.open('${project.github}', '_blank')">
                        <i class="fab fa-github"></i> Code
                    </button>
                    <button class="project-btn" onclick="window.open('${project.live}', '_blank')">
                        <i class="fas fa-external-link-alt"></i> Live
                    </button>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Blog posts data and functionality
function loadBlogPosts() {
    allBlogPosts = [
        {
            title: 'Building Scalable React Applications',
            excerpt: 'Learn best practices for structuring and scaling React applications for enterprise-level projects.',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
            category: 'web-dev',
            date: '2024-01-15',
            readTime: '8 min read'
        },
        {
            title: 'Introduction to Machine Learning with Python',
            excerpt: 'A comprehensive guide to getting started with machine learning using Python and popular libraries.',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
            category: 'ai',
            date: '2024-01-10',
            readTime: '12 min read'
        },
        {
            title: 'Career Growth Tips for Developers',
            excerpt: 'Essential advice for advancing your career in software development and technology.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
            category: 'career',
            date: '2024-01-05',
            readTime: '6 min read'
        },
        {
            title: 'Modern CSS Techniques and Best Practices',
            excerpt: 'Explore the latest CSS features and techniques for creating beautiful, responsive web designs.',
            image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop',
            category: 'web-dev',
            date: '2023-12-28',
            readTime: '10 min read'
        },
        {
            title: 'Deep Learning for Computer Vision',
            excerpt: 'Understanding convolutional neural networks and their applications in image recognition.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
            category: 'ai',
            date: '2023-12-20',
            readTime: '15 min read'
        },
        {
            title: 'Building Your Personal Brand as a Developer',
            excerpt: 'Strategies for establishing yourself as a thought leader in the tech industry.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
            category: 'career',
            date: '2023-12-15',
            readTime: '7 min read'
        }
    ];

    renderBlogPosts();
    initializeBlogFilters();
}

function renderBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    const filteredPosts = currentCategory === 'all' 
        ? allBlogPosts 
        : allBlogPosts.filter(post => post.category === currentCategory);
    
    blogGrid.innerHTML = '';
    
    filteredPosts.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.style.animationDelay = `${index * 0.1}s`;
        
        const categoryNames = {
            'web-dev': 'Web Development',
            'ai': 'AI & ML',
            'career': 'Career Tips'
        };
        
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${categoryNames[post.category] || post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <div class="blog-date">
                        <i class="fas fa-calendar"></i>
                        ${new Date(post.date).toLocaleDateString()}
                    </div>
                    <div class="read-time">
                        <i class="fas fa-clock"></i>
                        ${post.readTime}
                    </div>
                </div>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
}

function initializeBlogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update current category and re-render
            currentCategory = btn.dataset.category;
            renderBlogPosts();
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        
        // In a real application, you would send this data to your server
        console.log('Contact form data:', data);
    });
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = width;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Newsletter form functionality
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing to my newsletter!');
            newsletterForm.querySelector('input[type="email"]').value = '';
        }
        
        // In a real application, you would send this email to your server
        console.log('Newsletter subscription:', email);
    });
}

// Resume download functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-resume');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Create a sample resume content
            const resumeContent = `
SHIVAM KADAVLA
Full-Stack Developer & AI Enthusiast

CONTACT INFORMATION
Email: shivam@example.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA
LinkedIn: linkedin.com/in/shivam-kadavla
GitHub: github.com/shivam-kadavla

PROFESSIONAL EXPERIENCE

Senior Full Stack Developer | Tech Solutions Inc. | 2022 - Present
• Leading development of enterprise applications using React, Node.js, and cloud technologies
• Mentoring junior developers and conducting code reviews
• Architecting scalable solutions serving thousands of users

Full Stack Developer | Digital Innovations Ltd. | 2020 - 2022
• Developed and maintained multiple web applications serving thousands of users daily
• Implemented CI/CD pipelines and automated testing procedures
• Collaborated with cross-functional teams to deliver high-quality products

Junior Developer | StartUp Ventures | 2019 - 2020
• Started professional journey building responsive web applications
• Learned modern frameworks and development best practices
• Contributed to multiple successful product launches

TECHNICAL SKILLS
• Frontend: React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3
• Backend: Node.js, Python, GraphQL, REST APIs
• Databases: MongoDB, PostgreSQL, Redis
• Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD
• Tools: Git, VS Code, Figma, Postman

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2015 - 2019

CERTIFICATIONS
• AWS Certified Solutions Architect
• Google Cloud Professional Developer
• MongoDB Certified Developer
            `;

            // Create and download the resume file
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Shivam_Kadavla_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Show success message
            alert('Resume downloaded successfully!');
        });
    }
});

// Smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add intersection observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
