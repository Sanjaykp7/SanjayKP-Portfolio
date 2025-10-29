import { Briefcase, Star, Target } from 'lucide-react';

const Experience = () => {
  const highlights = [
    'Fresh Computer Science Engineering graduate',
    'Strong foundation in Java development',
    'Hands-on experience with full-stack projects',
    'Eager to contribute to innovative solutions',
    'Quick learner with passion for technology'
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Tap Academy Training - FIRST */}
            <div className="glass-card p-8 md:p-12 rounded-3xl hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase size={40} className="text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Full Stack Java Developer Training – Tap Academy
              </h3>
              
              <p className="text-xl text-secondary mb-8 text-center">
                Bengaluru • 6-Month Intensive Program
              </p>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Mastered Core Java, Advanced Java (JDBC, Servlets, JSP), Spring, Hibernate, and MySQL</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Hands-on exposure to OOP, Collections, Multithreading, and Java 8 features</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Built full-stack projects with database integration and RESTful APIs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Gained experience in responsive UI development using HTML, CSS, and JavaScript</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Followed SDLC practices and participated in real-world style project building</p>
                </div>
              </div>
            </div>

            {/* Fresher - Open to Opportunities - SECOND */}
            <div className="glass-card p-8 md:p-12 rounded-3xl text-center hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase size={40} className="text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fresher - Open to Opportunities
              </h3>
              
              <p className="text-xl text-secondary mb-8">
                Ready to Start My Professional Journey
              </p>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                As a recent Computer Science Engineering graduate, I am excited to begin my career 
                in software development. I bring fresh perspectives, strong technical skills, and 
                an eagerness to learn and contribute to meaningful projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">What I Bring</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="glass-card p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Career Goals</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                      Develop enterprise-level applications
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                      Master modern development frameworks
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                      Contribute to open-source projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                      Build scalable web solutions
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass-card neon-glow px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
                >
                  Let's Connect & Discuss Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
