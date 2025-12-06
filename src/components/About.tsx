import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { value: 'Fresh', label: 'Graduate' },
    { value: '4+', label: 'Certifications' },
    { value: '2+', label: 'Projects' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="section-title">
            About Me
          </h2>
          
          <motion.div 
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
              I am a passionate <span className="text-foreground font-semibold">Fullstack Java Developer</span> with 
              strong skills in building modern, responsive, and efficient web applications. I specialize in both 
              front-end and back-end technologies, with expertise in{' '}
              <span className="text-primary font-semibold">
                HTML, CSS, JavaScript, Core Java, Advanced Java, MySQL, Spring, Spring Boot, and Hibernate
              </span>. 
              As a fresher, I am eager to apply my knowledge to real-world projects and contribute to 
              impactful software solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12">
              {highlights.map((item) => (
                <motion.div 
                  key={item.label}
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
