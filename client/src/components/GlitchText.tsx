import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  coloredText?: string;
  colorClass?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = "",
  coloredText,
  colorClass = "text-neon-cyan"
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const textWithColor = coloredText ? (
    <>
      <span className="relative">{text}</span><br />
      <span className={`${colorClass} relative`}>{coloredText}</span>
    </>
  ) : (
    <span className="relative">{text}</span>
  );

  // Glitch effect variants
  const glitchVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.h1
      ref={ref}
      className={`glitch-text font-orbitron font-bold text-white ${className}`}
      data-text={text}
      variants={glitchVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {textWithColor}
      
      {/* Glitch overlay elements */}
      <motion.span 
        className="absolute top-0 left-0 w-full h-full text-neon-pink opacity-50"
        initial={{ x: -2, opacity: 0 }}
        animate={{ 
          x: [-2, 0, -2],
          opacity: [0, 0.5, 0] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        aria-hidden="true"
      >
        {textWithColor}
      </motion.span>
      
      <motion.span 
        className="absolute top-0 left-0 w-full h-full text-neon-cyan opacity-50"
        initial={{ x: 2, opacity: 0 }}
        animate={{ 
          x: [2, 0, 2],
          opacity: [0, 0.5, 0] 
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        aria-hidden="true"
      >
        {textWithColor}
      </motion.span>
    </motion.h1>
  );
};

export default GlitchText;
