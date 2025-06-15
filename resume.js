
// Resume Data
const resumeData = {
    experiences: [
        {
            title: 'Senior Full-Stack Developer',
            company: 'Tech Innovations Inc.',
            location: 'San Francisco, CA',
            period: '2022 - Present',
            description: [
                'Led development of AI-powered analytics platform serving 100K+ users',
                'Architected microservices infrastructure reducing response time by 40%',
                'Mentored team of 5 junior developers and established coding standards',
                'Implemented CI/CD pipelines improving deployment efficiency by 60%'
            ]
        },
        {
            title: 'Full-Stack Developer',
            company: 'Digital Solutions Ltd.',
            location: 'New York, NY',
            period: '2020 - 2022',
            description: [
                'Built responsive web applications using React, Node.js, and PostgreSQL',
                'Collaborated with design team to implement pixel-perfect UI components',
                'Optimized database queries resulting in 50% performance improvement',
                'Integrated third-party APIs and payment processing systems'
            ]
        },
        {
            title: 'Software Developer',
            company: 'StartUp Ventures',
            location: 'Austin, TX',
            period: '2019 - 2020',
            description: [
                'Developed MVP for fintech startup using modern web technologies',
                'Implemented real-time features using WebSocket and Socket.io',
                'Created automated testing suites achieving 90% code coverage',
                'Participated in agile development process and sprint planning'
            ]
        }
    ],
    education: [
        {
            degree: 'Master of Computer Science',
            school: 'Stanford University',
            location: 'Stanford, CA',
            period: '2017 - 2019',
            gpa: '3.8/4.0',
            highlights: ['Specialized in Artificial Intelligence', 'Research in Machine Learning']
        },
        {
            degree: 'Bachelor of Computer Engineering',
            school: 'UC Berkeley',
            location: 'Berkeley, CA',
            period: '2013 - 2017',
            gpa: '3.7/4.0',
            highlights: ['Magna Cum Laude', 'Dean\'s List (6 semesters)']
        }
    ],
    certifications: [
        { name: 'AWS Certified Solutions Architect', year: '2023' },
        { name: 'Google Cloud Professional Developer', year: '2022' },
        { name: 'Meta React Advanced Certification', year: '2022' },
        { name: 'MongoDB Certified Developer', year: '2021' }
    ],
    stats: [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '20+', label: 'Technologies Mastered' },
        { number: '10+', label: 'Team Members Mentored' }
    ]
};

// Icons for different meta information
const icons = {
    company: `<svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>`,
    location: `<svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>`,
    calendar: `<svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`
};

// Initialize the resume page
function initResume() {
    renderExperience();
    renderEducation();
    renderCertifications();
    renderStats();
    setupDownloadButton();
    setupAnimations();
}

// Render experience timeline
function renderExperience() {
    const experienceTimeline = document.getElementById('experienceTimeline');
    
    resumeData.experiences.forEach((experience, index) => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        experienceItem.style.animationDelay = `${0.4 + index * 0.1}s`;
        
        const descriptionList = experience.description.map(item => `<li>${item}</li>`).join('');
        
        experienceItem.innerHTML = `
            <div class="experience-header">
                <h4 class="experience-title">${experience.title}</h4>
                <div class="experience-meta">
                    <div class="meta-item">
                        ${icons.company}
                        <span>${experience.company}</span>
                    </div>
                    <div class="meta-item">
                        ${icons.location}
                        <span>${experience.location}</span>
                    </div>
                    <div class="meta-item">
                        ${icons.calendar}
                        <span>${experience.period}</span>
                    </div>
                </div>
            </div>
            <div class="experience-description">
                <ul>
                    ${descriptionList}
                </ul>
            </div>
        `;
        
        experienceTimeline.appendChild(experienceItem);
    });
}

// Render education
function renderEducation() {
    const educationGrid = document.getElementById('educationGrid');
    
    resumeData.education.forEach((edu, index) => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        educationItem.style.animationDelay = `${0.7 + index * 0.1}s`;
        
        const highlightTags = edu.highlights.map(highlight => 
            `<span class="highlight-tag">${highlight}</span>`
        ).join('');
        
        educationItem.innerHTML = `
            <div class="education-header">
                <h4 class="education-degree">${edu.degree}</h4>
                <span class="education-period">${edu.period}</span>
            </div>
            <p class="education-school">${edu.school}, ${edu.location}</p>
            <p class="education-gpa">GPA: ${edu.gpa}</p>
            <div class="education-highlights">
                ${highlightTags}
            </div>
        `;
        
        educationGrid.appendChild(educationItem);
    });
}

// Render certifications
function renderCertifications() {
    const certificationsList = document.getElementById('certificationsList');
    
    resumeData.certifications.forEach((cert, index) => {
        const certificationItem = document.createElement('div');
        certificationItem.className = 'certification-item';
        certificationItem.style.animationDelay = `${0.6 + index * 0.1}s`;
        
        certificationItem.innerHTML = `
            <span class="certification-name">${cert.name}</span>
            <span class="certification-year">${cert.year}</span>
        `;
        
        certificationsList.appendChild(certificationItem);
    });
}

// Render stats
function renderStats() {
    const statsGrid = document.getElementById('statsGrid');
    
    resumeData.stats.forEach((stat, index) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.style.animationDelay = `${0.8 + index * 0.1}s`;
        
        statItem.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        
        statsGrid.appendChild(statItem);
    });
}

// Setup download functionality
function setupDownloadButton() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', () => {
        // Create resume content
        const resumeContent = generateResumeContent();
        
        // Create and download file
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Shivam_Kadavla_Resume.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        // Add visual feedback
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = `
            <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            Downloaded!
        `;
        
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
        }, 2000);
    });
}

// Generate resume content for download
function generateResumeContent() {
    let content = `SHIVAM KADAVLA\nSoftware Developer\n\n`;
    
    content += `CONTACT:\n`;
    content += `Email: shivam.kadavla@example.com\n`;
    content += `Phone: +1 (555) 123-4567\n`;
    content += `Location: San Francisco, CA\n\n`;
    
    content += `EXPERIENCE:\n`;
    resumeData.experiences.forEach(exp => {
        content += `${exp.title} | ${exp.company} | ${exp.period}\n`;
        exp.description.forEach(desc => {
            content += `- ${desc}\n`;
        });
        content += `\n`;
    });
    
    content += `EDUCATION:\n`;
    resumeData.education.forEach(edu => {
        content += `${edu.degree} | ${edu.school} | ${edu.period}\n`;
        content += `GPA: ${edu.gpa}\n`;
        content += `Highlights: ${edu.highlights.join(', ')}\n\n`;
    });
    
    content += `CERTIFICATIONS:\n`;
    resumeData.certifications.forEach(cert => {
        content += `- ${cert.name} (${cert.year})\n`;
    });
    
    content += `\nSKILLS:\n`;
    content += `- Frontend: React, TypeScript, Next.js, Tailwind CSS\n`;
    content += `- Backend: Node.js, Python, Express, GraphQL\n`;
    content += `- Databases: PostgreSQL, MongoDB, Redis\n`;
    content += `- Cloud: AWS, Google Cloud, Docker, Kubernetes\n`;
    content += `- Tools: Git, Jenkins, Jest, Cypress\n`;
    
    return content;
}

// Setup scroll animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for any internal links
function setupSmoothScroll() {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Add hover effects for cards
function setupHoverEffects() {
    const cards = document.querySelectorAll('.experience-item, .education-item, .certifications-card, .stats-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initResume();
    setupSmoothScroll();
    setupHoverEffects();
    
    console.log('Resume page initialized successfully!');
});

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
