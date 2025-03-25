import React from "react";
import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import HolographicCard from "@/components/HolographicCard";

interface TeamMember {
  name: string;
  role: string;
  avatar: JSX.Element;
  quote: string;
  bgColor: string;
}

const About = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Chen",
      role: "AI Research Lead",
      avatar: (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="36" r="24" fill="#00FEFF" opacity="0.2" />
          <circle cx="50" cy="36" r="20" fill="#0088AA" />
          <circle cx="42" cy="32" r="4" fill="white" opacity="0.6" />
          <rect x="30" y="70" width="40" height="20" rx="10" fill="#0088AA" />
          <path d="M30 62 C 30 50, 70 50, 70 62" stroke="#0088AA" strokeWidth="4" fill="none" />
          <path d="M30 50 C 30 80, 70 80, 70 50" stroke="#0088AA" strokeWidth="2" fill="#0088AA" />
          <circle cx="38" cy="30" r="2" fill="white" />
          <circle cx="62" cy="30" r="2" fill="white" />
          <path d="M42 40 C 46 44, 54 44, 58 40" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M20 20 L 26 26 M 80 20 L 74 26" stroke="#00FEFF" strokeWidth="1.5" opacity="0.7" />
        </svg>
      ),
      bgColor: "#001a33",
      quote: "Building the neural pathways to your optimal career future."
    },
    {
      name: "Mira Johnson",
      role: "UX/UI Designer",
      avatar: (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="36" r="24" fill="#FF00FF" opacity="0.2" />
          <circle cx="50" cy="36" r="20" fill="#AA0088" />
          <circle cx="42" cy="32" r="4" fill="white" opacity="0.6" />
          <rect x="30" y="70" width="40" height="20" rx="10" fill="#AA0088" />
          <path d="M30 62 C 30 50, 70 50, 70 62" stroke="#AA0088" strokeWidth="4" fill="none" />
          <path d="M30 50 C 30 80, 70 80, 70 50" stroke="#AA0088" strokeWidth="2" fill="#AA0088" />
          <circle cx="40" cy="32" r="2" fill="white" />
          <circle cx="60" cy="32" r="2" fill="white" />
          <path d="M42 42 C 46 46, 54 46, 58 42" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M32 22 C 32 12, 68 12, 68 22" stroke="#FF00FF" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M62 28 C 64 26, 68 28, 66 30" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      ),
      bgColor: "#330033",
      quote: "Creating interfaces that blend function with cyberpunk aesthetics."
    },
    {
      name: "Raj Patel",
      role: "Backend Engineer",
      avatar: (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="36" r="24" fill="#0077FF" opacity="0.2" />
          <circle cx="50" cy="36" r="20" fill="#0055AA" />
          <circle cx="42" cy="32" r="4" fill="white" opacity="0.6" />
          <rect x="30" y="70" width="40" height="20" rx="10" fill="#0055AA" />
          <path d="M30 62 C 30 50, 70 50, 70 62" stroke="#0055AA" strokeWidth="4" fill="none" />
          <path d="M30 50 C 30 80, 70 80, 70 50" stroke="#0055AA" strokeWidth="2" fill="#0055AA" />
          <circle cx="38" cy="32" r="2" fill="white" />
          <circle cx="62" cy="32" r="2" fill="white" />
          <path d="M42 42 C 46 44, 54 44, 58 42" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M20 36 L 30 36 M 70 36 L 80 36" stroke="#0077FF" strokeWidth="1.5" opacity="0.7" />
          <rect x="46" cy="24" width="8" height="2" fill="white" />
        </svg>
      ),
      bgColor: "#001a66",
      quote: "Constructing the digital architecture of tomorrow's career guidance."
    },
    {
      name: "Dana Kim",
      role: "Data Scientist",
      avatar: (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="36" r="24" fill="#00FF88" opacity="0.2" />
          <circle cx="50" cy="36" r="20" fill="#00AA66" />
          <circle cx="42" cy="32" r="4" fill="white" opacity="0.6" />
          <rect x="30" y="70" width="40" height="20" rx="10" fill="#00AA66" />
          <path d="M30 62 C 30 50, 70 50, 70 62" stroke="#00AA66" strokeWidth="4" fill="none" />
          <path d="M30 50 C 30 80, 70 80, 70 50" stroke="#00AA66" strokeWidth="2" fill="#00AA66" />
          <circle cx="40" cy="32" r="2" fill="white" />
          <circle cx="60" cy="32" r="2" fill="white" />
          <path d="M40 42 C 45 40, 55 40, 60 42" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M25 25 L 35 35 M 65 35 L 75 25" stroke="#00FF88" strokeWidth="1.5" opacity="0.7" />
          <circle cx="50" cy="24" r="2" fill="white" />
        </svg>
      ),
      bgColor: "#003322",
      quote: "Decoding the matrix of skills to predict optimal career paths."
    }
  ];

  const timelineEvents = [
    {
      year: "2021",
      title: "Project Inception",
      description: "CareerSync AI was born from a vision to revolutionize career guidance through neural networks."
    },
    {
      year: "2022",
      title: "Beta Launch",
      description: "Initial release with skill mapping algorithms and basic career recommendations."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Implementation of advanced neural networks and machine learning models for enhanced predictions."
    },
    {
      year: "2024",
      title: "Cyberpunk Interface",
      description: "Launch of our immersive futuristic UI design and interactive holographic elements."
    }
  ];

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

  return (
    <section id="about" className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GlitchText 
            text="WHO WE" 
            coloredText="ARE"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl max-w-3xl mx-auto text-cyber-gray">
            We're a team of AI researchers, data scientists, and cyberpunk enthusiasts building the future of career guidance.
          </p>
        </div>
        
        {/* Team section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <HolographicCard className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-neon-cyan/30" 
                  style={{ background: member.bgColor }}
                >
                  {/* SVG Avatar */}
                  <div className="w-full h-full">
                    {member.avatar}
                  </div>
                  
                  {/* Holographic effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-neon-pink/10 mix-blend-overlay"></div>
                  
                  {/* Digital circuit lines */}
                  <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-glow-radial opacity-40 rounded-full blur-md"></div>
                </div>
                
                <h3 className="font-orbitron text-xl text-white mb-1">{member.name}</h3>
                <div className="text-neon-cyan mb-4 font-mono text-sm">{member.role}</div>
                
                <p className="text-cyber-gray text-center italic">"{member.quote}"</p>
                
                <div className="mt-4 flex space-x-3">
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-cyber-dark/70 border border-neon-cyan/30 text-neon-cyan"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-cyber-dark/70 border border-neon-cyan/30 text-neon-cyan"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-cyber-dark/70 border border-neon-cyan/30 text-neon-cyan"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </motion.a>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Timeline section */}
        <div className="mb-16">
          <HolographicCard className="p-8">
            <h3 className="font-orbitron text-2xl mb-8 text-center text-white">Our <span className="text-neon-pink">Journey</span></h3>
            
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-pink-500/40"></div>
              
              <motion.div
                className="space-y-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {timelineEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-10 text-right" : "pl-10"}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`p-4 rounded-lg ${
                          index % 3 === 0 ? "bg-cyan-950/30 border border-cyan-500/30" : 
                          index % 3 === 1 ? "bg-purple-950/30 border border-purple-500/30" : 
                          "bg-pink-950/30 border border-pink-500/30"
                        }`}
                      >
                        <h4 className={`font-orbitron text-xl mb-2 ${
                          index % 3 === 0 ? "text-cyan-400" : 
                          index % 3 === 1 ? "text-purple-400" : 
                          "text-pink-400"
                        }`}>{event.title}</h4>
                        <p className="text-cyber-gray">{event.description}</p>
                      </motion.div>
                    </div>
                    
                    <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cyber-dark border-4 border-cyan-500/50 text-white font-orbitron text-sm relative">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></span>
                      <span className="relative z-10">{event.year.substring(2)}</span>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </HolographicCard>
        </div>
        
        {/* Mission section */}
        <motion.div 
          className="bg-cyber-dark/50 backdrop-blur-sm rounded-xl p-8 border border-neon-pink/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="font-orbitron text-2xl mb-6 text-center text-white">Our <span className="text-neon-pink">Mission</span></h3>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-cyber-gray mb-4 text-center">
              At CareerSync AI, we're dedicated to democratizing career guidance through cutting-edge artificial intelligence. Our mission is to bridge the gap between education and employment, providing personalized career pathways that evolve with the rapidly changing job market.
            </p>
            <p className="text-cyber-gray text-center">
              We believe in a future where everyone has access to AI-powered career insights that adapt to their unique skills, interests, and goals. Our cyberpunk aesthetic represents our forward-thinking approach and our commitment to pushing the boundaries of what's possible in career development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
