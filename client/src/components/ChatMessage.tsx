import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  animate?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  isBot,
  animate = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  const botAvatar = (
    <div className="w-8 h-8 rounded-full bg-cyber-dark border border-neon-pink/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
      <img 
        src="https://raw.githubusercontent.com/abrahamcalf/programming-languages-logos/master/src/python/python.png" 
        alt="AI Assistant" 
        className="w-6 h-6 object-cover"
      />
    </div>
  );

  const userAvatar = (
    <div className="w-8 h-8 rounded-full bg-cyber-dark border border-neon-cyan/50 flex items-center justify-center flex-shrink-0">
      <i className="fas fa-user text-neon-cyan"></i>
    </div>
  );

  if (isBot) {
    return (
      <motion.div 
        className="flex gap-3 mb-6 w-full items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        ref={containerRef}
      >
        {botAvatar}
        <div className="bg-cyber-dark/80 rounded-lg rounded-tl-none p-4 max-w-[80%] shadow-lg border border-neon-pink/20 break-words">
          <motion.p 
            className="text-white whitespace-pre-wrap break-words"
            initial={animate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {message}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="flex gap-3 mb-4 justify-end"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      ref={containerRef}
    >
      <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg rounded-tr-none p-4 max-w-[80%] shadow-lg">
        <p className="text-white whitespace-pre-wrap break-words">{message}</p>
      </div>
      {userAvatar}
    </motion.div>
  );
};

export default ChatMessage;
