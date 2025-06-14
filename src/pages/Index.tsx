
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main content with padding to account for fixed navbar */}
      <main className="pt-16">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Portfolio</h1>
            <p className="text-xl text-muted-foreground">Professional portfolio website ready to showcase your work!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
