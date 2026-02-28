import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-portfolio-background border-t border-portfolio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-portfolio-text mb-4">Awadhooth Shrinivas Kulkarni</h3>
            <p className="text-portfolio-text-muted">
              Passionate about creating innovative web solutions and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-portfolio-text mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300">
                About
              </a>
              <a href="/projects" className="block text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300">
                Projects
              </a>
              <a href="/work" className="block text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300">
                Experience
              </a>
              <a href="/contact" className="block text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-portfolio-text mb-4">Get In Touch</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://github.com/awadhoothsk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/awadhoothsk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:awadhooths16@gmail.com"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-portfolio-text-muted">
              awadhooths16@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-portfolio-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-portfolio-text-muted">
              © 2025 Awadhooth Shrinivas Kulkarni. All rights reserved.
            </p>
            <p className="flex items-center text-sm text-portfolio-text-muted mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Awadhooth S K
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;