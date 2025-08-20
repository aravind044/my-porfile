import webDevIcon from '@/assets/web-dev-icon.jpg';
import pcBuildIcon from '@/assets/pc-build-icon.jpg';
import networkIcon from '@/assets/network-icon.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: webDevIcon,
      title: 'Full-Stack Web Development',
      description: 'Complete web application development from frontend UI/UX to backend APIs and database design. Specialized in React, Node.js, and modern web technologies.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Cloud Deployment'],
      featured: true,
    },
    {
      icon: pcBuildIcon,
      title: 'PC Build Service',
      description: 'Professional custom PC building service for gaming, workstations, and specialized computing needs. From component selection to assembly and optimization.',
      features: ['Custom Gaming PCs', 'Workstation Builds', 'Performance Optimization', 'Technical Support'],
      featured: false,
    },
    {
      icon: networkIcon,
      title: 'Network Configuration',
      description: 'Professional LAN setup and network configuration services for homes and small businesses. Ensuring optimal connectivity and security.',
      features: ['LAN Setup', 'Network Security', 'Performance Optimization', 'Troubleshooting'],
      featured: false,
    },
  ];

  return (
    <section id="services" className="section-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At <span className="text-primary font-semibold">Netspark</span>, we provide comprehensive 
            technology solutions tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.featured ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/20">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            

              {/* Service Content */}
              <div className="text-center space-y-4">
                <h3 className={`heading-md ${service.featured ? 'text-primary' : 'text-foreground'}`}>
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Contact Button */}
                <div className="pt-6">
                  <button className={service.featured ? 'btn-hero' : 'btn-outline-glow'}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center mt-16 p-8 bg-card rounded-xl border border-border">
          <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">Netspark</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for innovative technology solutions. We combine cutting-edge development 
            practices with reliable hardware and network services to deliver comprehensive digital solutions 
            for individuals and businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
