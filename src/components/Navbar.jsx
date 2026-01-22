import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-dark-bg/90 backdrop-blur-sm z-50 border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-white tracking-wider">
              Caramel <span className="text-neon-cyan text-glow-cyan">Digital</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-neon-pink transition-colors hover:shadow-neon-pink">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-neon-cyan transition-colors hover:shadow-neon-cyan">Portfolio</a>
            <a href="#about" className="text-gray-300 hover:text-neon-gold transition-colors hover:shadow-neon-gold">About</a>
            <a href="#contact" className="bg-transparent border border-neon-pink text-neon-pink px-4 py-2 rounded-md hover:bg-neon-pink hover:text-black hover:shadow-neon-pink transition-all duration-300">Start Project</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-card border-b border-neon-cyan/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-neon-pink" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-300 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-neon-gold" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="block px-3 py-2 text-neon-pink font-bold" onClick={() => setIsOpen(false)}>Start Project</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
