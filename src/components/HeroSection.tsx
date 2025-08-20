import { Github, Linkedin, Instagram, Download} from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aravind-prasana-a8p04042004a/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/aravind044', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/the.hacker__ap/', label: 'Instagram' },
  
  ];
 
  return (
    <section id="home" className="section-container gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading with Blinking Animation */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-inter text-muted-foreground">
              Hello, it's me
            </h2>
            <h1 className="heading-xl text-gradient blink">
              Aravind Prasana
            </h1>
            <p className="text-xl md:text-2xl font-inter text-foreground font-medium">
              Full-Stack Developer & Networking Enthusiast & cybersecurity Enthusiast
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <social.icon size={25} />
              </a>
            ))}
          </div>
<div className="pt-8 flex justify-center">
  <a
    href="https://drive.google.com/file/d/1sGim0eWedmGW7vaHdEVkET5K4o5t0Ugv/view?usp=drive_link"   // Ensure the resume file is in the "public" folder
   
  >
    <button className="btn-hero group flex items-center">
      <Download size={20} className="mr-2 group-hover:animate-bounce" />
      Download Resume
    </button>
  </a>
</div>


          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
