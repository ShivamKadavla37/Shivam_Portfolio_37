
// Blog Data
const blogData = {
    posts: [
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
    ],
    categories: ['All', 'AI & Technology', 'Development', 'Programming', 'Cloud & DevOps', 'Team & Process', 'Performance']
};

// Icons for different elements
const icons = {
    calendar: `<svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`,
    clock: `<svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12,6 12,12 16,14"></polyline>
    </svg>`,
    arrowRight: `<svg class="btn-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12,5 19,12 12,19"></polyline>
    </svg>`,
    tag: `<svg class="tag-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>`
};

// State management
let currentCategory = 'All';
let filteredPosts = [...blogData.posts];

// Initialize the blog page
function initBlog() {
    renderCategoryFilter();
    renderFeaturedPost();
    renderBlogGrid();
    setupLoadMoreButton();
    setupAnimations();
}

// Render category filter
function renderCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    
    blogData.categories.forEach((category, index) => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = `category-btn ${category === currentCategory ? 'active' : ''}`;
        categoryBtn.style.animationDelay = `${0.3 + index * 0.05}s`;
        categoryBtn.textContent = category;
        
        categoryBtn.addEventListener('click', () => {
            currentCategory = category;
            updateCategoryFilter();
            filterPosts();
            renderFeaturedPost();
            renderBlogGrid();
        });
        
        categoryFilter.appendChild(categoryBtn);
    });
}

// Update category filter active state
function updateCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === currentCategory) {
            btn.classList.add('active');
        }
    });
}

// Filter posts based on selected category
function filterPosts() {
    filteredPosts = currentCategory === 'All' 
        ? [...blogData.posts] 
        : blogData.posts.filter(post => post.category === currentCategory);
}

// Render featured post
function renderFeaturedPost() {
    const featuredPostContainer = document.getElementById('featuredPost');
    
    if (filteredPosts.length === 0) {
        featuredPostContainer.innerHTML = '';
        return;
    }
    
    const featuredPost = filteredPosts[0];
    
    featuredPostContainer.innerHTML = `
        <div class="featured-post">
            <div class="featured-post-content">
                <img src="${featuredPost.image}" alt="${featuredPost.title}" class="featured-post-image">
                <div class="featured-post-body">
                    <div class="featured-post-badges">
                        <span class="featured-badge">Featured</span>
                        <span class="category-badge">${featuredPost.category}</span>
                    </div>
                    <h3 class="featured-post-title">${featuredPost.title}</h3>
                    <p class="featured-post-excerpt">${featuredPost.excerpt}</p>
                    <div class="featured-post-footer">
                        <div class="featured-post-meta">
                            <div class="meta-item">
                                ${icons.calendar}
                                <span>${new Date(featuredPost.date).toLocaleDateString()}</span>
                            </div>
                            <div class="meta-item">
                                ${icons.clock}
                                <span>${featuredPost.readTime}</span>
                            </div>
                        </div>
                        <button class="read-more-btn hover-scale" onclick="handleReadMore('${featuredPost.title}')">
                            Read More ${icons.arrowRight}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render blog grid
function renderBlogGrid() {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
    
    const postsToShow = filteredPosts.slice(1); // Skip the first post (featured)
    
    postsToShow.forEach((post, index) => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.style.animationDelay = `${0.5 + index * 0.1}s`;
        
        const tagsHtml = post.tags.map(tag => 
            `<span class="tag">${icons.tag}${tag}</span>`
        ).join('');
        
        blogPost.innerHTML = `
            <div class="blog-post-image-container">
                <img src="${post.image}" alt="${post.title}" class="blog-post-image">
                <div class="blog-post-category">${post.category}</div>
            </div>
            <div class="blog-post-content">
                <h4 class="blog-post-title">${post.title}</h4>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <div class="blog-post-tags">
                    ${tagsHtml}
                </div>
                <div class="blog-post-footer">
                    <div class="blog-post-meta">
                        <div class="meta-item">
                            ${icons.calendar}
                            <span>${new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div class="meta-item">
                            ${icons.clock}
                            <span>${post.readTime}</span>
                        </div>
                    </div>
                    <button class="blog-post-read-btn" onclick="handleReadMore('${post.title}')">
                        Read ${icons.arrowRight}
                    </button>
                </div>
            </div>
        `;
        
        blogGrid.appendChild(blogPost);
    });
}

// Setup load more button
function setupLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    loadMoreBtn.addEventListener('click', () => {
        alert('More articles coming soon!');
    });
}

// Handle read more functionality
function handleReadMore(postTitle) {
    alert('Blog post coming soon!');
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

// Add hover effects for cards
function setupHoverEffects() {
    const cards = document.querySelectorAll('.blog-post, .featured-post');
    
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
    initBlog();
    setupHoverEffects();
    
    console.log('Blog page initialized successfully!');
});

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
