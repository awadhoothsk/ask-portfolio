import React from 'react';
import { Code2, Camera, Music, Gamepad2, BookOpen, Coffee, Mountain, Palette } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Open Source",
      description: "Contributing to open source projects and building tools that help other developers. I believe in the power of community-driven development.",
      projects: ["React components library", "VS Code extensions", "CLI tools"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography",
      description: "Capturing moments and exploring the world through my lens. I enjoy both digital and film photography, especially landscape and street photography.",
      projects: ["Nature photography", "Urban exploration", "Portrait sessions"]
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music Production",
      description: "Creating electronic music and experimenting with different genres. I use Ableton Live and various synthesizers to craft unique sounds.",
      projects: ["Electronic beats", "Ambient soundscapes", "Collaborative tracks"]
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Game Development",
      description: "Building indie games in my spare time using Unity and JavaScript. I love creating interactive experiences and exploring game mechanics.",
      projects: ["2D platformers", "Web-based puzzles", "Mobile games"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learning",
      description: "Continuously expanding my knowledge through books, courses, and tutorials. Currently exploring AI/ML and blockchain technologies.",
      projects: ["Machine learning courses", "Blockchain development", "System design"]
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Hiking & Travel",
      description: "Exploring new places and challenging myself with outdoor adventures. Travel inspires my creativity and provides fresh perspectives.",
      projects: ["National park visits", "International travel", "Mountain climbing"]
    }
  ];

  const techBlogs = [
    {
      title: "Building Scalable React Applications",
      description: "Best practices for structuring large React projects",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Best Practices"]
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Each",
      description: "A comprehensive guide to modern CSS layout techniques",
      readTime: "6 min read",
      tags: ["CSS", "Layout", "Frontend"]
    },
    {
      title: "TypeScript Tips for Better Developer Experience",
      description: "Advanced TypeScript patterns that improve code quality",
      readTime: "10 min read",
      tags: ["TypeScript", "Development", "Tips"]
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">Interests & Hobbies</h1>
          <p className="section-subtitle">
            What I'm passionate about beyond coding
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
                  Current Projects:
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

        {/* Tech Blog Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-portfolio-text mb-4 flex items-center justify-center">
              <Palette className="mr-3 h-8 w-8 text-portfolio-accent" />
              Latest Blog Posts
            </h2>
            <p className="text-xl text-portfolio-text-muted">
              Sharing knowledge and insights from my development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {techBlogs.map((blog, index) => (
              <div
                key={index}
                className="portfolio-card group cursor-pointer"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-portfolio-text-muted mb-3">
                    {blog.description}
                  </p>
                  <div className="text-sm text-portfolio-text-muted mb-3">
                    {blog.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-portfolio-accent/10 text-portfolio-accent text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="hero-button group">
              <BookOpen className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Read More on Medium
            </button>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="portfolio-card text-center mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center justify-center">
            <Coffee className="mr-3 h-8 w-8 text-portfolio-accent" />
            Fun Facts About Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">500+</div>
              <div className="text-portfolio-text-muted">Cups of coffee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">15</div>
              <div className="text-portfolio-text-muted">Countries visited</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">3</div>
              <div className="text-portfolio-text-muted">Languages spoken</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">∞</div>
              <div className="text-portfolio-text-muted">Lines of code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;