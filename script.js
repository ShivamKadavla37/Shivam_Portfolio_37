// Portfolio JavaScript - All functionality preserved with new AI chat and improved scroll button

// Global variables
let showAllProjects = false;
let selectedBlogCategory = 'All';
let typingTextIndex = 0;
let typingCharIndex = 0;
let isDeleting = false;
let isChatOpen = false;

// Data
const projects = [
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

const skillCategories = [
    {
        title: 'Frontend Development',
        icon: 'code-2',
        skills: [
            { name: 'React/Next.js', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Vue.js', level: 85 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Three.js', level: 80 },
        ]
    },
    {
        title: 'Backend Development',
        icon: 'server',
        skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Python', level: 88 },
            { name: 'Java', level: 82 },
            { name: 'GraphQL', level: 85 },
            { name: 'REST APIs', level: 95 },
        ]
    },
    {
        title: 'Database & Storage',
        icon: 'database',
        skills: [
            { name: 'PostgreSQL', level: 90 },
            { name: 'MongoDB', level: 85 },
            { name: 'Redis', level: 80 },
            { name: 'Supabase', level: 88 },
            { name: 'Firebase', level: 85 },
        ]
    },
    {
        title: 'Cloud & DevOps',
        icon: 'cloud',
        skills: [
            { name: 'AWS', level: 85 },
            { name: 'Docker', level: 88 },
            { name: 'Kubernetes', level: 80 },
            { name: 'Vercel', level: 95 },
            { name: 'GitHub Actions', level: 85 },
        ]
    },
    {
        title: 'AI & Machine Learning',
        icon: 'brain',
        skills: [
            { name: 'TensorFlow', level: 82 },
            { name: 'OpenAI APIs', level: 90 },
            { name: 'Langchain', level: 85 },
            { name: 'Hugging Face', level: 80 },
            { name: 'Computer Vision', level: 75 },
        ]
    },
    {
        title: 'Mobile Development',
        icon: 'smartphone',
        skills: [
            { name: 'React Native', level: 85 },
            { name: 'Flutter', level: 78 },
            { name: 'iOS Development', level: 75 },
            { name: 'Android', level: 80 },
            { name: 'PWA', level: 90 },
        ]
    },
];

const tools = [
    { name: 'VS Code', icon: 'code-2' },
    { name: 'Git', icon: 'git-branch' },
    { name: 'Figma', icon: 'palette' },
    { name: 'Postman', icon: 'zap' },
    { name: 'Jira', icon: 'globe' },
    { name: 'Slack', icon: 'lock' },
];

const blogPosts = [
    {
        title: 'The Future of AI in Web Development',
        excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications, from automated code generation to intelligent user experiences.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
        date: '2024-01-15',
        readTime: '8 min read',
        category: 'AI & Technology',
        tags: ['AI', 'WebDev', 'Future Tech']
    },
    {
        title: 'Building Scalable React Applications',
        excerpt: 'Best practices and architectural patterns for creating maintainable and scalable React applications that can grow with your business needs.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
        date: '2024-01-10',
        readTime: '12 min read',
        category: 'Development',
        tags: ['React', 'Architecture', 'Best Practices']
    },
    {
        title: 'Mastering TypeScript for Full-Stack Development',
        excerpt: 'A comprehensive guide to leveraging TypeScript across your entire development stack for better code quality and developer experience.',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop',
        date: '2024-01-05',
        readTime: '10 min read',
        category: 'Programming',
        tags: ['TypeScript', 'Full-Stack', 'Development']
    },
    {
        title: 'Cloud-Native Architecture Patterns',
        excerpt: 'Understanding modern cloud-native patterns and how to implement them effectively using containers, microservices, and serverless technologies.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
        date: '2023-12-28',
        readTime: '15 min read',
        category: 'Cloud & DevOps',
        tags: ['Cloud', 'Architecture', 'DevOps']
    },
    {
        title: 'The Art of Code Review',
        excerpt: 'Essential strategies for conducting effective code reviews that improve code quality, knowledge sharing, and team collaboration.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
        date: '2023-12-20',
        readTime: '7 min read',
        category: 'Team & Process',
        tags: ['Code Review', 'Team Work', 'Quality']
    },
    {
        title: 'Performance Optimization Techniques',
        excerpt: 'Advanced techniques for optimizing web application performance, from bundle splitting to caching strategies and beyond.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
        date: '2023-12-15',
        readTime: '11 min read',
        category: 'Performance',
        tags: ['Performance', 'Optimization', 'Web Development']
    }
];

const experiences = [
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
];

const education = [
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
];

const certifications = [
    { name: 'AWS Certified Solutions Architect', year: '2023' },
    { name: 'Google Cloud Professional Developer', year: '2022' },
    { name: 'Meta React Advanced Certification', year: '2022' },
    { name: 'MongoDB Certified Developer', year: '2021' },
];

const blogCategories = ['All', 'AI & Technology', 'Development', 'Programming', 'Cloud & DevOps', 'Team & Process', 'Performance'];

// Typing animation for hero text
const typingTexts = [
    'Full-Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Code Architect'
];

// AI Chat responses
const aiResponses = [
    "Hi! I'm Shivam's AI assistant. I can help you learn more about his work and experience.",
    "Shivam is a passionate full-stack developer with 5+ years of experience in modern web technologies.",
    "He specializes in React, Node.js, AI integration, and cloud architecture.",
    "Would you like to know about his latest projects or technical expertise?",
    "Feel free to ask about his experience with AI, web development, or any specific technologies!",
    "Shivam has worked on projects serving 100K+ users and loves solving complex technical challenges.",
    "You can check out his portfolio projects or download his resume for more details!"
];

function typeText() {
    const currentText = typingTexts[typingTextIndex];
    const typedTextElement = document.querySelector('#typed-text span');
    
    if (!typedTextElement) return;
    
    if (!isDeleting && typingCharIndex < currentText.length) {
        typedTextElement.textContent = currentText.slice(0, typingCharIndex + 1);
        typingCharIndex++;
        setTimeout(typeText, 100);
    } else if (!isDeleting && typingCharIndex === currentText.length) {
        setTimeout(() => {
            isDeleting = true;
            typeText();
        }, 2000);
    } else if (isDeleting && typingCharIndex > 0) {
        typedTextElement.textContent = currentText.slice(0, typingCharIndex - 1);
        typingCharIndex--;
        setTimeout(typeText, 50);
    } else if (isDeleting && typingCharIndex === 0) {
        isDeleting = false;
        typingTextIndex = (typingTextIndex + 1) % typingTexts.length;
        setTimeout(typeText, 100);
    }
}

// Project functions
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const projectsToShow = showAllProjects ? projects : projects.slice(0, 3);
    
    projectsGrid.innerHTML = projectsToShow.map((project, index) => `
        <div class="project-card card hover-scale transition-all duration-500 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in overflow-hidden rounded-lg" style="animation-delay: ${index * 0.2}s;">
            <div class="relative overflow-hidden">
                <img 
                    src="${project.image}" 
                    alt="${project.title}"
                    class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-4 left-4 right-4 flex gap-2">
                        <button class="btn-secondary opacity-90 hover:opacity-100 bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm" onclick="window.open('${project.github}', '_blank')">
                            <i data-lucide="github" class="w-4 h-4 mr-2 inline"></i>
                            Code
                        </button>
                        <button class="btn-primary opacity-90 hover:opacity-100 px-3 py-1 rounded text-sm" onclick="window.open('${project.live}', '_blank')">
                            <i data-lucide="external-link" class="w-4 h-4 mr-2 inline"></i>
                            Live
                        </button>
                    </div>
                </div>
                <div class="absolute top-4 right-4">
                    <div class="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i data-lucide="${project.icon}" class="w-5 h-5 text-primary"></i>
                    </div>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-semibold group-hover:text-primary transition-colors duration-300 mb-3">
                    ${project.title}
                </h3>
                
                <p class="text-muted-foreground text-sm leading-relaxed mb-4">
                    ${project.description}
                </p>
                
                <div class="flex flex-wrap gap-2">
                    ${project.tech.map(tech => `
                        <span class="px-2 py-1 bg-accent/30 text-accent-foreground rounded-md text-xs font-medium hover-scale transition-all duration-300">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function toggleProjects() {
    showAllProjects = !showAllProjects;
    renderProjects();
    
    const button = document.getElementById('toggle-projects-btn');
    const icon = showAllProjects ? 'code-2' : 'code-2';
    const text = showAllProjects ? 'Show Less Projects' : 'View All Projects';
    
    button.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 mr-2 inline"></i>${text}`;
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Skills functions
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    skillsGrid.innerHTML = skillCategories.map((category, categoryIndex) => `
        <div class="card hover-scale transition-all duration-500 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in rounded-lg p-6" style="animation-delay: ${categoryIndex * 0.1}s;">
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <i data-lucide="${category.icon}" class="w-6 h-6 text-primary"></i>
                </div>
                <h3 class="text-lg font-semibold">${category.title}</h3>
            </div>
            
            <div class="space-y-4">
                ${category.skills.map((skill, skillIndex) => `
                    <div class="space-y-2">
                        <div class="flex justify-between text-sm">
                            <span class="font-medium">${skill.name}</span>
                            <span class="text-muted-foreground">${skill.level}%</span>
                        </div>
                        <div class="skill-progress">
                            <div 
                                class="skill-progress-fill animate-fade-in"
                                style="width: ${skill.level}%; animation-delay: ${(categoryIndex * 0.1) + (skillIndex * 0.05)}s;"
                            ></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderTools() {
    const toolsGrid = document.getElementById('tools-grid');
    
    toolsGrid.innerHTML = tools.map((tool, index) => `
        <div class="flex flex-col items-center space-y-2 hover-scale transition-all duration-300 animate-fade-in" style="animation-delay: ${1 + index * 0.1}s;">
            <div class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <i data-lucide="${tool.icon}" class="w-8 h-8 text-primary"></i>
            </div>
            <span class="text-sm font-medium">${tool.name}</span>
        </div>
    `).join('');
}

// Blog functions
function renderBlogCategories() {
    const categoriesContainer = document.getElementById('blog-categories');
    
    categoriesContainer.innerHTML = blogCategories.map((category, index) => `
        <button 
            class="category-btn ${selectedBlogCategory === category ? 'active' : ''} hover-scale transition-all duration-300 animate-fade-in"
            style="animation-delay: ${0.3 + index * 0.05}s;"
            onclick="filterBlogPosts('${category}')"
        >
            ${category}
        </button>
    `).join('');
}

function filterBlogPosts(category) {
    selectedBlogCategory = category;
    renderBlogCategories();
    renderBlogPosts();
}

function renderBlogPosts() {
    const filteredPosts = selectedBlogCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedBlogCategory);
    
    // Render featured post (first post)
    if (filteredPosts.length > 0) {
        const featuredPost = filteredPosts[0];
        document.getElementById('featured-post').innerHTML = `
            <div class="card blog-card mb-12 overflow-hidden hover-scale transition-all duration-500 hover:shadow-2xl animate-fade-in rounded-lg" style="animation-delay: 0.4s;">
                <div class="md:flex">
                    <div class="md:w-1/2">
                        <img 
                            src="${featuredPost.image}"
                            alt="${featuredPost.title}"
                            class="w-full h-64 md:h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div class="md:w-1/2 p-8">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                Featured
                            </span>
                            <span class="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                                ${featuredPost.category}
                            </span>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-primary">${featuredPost.title}</h3>
                        <p class="text-muted-foreground mb-6 leading-relaxed">${featuredPost.excerpt}</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center text-sm text-muted-foreground gap-4">
                                <div class="flex items-center">
                                    <i data-lucide="calendar" class="w-4 h-4 mr-1"></i>
                                    ${new Date(featuredPost.date).toLocaleDateString()}
                                </div>
                                <div class="flex items-center">
                                    <i data-lucide="clock" class="w-4 h-4 mr-1"></i>
                                    ${featuredPost.readTime}
                                </div>
                            </div>
                            <button class="btn-primary hover-scale" onclick="alert('Blog post coming soon!')">
                                Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-2 inline"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Render other posts
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = filteredPosts.slice(1).map((post, index) => `
        <div class="blog-card card group overflow-hidden hover-scale transition-all duration-500 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in rounded-lg" style="animation-delay: ${0.5 + index * 0.1}s;">
            <div class="relative overflow-hidden">
                <img 
                    src="${post.image}"
                    alt="${post.title}"
                    class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div class="absolute top-4 left-4">
                    <span class="px-2 py-1 bg-black/60 backdrop-blur-sm text-white rounded text-xs">
                        ${post.category}
                    </span>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-lg font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3">
                    ${post.title}
                </h3>
                
                <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    ${post.excerpt}
                </p>
                
                <div class="flex flex-wrap gap-1 mb-4">
                    ${post.tags.map(tag => `
                        <span class="inline-flex items-center px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs">
                            <i data-lucide="tag" class="w-3 h-3 mr-1"></i>
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                
                <div class="flex items-center justify-between pt-2 border-t border-border/50">
                    <div class="flex items-center text-xs text-muted-foreground gap-3">
                        <div class="flex items-center">
                            <i data-lucide="calendar" class="w-3 h-3 mr-1"></i>
                            ${new Date(post.date).toLocaleDateString()}
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                            ${post.readTime}
                        </div>
                    </div>
                    <button class="text-primary hover:text-primary/80 text-sm" onclick="alert('Blog post coming soon!')">
                        Read <i data-lucide="arrow-right" class="w-3 h-3 ml-1 inline"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Resume functions
function renderExperience() {
    const experienceList = document.getElementById('experience-list');
    
    experienceList.innerHTML = experiences.map((exp, index) => `
        <div class="experience-card card hover-scale transition-all duration-300 border-l-4 border-l-primary animate-fade-in rounded-lg" style="animation-delay: ${0.4 + index * 0.1}s;">
            <div class="p-6">
                <h4 class="text-xl font-semibold text-primary mb-3">${exp.title}</h4>
                <div class="space-y-1 text-sm text-muted-foreground mb-4">
                    <div class="flex items-center">
                        <i data-lucide="briefcase" class="w-4 h-4 mr-2"></i>
                        ${exp.company}
                    </div>
                    <div class="flex items-center">
                        <i data-lucide="map-pin" class="w-4 h-4 mr-2"></i>
                        ${exp.location}
                    </div>
                    <div class="flex items-center">
                        <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
                        ${exp.period}
                    </div>
                </div>
                <ul class="space-y-2">
                    ${exp.description.map(item => `
                        <li class="text-sm text-muted-foreground flex items-start">
                            <span class="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const educationList = document.getElementById('education-list');
    
    educationList.innerHTML = education.map((edu, index) => `
        <div class="education-card card hover-scale transition-all duration-300 animate-fade-in rounded-lg p-6" style="animation-delay: ${0.7 + index * 0.1}s;">
            <div class="flex justify-between items-start mb-2">
                <h4 class="text-lg font-semibold text-primary">${edu.degree}</h4>
                <span class="text-sm text-muted-foreground">${edu.period}</span>
            </div>
            <p class="text-muted-foreground mb-2">${edu.school}, ${edu.location}</p>
            <p class="text-sm text-muted-foreground mb-3">GPA: ${edu.gpa}</p>
            <div class="flex flex-wrap gap-2">
                ${edu.highlights.map(highlight => `
                    <span class="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs">
                        ${highlight}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderCertifications() {
    const certificationsList = document.getElementById('certifications-list');
    
    certificationsList.innerHTML = certifications.map((cert, index) => `
        <div class="cert-badge flex justify-between items-center animate-fade-in" style="animation-delay: ${0.6 + index * 0.1}s;">
            <span class="text-sm font-medium">${cert.name}</span>
            <span class="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                ${cert.year}
            </span>
        </div>
    `).join('');
}

// Resume download function
function downloadResume() {
    const resumeContent = `
SHIVAM KADAVLA
Software Developer

CONTACT:
Email: shivam.kadavla@example.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA

EXPERIENCE:
Senior Full-Stack Developer | Tech Innovations Inc. | 2022 - Present
- Led development of AI-powered analytics platform serving 100K+ users
- Architected microservices infrastructure reducing response time by 40%
- Mentored team of 5 junior developers and established coding standards
- Implemented CI/CD pipelines improving deployment efficiency by 60%

Full-Stack Developer | Digital Solutions Ltd. | 2020 - 2022
- Built responsive web applications using React, Node.js, and PostgreSQL
- Collaborated with design team to implement pixel-perfect UI components
- Optimized database queries resulting in 50% performance improvement
- Integrated third-party APIs and payment processing systems

Software Developer | StartUp Ventures | 2019 - 2020
- Developed MVP for fintech startup using modern web technologies
- Implemented real-time features using WebSocket and Socket.io
- Created automated testing suites achieving 90% code coverage
- Participated in agile development process and sprint planning

EDUCATION:
Master of Computer Science | Stanford University | 2017 - 2019
Bachelor of Computer Engineering | UC Berkeley | 2013 - 2017

CERTIFICATIONS:
- AWS Certified Solutions Architect (2023)
- Google Cloud Professional Developer (2022)
- Meta React Advanced Certification (2022)
- MongoDB Certified Developer (2021)

SKILLS:
- Frontend: React, TypeScript, Next.js, Tailwind CSS
- Backend: Node.js, Python, Express, GraphQL
- Databases: PostgreSQL, MongoDB, Redis
- Cloud: AWS, Google Cloud, Docker, Kubernetes
- Tools: Git, Jenkins, Jest, Cypress
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shivam_Kadavla_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

// AI Chat Functions
function toggleAIChat() {
    const chatBoard = document.getElementById('ai-chat-board');
    const chatToggle = document.getElementById('ai-chat-toggle');
    
    isChatOpen = !isChatOpen;
    
    if (isChatOpen) {
        chatBoard.classList.remove('hidden');
        chatToggle.style.transform = 'scale(0.9)';
    } else {
        chatBoard.classList.add('hidden');
        chatToggle.style.transform = 'scale(1)';
    }
}

function addMessageToChat(message, isUser = false) {
    const messagesContainer = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${isUser ? 'user-message' : ''}`;
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                <i data-lucide="user" class="w-3 h-3 text-primary-foreground"></i>
            </div>
            <div class="ai-message-content">
                <p>${message}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                <i data-lucide="bot" class="w-3 h-3 text-primary-foreground"></i>
            </div>
            <div class="ai-message-content">
                <p>${message}</p>
            </div>
        `;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('ai-chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message typing-indicator-message';
    typingDiv.innerHTML = `
        <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
            <i data-lucide="bot" class="w-3 h-3 text-primary-foreground"></i>
        </div>
        <div class="ai-message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    return typingDiv;
}

function removeTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator-message');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function sendAIMessage() {
    const input = document.getElementById('ai-message-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessageToChat(message, true);
    input.value = '';
    
    // Show typing indicator
    const typingIndicator = showTypingIndicator();
    
    // Simulate AI response delay
    setTimeout(() => {
        removeTypingIndicator();
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        addMessageToChat(randomResponse);
    }, 1000 + Math.random() * 2000);
}

// Form handling
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<div class="spinner inline-block mr-2"></div>Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you ${data.firstName}! Your message has been sent successfully. I'll get back to you soon.`);
        event.target.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function handleNewsletterForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    
    // Simulate newsletter subscription
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<div class="spinner inline-block mr-2"></div>Subscribing...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you! ${email} has been subscribed to our newsletter.`);
        event.target.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Navigation and scroll functions
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.add('hidden');
            }
        });
    });
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icon
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
        } else {
            icon.setAttribute('data-lucide', 'x');
        }
        
        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });
    
    // Close mobile menu when clicking nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });
}

function setupScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setupAIChat() {
    const chatToggle = document.getElementById('ai-chat-toggle');
    const chatClose = document.getElementById('ai-chat-close');
    const sendBtn = document.getElementById('ai-send-btn');
    const messageInput = document.getElementById('ai-message-input');
    
    chatToggle.addEventListener('click', toggleAIChat);
    chatClose.addEventListener('click', toggleAIChat);
    sendBtn.addEventListener('click', sendAIMessage);
    
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendAIMessage();
        }
    });
}

// Animation observers
function setupAnimationObservers() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                // Trigger progress bar animations for skills
                if (entry.target.classList.contains('skill-progress-fill')) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in, .animate-scale-in, .skill-progress-fill').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing animation
    setTimeout(typeText, 1000);
    
    // Render all sections
    renderProjects();
    renderSkills();
    renderTools();
    renderBlogCategories();
    renderBlogPosts();
    renderExperience();
    renderEducation();
    renderCertifications();
    
    // Setup interactions
    setupSmoothScrolling();
    setupMobileMenu();
    setupScrollToTop();
    setupAIChat();
    setupAnimationObservers();
    
    // Setup event listeners
    document.getElementById('toggle-projects-btn').addEventListener('click', toggleProjects);
    document.getElementById('download-resume-hero').addEventListener('click', downloadResume);
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
    document.getElementById('newsletter-form').addEventListener('submit', handleNewsletterForm);
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    console.log('Portfolio with AI chat initialized successfully!');
});

// Export functions for global access
window.filterBlogPosts = filterBlogPosts;
window.toggleProjects = toggleProjects;
window.downloadResume = downloadResume;
