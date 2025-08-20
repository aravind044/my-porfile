import profileImage from '@/assets/image.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
              />
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 lg:pl-8">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a final-year Computer Science Engineering student at E.G.S. Pillay Engineering College, passionate in Python programming,I have hands-on experience with tools like Git, VS Code, and networking protocols and in cybersecurity 
                concepts. My skills include web development with React, Node.js, and Express, as well as database management with MongoDB and MySQL.
              </p>
              <p>
                My journey in technology extends beyond just coding. I'm dedicated to understanding 
                business needs and translating them into innovative technical solutions. I believe 
                in continuous learning and staying updated with the latest industry trends.
              </p>
          
            </div>

            {/* Skills or Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-primary">4 -Year</div>
                <div className="text-muted-foreground"> student</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-primary">6+</div>
                <div className="text-muted-foreground">Projects Completed 4-offically in college & 2-Network service</div>
              </div>
            </div>

            <div className="pt-6">
              <button className="btn-outline-glow">
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;