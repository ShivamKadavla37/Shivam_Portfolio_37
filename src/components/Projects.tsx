
import { useState } from 'react';
import { ExternalLink, Github, Code2, Globe, Database, Brain, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const allProjects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform using machine learning to provide predictive insights and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      github: '#',
      live: '#',
      icon: Brain,
    },
    {
      title: 'Full-Stack E-commerce Platform',
      description: 'Modern e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
      github: '#',
      live: '#',
      icon: Globe,
    },
    {
      title: 'Cloud-Native Microservices',
      description: 'Scalable microservices architecture deployed on AWS with containerization and automated CI/CD pipelines.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop',
      tech: ['Docker', 'Kubernetes', 'AWS', 'GraphQL'],
      github: '#',
      live: '#',
      icon: Database,
    },
    {
      title: 'Mobile-First Social App',
      description: 'React Native social media application with real-time messaging, photo sharing, and location-based features.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
      github: '#',
      live: '#',
      icon: Smartphone,
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'Web-based collaborative workspace with real-time editing, video calls, and project management features.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tech: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
      github: '#',
      live: '#',
      icon: Server,
    },
    {
      title: 'AI Design Assistant',
      description: 'Machine learning powered design tool that generates UI components and provides design suggestions.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop',
      tech: ['React', 'Python', 'OpenAI', 'Figma API'],
      github: '#',
      live: '#',
      icon: Palette,
    },
  ];

  const projectsToShow = showAllProjects ? allProjects : allProjects.slice(0, 3);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and cutting-edge technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover-scale transition-all duration-500 hover:shadow-2xl border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="opacity-90 hover:opacity-100" onClick={() => window.open(project.github, '_blank')}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="opacity-90 hover:opacity-100" onClick={() => window.open(project.live, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-accent/30 text-accent-foreground rounded-md text-xs font-medium hover-scale transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-scale"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              <Code2 className="w-4 h-4 mr-2" />
              {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
