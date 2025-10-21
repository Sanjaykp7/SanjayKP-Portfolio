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
      title: 'Azure AI Fundamentals',
      provider: 'Microsoft',
      icon: '☁️'
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
    },
    {
      title: 'MySQL HeatWave Implementation Associate',
      provider: 'Oracle',
      icon: '🔥'
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

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Skills & Certifications
          </h2>
          
          {/* Skills Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-12 text-secondary">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="glass-card p-8 rounded-3xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon and Name */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`text-5xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
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
                        <div 
                          className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-12 text-secondary">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="glass-card p-8 rounded-3xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {cert.icon}
                    </div>
                    
                    {/* Animated Gradient Line */}
                    <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-6 transform origin-left group-hover:scale-x-110 transition-transform duration-500"></div>
                    
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;