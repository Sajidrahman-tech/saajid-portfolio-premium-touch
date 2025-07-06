import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-dark" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and interesting projects. 
            Let's connect and create something amazing together.
          </p>
        </div>

        <Card className="p-8 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently pursuing my Master's at Dalhousie University and looking for 
                exciting opportunities in full-stack development. Whether you have a project 
                in mind or just want to connect, I'd love to hear from you.
              </p>
              
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="text-foreground">Halifax, Nova Scotia, Canada</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Education</span>
                  <p className="text-foreground">Dalhousie University</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <p className="text-foreground">2+ Years Full Stack Development</p>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-accent">What I Can Help With</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full Stack Web Development</li>
                <li>• React & Node.js Applications</li>
                <li>• Database Design & Implementation</li>
                <li>• API Development & Integration</li>
                <li>• Performance Optimization</li>
                <li>• Code Review & Mentoring</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="premium" size="lg">
            Send Me an Email
          </Button>
          <Button variant="glass" size="lg">
            Schedule a Call
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-card hover:bg-gradient-card rounded-full transition-all duration-300 hover:shadow-glow hover:scale-110 group"
          >
            <Github className="w-7 h-7 group-hover:text-accent transition-colors duration-300" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-card hover:bg-gradient-card rounded-full transition-all duration-300 hover:shadow-gold hover:scale-110 group"
          >
            <Linkedin className="w-7 h-7 group-hover:text-accent transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;