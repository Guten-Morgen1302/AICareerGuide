
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-cyber-black/90 border-t border-neon-cyan/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-neon-cyan font-orbitron text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-neon-cyan font-orbitron text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-neon-cyan font-orbitron text-lg mb-4">CareerSync<span className="text-electric-purple">AI</span></div>
            <p className="text-gray-400 text-sm">
              Your AI-powered career guidance companion
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-neon-cyan/20 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} CareerSyncAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
