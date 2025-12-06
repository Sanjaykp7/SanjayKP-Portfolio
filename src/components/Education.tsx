import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      period: '2021 – 2025',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science Engineering',
      institution: 'Srinivas Institute of Technology',
      location: 'Mangaluru, Karnataka, India',
      grade: 'CGPA: 7.3',
      icon: GraduationCap,
      color: 'from-primary to-secondary',
      courses: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Web Technologies', 'Software Engineering', 'Computer Networks']
    },
    {
      period: '2019 – 2021',
      degree: 'PUC',
      institution: 'Sri Siddeshwara PU College',
      location: 'Davanagere, Karnataka, India',
      grade: '77.5%',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      period: '2019',
      degree: 'SSLC',
      institution: 'D.V.S English Medium School',
      location: 'Chitradurga, Karnataka, India',
      grade: '83.20%',
      icon: School,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="section-title">
            Education
          </h2>
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.period}
                className="glass-card p-6 md:p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                    <edu.icon size={28} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                    
                    {edu.field && (
                      <p className="text-lg text-primary font-medium">{edu.field}</p>
                    )}
                    
                    <p className="text-foreground font-medium">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    
                    {/* Courses */}
                    {edu.courses && (
                      <div className="pt-4 border-t border-border mt-4">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span 
                              key={course}
                              className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-lg"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
