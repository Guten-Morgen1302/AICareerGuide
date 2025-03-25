import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import GlitchText from "@/components/GlitchText";
import HolographicCard from "@/components/HolographicCard";
import GlowingButton from "@/components/GlowingButton";
import CareerCard from "@/components/CareerCard";
import ChatMessage from "@/components/ChatMessage";
import { analyzeCareer, sendChatMessage, type CareerAnalysisResponse, type CareerRecommendation } from "@/lib/openai";
import { ScrollArea } from "@/components/ui/scroll-area"; // Added import for ScrollArea

const Recommend = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    skills: "",
    interests: "",
    careerGoals: ""
  });
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ message: string; isBot: boolean }>>([
    { message: "Hello! I'm NEXUS, your AI career assistant. How can I help with your career journey today?", isBot: true }
  ]);

  // Career analysis mutation
  const careerMutation = useMutation({
    mutationFn: analyzeCareer,
    onSuccess: () => {
      toast({
        title: "Analysis Complete",
        description: "Your career path recommendations are ready!",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your career path. Please try again.",
        variant: "destructive",
      });
    }
  });

  // Chat message mutation
  const chatMutation = useMutation({
    mutationFn: sendChatMessage,
    onSuccess: (data) => {
      setChatHistory(prev => [...prev, { message: data.response, isBot: true }]);
    },
    onError: () => {
      setChatHistory(prev => [...prev, { 
        message: "Sorry, I'm having trouble connecting. Please try again later.", 
        isBot: true 
      }]);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    careerMutation.mutate(formData);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message to chat history
    setChatHistory(prev => [...prev, { message: chatInput, isBot: false }]);

    // Send message to API
    chatMutation.mutate(chatInput);

    // Clear input
    setChatInput("");
  };

  // Color schemes for career cards
  const colorSchemes = ["cyan", "pink", "purple"] as const;

  return (
    <section id="recommend" className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <GlitchText 
            text="Career" 
            coloredText="SyncMatrix"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl max-w-3xl mx-auto text-cyber-gray">
            Input your data and our AI will match you with optimal career paths, skill gaps, and learning opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Input form section */}
          <div className="lg:w-1/2">
            <HolographicCard>
              <h3 className="font-orbitron text-2xl mb-6 text-white">Your <span className="text-neon-cyan">Profile Data</span></h3>

              <form id="career-form" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name" 
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="education">Education Level</label>
                  <select 
                    id="education" 
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select education level</option>
                    <option value="high-school">High School</option>
                    <option value="associate">Associate Degree</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="skills">Skills (comma separated)</label>
                  <textarea 
                    id="skills" 
                    rows={3} 
                    placeholder="JavaScript, React, Project Management, etc." 
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    value={formData.skills}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="interests">Interests (comma separated)</label>
                  <textarea 
                    id="interests" 
                    rows={3} 
                    placeholder="AI, Blockchain, UX Design, etc." 
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    value={formData.interests}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-cyber-gray mb-2 font-orbitron" htmlFor="careerGoals">Career Goals</label>
                  <textarea 
                    id="careerGoals" 
                    rows={3} 
                    placeholder="Describe your career aspirations..." 
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    value={formData.careerGoals}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <GlowingButton 
                  type="submit" 
                  className="w-full py-4"
                  color="cyan"
                >
                  {careerMutation.isPending ? "ANALYZING..." : "ANALYZE CAREER MATRIX"}
                </GlowingButton>
              </form>
            </HolographicCard>
          </div>

          {/* Results section */}
          <div className="lg:w-1/2" id="results-container">
            <AnimatePresence mode="wait">
              {careerMutation.isPending && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center"
                >
                  <div className="relative mb-6 w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md animate-pulse"></div>
                      <div className="absolute w-20 h-20 border border-cyan-500 animate-ping opacity-75 rounded-md"></div>
                    </div>
                    <div className="absolute w-24 h-24 border border-pink-500 animate-ping delay-300 opacity-50 rounded-md"></div>
                  </div>
                  <p className="text-2xl font-orbitron bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Processing Neural Network...
                  </p>
                  <p className="text-xs text-gray-400 mt-2 max-w-xs text-center">
                    Analyzing skill patterns and matching career trajectories in the neural matrix
                  </p>
                </motion.div>
              )}

              {careerMutation.isSuccess && (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-orbitron text-2xl mb-6 text-white">Your <span className="text-neon-cyan">Career Analysis</span></h3>

                  <motion.div 
                    className="space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                  >
                    {careerMutation.data?.careers?.map((career: CareerRecommendation, index: number) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <CareerCard
                          title={career.title}
                          matchPercentage={career.matchPercentage}
                          requiredSkills={career.requiredSkills}
                          skillGaps={career.skillGaps}
                          recommendedCourses={career.recommendedCourses}
                          colorScheme={colorSchemes[index % colorSchemes.length]}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {!careerMutation.isPending && !careerMutation.isSuccess && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center bg-cyber-dark/30 rounded-xl border border-cyber-gray/20 p-10"
                >
                  <div className="text-6xl mb-6 text-cyber-gray">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h3 className="font-orbitron text-2xl mb-3 text-white">Career Matrix Awaiting Input</h3>
                  <p className="text-cyber-gray text-center mb-6">Enter your profile data and click analyze to receive AI-powered career recommendations.</p>

                  <div className="flex items-center gap-2 text-cyber-gray text-sm">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-neon-cyan"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span>Neural Network Standing By</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Cyberpunk AI Assistant (Chatbot) */}
        <div className="mt-32">
          <h2 className="text-3xl font-orbitron text-white mb-6 flex items-center gap-3">
            <i className="fas fa-robot text-neon-pink"></i>
            AI Chat Assistant
          </h2>
          <HolographicCard borderColor="pink">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-cyber-dark border border-neon-pink/50 flex items-center justify-center">
                <i className="fas fa-robot text-2xl text-neon-pink"></i>
              </div>
              <div>
                <h3 className="font-orbitron text-2xl text-white">NEXUS<span className="text-neon-pink">BOT</span></h3>
                <p className="text-cyber-gray text-sm">AI Career Assistant</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-sm">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-neon-pink"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-white/70">Online</span>
              </div>
            </div>

            <ScrollArea className="mb-6 h-[600px] bg-cyber-black/50 rounded-lg pt-8 px-4 pb-4 border border-cyber-gray/20 hover:border-neon-pink/30 transition-colors overflow-y-auto custom-scrollbar"> {/* Wrapped chat history with ScrollArea */}
              <div className="space-y-4">
                {chatHistory.map((chat, index) => (
                  <ChatMessage
                    key={index}
                    message={chat.message}
                    isBot={chat.isBot}
                    animate={index === chatHistory.length - 1}
                  />
                ))}
              </div>

              {chatMutation.isPending && (
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-dark border border-neon-pink/50 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-robot text-neon-pink"></i>
                  </div>
                  <div className="bg-cyber-dark/80 rounded-lg rounded-tl-none p-3">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="flex gap-2"
                    >
                      <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                      <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                      <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                    </motion.div>
                  </div>
                </div>
              )}
            </ScrollArea>

            <form onSubmit={handleChatSubmit} className="flex gap-3">
              <input 
                type="text" 
                placeholder="Ask about career paths, skills, or education..." 
                className="flex-1 bg-cyber-black/70 border border-neon-pink/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-pink/50 transition-all duration-300"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={chatMutation.isPending}
              />

              <GlowingButton 
                type="submit" 
                color="pink"
                className="px-6 py-3"
              >
                SEND
              </GlowingButton>
            </form>
          </HolographicCard>
        </div>
      </div>
    </section>
  );
};

export default Recommend;