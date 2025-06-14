
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Placeholder sections for navigation */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-accent/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="resume" className="min-h-screen flex items-center justify-center bg-accent/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="blog" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-accent/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
