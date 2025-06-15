import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Shivam's AI assistant. I can help you learn about his projects, skills, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const projects = [
    {
      name: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform using machine learning to provide predictive insights and real-time data visualization.',
      tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    },
    {
      name: 'Full-Stack E-commerce Platform',
      description: 'Modern e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
    },
    {
      name: 'Cloud-Native Microservices',
      description: 'Scalable microservices architecture deployed on AWS with containerization and automated CI/CD pipelines.',
      tech: ['Docker', 'Kubernetes', 'AWS', 'GraphQL'],
    },
  ];

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Project-related queries
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return `Shivam has worked on several exciting projects:

🚀 **AI-Powered Analytics Dashboard** - A comprehensive analytics platform using machine learning with React, Python, TensorFlow, and PostgreSQL.

🛒 **Full-Stack E-commerce Platform** - Modern e-commerce solution with Next.js, Node.js, Stripe, and MongoDB.

☁️ **Cloud-Native Microservices** - Scalable architecture with Docker, Kubernetes, AWS, and GraphQL.

Plus mobile apps, real-time collaboration tools, and AI design assistants! Would you like details about any specific project?`;
    }

    // Skills-related queries
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
      return `Shivam's technical expertise includes:

**Frontend:** React, Next.js, TypeScript, Tailwind CSS
**Backend:** Node.js, Python, GraphQL, REST APIs
**Database:** PostgreSQL, MongoDB, Firebase
**Cloud & DevOps:** AWS, Docker, Kubernetes
**AI/ML:** TensorFlow, Machine Learning, OpenAI
**Mobile:** React Native

He's passionate about full-stack development and AI integration!`;
    }

    // Experience-related queries
    if (message.includes('experience') || message.includes('background') || message.includes('about')) {
      return `Shivam Kadavla is a passionate Full-Stack Developer and AI Enthusiast who crafts innovative solutions with cutting-edge technology. 

He specializes in:
- Building scalable web applications
- AI/ML integration
- Cloud-native architectures
- Mobile development

He's always excited about creating digital experiences that make a difference!`;
    }

    // Contact-related queries
    if (message.includes('contact') || message.includes('hire') || message.includes('reach')) {
      return `You can reach out to Shivam through:

📧 Check the contact section below for his email
💼 Connect with him on LinkedIn
🐙 View his code on GitHub

He's always open to discussing new opportunities and exciting projects!`;
    }

    // Education or learning queries
    if (message.includes('learn') || message.includes('education') || message.includes('study')) {
      return `Shivam is a continuous learner who stays updated with the latest technologies. He's passionate about:

- Modern web development frameworks
- AI and machine learning advancements
- Cloud computing and DevOps practices
- Mobile-first development approaches

Check out his blog section for insights and learnings!`;
    }

    // Default responses for general queries
    const defaultResponses = [
      "That's an interesting question! I can help you learn about Shivam's projects, skills, experience, or how to contact him. What specifically would you like to know?",
      "I'm here to help you discover more about Shivam's work! You can ask me about his projects, technical skills, or professional background.",
      "Great question! I can share information about Shivam's portfolio, including his innovative projects and technical expertise. What interests you most?",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Animated rings around the button */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
          
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className={`relative rounded-full w-16 h-16 shadow-2xl hover-scale transition-all duration-300 ${
              isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700'
            }`}
          >
            {isOpen ? (
              <X className="w-6 h-6 animate-scale-in" />
            ) : (
              <div className="relative">
                <MessageCircle className="w-6 h-6 animate-bounce" />
                <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
              </div>
            )}
          </Button>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-40 animate-scale-in">
          <Card className="h-full shadow-2xl border-primary/20 bg-background/95 backdrop-blur-md overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Enhanced Header */}
              <div className="relative flex items-center gap-3 p-4 border-b border-border bg-gradient-to-r from-primary/10 to-blue-50 rounded-t-lg">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
                  <Zap className="absolute top-2 right-8 w-4 h-4 text-primary/30 animate-pulse" />
                  <Sparkles className="absolute bottom-2 left-8 w-3 h-3 text-blue-500/30 animate-bounce" />
                </div>
                
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-5 h-5 text-primary animate-bounce" />
                </div>
                <div className="flex-1 relative">
                  <h3 className="font-semibold text-sm flex items-center gap-2">
                    AI Assistant
                    <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
                  </h3>
                  <p className="text-xs text-muted-foreground">Ask about Shivam's work</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages with enhanced animations */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-4 right-4 w-8 h-8 border border-primary/20 rounded-full animate-spin"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-primary/10 to-blue-100 rounded-full animate-pulse"></div>
                </div>

                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 animate-fade-in ${
                      message.isBot ? 'justify-start' : 'justify-end'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-pulse">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-line shadow-sm hover-scale transition-all duration-200 ${
                        message.isBot
                          ? 'bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border border-primary/10'
                          : 'bg-gradient-to-br from-primary to-blue-600 text-primary-foreground shadow-lg'
                      }`}
                    >
                      {message.text}
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Enhanced Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 animate-fade-in">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-pulse">
                      <Bot className="w-4 h-4 text-primary animate-bounce" />
                    </div>
                    <div className="bg-gradient-to-br from-accent to-accent/80 p-3 rounded-2xl border border-primary/10 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Enhanced Input */}
              <div className="p-4 border-t border-border bg-gradient-to-r from-background to-primary/5">
                <div className="relative flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about projects, skills..."
                      className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:bg-background"
                    />
                    <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground/50 animate-pulse" />
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    disabled={!inputValue.trim() || isTyping}
                    className="h-12 w-12 rounded-xl hover-scale bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
