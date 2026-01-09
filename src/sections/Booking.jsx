import React from 'react';
import Button from '../components/Button';

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-sand-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Check Availability</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Book direct and save! No commission fees from booking platforms. Secure your capsule with our simple booking system.
          </p>
        </div>

        {/* Booking Widget Placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="border-4 border-dashed border-ocean-blue rounded-lg p-12">
              <p className="text-xl font-bold text-ocean-blue mb-4">NightsBridge Booking Widget</p>
              <p className="text-gray-600 mb-4">Embed code will be inserted here</p>
              <p className="text-sm text-gray-500">[Placeholder for booking iframe or integration]</p>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold mb-4">Prefer WhatsApp? Message us directly</p>
            <Button 
              variant="turquoise" 
              onClick={() => window.open('https://wa.me/27824131499?text=Hi!%20I\'d%20like%20to%20book%20a%20capsule', '_blank')}
            >
              💬 WhatsApp Us Now
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Contact Information</h3>
            <div className="space-y-3 text-center">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+27824131499" className="text-ocean-blue hover:text-turquoise-surf transition-colors">
                  +27 82 413 1499
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@capecapsules.co.za" className="text-ocean-blue hover:text-turquoise-surf transition-colors">
                  info@capecapsules.co.za
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/27824131499" className="text-ocean-blue hover:text-turquoise-surf transition-colors">
                  +27 82 413 1499
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
