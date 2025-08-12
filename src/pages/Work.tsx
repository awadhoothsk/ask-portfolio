import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Work: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Developed modern web applications using React, TypeScript, and Tailwind CSS. Collaborated with design team to implement pixel-perfect UIs and improved application performance by 40%.",
      achievements: [
        "Led development of company's main product dashboard",
        "Implemented automated testing reducing bugs by 60%",
        "Mentored 3 junior developers"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Jest", "GraphQL"]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2022 - 2023",
      description: "Built responsive websites and web applications for various clients. Worked closely with designers and backend developers to deliver high-quality digital experiences.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved website loading speeds by average of 50%",
        "Developed reusable component library"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "SASS", "WordPress"]
    },
    {
      title: "Web Development Intern",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2021 - 2022",
      description: "Assisted in building the company's MVP product. Gained hands-on experience with modern web development practices and agile methodologies.",
      achievements: [
        "Contributed to MVP that secured $500K in funding",
        "Implemented responsive design for mobile users",
        "Participated in daily standups and sprint planning"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Git"]
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-4xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">Work Experience</h1>
          <p className="section-subtitle">
            My professional journey and the impact I've made
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-accent/30 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-portfolio-bg hidden md:block"></div>

              {/* Experience Card */}
              <div className="md:ml-20 portfolio-card">
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-portfolio-text">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-portfolio-text-muted text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center text-portfolio-accent font-semibold mb-2">
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {exp.company}
                    </span>
                    <span className="flex items-center md:ml-4 text-portfolio-text-muted">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-portfolio-text-muted mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-portfolio-text mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start text-portfolio-text-muted"
                      >
                        <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-text mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
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

        {/* Call to Action */}
        <div className="text-center mt-16 portfolio-card animate-fade-in">
          <h2 className="text-3xl font-bold text-portfolio-text mb-4">
            Interested in working together?
          </h2>
          <p className="text-xl text-portfolio-text-muted mb-6">
            I'm always open to discussing new opportunities and exciting projects.
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