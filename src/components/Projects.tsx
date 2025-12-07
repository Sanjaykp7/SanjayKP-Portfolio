import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import freshbitesPreview from '@/assets/freshbites-preview.png';
import payrollPreview from '@/assets/payroll-preview.png';
import hotelBookingPreview from '@/assets/hotel-booking-preview.png';

const Projects = () => {
  const projects = [
    {
      title: 'FreshBites – Online Food Ordering Web Application',
      description: 'A full-stack food ordering web application using Java, JEE, JSP, Servlets, and DAO Design Pattern, enabling menu browsing, cart management, and secure checkout functionality with MVC architecture and Hibernate ORM.',
      technologies: ['Java', 'JEE', 'JSP', 'Servlets', 'Hibernate', 'MySQL', 'HTML/CSS'],
      features: [
        'Menu browsing & cart management',
        'User authentication & sessions',
        'Order checkout flow',
        'Profile management'
      ],
      image: freshbitesPreview,
      github: 'https://github.com/Sanjaykp7/FreshBites-FullStack'
    },
    {
      title: 'Payroll Management System',
      description: 'A Java-based application designed to automate payroll processes, calculate salaries, manage employee details, and generate reports efficiently.',
      technologies: ['Java', 'MySQL', 'Spring Boot', 'Hibernate'],
      features: [
        'Automated salary calculations',
        'Employee management',
        'Report generation',
        'Admin dashboard'
      ],
      image: payrollPreview
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
      ],
      image: hotelBookingPreview
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="section-title">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Project Preview Area */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-b border-border overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary/30">{project.title.charAt(0)}</span>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      <button className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* See More Button */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="btn-secondary">
              SEE MORE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
