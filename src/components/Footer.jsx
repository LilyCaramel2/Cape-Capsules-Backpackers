import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-ink text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <img 
              src="/brand/cape-capsules-logo.jpg" 
              alt="Cape Capsules" 
              className="w-[120px] h-auto mb-4 brightness-0 invert"
              onError={(e) => e.target.style.display = 'none'}
            />
            <p className="text-sm text-gray-300 mb-4">Private capsules steps from the surf</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-turquoise-surf transition-colors">📷</a>
              <a href="#" className="hover:text-turquoise-surf transition-colors">📘</a>
              <a href="#" className="hover:text-turquoise-surf transition-colors">🎵</a>
              <a href="https://wa.me/27824131499" className="hover:text-turquoise-surf transition-colors">💬</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-turquoise-surf transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-turquoise-surf transition-colors">Capsules & Pricing</a></li>
              <li><a href="#amenities" className="hover:text-turquoise-surf transition-colors">Amenities</a></li>
              <li><a href="#location" className="hover:text-turquoise-surf transition-colors">Location</a></li>
              <li><a href="#gallery" className="hover:text-turquoise-surf transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-turquoise-surf transition-colors">FAQ</a></li>
              <li><a href="#booking" className="hover:text-turquoise-surf transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Stay Types */}
          <div>
            <h4 className="font-bold mb-4">Stay Types</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#pricing" className="hover:text-turquoise-surf transition-colors">Private Capsules</a></li>
              <li><a href="#pricing" className="hover:text-turquoise-surf transition-colors">Weekend Packages</a></li>
              <li><a href="#pricing" className="hover:text-turquoise-surf transition-colors">Weekly Packages</a></li>
              <li><a href="#booking" className="hover:text-turquoise-surf transition-colors">Long-Term Stays</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Muizenberg Beach<br/>Cape Town, Western Cape<br/>South Africa</p>
              <p><a href="tel:+27824131499" className="hover:text-turquoise-surf transition-colors">+27 82 413 1499</a></p>
              <p><a href="mailto:info@capecapsules.co.za" className="hover:text-turquoise-surf transition-colors">info@capecapsules.co.za</a></p>
              <p className="mt-4 text-xs text-gray-400">
                R500 refundable deposit applies<br/>
                Cannabis: Designated areas only<br/>
                Check-out: 10:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 Cape Capsules Backpackers. All rights reserved.</p>
            <p>
              Digital strategy & design by{' '}
              <a 
                href="https://carameldigitaldesign.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-turquoise-surf hover:text-white transition-colors"
              >
                Caramel Digital Design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
