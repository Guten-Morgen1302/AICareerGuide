import React from "react";
import { motion } from "framer-motion";
import GlowingButton from "@/components/GlowingButton";
import GlitchText from "@/components/GlitchText";
import HolographicCard from "@/components/HolographicCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-orbitron">
              <span className="text-white">FUTURE-PROOF</span>{" "}
              <span className="text-neon-cyan">YOUR CAREER</span>
            </h1>

            <p className="text-xl mb-8 leading-relaxed text-white">
              Our <span className="text-neon-cyan font-bold">AI-powered</span> system analyzes your skills and goals to recommend optimal career paths in this rapidly evolving tech landscape.
            </p>

            <div className="flex flex-wrap gap-4">
              <GlowingButton to="/recommend" className="px-8 py-4 text-lg">
                GET STARTED
              </GlowingButton>

              <GlowingButton to="/howitworks" color="pink" className="px-8 py-4 text-lg">
                HOW IT WORKS
              </GlowingButton>
            </div>
          </div>

          <motion.div variants={itemVariants} className="lg:w-1/2 relative">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <HolographicCard>
                <img 
                  src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Futuristic career visualization" 
                  className="rounded-lg w-full h-auto opacity-80"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cyber-black to-transparent">
                  <div className="flex items-center gap-2 text-sm">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-neon-green"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    />
                    <span className="text-white/70">AI Analysis Active</span>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>

            {/* Floating tech elements */}
            <motion.div 
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <i className="fas fa-microchip text-2xl text-neon-pink"></i>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8 
          }}
        >
          <motion.div 
            className="p-6 rounded-lg bg-cyber-dark/50 backdrop-blur-sm border border-neon-cyan/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-4xl font-bold mb-2 text-neon-cyan">98%</div>
            <div className="text-xl font-orbitron">Career Match Accuracy</div>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg bg-cyber-dark/50 backdrop-blur-sm border border-neon-cyan/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-4xl font-bold mb-2 text-neon-pink">10K+</div>
            <div className="text-xl font-orbitron">Career Paths Analyzed</div>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg bg-cyber-dark/50 backdrop-blur-sm border border-neon-cyan/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-4xl font-bold mb-2 text-electric-purple">5M+</div>
            <div className="text-xl font-orbitron">Skills Mapped</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-neon-pink/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Home;