import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import GlitchText from "@/components/GlitchText";
import HolographicCard from "@/components/HolographicCard";
import GlowingButton from "@/components/GlowingButton";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond soon!",
      variant: "default",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    { name: "Twitter", icon: "fab fa-twitter", color: "bg-[#1DA1F2]/20 border-[#1DA1F2]/50", textColor: "text-[#1DA1F2]", url: "#" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", color: "bg-[#0077B5]/20 border-[#0077B5]/50", textColor: "text-[#0077B5]", url: "#" },
    { name: "Discord", icon: "fab fa-discord", color: "bg-[#7289DA]/20 border-[#7289DA]/50", textColor: "text-[#7289DA]", url: "#" },
    { name: "GitHub", icon: "fab fa-github", color: "bg-gray-500/20 border-gray-500/50", textColor: "text-gray-400", url: "#" }
  ];

  return (
    <section id="contact" className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GlitchText 
            text="CONNECT" 
            coloredText="WITH US"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl max-w-3xl mx-auto text-cyber-gray">
            Have questions about your career path? Ready to synchronize your future? Reach out to our neural network.
          </p>
        </div>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact form */}
          <motion.div variants={itemVariants} className="lg:w-2/3">
            <HolographicCard>
              <h3 className="font-orbitron text-2xl mb-6 text-white">Send a <span className="text-neon-cyan">Message</span></h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      {...register("name")}
                      className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-neon-red text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      {...register("email")}
                      className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-neon-red text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    {...register("subject")}
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-neon-red text-sm">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    {...register("message")}
                    rows={6}
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    placeholder="Enter your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-neon-red text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <GlowingButton 
                  type="submit" 
                  className="w-full py-4"
                  color="pink"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SENDING...
                    </div>
                  ) : "SEND MESSAGE"}
                </GlowingButton>
              </form>
            </HolographicCard>
          </motion.div>
          
          {/* Info section */}
          <motion.div variants={itemVariants} className="lg:w-1/3 space-y-6">
            {/* Connect section */}
            <HolographicCard borderColor="pink">
              <h3 className="font-orbitron text-2xl mb-6 text-white">Connect <span className="text-neon-pink">Directly</span></h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyber-dark/70 border border-neon-pink/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-envelope text-neon-pink"></i>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-white mb-1">Email Us</h4>
                    <p className="text-cyber-gray">contact@careersync.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyber-dark/70 border border-neon-pink/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-neon-pink"></i>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-white mb-1">Headquarters</h4>
                    <p className="text-cyber-gray">NeoTokyo District, <br />Innovation Tower, Level 42</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyber-dark/70 border border-neon-pink/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-phone-alt text-neon-pink"></i>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-white mb-1">Call Us</h4>
                    <p className="text-cyber-gray">+1 (888) CAREER-AI</p>
                  </div>
                </div>
              </div>
            </HolographicCard>
            
            {/* Social Media */}
            <HolographicCard borderColor="purple">
              <h3 className="font-orbitron text-2xl mb-6 text-white">Social <span className="text-electric-purple">Networks</span></h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.url}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg ${social.color} hover:opacity-80 transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <i className={`${social.icon} text-3xl mb-2 ${social.textColor}`}></i>
                    <span className="text-white font-orbitron text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </HolographicCard>
            
            {/* Newsletter */}
            <HolographicCard>
              <h3 className="font-orbitron text-2xl mb-4 text-white">Neural <span className="text-neon-cyan">Newsletter</span></h3>
              <p className="text-cyber-gray mb-4">Subscribe to receive the latest career insights and AI advancements.</p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                />
                <GlowingButton>
                  <i className="fas fa-paper-plane"></i>
                </GlowingButton>
              </div>
            </HolographicCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
