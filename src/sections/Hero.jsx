import React from 'react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay - Lighter, warmer feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-placeholder.jpg)',
          backgroundColor: '#E8DCC4' // Warm sand color fallback
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/40 via-transparent to-navy-ink/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="mb-6 drop-shadow-lg">
          Sleep Steps From The Waves
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Private beach capsules in Muizenberg from R380/night
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="primary" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Check Availability
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => window.open('https://wa.me/27824131499?text=Hi!%20I\'d%20like%20to%20book%20a%20capsule', '_blank')}
          >
            WhatsApp Us
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
            ⭐ 4.4/5 on Google Reviews
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
            🏖️ Beachfront in Muizenberg
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
            ⚡ Solar Power & Fast WiFi
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
            🌿 420-Friendly Accommodation
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
