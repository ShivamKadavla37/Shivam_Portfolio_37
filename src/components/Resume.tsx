
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
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

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional journey and achievements in software development
            </p>
            <Button size="lg" className="hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Experience */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Experience */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Professional Experience</h3>
                </div>
                
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <Card 
                      key={exp.title}
                      className="hover-scale transition-all duration-300 border-l-4 border-l-primary animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <Card 
                      key={edu.degree}
                      className="hover-scale transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                        </div>
                        <p className="text-muted-foreground mb-2">{edu.school}, {edu.location}</p>
                        <p className="text-sm text-muted-foreground mb-3">GPA: {edu.gpa}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <span 
                              key={highlight}
                              className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Certifications & Skills Summary */}
            <div className="space-y-8">
              {/* Certifications */}
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                
                <Card className="hover-scale transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div 
                          key={cert.name}
                          className="flex justify-between items-center p-3 bg-accent/10 rounded-lg animate-fade-in"
                          style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                          <span className="text-sm font-medium">{cert.name}</span>
                          <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                            {cert.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
                <Card className="hover-scale transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">5+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">50+</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">20+</div>
                        <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">10+</div>
                        <div className="text-sm text-muted-foreground">Team Members Mentored</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
