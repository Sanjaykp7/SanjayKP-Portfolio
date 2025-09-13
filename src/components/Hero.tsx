import { Download } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import profileImage from '@/assets/sanjay-profile.jpg';

const Hero = () => {
  const typingPhrases = [
    "Building Scalable Web Apps",
    "Java Backend Enthusiast", 
    "Passionate Fullstack Developer"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:order-2 flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-2 animate-float">
                <img 
                  src={profileImage} 
                  alt="Sanjay KP Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 animate-glow" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 text-center lg:text-left fade-in visible">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="neon-text">Sanjay KP</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-secondary font-medium">
                Fullstack Java Developer
              </h2>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <TypingAnimation 
                  phrases={typingPhrases}
                  className="text-xl md:text-2xl text-muted-foreground"
                />
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about creating efficient, scalable web applications using modern technologies. 
                Ready to bring fresh perspectives and dedication to your development team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="glass-card neon-glow px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-3 justify-center">
                  <Download size={24} />
                  Download Resume
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass-card neon-glow px-8 py-4 rounded-full text-lg font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;