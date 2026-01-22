import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-b from-neon-purple/10 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform blur-md opacity-75"></div>
              <div className="relative bg-dark-card border border-dark-border p-8 rounded-2xl shadow-xl">
                <h3 className="font-display text-3xl font-bold mb-4 text-white">Lily Caramel</h3>
                <p className="text-neon-cyan mb-6 italic text-glow-cyan">"Bringing neon brilliance to the digital world."</p>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I specialize in creating digital experiences that don't just function—they glow.
                    With a background in Thought Leadership and Niche Content, I understand that a website is more than code; it's a signal in the noise.
                  </p>
                  <p>
                    From simple landing pages to complex SaaS platforms, I bring the "Caramel Aura"—a blend of aesthetic warmth and cyberpunk precision—to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-display text-4xl font-bold mb-6 text-white">Why Choose <span className="text-neon-gold text-glow-gold">Caramel Digital?</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-neon-pink flex items-center justify-center text-neon-pink font-bold text-xl shadow-neon-pink">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Brand-First Approach</h4>
                  <p className="text-gray-400">We don't use cookie-cutter templates. Your brand's voice directs the code.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-neon-cyan flex items-center justify-center text-neon-cyan font-bold text-xl shadow-neon-cyan">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Full-Stack Capability</h4>
                  <p className="text-gray-400">Design, Development, SEO, and Content Strategy under one roof.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-neon-gold flex items-center justify-center text-neon-gold font-bold text-xl shadow-neon-gold">3</div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Results Driven</h4>
                  <p className="text-gray-400">65+ Five-Star Reviews on Fiverr speak for themselves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
