import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const characters = "01";
    const columns = 50;
    
    // Clear any existing characters
    container.innerHTML = '';
    
    for (let i = 0; i < columns; i++) {
      const character = document.createElement("div");
      character.className = "matrix-character absolute text-neon-cyan opacity-30 text-xs font-mono";
      character.style.left = `${i * 2}%`;
      character.style.top = `${Math.random() * 100}%`;
      // @ts-ignore - custom property
      character.style.setProperty("--index", String(Math.random() * 10));
      character.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
      
      // Add animation using inline styles
      character.style.animation = `matrix-rain 20s linear infinite`;
      character.style.animationDelay = `${Math.random() * 10}s`;
      
      container.appendChild(character);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10 overflow-hidden" aria-hidden="true">
      <div ref={containerRef} className="matrix-container relative h-full w-full"></div>
    </div>
  );
};

export default MatrixBackground;
