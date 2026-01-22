import React from 'react';
import { Check, Code, PenTool, Rocket } from 'lucide-react';

const ServiceCard = ({ title, price, description, features, icon: Icon, popular }) => (
  <div className={`bg-dark-card rounded-2xl p-8 border flex flex-col transition-all duration-300 hover:-translate-y-2 ${popular ? 'border-neon-pink shadow-neon-pink' : 'border-dark-border hover:border-neon-cyan hover:shadow-neon-cyan'}`}>
    {popular && (
      <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-pink text-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
        Most Popular
      </span>
    )}
    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${popular ? 'bg-neon-pink/20 text-neon-pink' : 'bg-dark-bg text-neon-cyan'}`}>
      <Icon size={28} />
    </div>
    <h3 className="font-display text-2xl font-bold mb-2 text-white">{title}</h3>
    <div className={`text-3xl font-bold mb-4 ${popular ? 'text-neon-pink text-glow-pink' : 'text-neon-cyan text-glow-cyan'}`}>{price}</div>
    <p className="text-gray-400 mb-6 flex-grow">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${popular ? 'text-neon-pink' : 'text-neon-cyan'}`} />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#contact" className={`w-full py-3 rounded-lg text-center font-bold transition-all ${popular ? 'bg-neon-pink text-black hover:shadow-neon-pink' : 'border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-neon-cyan'}`}>
      Choose Plan
    </a>
  </div>
);

const Services = () => {
  const packages = [
    {
      title: "The Essential",
      price: "$295",
      description: "Perfect for landing pages, simple portfolios, or event sites. Get online fast.",
      icon: Rocket,
      features: [
        "One-Page / Landing Page",
        "Responsive Mobile Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Fast Loading Speed"
      ]
    },
    {
      title: "The Professional",
      price: "$695",
      description: "Ideal for businesses, thought leaders, and creatives needing a robust presence.",
      icon: PenTool,
      popular: true,
      features: [
        "5-Page Website",
        "Blog / News Section",
        "Content Strategy Integration",
        "Social Media Connectivity",
        "Advanced SEO Essentials",
        "Brand Kit Integration"
      ]
    },
    {
      title: "The Empire",
      price: "$1,495+",
      description: "Full-scale web applications, SaaS platforms, or complex e-commerce solutions.",
      icon: Code,
      features: [
        "Custom Web Application",
        "Database Integration",
        "User Authentication",
        "Admin Dashboard",
        "AI / Chatbot Integration",
        "Payment Gateway Setup"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-white">Our Packages</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparent pricing. Neon precision. World-class development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Glow behind grid */}
           <div className="absolute inset-0 bg-neon-purple/5 blur-[100px] -z-10 rounded-full"></div>
          {packages.map((pkg, idx) => (
            <ServiceCard key={idx} {...pkg} />
          ))}
        </div>

        <div className="mt-16 bg-dark-card rounded-xl border border-dark-border p-8 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 blur-[50px]"></div>
          <h3 className="font-display text-2xl font-bold mb-4 text-white">Additional Services</h3>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span className="px-4 py-2 bg-dark-bg border border-dark-border rounded-full hover:border-neon-pink hover:text-neon-pink transition-colors">Sailing & Watersports Content</span>
            <span className="px-4 py-2 bg-dark-bg border border-dark-border rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-colors">SEO Blog Writing</span>
            <span className="px-4 py-2 bg-dark-bg border border-dark-border rounded-full hover:border-neon-gold hover:text-neon-gold transition-colors">Logo Design</span>
            <span className="px-4 py-2 bg-dark-bg border border-dark-border rounded-full hover:border-neon-purple hover:text-neon-purple transition-colors">Canva Brand Kits</span>
            <span className="px-4 py-2 bg-dark-bg border border-dark-border rounded-full hover:border-white transition-colors">Automations</span>
          </div>
          <p className="mt-6 text-gray-500">Need something specific? <a href="#contact" className="text-neon-cyan underline hover:text-white">Let's chat.</a></p>
        </div>
      </div>
    </section>
  );
};

export default Services;
