import React from 'react';
import {
  Brain,
  Server,
  Workflow,
  Mountain,
  BookOpen,
  Coffee,
  Cpu,
  Palette
} from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Systems & RAG",
      description:
        "Strong interest in designing AI-powered systems using semantic search and Retrieval-Augmented Generation (RAG). I enjoy integrating embeddings, vector databases, and LLMs into structured backend architectures.",
      projects: ["Semantic Search", "RAG Pipelines", "LLM Integration"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Architecture",
      description:
        "Focused on building scalable RESTful APIs using Node.js and ASP.NET Core. I prioritize clean architecture, modular design, and long-term maintainability.",
      projects: ["REST APIs", "Authentication Systems", "MVC Architecture"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Automation & AI Agents",
      description:
        "Exploring intelligent automation systems and AI-driven decision engines that improve productivity and workflow efficiency.",
      projects: ["Workflow Automation", "Decision Engines", "AI Agents"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "System Design",
      description:
        "Regularly practicing system design concepts, database modeling, and backend optimization to build applications that scale beyond MVP.",
      projects: ["Database Modeling", "Scalability Patterns", "Performance Tuning"]
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Travel & Exploration",
      description:
        "I enjoy exploring new places and environments. Travel helps me reset, gain broader perspectives, and approach problem-solving with creativity.",
      projects: ["Local Exploration", "Cultural Learning", "Nature Visits"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Continuous Learning",
      description:
        "Committed to structured learning through hands-on experimentation, technical reading, and consistent skill refinement in backend engineering and AI.",
      projects: ["C# Practice", "Advanced TypeScript", "Architecture Study"]
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-6xl mx-auto section-padding">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">Interests & Beyond Code</h1>
          <p className="section-subtitle">
            Areas I actively explore outside my core responsibilities
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="portfolio-card text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 text-portfolio-accent group-hover:scale-110 transition-transform duration-300">
                {interest.icon}
              </div>

              <h3 className="text-xl font-semibold text-portfolio-text mb-4">
                {interest.title}
              </h3>

              <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                {interest.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-portfolio-text">
                  Focus Areas:
                </h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  {interest.projects.map((project, projectIndex) => (
                    <span
                      key={projectIndex}
                      className="px-2 py-1 bg-portfolio-accent/10 text-portfolio-accent text-xs rounded-full"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy */}
        <div className="portfolio-card text-center mt-20 animate-fade-in">
          <h2 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center justify-center">
            <Coffee className="mr-3 h-8 w-8 text-portfolio-accent" />
            Engineering Philosophy
          </h2>

          <p className="text-lg text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
            I approach engineering with a systems mindset — prioritizing scalability,
            structured backend design, and intelligent integrations. I prefer building
            maintainable, production-ready solutions over short-term feature-driven
            implementations. My long-term focus is on working with complex backend
            systems where architecture and AI intersect at scale.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Interests;