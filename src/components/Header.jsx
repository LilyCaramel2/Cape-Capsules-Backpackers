import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Capsules & Pricing', href: '#pricing' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#booking' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-lg py-2' : 'py-4'
      } gradient-header`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 animate-float">
            <img 
              src="/brand/cape-capsules-logo.jpg" 
              alt="Cape Capsules Logo" 
              className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-white shadow-xl hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden md:block">
              <h3 className="text-white font-black text-xl leading-tight">Cape Capsules</h3>
              <p className="text-white text-xs opacity-90">Muizenberg Beach</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-hut-yellow transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu - Horizontal Scroll */}
          <nav className="lg:hidden flex overflow-x-auto gap-3 scrollbar-hide">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:bg-white hover:text-island-red px-3 py-1 rounded-full whitespace-nowrap text-xs transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
