import React from 'react'
import Button from '../components/Button'

function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-sky-sea"
    >
      {/* Placeholder for hero image - will overlay gradient */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="text-center text-white">
          <p className="text-2xl font-poppins">Hero Image: Muizenberg beach huts + girl surfer + mountain</p>
          <p className="text-lg mt-2">(Placeholder - will be replaced with AI-generated image)</p>
        </div>
      </div>
      
      {/* Gradient Overlay - LOCKED */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/30" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Placeholder */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full border-4 border-white/30 mb-4">
            <span className="text-6xl">🏄‍♀️</span>
          </div>
          <p className="text-white/70 text-sm">(Girl surfer logo placeholder)</p>
        </div>
        
        {/* Hero Text */}
        <h1 className="font-poppins font-bold text-hero text-pure-white text-shadow-hero mb-6">
          Sleep Steps From The Waves
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 text-shadow-hero mb-10 max-w-3xl mx-auto">
          Private Beach Capsules from <strong className="text-hut-yellow font-bold">R380/night</strong>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="primary" href="#booking" className="w-full sm:w-auto">
            Check Availability
          </Button>
          <Button variant="secondary" href="https://wa.me/27824131499" className="w-full sm:w-auto">
            WhatsApp Us
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-white">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20">
            <span className="font-inter text-sm">⭐ 4.4/5 on Google</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20">
            <span className="font-inter text-sm">🏖️ Beachfront in Muizenberg</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20">
            <span className="font-inter text-sm">⚡ Solar Power & Fast WiFi</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
