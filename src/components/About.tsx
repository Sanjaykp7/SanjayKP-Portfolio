const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground">
                I am a passionate <span className="text-primary font-semibold">Fullstack Java Developer</span> with 
                strong skills in building modern, responsive, and efficient web applications. I specialize in both 
                front-end and back-end technologies, with expertise in{' '}
                <span className="text-secondary font-semibold">
                  HTML, CSS, JavaScript, Core Java, Advanced Java, MySQL, Spring, Spring Boot, and Hibernate
                </span>. 
                As a fresher, I am eager to apply my knowledge to real-world projects and contribute to 
                impactful software solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold neon-text mb-2">Fresh</div>
                  <div className="text-muted-foreground">Graduate</div>
                </div>
                
                <div className="text-center glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold neon-text mb-2">6+</div>
                  <div className="text-muted-foreground">Certifications</div>
                </div>
                
                <div className="text-center glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold neon-text mb-2">2+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;