import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dark-bg">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[128px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
          Digital Presence <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan animate-gradient-x drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
            Electrified
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          We build high-performance, neon-soaked digital experiences that capture your brand's unique energy.
          Web Development, SaaS, and Thought Leadership platforms with a futuristic edge.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-black bg-gradient-to-r from-neon-pink to-neon-purple hover:to-neon-pink transition-all shadow-neon-pink hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]">
            Start Your Build
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-3 border border-neon-cyan text-base font-bold rounded-md text-neon-cyan bg-transparent hover:bg-neon-cyan/10 transition-colors shadow-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
