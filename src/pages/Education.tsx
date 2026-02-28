import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Siddaganga Institute of Technology",
      location: "Tumkur, Karnataka",
      period: "2021 - 2025",
      gpa: "8.46/10.0",
      description: "Focused on software engineering, web development, and data structures. Completed multiple projects involving full-stack development and machine learning.",
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Machine Learning"
      ]
    },
    {
    degree: "Pre-University Course (PCMB)",
    institution: "Sri Sathya Sai Loka Seva PU College",
    location: "Alike, Karnataka, India",
    period: "2020",
    gpa: "90.3%",
    description:
      "Completed Pre-University education with Physics, Chemistry, Mathematics, and Biology (PCMB), building strong analytical and problem-solving foundations.",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology"
    ]
  },
  {
    degree: "CBSE (10th Grade)",
    institution: "Sri Sathya Sai Loka Seva Vidyakendra",
    location: "Alike, Karnataka, India",
    period: "2018",
    gpa: "82.2%",
    description:
      "Completed secondary education under CBSE curriculum with a strong academic foundation in science and mathematics.",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Kannada"
    ]
  }
  ];

  const certifications = [
  {
    title: "Cyber Security Course",
    issuer: "Cisco Networking Academy",
    date: "2024",
  },
  {
    title: "STEP English Program",
    issuer: "The Hindu Group",
    date: "2022",
  },
  {
    title: "GDC FieldOps Cadet Training",
    issuer: "GDC Training Program",
    date: "2023",
  }
];

  const achievements = [
  {
    title: "Fullstack AI Developer Internship",
    description:
      "Worked on AI-integrated production systems including a RAG-based semantic search platform (Second Brain).",
    year: "2025"
  },
  {
    title: "HackerNews Full-Stack Application",
    description:
      "Independently built and deployed a scalable real-time web application with complete frontend and backend architecture.",
    year: "2025"
  },
  {
    title: ".NET Full Stack Training",
    description:
      "Completed enterprise-focused training on C#, ASP.NET Core, SQL Server, MVC architecture, and RESTful APIs at HCL Technologies.",
    year: "2025"
  }
];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">Education</h1>
          <p className="section-subtitle">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center">
                <GraduationCap className="mr-3 h-8 w-8 text-portfolio-accent" />
                Formal Education
              </h2>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="portfolio-card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-portfolio-text">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-portfolio-text-muted text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="text-portfolio-accent font-semibold mb-2">
                      {edu.institution} • {edu.location}
                    </div>

                    <div className="text-portfolio-text-muted mb-4">
                      GPA: {edu.gpa}
                    </div>

                    <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-portfolio-text mb-3">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center">
                <Award className="mr-3 h-8 w-8 text-portfolio-accent" />
                Professional Highlights
              </h2>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="portfolio-card">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-portfolio-text mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-portfolio-text-muted">
                          {achievement.description}
                        </p>
                      </div>
                      <span className="text-portfolio-accent font-semibold text-sm ml-4">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div className="space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-portfolio-text mb-6 flex items-center">
                <BookOpen className="mr-3 h-6 w-6 text-portfolio-accent" />
                Certifications
              </h2>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="portfolio-card">
                    <h3 className="text-lg font-semibold text-portfolio-text mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-portfolio-accent font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <div className="text-portfolio-text-muted text-sm mb-2">
                      Issued: {cert.date}
                    </div>
                   
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-portfolio-text mb-6">
                Skill Proficiency
              </h2>

              <div className="portfolio-card space-y-4">
                {[
  { skill: "C# / ASP.NET Core", level: 85 },
  { skill: "Node.js (Express / Hono)", level: 85 },
  { skill: "React / TypeScript", level: 80 },
  { skill: "PostgreSQL / SQL Server", level: 80 },
  { skill: "Docker / Azure", level: 70 }
].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-portfolio-text font-medium">
                        {item.skill}
                      </span>
                      <span className="text-portfolio-text-muted text-sm">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-portfolio-surface rounded-full h-2">
                      <div
                        className="bg-portfolio-accent h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${item.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;