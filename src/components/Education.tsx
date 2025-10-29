import { GraduationCap, School, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: School,
      degree: 'SSLC',
      institution: 'D.V.S English Medium School',
      year: '2019',
      score: '83.20%',
      location: 'Chitradurga, Karnataka, India',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: BookOpen,
      degree: 'PUC',
      institution: 'Sri Siddeshwara PU College',
      year: '2019 – 2021',
      score: '77.5%',
      location: 'Davanagere, Karnataka, India',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: GraduationCap,
      degree: 'Bachelor of Engineering',
      field: 'Computer Science Engineering',
      institution: 'Srinivas Institute of Technology',
      year: '2021 – 2025',
      score: 'CGPA: 7.3',
      location: 'Mangaluru, Karnataka, India',
      gradient: 'from-primary to-secondary',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Web Technologies',
        'Software Engineering',
        'Computer Networks'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Education
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {educationData.map((edu, index) => {
                  const Icon = edu.icon;
                  const isLeft = index % 2 === 0;
                  
                  return (
                    <div key={edu.id} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-background"></div>
                      
                      {/* Content Card */}
                      <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="glass-card p-6 md:p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-300">
                          {/* Icon and Year */}
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-full flex items-center justify-center`}>
                              <Icon size={32} className="text-white" />
                            </div>
                            <Badge variant="secondary" className="text-sm font-semibold">
                              {edu.year}
                            </Badge>
                          </div>
                          
                          {/* Content */}
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </h3>
                          
                          {edu.field && (
                            <h4 className="text-lg text-primary font-semibold mb-3">
                              {edu.field}
                            </h4>
                          )}
                          
                          <p className="text-lg text-secondary mb-3">
                            {edu.institution}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-3">
                            <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-secondary/10">
                              {edu.score}
                            </Badge>
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          
                          {/* Coursework for BE */}
                          {edu.coursework && (
                            <div className="mt-6 pt-6 border-t border-border">
                              <h4 className="text-sm font-semibold text-secondary mb-3">
                                Relevant Coursework:
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {edu.coursework.map((course) => (
                                  <div 
                                    key={course}
                                    className="glass-card p-2 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                                  >
                                    {course}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;