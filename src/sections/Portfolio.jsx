import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, type, description, image, liveLink, repoLink }) => (
  <div className="group relative overflow-hidden rounded-xl bg-dark-card border border-dark-border transition-all hover:border-neon-pink hover:shadow-neon-pink hover:-translate-y-1">
    <div className="h-48 bg-gray-900 overflow-hidden relative border-b border-dark-border">
        {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105 opacity-80 group-hover:opacity-100" />
        ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900 text-neon-cyan font-display text-4xl font-bold border-b border-neon-cyan/20">
                {title[0]}
            </div>
        )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-60"></div>
    </div>
    <div className="p-6">
      <div className="text-sm text-neon-cyan font-bold mb-2 uppercase tracking-wider text-glow-cyan">{type}</div>
      <h3 className="font-display text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex gap-4">
        {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-white font-bold hover:text-neon-pink transition-colors">
            <ExternalLink size={18} className="mr-2" /> Live Demo
            </a>
        )}
        {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-white transition-colors">
            <Github size={18} className="mr-2" /> View Code
            </a>
        )}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-white">Featured Work</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of digital experiences crafted with <span className="text-neon-gold text-glow-gold">Neon Precision</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="Halo Glow Beauty"
            type="Business Website"
            description="A high-performance beauty salon site. Features WhatsApp booking, optimized imagery, and local SEO. Note: Design reflects client brand (Peach/Soft), not Caramel Digital's neon aura."
            image="/halo-glow-site/assets/images/haloglow-hero.webp"
            liveLink="/halo-glow-site/"
            repoLink="https://github.com/LilyCaramel2/caramel-digital-site/tree/main/halo-glow-site"
          />
          <ProjectCard
            title="Cape Capsules Backpackers"
            type="Hospitality App"
            description="A modern booking platform for a beachfront capsule hostel. React-based with pricing tiers and direct booking flow."
            image={null}
            repoLink="https://github.com/LilyCaramel2/caramel-digital-site/tree/main/cape-capsules"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
