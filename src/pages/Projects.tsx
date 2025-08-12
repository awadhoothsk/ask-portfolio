import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides detailed weather information, forecasts, and interactive maps using external APIs.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "API Integration", "Chart.js", "CSS Grid"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024"
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            A showcase of my work and the technologies I've mastered
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-portfolio-accent/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-portfolio-text-muted">Project Screenshot</span>
                </div>
                <div className="absolute inset-0 bg-portfolio-accent/0 group-hover:bg-portfolio-accent/10 transition-all duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-portfolio-text">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-portfolio-text-muted text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-portfolio-text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button
                    className="hero-button flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-portfolio-text mb-6">
            Want to see more?
          </h2>
          <p className="text-xl text-portfolio-text-muted mb-8">
            Check out my GitHub for more projects and contributions
          </p>
          <Button
            className="hero-button"
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            Visit My GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;