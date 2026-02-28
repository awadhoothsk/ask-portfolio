import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Work: React.FC = () => {
  const experiences = [
  {
    title: "Graduate Engineer Trainee",
    company: "HCLTech",
    location: "Bengaluru, India",
    period: "October 2025 – Present",
    description:
      "Working as a .NET Full Stack Engineer contributing to enterprise-grade application development using ASP.NET Core and Angular, with focus on scalable backend systems and structured architecture.",
    achievements: [
      "Developing RESTful APIs using ASP.NET Core (C#) integrated with SQL Server",
      "Applying MVC and layered architecture for scalable enterprise systems",
      "Improving performance through structured debugging and optimization",
      "Strengthening the understanding of API security and enterprise application lifecycle management"
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "Angular",
      "SQL Server",
      "REST APIs",
      "MVC Architecture"
    ]
  },
  {
    title: "Scholar",
    company: "HCLTech",
    location: "Chennai, India",
    period: "June 2025 – October 2025",
    description:
      "Completed intensive full-stack training focused on enterprise application development using .NET technologies, database integration, and structured software engineering practices.",
    achievements: [
      "Built full-stack applications using ASP.NET Core backend with Angular frontend",
      "Integrated SQL Server with backend APIs for structured data workflows",
      "Practiced enterprise debugging, deployment pipelines, and MVC architecture patterns",
      "Gained exposure to RESTful API development and database design"
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "Angular",
      "SQL Server",
      "REST APIs"
    ]
  },
  {
    title: "Fullstack AI Developer Intern",
    company: "Stack Lane (Purpleshorts Technologies Pvt Ltd)",
    location: "Hybrid",
    period: "March 2025 – June 2025",
    description:
      "Worked on AI-enabled full-stack web platforms integrating backend engineering with semantic search and RAG pipelines in production-ready environments.",
    achievements: [
      "Engineered secure REST APIs using Node.js, Hono, Prisma, and PostgreSQL",
      "Implemented JWT-based authentication for secure session management",
      "Designed semantic search and RAG pipelines using Mistral and Pinecone",
      "Automated deployments using Docker, Azure, and GitHub Actions",
      "Built responsive UIs with React, TypeScript, and Tailwind CSS"
    ],
    technologies: [
      "Node.js",
      "Hono",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "React",
      "Mistral",
      "Pinecone",
      "Docker",
      "Azure"
    ]
  }
];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-4xl mx-auto section-padding">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Work Experience</h1>
          <p className="section-subtitle">
            Enterprise engineering and AI-driven system development
          </p>
        </div>

        {/* Modern Timeline */}
        <div className="relative border-l-2 border-portfolio-accent/30 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10">

              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-portfolio-bg"></div>

              {/* Card */}
              <div className="portfolio-card">

                {/* Title + Date */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <h3 className="text-2xl font-bold text-portfolio-text">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-portfolio-text-muted text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>

                {/* Company + Location */}
                <div className="flex flex-col md:flex-row md:items-center text-portfolio-accent font-semibold mb-4">
                  <span className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {exp.company}
                  </span>
                  <span className="flex items-center md:ml-6 text-portfolio-text-muted">
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-portfolio-text-muted mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-portfolio-text mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start text-portfolio-text-muted">
                        <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-text mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 portfolio-card">
          <h2 className="text-3xl font-bold text-portfolio-text mb-4">
            Open to Backend & AI-Integrated Roles
          </h2>
          <p className="text-xl text-portfolio-text-muted mb-6">
            Interested in building scalable systems and intelligent applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="hero-button inline-flex items-center justify-center"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;