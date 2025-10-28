import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import profileImage from '@/assets/sanjay-profile.png';

const Hero = () => {
  const typingPhrases = [
    "Building Scalable Web Apps",
    "Java Backend Enthusiast", 
    "Passionate Fullstack Developer"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="lg:order-2 flex-shrink-0"
            variants={imageVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden glass-card p-2"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Sanjay KP Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold"
                variants={itemVariants}
              >
                <span className="neon-text">Sanjay KP</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-secondary font-medium"
                variants={itemVariants}
              >
                Fullstack Java Developer
              </motion.h2>
              
              <motion.div 
                className="h-16 flex items-center justify-center lg:justify-start"
                variants={itemVariants}
              >
                <TypingAnimation 
                  phrases={typingPhrases}
                  className="text-xl md:text-2xl text-muted-foreground"
                />
              </motion.div>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl"
                variants={itemVariants}
              >
                Passionate about creating efficient, scalable web applications using modern technologies. 
                Ready to bring fresh perspectives and dedication to your development team.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.a 
                  href="/Sanjay_KP_Java_Web_Dev.pdf" 
                  download="Sanjay_KP_Java_Web_Dev.pdf"
                  className="glass-card neon-glow px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-3 justify-center no-underline"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={24} />
                  Download Resume
                </motion.a>
                
                <motion.button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass-card neon-glow px-8 py-4 rounded-full text-lg font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;