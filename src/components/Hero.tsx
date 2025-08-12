import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import profileImage from '@/assets/profile-image.jpg';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center animated-bg section-padding">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover profile-glow float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-portfolio-accent/20 to-transparent"></div>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="section-title text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-portfolio-accent to-blue-500 bg-clip-text text-transparent">
          Your Name Here
        </h1>
        
        <p className="section-subtitle text-2xl md:text-3xl mb-8">
          Aspiring FullStack Developer | Tech Enthusiast
        </p>

        <p className="text-lg md:text-xl text-portfolio-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative web solutions and exploring cutting-edge technologies. 
          Always eager to learn, build, and contribute to meaningful projects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="hero-button group">
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            View My Resume
          </Button>
          
          <Button 
            variant="outline"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300"
            onClick={() => navigate('/about')}
          >
            Learn More About Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;