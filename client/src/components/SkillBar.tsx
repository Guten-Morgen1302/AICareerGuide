import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  percentage: number;
  label?: string;
  colorScheme?: "cyan" | "pink" | "purple";
}

const SkillBar: React.FC<SkillBarProps> = ({
  percentage,
  label,
  colorScheme = "cyan"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const gradients = {
    cyan: "bg-gradient-to-r from-neon-cyan to-neon-green",
    pink: "bg-gradient-to-r from-neon-pink to-electric-purple",
    purple: "bg-gradient-to-r from-electric-purple to-neon-yellow"
  };

  return (
    <div className="mb-4">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-cyber-gray">{label}</span>
          <span className="text-white">{percentage}%</span>
        </div>
      )}
      <div className="h-2 bg-cyber-black/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${gradients[colorScheme]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
