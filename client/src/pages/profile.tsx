import React, { useState } from "react";
import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import HolographicCard from "@/components/HolographicCard";
import SkillBar from "@/components/SkillBar";
import GlowingButton from "@/components/GlowingButton";
import CareerCard from "@/components/CareerCard";

// Types for user profile data
interface UserProfile {
  name: string;
  education: string;
  joinDate: string;
  skills: Array<{ name: string; level: number }>;
  savedCareers: Array<{
    title: string;
    matchPercentage: number;
    requiredSkills: string[];
    skillGaps: string[];
    recommendedCourses: string[];
  }>;
  learningProgress: {
    coursesCompleted: number;
    coursesInProgress: number;
    totalCourses: number;
  };
}

const Profile = () => {
  // Sample profile data - in a real app this would come from an API
  const [profile, setProfile] = useState<UserProfile>({
    name: "Alex Morgan",
    education: "Bachelor's Degree",
    joinDate: "2023-10-15",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 78 },
      { name: "Data Analysis", level: 65 },
      { name: "UI/UX Design", level: 72 },
      { name: "Python", level: 60 }
    ],
    savedCareers: [
      {
        title: "Frontend Developer",
        matchPercentage: 87,
        requiredSkills: ["JavaScript", "React", "HTML/CSS", "UI/UX", "Git"],
        skillGaps: ["TypeScript", "Testing"],
        recommendedCourses: ["Advanced React Patterns", "TypeScript for React Developers"]
      },
      {
        title: "Data Scientist",
        matchPercentage: 72,
        requiredSkills: ["Python", "Machine Learning", "Statistics", "SQL", "Data Visualization"],
        skillGaps: ["Advanced ML", "Deep Learning", "R"],
        recommendedCourses: ["Machine Learning Specialization", "Deep Learning with TensorFlow"]
      }
    ],
    learningProgress: {
      coursesCompleted: 3,
      coursesInProgress: 2,
      totalCourses: 7
    }
  });

  const [activeTab, setActiveTab] = useState<'overview' | 'careers' | 'skills' | 'settings'>('overview');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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

  // Helper to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const calculateLearningProgress = () => {
    const { coursesCompleted, totalCourses } = profile.learningProgress;
    return (coursesCompleted / totalCourses) * 100;
  };

  return (
    <section id="profile" className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <GlitchText 
            text="NEURAL" 
            coloredText="PROFILE"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl max-w-3xl mx-auto text-cyber-gray">
            Your personal dashboard for career tracking, skill development, and AI-driven recommendations.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - User Info */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <HolographicCard className="mb-6">
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className="w-20 h-20 rounded-full bg-cyber-dark/70 border-4 border-neon-cyan/30 flex items-center justify-center overflow-hidden"
                      style={{ background: "#001a33" }}
                    >
                      {/* SVG Avatar */}
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
                      
                      {/* Holographic effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-neon-pink/10 mix-blend-overlay"
                        animate={{ 
                          background: [
                            "linear-gradient(45deg, rgba(15,244,198,0.1), rgba(248,28,229,0.1))",
                            "linear-gradient(225deg, rgba(15,244,198,0.1), rgba(248,28,229,0.1))",
                            "linear-gradient(45deg, rgba(15,244,198,0.1), rgba(248,28,229,0.1))"
                          ]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      />
                      
                      {/* Digital circuit lines */}
                      <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
                    </div>
                    <motion.div 
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-neon-green flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="font-orbitron text-2xl text-white">{profile.name}</h3>
                    <p className="text-cyber-gray">{profile.education}</p>
                    <div className="text-neon-cyan text-sm mt-1 font-mono">
                      ID: #42981
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-cyber-gray/20">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-cyber-gray">Member Since</span>
                    <span className="text-white font-mono">{formatDate(profile.joinDate)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-cyber-gray">Skill Rating</span>
                    <span className="text-neon-cyan font-mono">Advanced</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-gray">Career Matches</span>
                    <span className="text-neon-pink font-mono">{profile.savedCareers.length}</span>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <HolographicCard className="mb-6" borderColor="pink">
                <h3 className="font-orbitron text-xl mb-4 text-white">Learning <span className="text-neon-pink">Progress</span></h3>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-cyber-gray">Overall Completion</span>
                    <span className="text-white">{Math.round(calculateLearningProgress())}%</span>
                  </div>
                  <SkillBar percentage={calculateLearningProgress()} colorScheme="pink" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-cyber-dark/50 rounded-lg p-3">
                    <div className="text-neon-cyan text-xl font-bold mb-1">{profile.learningProgress.coursesCompleted}</div>
                    <div className="text-cyber-gray text-xs">Completed</div>
                  </div>
                  
                  <div className="bg-cyber-dark/50 rounded-lg p-3">
                    <div className="text-neon-pink text-xl font-bold mb-1">{profile.learningProgress.coursesInProgress}</div>
                    <div className="text-cyber-gray text-xs">In Progress</div>
                  </div>
                  
                  <div className="bg-cyber-dark/50 rounded-lg p-3">
                    <div className="text-neon-green text-xl font-bold mb-1">{profile.learningProgress.totalCourses}</div>
                    <div className="text-cyber-gray text-xs">Total</div>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <HolographicCard borderColor="purple">
                <h3 className="font-orbitron text-xl mb-4 text-white">Neural <span className="text-electric-purple">Activity</span></h3>
                
                <div className="space-y-4">
                  <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-cyan">
                    <div className="text-white font-orbitron mb-1">Skill Assessment Completed</div>
                    <div className="text-cyber-gray text-sm">JavaScript expertise increased by 5%</div>
                    <div className="text-neon-cyan text-xs mt-2 font-mono">2 days ago</div>
                  </div>
                  
                  <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-pink">
                    <div className="text-white font-orbitron mb-1">New Career Match</div>
                    <div className="text-cyber-gray text-sm">Frontend Developer (87% match)</div>
                    <div className="text-neon-cyan text-xs mt-2 font-mono">1 week ago</div>
                  </div>
                  
                  <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-green">
                    <div className="text-white font-orbitron mb-1">Course Completed</div>
                    <div className="text-cyber-gray text-sm">Advanced React Patterns</div>
                    <div className="text-neon-cyan text-xs mt-2 font-mono">2 weeks ago</div>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          </motion.div>
          
          {/* Main content area */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="flex mb-6 border-b border-cyber-gray/20">
              {['overview', 'careers', 'skills', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-3 font-orbitron text-sm transition-all duration-300 ${
                    activeTab === tab 
                      ? "text-neon-cyan border-b-2 border-neon-cyan" 
                      : "text-cyber-gray hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <AnimatedTabContent activeTab={activeTab} profile={profile} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AnimatedTabContentProps {
  activeTab: 'overview' | 'careers' | 'skills' | 'settings';
  profile: UserProfile;
}

const AnimatedTabContent: React.FC<AnimatedTabContentProps> = ({ activeTab, profile }) => {
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20 }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0 }
  };

  // Overview Tab
  if (activeTab === 'overview') {
    return (
      <motion.div
        key="overview"
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div variants={itemVariants}>
            <HolographicCard>
              <h3 className="font-orbitron text-xl mb-4 text-white">Skill <span className="text-neon-cyan">Summary</span></h3>
              
              <div className="space-y-4">
                {profile.skills.slice(0, 3).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-neon-cyan">{skill.level}%</span>
                    </div>
                    <SkillBar percentage={skill.level} />
                  </div>
                ))}
                
                <GlowingButton to="/profile?tab=skills" className="w-full mt-2 text-sm">
                  VIEW ALL SKILLS
                </GlowingButton>
              </div>
            </HolographicCard>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HolographicCard borderColor="pink">
              <h3 className="font-orbitron text-xl mb-4 text-white">Top <span className="text-neon-pink">Career Match</span></h3>
              
              {profile.savedCareers[0] && (
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="text-white font-orbitron">{profile.savedCareers[0].title}</h4>
                    <span className="text-neon-green font-mono">{profile.savedCareers[0].matchPercentage}% Match</span>
                  </div>
                  
                  <SkillBar percentage={profile.savedCareers[0].matchPercentage} colorScheme="pink" />
                  
                  <div className="mt-4">
                    <h5 className="text-white mb-2">Top Skill Gaps:</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {profile.savedCareers[0].skillGaps.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-cyber-black/50 border border-neon-pink/30 rounded-full text-sm text-neon-pink">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <GlowingButton to="/profile?tab=careers" color="pink" className="w-full mt-2 text-sm">
                      VIEW ALL MATCHES
                    </GlowingButton>
                  </div>
                </div>
              )}
            </HolographicCard>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants}>
          <HolographicCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-orbitron text-xl text-white">Recommended <span className="text-neon-cyan">Actions</span></h3>
              <span className="text-cyber-gray text-sm">Updated today</span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-green flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-orbitron mb-1">Complete JavaScript Course</h4>
                  <p className="text-cyber-gray text-sm mb-2">You're 75% through. Finish to boost your skill rating!</p>
                  <GlowingButton className="text-xs px-4 py-2" color="purple">CONTINUE LEARNING</GlowingButton>
                </div>
              </div>
              
              <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-cyan flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 2h8"></path>
                    <path d="M12 14v7"></path>
                    <path d="M12 14a5 5 0 0 1-5-5"></path>
                    <path d="M7 9v11"></path>
                    <path d="M17 9v11"></path>
                    <path d="M12 14a5 5 0 0 0 5-5"></path>
                    <circle cx="12" cy="5" r="3"></circle>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-orbitron mb-1">Take TypeScript Assessment</h4>
                  <p className="text-cyber-gray text-sm mb-2">Close a critical skill gap for your top career match.</p>
                  <GlowingButton className="text-xs px-4 py-2">START ASSESSMENT</GlowingButton>
                </div>
              </div>
              
              <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-pink flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" y1="16" x2="8" y2="16"></line>
                    <line x1="16" y1="16" x2="16" y2="16"></line>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-orbitron mb-1">Update Your Career Goals</h4>
                  <p className="text-cyber-gray text-sm mb-2">Refine our AI recommendations with your latest career objectives.</p>
                  <GlowingButton className="text-xs px-4 py-2" color="pink">UPDATE GOALS</GlowingButton>
                </div>
              </div>
            </div>
          </HolographicCard>
        </motion.div>
      </motion.div>
    );
  }
  
  // Careers Tab
  if (activeTab === 'careers') {
    return (
      <motion.div
        key="careers"
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <motion.div variants={itemVariants}>
          <HolographicCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-orbitron text-xl text-white">Saved <span className="text-neon-cyan">Career Paths</span></h3>
              <GlowingButton className="text-xs px-4 py-2">FIND MORE MATCHES</GlowingButton>
            </div>
            
            <div className="space-y-6">
              {profile.savedCareers.map((career, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                >
                  <CareerCard 
                    title={career.title}
                    matchPercentage={career.matchPercentage}
                    requiredSkills={career.requiredSkills}
                    skillGaps={career.skillGaps}
                    recommendedCourses={career.recommendedCourses}
                    colorScheme={index % 2 === 0 ? "cyan" : "pink"}
                  />
                </motion.div>
              ))}
            </div>
          </HolographicCard>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <HolographicCard borderColor="purple">
            <h3 className="font-orbitron text-xl mb-4 text-white">Career <span className="text-electric-purple">Insights</span></h3>
            
            <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-electric-purple/20">
              <h4 className="font-orbitron text-white mb-4">Your Skill Profile Analysis</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-cyber-gray">Frontend Development Focus</span>
                  <div className="flex">
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-cyber-gray"></i>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-cyber-gray">Data Science Potential</span>
                  <div className="flex">
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-cyber-gray"></i>
                    <i className="fas fa-star text-cyber-gray"></i>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-cyber-gray">UI/UX Design Aptitude</span>
                  <div className="flex">
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-neon-yellow"></i>
                    <i className="fas fa-star text-cyber-gray"></i>
                  </div>
                </div>
              </div>
              
              <p className="text-white mb-4">
                Your skill profile shows strong potential in frontend development and UI/UX design, with emerging capabilities in data science. Focus on TypeScript and testing to maximize career opportunities.
              </p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-electric-purple">AI-powered analysis</span>
                <span className="text-cyber-gray">Updated 3 days ago</span>
              </div>
            </div>
          </HolographicCard>
        </motion.div>
      </motion.div>
    );
  }
  
  // Skills Tab
  if (activeTab === 'skills') {
    return (
      <motion.div
        key="skills"
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={itemVariants}>
          <HolographicCard>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-orbitron text-xl text-white">Your <span className="text-neon-cyan">Skill Matrix</span></h3>
              <GlowingButton className="text-xs px-4 py-2">ADD NEW SKILL</GlowingButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {profile.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-neon-cyan">{skill.level}%</span>
                  </div>
                  <SkillBar percentage={skill.level} colorScheme={index % 3 === 0 ? "cyan" : index % 3 === 1 ? "pink" : "purple"} />
                </motion.div>
              ))}
            </div>
          </HolographicCard>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div variants={itemVariants}>
            <HolographicCard borderColor="pink">
              <h3 className="font-orbitron text-xl mb-4 text-white">Skill <span className="text-neon-pink">Gaps</span></h3>
              
              <div className="space-y-4">
                <div className="bg-cyber-dark/50 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center mr-3">
                      <i className="fas fa-code text-neon-pink"></i>
                    </div>
                    <span className="text-white">TypeScript</span>
                  </div>
                  <GlowingButton color="pink" className="text-xs px-3 py-1">LEARN</GlowingButton>
                </div>
                
                <div className="bg-cyber-dark/50 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center mr-3">
                      <i className="fas fa-vial text-neon-pink"></i>
                    </div>
                    <span className="text-white">Testing</span>
                  </div>
                  <GlowingButton color="pink" className="text-xs px-3 py-1">LEARN</GlowingButton>
                </div>
                
                <div className="bg-cyber-dark/50 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center mr-3">
                      <i className="fas fa-brain text-neon-pink"></i>
                    </div>
                    <span className="text-white">Machine Learning</span>
                  </div>
                  <GlowingButton color="pink" className="text-xs px-3 py-1">LEARN</GlowingButton>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HolographicCard borderColor="cyan">
              <h3 className="font-orbitron text-xl mb-4 text-white">Learning <span className="text-neon-cyan">Path</span></h3>
              
              <div className="space-y-4">
                <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-green">
                  <div className="flex justify-between mb-1">
                    <h4 className="text-white font-orbitron">Advanced React Patterns</h4>
                    <span className="text-neon-green text-sm">Completed</span>
                  </div>
                  <p className="text-cyber-gray text-sm">Master advanced React techniques and patterns for complex applications.</p>
                </div>
                
                <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-neon-yellow">
                  <div className="flex justify-between mb-1">
                    <h4 className="text-white font-orbitron">TypeScript for React Developers</h4>
                    <span className="text-neon-yellow text-sm">In Progress (65%)</span>
                  </div>
                  <p className="text-cyber-gray text-sm">Learn TypeScript fundamentals and integration with React applications.</p>
                </div>
                
                <div className="bg-cyber-dark/50 rounded-lg p-4 border-l-4 border-cyber-gray/30">
                  <div className="flex justify-between mb-1">
                    <h4 className="text-white font-orbitron">Testing React Applications</h4>
                    <span className="text-cyber-gray text-sm">Not Started</span>
                  </div>
                  <p className="text-cyber-gray text-sm">Comprehensive testing strategies for modern React applications.</p>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </motion.div>
    );
  }
  
  // Settings Tab
  if (activeTab === 'settings') {
    return (
      <motion.div
        key="settings"
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={itemVariants}>
          <HolographicCard>
            <h3 className="font-orbitron text-xl mb-6 text-white">Profile <span className="text-neon-cyan">Settings</span></h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-white font-orbitron mb-2">Personal Information</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyber-gray mb-2 font-orbitron text-sm" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                      defaultValue={profile.name}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyber-gray mb-2 font-orbitron text-sm" htmlFor="education">Education</label>
                    <select 
                      id="education" 
                      className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                      defaultValue={profile.education}
                    >
                      <option value="High School">High School</option>
                      <option value="Associate's Degree">Associate's Degree</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-orbitron mb-2">Career Goals</h4>
                
                <div>
                  <label className="block text-cyber-gray mb-2 font-orbitron text-sm" htmlFor="goals">Career Objectives</label>
                  <textarea 
                    id="goals" 
                    rows={4} 
                    className="w-full bg-cyber-black/70 border border-neon-cyan/30 rounded-md px-4 py-3 font-mono text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                    defaultValue="Become a senior frontend developer with expertise in React and modern JavaScript frameworks. Eventually transition into a technical lead role with focus on UI/UX development."
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-orbitron mb-2">Preferences</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-cyber-dark/50 p-4 rounded-lg">
                    <div>
                      <h5 className="text-white mb-1">Email Notifications</h5>
                      <p className="text-cyber-gray text-sm">Receive updates on career opportunities and skill recommendations.</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-cyber-black/70">
                      <label htmlFor="toggle-1" className="absolute left-0 w-6 h-6 transition duration-100 ease-in-out transform bg-neon-cyan rounded-full cursor-pointer translate-x-6"></label>
                      <input type="checkbox" id="toggle-1" name="toggle" className="absolute w-full h-full opacity-0 rounded-full cursor-pointer" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-cyber-dark/50 p-4 rounded-lg">
                    <div>
                      <h5 className="text-white mb-1">Dark Mode</h5>
                      <p className="text-cyber-gray text-sm">Enable cyberpunk dark theme for optimal viewing.</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-cyber-black/70">
                      <label htmlFor="toggle-2" className="absolute left-0 w-6 h-6 transition duration-100 ease-in-out transform bg-neon-cyan rounded-full cursor-pointer translate-x-6"></label>
                      <input type="checkbox" id="toggle-2" name="toggle" className="absolute w-full h-full opacity-0 rounded-full cursor-pointer" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-cyber-dark/50 p-4 rounded-lg">
                    <div>
                      <h5 className="text-white mb-1">AI Recommendations</h5>
                      <p className="text-cyber-gray text-sm">Allow AI to analyze your profile for personalized suggestions.</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-cyber-black/70">
                      <label htmlFor="toggle-3" className="absolute left-0 w-6 h-6 transition duration-100 ease-in-out transform bg-neon-cyan rounded-full cursor-pointer translate-x-6"></label>
                      <input type="checkbox" id="toggle-3" name="toggle" className="absolute w-full h-full opacity-0 rounded-full cursor-pointer" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-4">
                <button className="px-6 py-3 bg-cyber-dark/70 border border-cyber-gray/30 rounded-md hover:bg-cyber-dark transition-all duration-300 text-white font-orbitron">
                  CANCEL
                </button>
                <GlowingButton>SAVE CHANGES</GlowingButton>
              </div>
            </div>
          </HolographicCard>
        </motion.div>
      </motion.div>
    );
  }
  
  return null;
};

export default Profile;
