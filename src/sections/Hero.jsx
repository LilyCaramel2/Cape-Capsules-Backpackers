import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-dark-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Abstract Neon Lotus"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/40 to-dark-bg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Main Headline */}
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight">
          Digital content
          <span className="block mt-2">with an edge.</span>
        </h1>

        {/* Sub Headline */}
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-cyan">
          Gen-Z cyber luxe.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Branding, sites, and content that look expensive and convert.
          Fast builds. Big ideas. Zero ego.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-white bg-gradient-to-r from-neon-pink to-neon-cyan hover:shadow-[0_0_20px_rgba(255,0,128,0.5)] transition-all duration-300">
            Start a project
          </a>
          <a href="#templates" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-base font-bold rounded-full text-white hover:bg-white/10 transition-all duration-300">
            Browse templates
          </a>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
            { title: "Brand kits", desc: "Identity & Strategy" },
            { title: "Landing pages", desc: "High conversion" },
            { title: "Automations", desc: "Scale your workflow" }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors text-left">
              <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
