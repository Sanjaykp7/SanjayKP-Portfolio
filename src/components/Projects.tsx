import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
              <CardContainer key={project.title} className="inter-var">
                <CardBody className="glass-card relative group/card w-auto sm:w-[30rem] h-auto rounded-3xl p-8 border border-primary/20">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-foreground"
                  >
                    {project.title}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-muted-foreground leading-relaxed mt-4 max-w-sm"
                  >
                    {project.description}
                  </CardItem>
                  
                  <CardItem translateZ="80" className="w-full mt-6">
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
                  </CardItem>
                  
                  <CardItem translateZ="100" className="w-full mt-6">
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
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;