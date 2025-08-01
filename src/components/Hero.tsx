import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-30 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-gold rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-purple rounded-full blur-lg opacity-40 animate-float" style={{ animationDelay: '-4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
            Mohamed Saajid
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-accent">
            Abdul Rahman
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer with 2+ years of experience crafting exceptional digital experiences. 
            Currently pursuing Master's in Applied Computer Science at Dalhousie University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button variant="glass" size="lg">
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-gradient-card rounded-full transition-all duration-300 hover:shadow-glow hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-sajid-9a681021a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-gradient-card rounded-full transition-all duration-300 hover:shadow-gold hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;