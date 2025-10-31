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
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  NavbarLogo, 
  NavbarButton, 
  MobileNavHeader, 
  MobileNavToggle, 
  MobileNavMenu 
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';

const Index = () => {
  useScrollAnimation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Education', link: '#education' },
    { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      {/* Resizable Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton 
              as="a" 
              href="/Sanjay_KP_Java_Web_Dev.pdf" 
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </NavbarButton>
            <NavbarButton 
              as="a" 
              href="#contact" 
              variant="primary"
            >
              Get In Touch
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors w-full"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3 pt-2">
              <NavbarButton
                as="a"
                href="/Sanjay_KP_Java_Web_Dev.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </NavbarButton>
              <NavbarButton
                as="a"
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get In Touch
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

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
