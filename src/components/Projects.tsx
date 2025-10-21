

const Projects = () => {
  const projects = [
    {
      title: 'Payroll Management System',
      description: 'A Java-based application designed to automate payroll processes, calculate salaries, manage employee details, and generate reports efficiently.',
      technologies: ['Java', 'MySQL', 'Spring Boot', 'Hibernate'],
      features: [
        'Automated salary calculations',
        'Employee management',
        'Report generation',
        'Admin dashboard'
      ]
    },
    {
      title: 'Hotel Booking Management System',
      description: 'A full-stack project that allows customers to book hotels online, manage reservations, and provides admin functionalities for hotel management.',
      technologies: ['Java', 'JavaScript', 'MySQL', 'Spring', 'HTML/CSS'],
      features: [
        'Online booking system',
        'Reservation management', 
        'Admin panel',
        'Customer portal'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-sm text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;