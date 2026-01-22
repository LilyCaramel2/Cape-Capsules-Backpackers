import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-dark-bg/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/images/logo_new.svg" alt="Caramel Digital Studio - Caramel Aura" className="h-12 sm:h-14 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Work</a>
            <a href="#shop" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Shop</a>

            <a href="#contact" className="ml-4 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Book a call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg border-b border-white/10 absolute w-full left-0 top-20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#work" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#shop" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Shop</a>
            <div className="pt-4">
              <a href="#contact" className="block w-full text-center px-5 py-3 rounded-full border border-white/20 text-base font-medium text-white hover:bg-white/10" onClick={() => setIsOpen(false)}>
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
