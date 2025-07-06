import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  // Placeholder projects - can be easily replaced with real GitHub data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data visualization with charts, graphs, and real-time data updates using modern web technologies.",
      technologies: ["React", "D3.js", "Python", "Flask", "MySQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media application with user management, post creation, and social interactions functionality.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false
    },
    {
      title: "Mobile Expense Tracker",
      description: "React Native application for tracking personal expenses with budget management and spending analytics.",
      technologies: ["React Native", "Firebase", "Chart.js", "AsyncStorage"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, weather maps, and detailed meteorological data.",
      technologies: ["React", "OpenWeather API", "Mapbox", "PWA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
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
                <Button variant="outline" size="sm">
                  View Code
                </Button>
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
                
                <div className="flex flex-wrap gap-1">
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
