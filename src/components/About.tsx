
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, efficient applications that users love.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results.',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Passionate Software Developer
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated software developer with a passion for creating 
                  innovative solutions that bridge the gap between complex technology 
                  and user-friendly experiences. My journey in tech began with curiosity 
                  and has evolved into a deep expertise in full-stack development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in modern web technologies and a keen 
                  interest in artificial intelligence, I specialize in building 
                  scalable applications that not only meet today's needs but are 
                  ready for tomorrow's challenges.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Cards */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card 
                  key={item.title}
                  className="hover-scale transition-all duration-300 hover:shadow-lg border-border/50 animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold mb-8">Technologies I Love</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'PostgreSQL', 'Docker', 'AWS'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-accent/20 rounded-full text-sm font-medium hover-scale transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
