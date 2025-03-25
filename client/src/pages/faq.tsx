import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import HolographicCard from "@/components/HolographicCard";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "How accurate are the AI career recommendations?",
      answer: "Our AI system achieves a 94% accuracy rate based on internal testing and user feedback. The algorithm continuously learns from user interactions and market data to improve recommendations over time.",
      category: "AI Technology"
    },
    {
      question: "Is my personal data secure?",
      answer: "Yes, all data is encrypted using advanced cryptographic protocols. We never share your personal information with third parties. Our system only uses your data to generate personalized career recommendations.",
      category: "Privacy & Security"
    },
    {
      question: "Can I save multiple career paths to compare?",
      answer: "Absolutely! Your profile page allows you to save up to 5 different career paths for comparison. This feature helps you evaluate different options before making decisions about your professional development.",
      category: "Features"
    },
    {
      question: "How often is the career data updated?",
      answer: "Our career database is updated monthly with the latest industry trends, salary information, and skill requirements. The AI also incorporates real-time job market data when generating recommendations.",
      category: "Data"
    },
    {
      question: "Can I use CareerSync AI if I'm switching careers?",
      answer: "Yes! CareerSync AI is especially useful for career transitions. The system analyzes your transferable skills and suggests paths that leverage your existing expertise while identifying specific areas for upskilling.",
      category: "Use Cases"
    },
    {
      question: "Are the recommended courses free?",
      answer: "We recommend a mix of free and paid resources. Each recommendation includes at least one free option for skill development. Premium course recommendations are clearly marked with approximate costs.",
      category: "Learning Resources"
    },
    {
      question: "How does the skill gap analysis work?",
      answer: "Our AI compares your current skills against the requirements for specific career paths. It identifies missing skills, prioritizes them based on impact, and suggests targeted learning opportunities to close those gaps.",
      category: "AI Technology"
    },
    {
      question: "Can I get industry-specific recommendations?",
      answer: "Yes, you can specify preferred industries in your profile. The AI will prioritize career paths within those sectors while still suggesting promising alternatives based on your skill profile.",
      category: "Features"
    }
  ];

  // Extract unique categories from FAQs and add "All" option at the beginning
  const uniqueCategories = Array.from(new Set(faqItems.map(item => item.category)));
  const categories = uniqueCategories.sort(); // Sort categories alphabetically
  
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Ensure the category filtering works properly 
  const filteredFAQs = selectedCategory === "All" 
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <section id="faq" className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GlitchText 
            text="FREQUENTLY" 
            coloredText="ASKED QUESTIONS"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl max-w-3xl mx-auto text-cyber-gray">
            Find answers to common questions about our AI career guidance system.
          </p>
        </div>
        
        {/* Category filters with enhanced cyberpunk styling */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 bg-cyber-black/40 p-5 rounded-lg border border-cyber-gray/20 max-w-4xl mx-auto">
          <div className="w-full text-center mb-3">
            <p className="text-neon-cyan text-sm uppercase tracking-wider">Filter by Category</p>
          </div>
          
          <motion.button
            onClick={() => setSelectedCategory("All")}
            className={`px-5 py-2.5 rounded-md text-sm transition-all duration-300 relative overflow-hidden
              ${selectedCategory === "All" 
                ? "bg-gradient-to-r from-neon-cyan/30 to-neon-blue/30 border border-neon-cyan text-white shadow-[0_0_8px_0_rgba(0,255,255,0.6)]" 
                : "bg-cyber-black/70 border border-cyber-gray/30 text-cyber-gray hover:bg-cyber-dark/70 hover:border-neon-cyan/30"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-orbitron">All Categories</span>
            {selectedCategory === "All" && (
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 animate-pulse"></span>
            )}
          </motion.button>
          
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-md text-sm transition-all duration-300 relative overflow-hidden
                ${selectedCategory === category 
                  ? "bg-gradient-to-r from-neon-cyan/30 to-neon-blue/30 border border-neon-cyan text-white shadow-[0_0_8px_0_rgba(0,255,255,0.6)]" 
                  : "bg-cyber-black/70 border border-cyber-gray/30 text-cyber-gray hover:bg-cyber-dark/70 hover:border-neon-cyan/30"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-orbitron">{category}</span>
              {selectedCategory === category && (
                <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 animate-pulse"></span>
              )}
            </motion.button>
          ))}
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HolographicCard 
                  className="cursor-pointer overflow-hidden p-0"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="p-5">
                    <div className="flex justify-between items-center">
                      <h3 className="font-orbitron text-lg text-white pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: expandedId === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-neon-cyan flex-shrink-0"
                      >
                        <i className="fas fa-chevron-down"></i>
                      </motion.div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedId === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-neon-cyan/20">
                          <p className="text-cyber-gray">{faq.answer}</p>
                          <div className="mt-3 flex justify-between items-center">
                            <span className="inline-flex items-center px-3 py-1.5 bg-cyber-black/60 border border-neon-cyan/30 rounded-md text-xs font-medium text-neon-cyan shadow-[0_0_5px_0_rgba(0,255,255,0.3)]">
                              <i className="fas fa-tag mr-1.5 opacity-70"></i>
                              {faq.category}
                            </span>
                            {selectedCategory !== "All" && selectedCategory === faq.category && (
                              <span className="text-xs text-neon-cyan/70">
                                Filtered: {selectedCategory}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </HolographicCard>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10"
            >
              <div className="bg-cyber-black/50 border border-neon-pink/30 rounded-lg p-6">
                <div className="text-neon-pink text-6xl mb-4">
                  <i className="fas fa-search-minus"></i>
                </div>
                <h3 className="text-xl font-orbitron text-white mb-2">No FAQs Found</h3>
                <p className="text-cyber-gray mb-4">
                  No questions found in the "{selectedCategory}" category.
                </p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="px-4 py-2 bg-neon-pink/20 border border-neon-pink text-white rounded-md hover:bg-neon-pink/30 transition-colors duration-300"
                >
                  <i className="fas fa-sync-alt mr-2"></i> Show All FAQs
                </button>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Still have questions section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-orbitron text-2xl mb-4 text-white">Still Have <span className="text-neon-pink">Questions?</span></h3>
          
          <p className="text-cyber-gray mb-6 max-w-2xl mx-auto">
            If you couldn't find the information you're looking for, our AI assistant or support team can help you with personalized responses.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a 
              href="/recommend" 
              className="inline-flex items-center px-6 py-3 bg-cyber-dark/70 border border-neon-pink/30 rounded-md hover:bg-neon-pink/10 transition-all duration-300 text-white font-orbitron"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-robot mr-2 text-neon-pink"></i>
              Ask AI Assistant
            </motion.a>
            
            <motion.a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-cyber-dark/70 border border-neon-cyan/30 rounded-md hover:bg-neon-cyan/10 transition-all duration-300 text-white font-orbitron"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-headset mr-2 text-neon-cyan"></i>
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
