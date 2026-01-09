import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-brand-red text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4">
        {/* Desktop: Logo left, inline menu right */}
        <div className="hidden md:flex justify-between items-center">
          <h3 className="text-white m-0">Cape Capsules</h3>
          <nav className="flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:underline">Home</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:underline">Capsules & Pricing</button>
            <button onClick={() => scrollToSection('amenities')} className="hover:underline">Amenities</button>
            <button onClick={() => scrollToSection('location')} className="hover:underline">Location</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:underline">Gallery</button>
            <button onClick={() => scrollToSection('faq')} className="hover:underline">FAQ</button>
            <button onClick={() => scrollToSection('booking')} className="hover:underline">Contact</button>
          </nav>
        </div>

        {/* Mobile: Logo stacked, horizontal scroll menu */}
        <div className="md:hidden">
          <h3 className="text-white text-center mb-3">Cape Capsules</h3>
          <nav className="flex overflow-x-auto whitespace-nowrap gap-3 -mx-4 px-4">
            <button onClick={() => scrollToSection('home')} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30">Home</button>
            <button onClick={() => scrollToSection('pricing')} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30">Pricing</button>
            <button onClick={() => scrollToSection('amenities')} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30">Amenities</button>
            <button onClick={() => scrollToSection('location')} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30">Location</button>
            <button onClick={() => scrollToSection('gallery')} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30">Gallery</button>
            <button onClick={() => scrollToSection('faq')} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30">FAQ</button>
            <button onClick={() => scrollToSection('booking')} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30">Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
