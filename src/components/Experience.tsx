import { motion } from 'framer-motion';
import { Briefcase, Star, Target } from 'lucide-react';

const Experience = () => {
  const highlights = [
    'Fresh Computer Science Engineering graduate',
    'Strong foundation in Java development',
    'Hands-on experience with full-stack projects',
    'Eager to contribute to innovative solutions',
    'Quick learner with passion for technology'
  ];

  const trainingPoints = [
    'Mastered Core Java, Advanced Java (JDBC, Servlets, JSP), Spring, Hibernate, and MySQL',
    'Hands-on exposure to OOP, Collections, Multithreading, and Java 8 features',
    'Built full-stack projects with database integration and RESTful APIs',
    'Gained experience in responsive UI development using HTML, CSS, and JavaScript',
    'Followed SDLC practices and participated in real-world style project building'
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="section-title">
            Experience
          </h2>
          
          <div className="space-y-6">
            {/* Tap Academy Training */}
            <motion.div
              className="glass-card p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Briefcase size={28} className="text-white" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      Full Stack Java Developer Training
                    </h3>
                    <p className="text-primary font-medium">Tap Academy • Bengaluru</p>
                    <p className="text-sm text-muted-foreground">6-Month Intensive Program</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {trainingPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Fresher Card */}
            <motion.div
              className="glass-card p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Fresher - Open to Opportunities
                </h3>
                <p className="text-primary font-medium mt-2">
                  Ready to Start My Professional Journey
                </p>
              </div>
              
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                As a recent Computer Science Engineering graduate, I am excited to begin my career 
                in software development. I bring fresh perspectives, strong technical skills, and 
                an eagerness to learn and contribute to meaningful projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* What I Bring */}
                <div className="glass-card p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Star size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">What I Bring</h4>
                  </div>
                  <ul className="space-y-2">
                    {highlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Career Goals */}
                <div className="glass-card p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Target size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Career Goals</h4>
                  </div>
                  <ul className="space-y-2">
                    {['Develop enterprise-level applications', 'Master modern development frameworks', 'Contribute to open-source projects', 'Build scalable web solutions'].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Let's Connect & Discuss Opportunities
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
