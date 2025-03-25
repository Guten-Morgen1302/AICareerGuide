import { useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recommendations", path: "/recommend" },
    { name: "How It Works", path: "/howitworks" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-cyber-black bg-opacity-80 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/abrahamcalf/programming-languages-logos/master/src/javascript/javascript.png" 
              alt="CareerSync Logo" 
              className="w-10 h-10 mr-2"
            />
            <span className="text-2xl font-orbitron font-bold text-white neon-text">CareerSync<span className="text-neon-cyan">AI</span></span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`px-4 py-2 rounded-md transition-all duration-300 text-white font-orbitron ${
                  location === link.path 
                    ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-b-2 border-cyan-500 font-bold text-cyan-400" 
                    : "hover:bg-cyan-500/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-neon-cyan focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
          
          <Link 
            href="/profile" 
            className={`hidden md:flex items-center px-4 py-2 rounded-md transition-all duration-300 neon-border ${location === "/profile" ? "bg-gradient-to-r from-neon-cyan/30 to-electric-purple/30 border-2 border-neon-cyan font-bold" : "bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 border border-neon-cyan/50 hover:bg-neon-cyan/30"}`}
          >
            <i className="fas fa-user-circle mr-2 text-neon-cyan"></i>
            <span className="font-orbitron text-white">Profile</span>
          </Link>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-cyber-dark border-t border-neon-cyan/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`block px-3 py-2 rounded-md transition-all duration-300 text-white font-orbitron ${
                    location === link.path 
                      ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-l-4 border-cyan-500 font-bold text-cyan-400" 
                      : "hover:bg-cyan-500/10"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/profile"
                className={`block px-3 py-2 rounded-md transition-all duration-300 text-white font-orbitron ${location === "/profile" ? "bg-gradient-to-r from-neon-cyan/30 to-electric-purple/30 border-l-4 border-neon-cyan font-bold" : "bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 border border-neon-cyan/50 hover:bg-neon-cyan/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-user-circle mr-2 text-neon-cyan"></i>
                Profile
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
