// Mock data for when OpenAI API quota is exceeded

// Mock career recommendations
export const mockCareerData = {
  careers: [
    {
      title: "Full-Stack Developer",
      matchPercentage: 92,
      requiredSkills: ["JavaScript", "React", "Node.js", "CSS", "Git", "API Design"],
      skillGaps: ["GraphQL", "DevOps"],
      recommendedCourses: ["Advanced React Patterns", "Microservices Architecture"]
    },
    {
      title: "Machine Learning Engineer",
      matchPercentage: 87,
      requiredSkills: ["Python", "TensorFlow", "Statistics", "Data Structures", "Algorithms", "Neural Networks"],
      skillGaps: ["Cloud ML Infrastructure", "Production ML Systems"],
      recommendedCourses: ["Deep Learning Specialization", "MLOps Engineering"]
    },
    {
      title: "Cybersecurity Analyst",
      matchPercentage: 84,
      requiredSkills: ["Networking", "Security Protocols", "Linux", "Risk Assessment", "Penetration Testing"],
      skillGaps: ["Cloud Security", "Threat Intelligence"],
      recommendedCourses: ["Certified Ethical Hacker", "Cloud Security Architecture"]
    }
  ]
};

// Mock chat responses
export const getMockChatResponse = (message: string) => {
  // Simple response patterns
  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    return { 
      response: "Greetings, human. I am NEXUS, your cyberpunk career guide through the neon-lit pathways of professional development. How can I assist in augmenting your career trajectory today?" 
    };
  }
  
  if (message.toLowerCase().includes('skill') || message.toLowerCase().includes('learn')) {
    return { 
      response: "In this digital age, skill augmentation is critical. Focus on hybrid skills combining tech with human elements: AI ethics, data storytelling, or human-centered design. These meta-skills will make you irreplaceable even as automation accelerates. Consider project-based learning over passive consumption of content." 
    };
  }
  
  if (message.toLowerCase().includes('job') || message.toLowerCase().includes('career')) {
    return { 
      response: "The most resilient career paths in our cybernetic future involve human-AI collaboration. Consider roles in AI oversight, digital experience design, or technological ethics. These sectors are projected to expand by 300% in the next decade while remaining resistant to automation." 
    };
  }
  
  // Default response
  return { 
    response: "The neural networks of tomorrow's workforce require continuous adaptation. I recommend focusing on transferable meta-skills like systems thinking, ethical judgment, and technological fluency. These will serve you regardless of how rapidly specific tools evolve." 
  };
};
