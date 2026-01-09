import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-red text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home">Home</a></li>
              <li><a href="#pricing">Capsules & Pricing</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#booking">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Stay Types */}
          <div>
            <h3 className="text-white mb-4">Stay Types</h3>
            <ul className="space-y-2">
              <li><a href="#pricing">Private Capsules</a></li>
              <li><a href="#pricing">Weekend Packages</a></li>
              <li><a href="#pricing">Weekly Packages</a></li>
              <li><a href="#booking">Long-Term Stays</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <p>Muizenberg Beach<br/>Cape Town, Western Cape<br/>South Africa</p>
              <p><a href="tel:+27824131499">+27 82 413 1499</a></p>
              <p><a href="mailto:info@capecapsules.co.za">info@capecapsules.co.za</a></p>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 space-y-2">
          <p className="text-sm">R500 refundable deposit applies to all bookings</p>
          <p className="text-sm">
            Digital strategy & design by{' '}
            <a href="https://carameldigitaldesign.online" target="_blank" rel="noopener noreferrer" className="underline">
              Caramel Digital Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
