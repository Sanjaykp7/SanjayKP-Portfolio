import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sanjaykps07@gmail.com',
      href: 'mailto:sanjaykps07@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6363164350',
      href: 'tel:+916363164350'
    },
    {
      icon: IconBrandLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanjay-kp7',
      href: 'https://www.linkedin.com/in/sanjay-kp7/'
    },
    {
      icon: IconBrandGithub,
      label: 'GitHub',
      value: 'github.com/Sanjaykp7',
      href: 'https://github.com/Sanjaykp7'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="section-title">
            Get In Touch
          </h2>
          
          <motion.div 
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                I'm actively seeking opportunities to start my career as a Fullstack Java Developer. 
                Feel free to reach out if you'd like to discuss potential collaborations or opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
            
            {/* Location */}
            <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-muted/30 border border-border">
              <MapPin size={20} className="text-primary" />
              <div className="text-center">
                <span className="text-foreground font-medium">Bangalore, Karnataka, India</span>
                <span className="text-muted-foreground mx-2">•</span>
                <span className="text-muted-foreground">Open to relocation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
