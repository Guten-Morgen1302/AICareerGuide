import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface GlowingButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  color?: "cyan" | "pink" | "purple";
  type?: "button" | "submit" | "reset";
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  to,
  onClick,
  children,
  className = "",
  color = "cyan",
  type = "button"
}) => {
  const colorStyles = {
    cyan: {
      gradient: "from-neon-cyan/20 to-neon-cyan/5 hover:from-neon-cyan/30 hover:to-neon-cyan/10",
      text: "neon-text",
      border: "border-neon-cyan/50"
    },
    pink: {
      gradient: "from-neon-pink/20 to-neon-pink/5 hover:from-neon-pink/30 hover:to-neon-pink/10",
      text: "neon-text-pink",
      border: "border-neon-pink/50"
    },
    purple: {
      gradient: "from-electric-purple/20 to-electric-purple/5 hover:from-electric-purple/30 hover:to-electric-purple/10",
      text: "text-electric-purple",
      border: "border-electric-purple/50"
    }
  };

  const buttonContent = (
    <motion.span
      className={`relative z-10 ${colorStyles[color].text}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  const buttonClasses = `neon-border relative px-6 py-3 bg-gradient-to-r ${colorStyles[color].gradient} text-white font-orbitron font-bold rounded-md transform hover:scale-105 transition-all duration-300 ${className}`;

  if (to) {
    return (
      <Link href={to} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={buttonClasses}
      type={type}
    >
      {buttonContent}
    </button>
  );
};

export default GlowingButton;
