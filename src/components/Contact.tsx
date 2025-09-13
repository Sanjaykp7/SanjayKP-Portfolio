import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

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
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanjay-kp7',
      href: 'https://www.linkedin.com/in/sanjay-kp7/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Sanjaykp7',
      href: 'https://github.com/Sanjaykp7'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Get In Touch
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm actively seeking opportunities to start my career as a Fullstack Java Developer. 
                    Feel free to reach out if you'd like to discuss potential collaborations or opportunities.
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center group hover:scale-105 transition-transform duration-300"
                        >
                          <div className="contact-icon mr-4">
                            <IconComponent size={24} />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{contact.label}</div>
                            <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                              {contact.value}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-2xl text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Karnataka, India</p>
                  <p className="text-sm text-muted-foreground mt-2">Open to relocation</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full glass-card neon-glow px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300"
                  >
                    <Send size={24} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;