import React, { useState } from 'react';
import Button from './Button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-ink text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📍 Muizenberg Beach, Cape Town</span>
            <a href="tel:+27824131499" className="hover:text-turquoise-surf transition-colors">
              📞 +27 82 413 1499
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-turquoise-surf transition-colors">📷 Instagram</a>
            <a href="#" className="hover:text-turquoise-surf transition-colors">📘 Facebook</a>
            <a href="#" className="hover:text-turquoise-surf transition-colors">🎵 TikTok</a>
            <a href="https://wa.me/27824131499" className="hover:text-turquoise-surf transition-colors">💬 WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/brand/cape-capsules-logo.jpg" 
                alt="Cape Capsules Logo" 
                className="w-[150px] h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{display: 'none'}} className="text-2xl font-bold text-ocean-blue">
                Cape Capsules
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-ocean-blue transition-colors">Home</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-ocean-blue transition-colors">Capsules</button>
              <button onClick={() => scrollToSection('amenities')} className="hover:text-ocean-blue transition-colors">Amenities</button>
              <button onClick={() => scrollToSection('cannabis')} className="text-turquoise-surf hover:text-deep-sea-blue transition-colors font-medium">420 Friendly</button>
              <button onClick={() => scrollToSection('location')} className="hover:text-ocean-blue transition-colors">Location</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-ocean-blue transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-ocean-blue transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('booking')} className="hover:text-ocean-blue transition-colors">Contact</button>
            </nav>

            <div className="hidden lg:block">
              <Button variant="primary" onClick={() => scrollToSection('booking')}>
                Book Direct & Save
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-navy-ink text-white z-50 lg:hidden">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6">
                <span className="text-2xl font-bold">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-3xl">✕</button>
              </div>
              <nav className="flex flex-col gap-6 p-6 text-xl">
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-turquoise-surf transition-colors">Home</button>
                <button onClick={() => scrollToSection('pricing')} className="text-left hover:text-turquoise-surf transition-colors">Capsules</button>
                <button onClick={() => scrollToSection('amenities')} className="text-left hover:text-turquoise-surf transition-colors">Amenities</button>
                <button onClick={() => scrollToSection('cannabis')} className="text-left text-turquoise-surf font-medium">420 Friendly</button>
                <button onClick={() => scrollToSection('location')} className="text-left hover:text-turquoise-surf transition-colors">Location</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-turquoise-surf transition-colors">Gallery</button>
                <button onClick={() => scrollToSection('faq')} className="text-left hover:text-turquoise-surf transition-colors">FAQ</button>
                <button onClick={() => scrollToSection('booking')} className="text-left hover:text-turquoise-surf transition-colors">Contact</button>
                <div className="mt-4">
                  <Button variant="primary" onClick={() => scrollToSection('booking')} className="w-full">
                    Book Direct & Save
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
