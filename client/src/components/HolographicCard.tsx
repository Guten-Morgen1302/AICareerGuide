import React from "react";
import { motion } from "framer-motion";

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: "cyan" | "pink" | "purple";
  onClick?: () => void;
}

const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  className = "",
  borderColor = "cyan",
  onClick
}) => {
  const borderColors = {
    cyan: "border-neon-cyan/30",
    pink: "border-neon-pink/30",
    purple: "border-electric-purple/30"
  };

  return (
    <motion.div
      className={`holographic rounded-xl p-6 border ${borderColors[borderColor]} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default HolographicCard;
