import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Honeypot system with GUI',
      description: 'A Python-based honeypot project designed to detect, log, and analyze unauthorized network access. This system integrates a user-friendly GUI to visualize attack logs in real time, making threat monitoring easier — even for non-technical users..',
      image: '🍯',
      technologies: ['python lib', 'Tcpdump, Wireshark', 'Tkinter / Flask', 'Log Management Tools'],
      demoLink: '#',
      githubLink: 'https://github.com/aravind044/Honeypot-system--GUI',
    },
    {
      title: 'Payment Using Facial Recognition and Fingerprint Authentication:',
      description: 'To develop a secure, cardless payment system using dual  biometric authentication (face + fingerprint) for fast, fraudresistant transactions ..',
      image: '👁️➡️🔋',
      technologies: ['Python-lib', 'Machine & Deep learining', 'MongoDB', 'Microcontroller'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'JARVIS.ai',
      description: 'JARVIS is a desktop voice assistant built using Python. It can respond to voice commands, search the internet, open websites, play music, take screenshots, store reminders, and more — all through speech..',
      image: '🌤️',
      technologies: ['Python', 'Machine Learning', 'LIB-functions', 'Speech Recognition'],
      demoLink: '#',
      githubLink: 'https://github.com/aravind044/Jaravis.ai',
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for social media management with data visualization and automated reporting.',
      image: '📊',
      technologies: ['Next.js', 'Python', 'D3.js', 'AWS'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="section-container bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            AI&ML, and Security enhancement in cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover bg-card rounded-xl p-8 group"
            >
              {/* Project Icon/Image */}
              <div className="text-6xl mb-6 text-center">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="heading-md text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-glow flex items-center text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-glow flex items-center text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;