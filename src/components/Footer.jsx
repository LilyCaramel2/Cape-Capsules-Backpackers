import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-white">Caramel <span className="text-neon-cyan">Digital</span></h3>
            <p className="text-gray-500">
              Crafting digital experiences with neon precision.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-neon-pink transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-neon-cyan transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-neon-gold transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <p>carameldigitaldesign@gmail.com</p>
            <p>WhatsApp: 064 220 5618</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.fiverr.com/lily_caramel" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">Fiverr</a>
              <a href="https://linkedin.com/in/lilygodden" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Caramel Digital Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
