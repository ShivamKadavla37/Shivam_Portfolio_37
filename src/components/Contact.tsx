
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shivam@example.com',
      href: 'mailto:shivam@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-scale transition-all duration-500 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <Button size="lg" className="w-full hover-scale">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <Card 
                      key={item.label}
                      className="hover-scale transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <CardContent className="flex items-center p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center hover-scale transition-all duration-300 ${social.color} animate-fade-in`}
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Card */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Quick Response Guarantee</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I typically respond to all inquiries within 24 hours. For urgent projects, 
                    feel free to call me directly.
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-medium">Available for new projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you need a full-stack web application, AI integration, or technical consultation, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-scale">
                  <Mail className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
