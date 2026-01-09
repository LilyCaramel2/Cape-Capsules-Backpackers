import React from 'react';

const Footer = () => {
  return (
    <footer className="gradient-header text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/brand/cape-capsules-logo.jpg" 
              alt="Cape Capsules" 
              className="h-24 w-24 rounded-full border-2 border-white shadow-xl mb-4"
            />
            <p className="text-sm text-center md:text-left">Surf. Stay. Repeat.</p>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-hut-yellow transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-hut-yellow transition-colors">Capsules & Pricing</a></li>
              <li><a href="#amenities" className="hover:text-hut-yellow transition-colors">Amenities</a></li>
              <li><a href="#location" className="hover:text-hut-yellow transition-colors">Location</a></li>
              <li><a href="#gallery" className="hover:text-hut-yellow transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-hut-yellow transition-colors">FAQ</a></li>
              <li><a href="#booking" className="hover:text-hut-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Stay Types */}
          <div>
            <h3 className="text-white mb-4">Stay Types</h3>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-hut-yellow transition-colors">Private Capsules</a></li>
              <li><a href="#pricing" className="hover:text-hut-yellow transition-colors">Weekend Packages</a></li>
              <li><a href="#pricing" className="hover:text-hut-yellow transition-colors">Weekly Packages</a></li>
              <li><a href="#booking" className="hover:text-hut-yellow transition-colors">Long-Term Stays</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Muizenberg Beach<br/>Cape Town, Western Cape<br/>South Africa</p>
              <p><a href="tel:+27824131499" className="hover:text-hut-yellow transition-colors">+27 82 413 1499</a></p>
              <p><a href="mailto:info@capecapsules.co.za" className="hover:text-hut-yellow transition-colors">info@capecapsules.co.za</a></p>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 space-y-2">
          <p className="text-sm">R500 refundable deposit applies to all bookings</p>
          <p className="text-sm">
            Digital strategy & design by{' '}
            <a href="https://carameldigitaldesign.online" target="_blank" rel="noopener noreferrer" className="text-hut-yellow hover:underline">
              Caramel Digital Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
