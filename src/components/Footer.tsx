
import { Github, Linkedin, Twitter, Mail, Heart, Code2, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'AI Integration', href: '#' },
    { name: 'Consulting', href: '#' },
    { name: 'Technical Writing', href: '#' },
  ];

  const resources = [
    { name: 'Resume', href: '#resume' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Newsletter', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:shivam@example.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-background to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1 animate-fade-in">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Shivam Kadavla
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Full-Stack Developer & AI Enthusiast
                </p>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Crafting innovative solutions with cutting-edge technology. 
                Passionate about creating digital experiences that make a difference.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 story-link animate-fade-in"
                      style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 story-link animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={resource.name}>
                    <a 
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 story-link animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border/50">
          <div className="max-w-2xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest insights on web development, AI, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <Button className="hover-scale">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span>© 2024 Shivam Kadavla. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>and</span>
              <Code2 className="w-4 h-4 mx-1 text-primary" />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>Available for freelance</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover-scale animate-fade-in"
                style={{ animationDelay: '0.8s' }}
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;
