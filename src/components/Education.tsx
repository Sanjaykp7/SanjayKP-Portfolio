import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <GraduationCap size={40} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Bachelor of Engineering
                  </h3>
                  <h4 className="text-xl text-primary font-semibold mb-4">
                    Computer Science Engineering
                  </h4>
                  <p className="text-lg text-secondary mb-4">
                    Srinivas Institute of Technology
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={20} />
                      <span>2021-2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={20} />
                      <span>Karnataka, India</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold text-secondary mb-4 text-center md:text-left">
                  Relevant Coursework:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming',
                    'Database Management Systems',
                    'Web Technologies',
                    'Software Engineering',
                    'Computer Networks'
                  ].map((course, index) => (
                    <div 
                      key={course}
                      className="glass-card p-3 rounded-lg text-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;