
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
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

  const categories = ['All', 'AI & Technology', 'Development', 'Programming', 'Cloud & DevOps', 'Team & Process', 'Performance'];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge, insights, and experiences from the world of software development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {categories.map((category, index) => (
              <Button 
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="hover-scale transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden hover-scale transition-all duration-500 hover:shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Button className="hover-scale">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.title}
                className="group overflow-hidden hover-scale transition-all duration-500 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center text-xs text-muted-foreground gap-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                      Read <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" variant="outline" className="hover-scale">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
