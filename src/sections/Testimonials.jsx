import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-dark-card p-8 rounded-xl border border-dark-border hover:border-neon-purple hover:shadow-[0_0_15px_rgba(188,19,254,0.3)] transition-all duration-300">
    <div className="flex text-neon-gold mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} fill="currentColor" className="drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
      ))}
    </div>
    <p className="text-gray-300 italic mb-6">"{quote}"</p>
    <p className="font-bold text-white text-right">- {author}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-white">Client Love</h2>
          <p className="text-xl text-gray-400">
            Join the satisfied clients who have rated us 5 stars over 65 times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Lily transformed our vague ideas into a stunning, functional website. The process was smooth and the result exceeded expectations."
            author="Sarah J., Business Owner"
          />
          <TestimonialCard
            quote="The 'Caramel Aura' is real! Our site feels modern and electric, yet professional. Technical skills are top notch."
            author="Mark D., Startup Founder"
          />
          <TestimonialCard
            quote="Incredible attention to detail. From SEO to design, everything was handled perfectly. Highly recommended!"
            author="Elena R., Content Creator"
          />
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.fiverr.com/lily_caramel" target="_blank" rel="noopener noreferrer" className="text-neon-cyan font-bold hover:text-white hover:underline transition-colors text-glow-cyan">
            Read more reviews on Fiverr &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
