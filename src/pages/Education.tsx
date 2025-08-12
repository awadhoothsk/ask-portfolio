import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
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
      degree: "High School Diploma",
      institution: "Tech Prep High School",
      location: "San Francisco, CA",
      period: "2014 - 2018",
      gpa: "3.9/4.0",
      description: "Graduated with honors. Participated in computer science competitions and led the programming club.",
      courses: [
        "AP Computer Science",
        "AP Mathematics",
        "Physics",
        "Chemistry"
      ]
    }
  ];

  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "ABC123XYZ"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "DEF456UVW"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2022",
      credentialId: "GHI789RST"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List recognition for 6 consecutive semesters",
      year: "2019-2022"
    },
    {
      title: "Hackathon Winner",
      description: "1st place in University Tech Hackathon for web application development",
      year: "2021"
    },
    {
      title: "Programming Club President",
      description: "Led a team of 30+ students and organized coding workshops",
      year: "2020-2021"
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
                Academic Achievements
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
                    <div className="text-portfolio-text-muted text-xs">
                      ID: {cert.credentialId}
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
                  { skill: "JavaScript/TypeScript", level: 90 },
                  { skill: "React", level: 85 },
                  { skill: "CSS/Tailwind", level: 80 },
                  { skill: "Node.js", level: 75 },
                  { skill: "Python", level: 70 }
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