import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Meeting Minutes Generator",
      description: "AI-powered meeting minutes generator with automated text extraction, vector search, and intelligent summarization. Built with AWS serverless architecture, React frontend, and RAG workflows for active learning.",
      technologies: ["React", "AWS", "HCL", "RAG", "Vector Search"],
      githubUrl: "https://github.com/Sajidrahman-tech/AI-Powered-Meeting-Minutes-Generator",
      liveUrl: null,
      featured: true
    },
    {
      title: "Cloud Chat Real-Time Messaging Platform",
      description: "A cloud-native, real-time messaging platform that enables secure, scalable, and low-latency chat between users. Built to demonstrate modern cloud architectures, serverless technologies, and event-driven design.",
      technologies: ["JavaScript", "Cloud Native", "WebSocket", "Serverless"],
      githubUrl: "https://github.com/Sajidrahman-tech/Cloud-Chat-Real-Time-Messaging-Platform",
      liveUrl: null,
      featured: true
    },
    {
      title: "E-Commerce Backend",
      description: "E-Commerce Pro is a cutting-edge, full-stack e-commerce solution designed to deliver exceptional shopping experiences. Built with modern technologies and enterprise-grade architecture.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "REST API"],
      githubUrl: "https://github.com/Sajidrahman-tech/E-COMMERCE-Backend",
      liveUrl: null,
      featured: false
    },
    {
      title: "Cloud Native Notes App",
      description: "A modern, serverless, and infinitely scalable note-taking application that harnesses the full power of AWS cloud services. Built with enterprise-grade architecture demonstrating cutting-edge cloud technologies.",
      technologies: ["HCL", "AWS", "Serverless", "Cloud Native"],
      githubUrl: "https://github.com/Sajidrahman-tech/Cloud-Native-Notes-App-",
      liveUrl: null,
      featured: false
    },
    {
      title: "Movie Ticket Booking System",
      description: "A modern, feature-rich movie ticket booking application that provides users with a seamless experience for discovering movies, selecting seats, and booking tickets online.",
      technologies: ["TypeScript", "React", "Node.js", "Database"],
      githubUrl: "https://github.com/Sajidrahman-tech/Movie-Ticket-Booking-System",
      liveUrl: null,
      featured: false
    },
    {
      title: "To-Do Application",
      description: "A clean, intuitive to-do application that helps you organize your tasks and boost productivity. Built with modern web technologies for a smooth user experience.",
      technologies: ["TypeScript", "React", "Local Storage", "PWA"],
      githubUrl: "https://github.com/Sajidrahman-tech/To-Do",
      liveUrl: null,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 px-6 bg-background" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group p-8 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-primary rounded-full transition-all duration-300 hover:shadow-glow"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    View Live
                  </Button>
                )}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    View Code
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-accent">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group p-6 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-secondary hover:bg-primary rounded-full transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    View Code
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="premium">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
