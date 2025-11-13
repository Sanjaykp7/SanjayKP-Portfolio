import { GraduationCap, School, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Timeline } from '@/components/ui/timeline';

const Education = () => {
  const educationData = [
    {
      title: '2021 – 2025',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Bachelor of Engineering
              </h3>
              <h4 className="text-lg text-white font-semibold">
                Computer Science Engineering
              </h4>
            </div>
          </div>
          
          <p className="text-lg text-white">
            Srinivas Institute of Technology
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-secondary/10 text-white">
              CGPA: 7.3
            </Badge>
            <span className="text-sm text-white">Mangaluru, Karnataka, India</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-sm font-semibold text-white mb-3">
              Relevant Coursework:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Web Technologies', 'Software Engineering', 'Computer Networks'].map((course) => (
                <div 
                  key={course}
                  className="glass-card p-2 rounded-lg text-xs text-white transition-colors duration-300"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2019 – 2021',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <BookOpen size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                PUC
              </h3>
            </div>
          </div>
          
          <p className="text-lg text-white">
            Sri Siddeshwara PU College
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-secondary/10 text-white">
              77.5%
            </Badge>
            <span className="text-sm text-white">Davanagere, Karnataka, India</span>
          </div>
        </div>
      ),
    },
    {
      title: '2019',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <School size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                SSLC
              </h3>
            </div>
          </div>
          
          <p className="text-lg text-white">
            D.V.S English Medium School
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-secondary/10 text-white">
              83.20%
            </Badge>
            <span className="text-sm text-white">Chitradurga, Karnataka, India</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Education
          </h2>
          
          <Timeline data={educationData} />
        </div>
      </div>
    </section>
  );
};

export default Education;