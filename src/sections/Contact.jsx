import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg text-white border-t border-dark-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-neon-pink/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Let's Create Something <span className="text-neon-pink text-glow-pink">Electric</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Reach out today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center mb-16">
          <a href="https://wa.me/27642205618" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-dark-card border border-dark-border rounded-2xl hover:border-neon-cyan hover:shadow-neon-cyan transition-all w-full md:w-64">
            <MessageCircle size={48} className="text-neon-cyan mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            <span className="font-bold text-lg mb-2">WhatsApp</span>
            <span className="text-gray-400 group-hover:text-white transition-colors">+27 64 220 5618</span>
          </a>

          <a href="mailto:carameldigitaldesign@gmail.com" className="group flex flex-col items-center p-8 bg-dark-card border border-dark-border rounded-2xl hover:border-neon-pink hover:shadow-neon-pink transition-all w-full md:w-64">
            <Mail size={48} className="text-neon-pink mb-4 group-hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
            <span className="font-bold text-lg mb-2">Email</span>
            <span className="text-gray-400 text-center break-all group-hover:text-white transition-colors">carameldigitaldesign@gmail.com</span>
          </a>

           <div className="group flex flex-col items-center p-8 bg-dark-card border border-dark-border rounded-2xl hover:border-neon-gold hover:shadow-neon-gold transition-all w-full md:w-64">
            <Phone size={48} className="text-neon-gold mb-4 group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
            <span className="font-bold text-lg mb-2">Call</span>
            <span className="text-gray-400 group-hover:text-white transition-colors">064 220 5618</span>
          </div>
        </div>

        <div className="mt-8 bg-dark-card text-white rounded-xl p-8 max-w-2xl mx-auto shadow-2xl border border-dark-border relative">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! We will get back to you shortly.');
              e.target.reset();
            }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-neon-pink focus:border-neon-pink transition-all" />
                    <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-neon-cyan focus:border-neon-cyan transition-all" />
                </div>
                <input required type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-neon-purple focus:border-neon-purple transition-all" />
                <textarea required rows="4" placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-neon-pink focus:border-neon-pink transition-all"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold py-3 rounded-lg hover:to-neon-pink transition-all shadow-neon-pink hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]">
                    Send Message
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
