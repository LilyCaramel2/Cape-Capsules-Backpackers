import React from 'react';
import Button from '../components/Button';

const Cannabis420 = () => {
  return (
    <section id="cannabis" className="section-container bg-brand-sand">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mb-8">Cannabis-Friendly Accommodation</h2>
        
        <div className="bg-white rounded-lg p-8 border-2 border-gray-200 mb-8">
          <h3 className="mb-4">Why This Matters</h3>
          <p className="mb-4">
            Cannabis is legal for personal use in South Africa, and Cape Town is a 420-friendly city. We provide designated outdoor smoking areas where you can relax and enjoy responsibly.
          </p>
          <p className="mb-4">
            Our garden and rooftop balconies are perfect for social sessions, and our community welcomes like-minded travelers who appreciate the plant.
          </p>
        </div>

        <div className="bg-brand-yellow bg-opacity-20 border-2 border-brand-yellow rounded-lg p-6 mb-8">
          <h3 className="mb-4">Our Policy</h3>
          <ul className="space-y-2">
            <li>Outdoor areas only (garden, balcony, rooftop)</li>
            <li>No smoking in capsules or indoor spaces</li>
            <li>Respect other guests and neighbors</li>
            <li>Keep consumption social and responsible</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="mb-4">Looking for 420-Friendly Beachside Accommodation?</h3>
          <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Your Cannabis-Friendly Stay
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cannabis420;
