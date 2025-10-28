import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', category: 'Frontend', level: 90, icon: '🎨' },
    { name: 'CSS', category: 'Frontend', level: 85, icon: '💅' },
    { name: 'JavaScript', category: 'Frontend', level: 88, icon: '⚡' },
    { name: 'React JS', category: 'Frontend', level: 82, icon: '⚛️' },
    { name: 'Core Java', category: 'Backend', level: 90, icon: '☕' },
    { name: 'Advanced Java', category: 'Backend', level: 85, icon: '🚀' },
    { name: 'APIs', category: 'Backend', level: 80, icon: '🔌' },
    { name: 'MySQL', category: 'Database', level: 88, icon: '🗄️' },
    { name: 'Spring', category: 'Framework', level: 85, icon: '🍃' },
    { name: 'Spring Boot', category: 'Framework', level: 90, icon: '⚙️' },
    { name: 'Hibernate', category: 'Framework', level: 82, icon: '🔧' }
  ];

  const certifications = [
    {
      title: 'Full Stack Developer',
      provider: 'Samagra Technologies',
      icon: '🎓'
    },
    {
      title: 'Web Programming',
      provider: 'Ethnotech Academic Solutions',
      icon: '💻'
    },
    {
      title: 'Fundamentals of JavaScript',
      provider: 'IBM Developer Skills Network',
      icon: '📜'
    },
    {
      title: 'SQL and Relational Databases 101',
      provider: 'IBM Developer Skills Network',
      icon: '🗂️'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'from-blue-500 to-cyan-500';
      case 'Backend': return 'from-purple-500 to-pink-500';
      case 'Database': return 'from-green-500 to-emerald-500';
      case 'Framework': return 'from-orange-500 to-red-500';
      default: return 'from-primary to-secondary';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          className="fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Skills & Certifications
          </motion.h2>
          
          {/* Skills Grid */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-semibold text-center mb-12 text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Technical Skills
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="glass-card p-8 rounded-3xl group relative overflow-hidden"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Gradient Effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon and Name */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="text-5xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{skill.category}</p>
                      </div>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-semibold text-secondary">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Grid */}
          <div>
            <motion.h3 
              className="text-2xl font-semibold text-center mb-12 text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Certifications
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.title}
                  className="glass-card p-8 rounded-3xl group relative overflow-hidden cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="text-6xl mb-6"
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      transition={{ duration: 0.4 }}
                    >
                      {cert.icon}
                    </motion.div>
                    
                    {/* Animated Gradient Line */}
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-6"
                      initial={{ scaleX: 1 }}
                      whileHover={{ scaleX: 1.1 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Content */}
                    <h4 className="font-bold text-lg text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium">{cert.provider}</p>
                    
                    {/* Verification Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      Verified
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
