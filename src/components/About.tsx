import { Card } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      company: "Zoho Corporation",
      role: "Full Stack Developer",
      duration: "2022 - 2024",
      description: "Developed scalable web applications and contributed to enterprise-level solutions"
    },
    {
      company: "Mindtree",
      role: "Software Developer",
      duration: "2021 - 2022", 
      description: "Built responsive web interfaces and collaborated on cross-functional teams"
    }
  ];

  const skills = [
    "Java", "JavaScript", "TypeScript", "React", "Angular", "Node.js", "Express.js", "Python", 
    "Spring Boot", "Spring MVC", "Hibernate", "MongoDB", "PostgreSQL", "MySQL", 
    "AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "JUnit", "Git"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-dark" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full stack developer with a strong foundation in modern web technologies 
            and a commitment to creating exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <Card className="p-8 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-6 text-accent">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-foreground">Master's in Applied Computer Science</h4>
                <p className="text-muted-foreground">Dalhousie University, Halifax, Nova Scotia</p>
                <p className="text-sm text-accent">Currently Pursuing</p>
              </div>
            </div>
          </Card>

          {/* Experience Summary */}
          <Card className="p-8 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-6 text-accent">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium text-foreground">{exp.role}</h4>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills */}
        <Card className="p-8 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-6 text-accent text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;