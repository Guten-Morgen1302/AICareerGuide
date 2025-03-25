import React from "react";
import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import HolographicCard from "@/components/HolographicCard";

const HowItWorks = () => {
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
    <section id="howitworks" className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GlitchText 
            text="HOW IT" 
            coloredText="WORKS"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl max-w-3xl mx-auto text-cyber-gray">
            Our advanced AI system uses neural networks to match your profile with optimal career paths.
          </p>
        </div>
        
        {/* Steps Process */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <HolographicCard className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyber-dark border border-neon-cyan/50 flex items-center justify-center mb-6">
                <span className="font-orbitron text-2xl text-neon-cyan">01</span>
              </div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white">Data <span className="text-neon-cyan">Collection</span></h3>
              
              <p className="text-cyber-gray text-center">Enter your education, skills, interests, and career goals into our secure system.</p>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-cyber-dark/50 border border-neon-cyan/30 flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <i className="fas fa-database text-neon-cyan"></i>
                </motion.div>
              </div>
            </HolographicCard>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HolographicCard borderColor="pink" className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyber-dark border border-neon-pink/50 flex items-center justify-center mb-6">
                <span className="font-orbitron text-2xl text-neon-pink">02</span>
              </div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white">AI <span className="text-neon-pink">Processing</span></h3>
              
              <p className="text-cyber-gray text-center">Our neural network analyzes your data against millions of career patterns and market trends.</p>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-cyber-dark/50 border border-neon-pink/30 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <i className="fas fa-brain text-neon-pink"></i>
                </motion.div>
              </div>
            </HolographicCard>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HolographicCard borderColor="purple" className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyber-dark border border-electric-purple/50 flex items-center justify-center mb-6">
                <span className="font-orbitron text-2xl text-electric-purple">03</span>
              </div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white">Result <span className="text-electric-purple">Generation</span></h3>
              
              <p className="text-cyber-gray text-center">Receive personalized career paths, skill gap analysis, and educational recommendations.</p>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-cyber-dark/50 border border-electric-purple/30 flex items-center justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <i className="fas fa-chart-line text-electric-purple"></i>
                </motion.div>
              </div>
            </HolographicCard>
          </motion.div>
        </motion.div>
        
        {/* Flowchart */}
        <motion.div 
          className="bg-cyber-dark/50 backdrop-blur-sm rounded-xl p-8 border border-neon-cyan/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="font-orbitron text-2xl mb-8 text-center text-white">AI <span className="text-neon-cyan">Processing Matrix</span></h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Flowchart SVG */}
            <svg className="w-full h-auto" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* Lines */}
              <motion.path 
                d="M400,60 L400,120" 
                stroke="#0ff4c6" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path 
                d="M400,180 L400,220" 
                stroke="#0ff4c6" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.path 
                d="M400,280 L400,320" 
                stroke="#0ff4c6" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              />
              
              <motion.path 
                d="M400,150 L200,220" 
                stroke="#f81ce5" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              />
              <motion.path 
                d="M400,150 L600,220" 
                stroke="#f81ce5" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
              />
              
              <motion.path 
                d="M200,280 L400,320" 
                stroke="#7928ca" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              />
              <motion.path 
                d="M600,280 L400,320" 
                stroke="#7928ca" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.3 }}
              />
              
              {/* Nodes */}
              <motion.circle 
                cx="400" 
                cy="50" 
                r="30" 
                fill="#151520" 
                stroke="#0ff4c6" 
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.text 
                x="400" 
                y="55" 
                fill="#ffffff" 
                fontFamily="'Orbitron', sans-serif" 
                fontSize="12" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Input
              </motion.text>
              
              <motion.rect 
                x="350" 
                y="120" 
                width="100" 
                height="60" 
                rx="5" 
                fill="#151520" 
                stroke="#0ff4c6" 
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <motion.text 
                x="400" 
                y="155" 
                fill="#ffffff" 
                fontFamily="'Orbitron', sans-serif" 
                fontSize="12" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Data Parser
              </motion.text>
              
              <motion.rect 
                x="150" 
                y="220" 
                width="100" 
                height="60" 
                rx="5" 
                fill="#151520" 
                stroke="#f81ce5" 
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              <motion.text 
                x="200" 
                y="255" 
                fill="#ffffff" 
                fontFamily="'Orbitron', sans-serif" 
                fontSize="12" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                Skill Analysis
              </motion.text>
              
              <motion.rect 
                x="350" 
                y="220" 
                width="100" 
                height="60" 
                rx="5" 
                fill="#151520" 
                stroke="#0ff4c6" 
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              />
              <motion.text 
                x="400" 
                y="255" 
                fill="#ffffff" 
                fontFamily="'Orbitron', sans-serif" 
                fontSize="12" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                Neural Network
              </motion.text>
              
              <motion.rect 
                x="550" 
                y="220" 
                width="100" 
                height="60" 
                rx="5" 
                fill="#151520" 
                stroke="#f81ce5" 
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.4 }}
              />
              <motion.text 
                x="600" 
                y="255" 
                fill="#ffffff" 
                fontFamily="'Orbitron', sans-serif" 
                fontSize="12" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.7 }}
              >
                Market Data
              </motion.text>
              
              <motion.circle 
                cx="400" 
                cy="350" 
                r="30" 
                fill="#151520" 
                stroke="#7928ca" 
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
              />
              <motion.text 
                x="400" 
                y="355" 
                fill="#ffffff" 
                fontFamily="'Orbitron', sans-serif" 
                fontSize="12" 
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.3 }}
              >
                Output
              </motion.text>
            </svg>
          </div>
        </motion.div>
        
        {/* Technology Stack */}
        <div className="text-center mb-8">
          <h3 className="font-orbitron text-2xl mb-6 text-white">Technology <span className="text-neon-pink">Stack</span></h3>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-cyber-dark/50 backdrop-blur-sm rounded-xl border border-neon-cyan/20 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <i className="fab fa-react text-4xl text-neon-cyan mb-4"></i>
            <h4 className="font-orbitron text-white mb-2">React + TSX</h4>
            <p className="text-cyber-gray text-center text-sm">Frontend framework with TypeScript for robust UI development</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-cyber-dark/50 backdrop-blur-sm rounded-xl border border-neon-cyan/20 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <i className="fab fa-node-js text-4xl text-neon-cyan mb-4"></i>
            <h4 className="font-orbitron text-white mb-2">Express.js</h4>
            <p className="text-cyber-gray text-center text-sm">Backend API handling user requests and AI processing</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-cyber-dark/50 backdrop-blur-sm rounded-xl border border-neon-cyan/20 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <i className="fas fa-database text-4xl text-neon-cyan mb-4"></i>
            <h4 className="font-orbitron text-white mb-2">PostgreSQL</h4>
            <p className="text-cyber-gray text-center text-sm">Relational database for career and user data storage</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-cyber-dark/50 backdrop-blur-sm rounded-xl border border-neon-cyan/20 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <i className="fas fa-brain text-4xl text-neon-cyan mb-4"></i>
            <h4 className="font-orbitron text-white mb-2">OpenAI API</h4>
            <p className="text-cyber-gray text-center text-sm">Advanced AI model for career path matching and recommendations</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
