import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Profile', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Interests', path: '/interests' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-portfolio-surface/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-portfolio-accent hover:text-portfolio-accent-hover transition-colors duration-300"
          >
            Awadhooth S K
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 border-portfolio-accent/20 hover:bg-portfolio-accent/10"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-portfolio-accent" />
              ) : (
                <Moon className="h-4 w-4 text-portfolio-accent" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden p-2 border-portfolio-accent/20 hover:bg-portfolio-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 text-portfolio-accent" />
              ) : (
                <Menu className="h-4 w-4 text-portfolio-accent" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-portfolio-surface/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link py-2 ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;