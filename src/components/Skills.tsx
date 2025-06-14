
import { 
  Code2, Database, Cloud, Smartphone, Palette, Zap, 
  Brain, GitBranch, Server, Lock, Globe, Cpu 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
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
      icon: Server,
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
      icon: Database,
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
      icon: Cloud,
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
      icon: Brain,
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
      icon: Smartphone,
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
    { name: 'VS Code', icon: Code2 },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: Palette },
    { name: 'Postman', icon: Zap },
    { name: 'Jira', icon: Globe },
    { name: 'Slack', icon: Lock },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical skills across the full development stack
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title}
                className="hover-scale transition-all duration-500 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-accent/20 rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-fade-in"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools Section */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className="flex flex-col items-center space-y-2 hover-scale transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <tool.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <Cpu className="absolute top-1/3 right-1/6 w-8 h-8 text-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
