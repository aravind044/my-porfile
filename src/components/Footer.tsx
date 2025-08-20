import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aravind-prasana-a8p04042004a/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/aravind044', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/the.hacker__ap/', label: 'Instagram' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-orbitron font-bold text-2xl text-gradient">
              Your Portfolio
            </div>
            <p className="text-muted-foreground">
              Full-Stack Developer & Networking & cybersecurity Enthusiast passionate about creating innovative digital solutions 
              and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Full-Stack Web Development</li>
              <li>Custom PC Building</li>
              <li>Network Configuration</li>
              <li>Technical Consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Your Name. All rights reserved.
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              Made with <Heart className="text-red-500 mx-2" size={16} /> by Netspark
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;