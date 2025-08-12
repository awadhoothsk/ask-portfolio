import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-portfolio-accent" />,
      title: "Frontend Development",
      description: "React, TypeScript, CSS, HTML, Modern JavaScript"
    },
    {
      icon: <Palette className="h-8 w-8 text-portfolio-accent" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces and experiences"
    },
    {
      icon: <Rocket className="h-8 w-8 text-portfolio-accent" />,
      title: "Performance Optimization",
      description: "Building fast, efficient, and scalable web applications"
    },
    {
      icon: <Users className="h-8 w-8 text-portfolio-accent" />,
      title: "Team Collaboration",
      description: "Agile methodologies, version control, and effective communication"
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-portfolio-text mb-6">
              Hello! I'm a passionate developer
            </h2>
            <div className="space-y-4 text-lg text-portfolio-text-muted leading-relaxed">
              <p>
                I'm a dedicated full-stack developer with a passion for creating innovative 
                web solutions. My journey in tech started with curiosity and has evolved 
                into a deep love for building applications that make a difference.
              </p>
              <p>
                I specialize in React, TypeScript, and modern web technologies. I enjoy 
                the challenge of turning complex problems into simple, beautiful, and 
                intuitive solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </div>

          <div className="portfolio-card animate-scale-in">
            <h3 className="text-2xl font-bold text-portfolio-text mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Location:</span>
                <span className="text-portfolio-text">Your City, Country</span>
              </div>
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Experience:</span>
                <span className="text-portfolio-text">2+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Focus:</span>
                <span className="text-portfolio-text">Full-Stack Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Availability:</span>
                <span className="text-portfolio-accent">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h2 className="text-3xl font-bold text-portfolio-text text-center mb-12">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="portfolio-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                  {skill.title}
                </h3>
                <p className="text-portfolio-text-muted">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;