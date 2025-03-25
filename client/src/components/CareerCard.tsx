import React from "react";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import HolographicCard from "./HolographicCard";

interface CareerCardProps {
  title: string;
  matchPercentage: number;
  requiredSkills: string[];
  skillGaps: string[];
  recommendedCourses: string[];
  colorScheme?: "cyan" | "pink" | "purple";
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  matchPercentage,
  requiredSkills,
  skillGaps,
  recommendedCourses,
  colorScheme = "cyan"
}) => {
  const colors = {
    cyan: {
      headerBg: "bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20",
      matchText: "text-neon-green",
      borderColor: "cyan",
      iconColor: "text-neon-cyan"
    },
    pink: {
      headerBg: "bg-gradient-to-r from-neon-pink/20 to-electric-purple/20",
      matchText: "text-neon-cyan",
      borderColor: "pink",
      iconColor: "text-neon-pink"
    },
    purple: {
      headerBg: "bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20",
      matchText: "text-neon-yellow",
      borderColor: "purple",
      iconColor: "text-electric-purple"
    }
  };

  const { headerBg, matchText, borderColor, iconColor } = colors[colorScheme];

  return (
    <HolographicCard borderColor={borderColor} className="overflow-hidden">
      <div className={`${headerBg} px-6 py-4 -mx-6 -mt-6 mb-6`}>
        <div className="flex justify-between items-center">
          <h4 className="font-orbitron text-xl text-white">{title}</h4>
          <div className={`${matchText} font-mono`}>{matchPercentage}% Match</div>
        </div>
      </div>
      
      <SkillBar percentage={matchPercentage} label="Skill Match" colorScheme={colorScheme} />
      
      <div className="mb-4">
        <h5 className="font-orbitron text-white mb-2">Required Skills</h5>
        <div className="flex flex-wrap gap-2">
          {requiredSkills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-cyber-black/50 border border-neon-cyan/30 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h5 className="font-orbitron text-white mb-2">Skill Gaps</h5>
        <div className="flex flex-wrap gap-2">
          {skillGaps.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-cyber-black/50 border border-neon-pink/30 rounded-full text-sm text-neon-pink">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h5 className="font-orbitron text-white mb-2">Recommended Courses</h5>
        <ul className="space-y-2 text-cyber-gray">
          {recommendedCourses.map((course, index) => (
            <li key={index} className="flex items-center gap-2">
              <i className={`fas fa-graduation-cap ${iconColor}`}></i>
              <span>{course}</span>
            </li>
          ))}
        </ul>
      </div>
    </HolographicCard>
  );
};

export default CareerCard;
