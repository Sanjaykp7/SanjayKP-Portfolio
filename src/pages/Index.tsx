import { motion, useScroll, useSpring } from 'framer-motion';
import Navigation from '@/components/Navigation';
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

const Index = () => {
  useScrollAnimation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navigation />
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
