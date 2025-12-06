import { motion } from 'framer-motion';
import certWebProgramming from '@/assets/cert-web-programming.jpg';
import certJavaScript from '@/assets/cert-javascript.png';
import certSQL from '@/assets/cert-sql.jpg';
import certFullStack from '@/assets/cert-fullstack.jpg';

const Skills = () => {
  const skills = [
    { name: 'HTML', logo: '/logos/html5.svg' },
    { name: 'CSS', logo: '/logos/css3.svg' },
    { name: 'JavaScript', logo: '/logos/javascript.svg' },
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Java', logo: '/logos/java.svg' },
    { name: 'Spring', logo: '/logos/spring.svg' },
    { name: 'Hibernate', logo: '/logos/hibernate.svg' },
    { name: 'MySQL', logo: '/logos/mysql.svg' },
  ];

  const certifications = [
    {
      title: 'Web Programming',
      provider: 'Ethnotech Academic Solutions',
      year: '2023',
      image: certWebProgramming
    },
    {
      title: 'Fundamentals of JavaScript',
      provider: 'IBM Developer Skills Network',
      year: '2025',
      image: certJavaScript
    },
    {
      title: 'SQL and Relational Databases 101',
      provider: 'IBM Developer Skills Network',
      year: '2025',
      image: certSQL
    },
    {
      title: 'Full Stack Developer',
      provider: 'Samagra Technologies',
      year: '2025',
      image: certFullStack
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="section-title">
            Technologies & Framework
          </h2>
          
          {/* Skills Grid */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-badge"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src.endsWith('/logos/placeholder.svg')) return;
                    target.src = '/logos/placeholder.svg';
                  }}
                />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.title}
                className="glass-card overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h4 className="font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                  <p className="text-sm text-primary font-medium">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
