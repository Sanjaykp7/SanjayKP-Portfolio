const Skills = () => {
  const skills = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React JS', category: 'Frontend' },
    { name: 'Core Java', category: 'Backend' },
    { name: 'Advanced Java', category: 'Backend' },
    { name: 'APIs', category: 'Backend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Spring', category: 'Framework' },
    { name: 'Spring Boot', category: 'Framework' },
    { name: 'Hibernate', category: 'Framework' }
  ];

  const certifications = [
    {
      title: 'Full Stack Developer',
      provider: 'Samagra Technologies'
    },
    {
      title: 'Azure AI Fundamentals',
      provider: 'Microsoft'
    },
    {
      title: 'Web Programming',
      provider: 'Ethnotech Academic Solutions'
    },
    {
      title: 'Fundamentals of JavaScript',
      provider: 'IBM Developer Skills Network'
    },
    {
      title: 'SQL and Relational Databases 101',
      provider: 'IBM Developer Skills Network'
    },
    {
      title: 'MySQL HeatWave Implementation Associate',
      provider: 'Oracle'
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
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} flex items-center justify-center text-white font-bold text-lg`}>
                    {skill.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
                  <h4 className="font-semibold text-foreground mb-2 leading-tight">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.provider}</p>
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