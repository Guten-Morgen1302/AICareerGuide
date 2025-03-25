import React from "react";
import Navbar from "./Navbar";
import MatrixBackground from "./MatrixBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-200">
      <Navbar />
      <MatrixBackground />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
