import { Download, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import profileImage from '@/assets/sanjay-profile.png';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

const Hero = () => {
  const typingPhrases = [
    "Building Scalable Web Apps",
    "Java Backend Enthusiast", 
    "Passionate Fullstack Developer"
  ];

  const stats = [
    { label: 'Projects', value: '2+' },
    { label: 'Certifications', value: '4+' },
  ];

  const socialLinks = [
    { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/sanjay-kp7/', label: 'Li' },
    { icon: IconBrandGithub, href: 'https://github.com/Sanjaykp7', label: 'GH' },
    { icon: IconMail, href: 'mailto:sanjaykps07@gmail.com', label: 'Mail' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={profileImage} 
                    alt="Sanjay KP" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              {/* Name with social links */}
              <motion.div 
                className="flex flex-col lg:flex-row items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Sanjay KP
                </h1>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                  <a
                    href="/Sanjay_KP_Java_Web_Dev.pdf"
                    download
                    className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
                  >
                    View CV
                  </a>
                </div>
              </motion.div>

              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Hey, There!
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  I am <span className="text-foreground font-medium">Sanjay KP</span>, Fullstack Java Developer with a passion for creating impactful applications.
                </p>
              </motion.div>

              {/* Typing Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-8"
              >
                <TypingAnimation 
                  phrases={typingPhrases}
                  className="text-xl text-primary font-medium"
                />
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="flex justify-center lg:justify-start gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card min-w-[100px]">
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
