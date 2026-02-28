import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const projects = [
  {
    title: "Second Brain – AI-Powered Knowledge Assistant",
    description:
      "A full-stack AI memory assistant built using Retrieval-Augmented Generation (RAG). Designed backend APIs, authentication, and semantic search pipeline integrating Mistral LLM with PostgreSQL and Prisma. Deployed with Docker and CI/CD pipelines.",
    technologies: [
      "Node.js",
      "Hono",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Mistral LLM",
      "Docker",
      "Azure"
    ],
    liveUrl: "https://secodbrain-www-qh4i.vercel.app/",
    githubUrl: "https://github.com/DeepQuart",
    date: "2025"
  },
  {
    title: "AI Email Intent Agent",
    description:
      "Designed and implemented an AI-driven email automation system that classifies incoming emails using LLM-based intent analysis. Built a decision engine to route emails by priority and trigger automated workflows including Google Sheets logging and Telegram notifications.",
    technologies: [
      "n8n",
      "LLM Integration",
      "Gmail API",
      "Workflow Automation",
      "Decision Engine",
      "JSON Parsing"
    ],
    githubUrl: "#",
    date: "2026"
  },
  {
    title: "HackerNews Full-Stack Web App",
    description:
      "Independently built and deployed a scalable web application to browse and interact with Hacker News stories in real time. Designed both frontend and backend including API integration, pagination, and performance optimization.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    liveUrl: "https://hackernews-www-eta.vercel.app",
    githubUrl: "https://github.com/awadhoothsk/hackernews-servers",
    date: "2025"
  },
  {
    title: "SQL-Based Management System",
    description:
      "Designed and implemented a database-driven management system using SQL. Built structured workflows for order processing, billing, and inventory tracking with optimized queries for efficient data handling.",
    technologies: [
      "SQL",
      "MySQL",
      "Database Design",
      "Query Optimization"
    ],
    githubUrl: "#",
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
  {project.liveUrl && (
    <Button
      className="hero-button flex-1"
      onClick={() => window.open(project.liveUrl, '_blank')}
    >
      <ExternalLink className="mr-2 h-4 w-4" />
      Live Demo
    </Button>
  )}

  {project.githubUrl && (
    <Button
      variant="outline"
      className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300"
      onClick={() => window.open(project.githubUrl, '_blank')}
    >
      <Github className="mr-2 h-4 w-4" />
      Code
    </Button>
  )}
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
            onClick={() => window.open('https://github.com/awadhoothsk', '_blank')}
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