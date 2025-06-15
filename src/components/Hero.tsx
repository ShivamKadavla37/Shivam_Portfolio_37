
import { useEffect, useState } from 'react';
import { ChevronDown, Code, Database, Cpu, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'Full-Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Code Architect'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setTypedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setTypedText(currentText.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const floatingIcons = [
    { Icon: Code, delay: '0s', duration: '6s' },
    { Icon: Database, delay: '1s', duration: '7s' },
    { Icon: Cpu, delay: '2s', duration: '8s' },
    { Icon: Brain, delay: '0.5s', duration: '6.5s' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <div
            key={index}
            className="absolute opacity-20"
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${30 + (index * 15)}%`,
              animation: `float ${duration} ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <Icon size={32} className="text-primary" />
          </div>
        ))}

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative mx-auto w-48 h-48 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Avatar className="w-full h-full border-4 border-primary/20 shadow-2xl">
              <AvatarImage src="/lovable-uploads/34a2b5da-d45f-4f0b-b0d4-098a64cbb164.png" alt="Shivam Kadavla" />
              <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                SK
              </AvatarFallback>
            </Avatar>
            {/* Glowing Ring Animation */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Shivam Kadavla
              </span>
            </h1>
            
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <span className="inline-block border-r-2 border-primary animate-pulse">
                  {typedText}
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Crafting innovative solutions with cutting-edge technology. 
            Passionate about AI, full-stack development, and creating 
            digital experiences that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button size="lg" className="hover-scale bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="hover-scale transition-all duration-300">
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
