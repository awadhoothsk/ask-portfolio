import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Your City, Country",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Let's discuss your project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-portfolio-text mb-6">
                Let's start a conversation
              </h2>
              <p className="text-lg text-portfolio-text-muted leading-relaxed mb-8">
                I'm always interested in new opportunities, whether that's a job, 
                freelance project, or just a chat about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-portfolio-accent">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-portfolio-text font-semibold">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-portfolio-text-muted">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-portfolio-text mb-4">
                Connect with me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-portfolio-surface rounded-lg text-portfolio-text-muted ${social.color} transition-all duration-300 hover:transform hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="portfolio-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-portfolio-text font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-portfolio-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-portfolio-text font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-portfolio-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-portfolio-text font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-portfolio-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-portfolio-text font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-portfolio-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent text-portfolio-text resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button type="submit" className="hero-button w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;