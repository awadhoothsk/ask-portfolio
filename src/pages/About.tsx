import React from 'react';
import { Code, Server, Brain, Database } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-portfolio-accent" />,
      title: "Frontend Development",
      description:
        "React.js, Next.js, Angular, TypeScript, Tailwind CSS — building responsive, scalable, and maintainable user interfaces."
    },
    {
      icon: <Server className="h-8 w-8 text-portfolio-accent" />,
      title: "Backend Engineering",
      description:
        "Node.js (Express, Hono), ASP.NET Core, RESTful APIs, Prisma ORM, MVC architecture, and secure authentication systems."
    },
    {
      icon: <Database className="h-8 w-8 text-portfolio-accent" />,
      title: "Databases & DevOps",
      description:
        "PostgreSQL, MongoDB, MySQL, SQL Server, Docker, Azure, and CI/CD pipelines using GitHub Actions."
    },
    {
      icon: <Brain className="h-8 w-8 text-portfolio-accent" />,
      title: "AI & Intelligent Systems",
      description:
        "Mistral LLM, Pinecone, Hugging Face embeddings, TensorFlow, and RAG-based semantic search pipelines."
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-6xl mx-auto section-padding">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            AI Full-Stack Developer | .NET Engineer | Backend & System Design Enthusiast
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-portfolio-text mb-6">
              Building Scalable, Intelligent Systems
            </h2>

            <div className="space-y-5 text-lg text-portfolio-text-muted leading-relaxed">
              <p>
                I design applications where strong backend architecture meets intelligent automation.
                My work spans building RESTful APIs with Node.js and ASP.NET Core, managing structured
                data with PostgreSQL and SQL Server, and developing responsive interfaces using React and TypeScript.
              </p>

              <p>
                I have contributed to AI-enabled platforms implementing semantic search and
                Retrieval-Augmented Generation (RAG) pipelines. My focus remains on clean
                architecture, performance optimization, secure authentication, and cloud-ready deployments
                using Docker and Azure.
              </p>

              <p>
                I approach engineering with a systems mindset — prioritizing scalability,
                maintainability, and long-term technical clarity over short-term feature-driven development.
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="portfolio-card animate-scale-in">
            <h3 className="text-2xl font-bold text-portfolio-text mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Location:</span>
                <span className="text-portfolio-text">Bengaluru, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Current Role:</span>
                <span className="text-portfolio-text">Graduate Engineer Trainee @ HCLTech</span>
              </div>
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Previous Role:</span>
                <span className="text-portfolio-text">Fullstack AI Developer Intern</span>
              </div>
              <div className="flex justify-between">
                <span className="text-portfolio-text-muted">Focus Areas:</span>
                <span className="text-portfolio-text">Full Stack Engineering, AI Integration, System Design</span>
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
            Technical Strengths
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