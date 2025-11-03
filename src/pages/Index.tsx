import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FloatingDock } from '@/components/ui/floating-dock';
import { 
  IconHome, 
  IconUser, 
  IconCode, 
  IconBriefcase, 
  IconSchool, 
  IconMail,
  IconFileText
} from '@tabler/icons-react';

const Index = () => {
  useScrollAnimation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-foreground" />,
      href: '#home',
    },
    {
      title: 'About',
      icon: <IconUser className="h-full w-full text-foreground" />,
      href: '#about',
    },
    {
      title: 'Skills',
      icon: <IconCode className="h-full w-full text-foreground" />,
      href: '#skills',
    },
    {
      title: 'Projects',
      icon: <IconBriefcase className="h-full w-full text-foreground" />,
      href: '#projects',
    },
    {
      title: 'Education',
      icon: <IconSchool className="h-full w-full text-foreground" />,
      href: '#education',
    },
    {
      title: 'Experience',
      icon: <IconBriefcase className="h-full w-full text-foreground" />,
      href: '#experience',
    },
    {
      title: 'Resume',
      icon: <IconFileText className="h-full w-full text-foreground" />,
      href: '/Sanjay_KP_Java_Web_Dev.pdf',
    },
    {
      title: 'Contact',
      icon: <IconMail className="h-full w-full text-foreground" />,
      href: '#contact',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      {/* Floating Dock */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={navItems} />
      </div>

      <Hero />
      
      <ParallaxSection offset={30}>
        <About />
      </ParallaxSection>
      
      <ParallaxSection offset={40}>
        <Skills />
      </ParallaxSection>
      
      <ParallaxSection offset={30}>
        <Projects />
      </ParallaxSection>
      
      <ParallaxSection offset={35}>
        <Education />
      </ParallaxSection>
      
      <ParallaxSection offset={35}>
        <Experience />
      </ParallaxSection>
      
      <ParallaxSection offset={25}>
        <Contact />
      </ParallaxSection>
      
      <Footer />
    </div>
  );
};

export default Index;
