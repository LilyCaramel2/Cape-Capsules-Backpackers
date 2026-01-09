import React from 'react';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  const pricingOptions = [
    {
      title: 'Private Capsule',
      price: 'R380',
      per: '/night',
      features: [
        'Private capsule pod with curtain',
        'Reading light & power outlets',
        'Personal safety deposit box',
        'Access to all facilities',
        'Fast WiFi & solar power',
        'Shared kitchen & bathrooms',
      ],
      cta: 'Book Capsule',
      variant: 'secondary',
      borderColor: 'ocean-blue',
    },
    {
      badge: '🔥 Most Popular',
      title: 'Weekend Escape',
      price: 'R2,995',
      per: '/Fri-Sun',
      savings: 'Save R245 vs nightly rate',
      features: [
        '3 nights (Friday to Sunday)',
        'Private capsule pod',
        'Weekend breakfast included',
        'Late check-out (12 PM Sunday)',
        'All amenities included',
        'Perfect for surf weekends',
      ],
      cta: 'Book Weekend',
      variant: 'primary',
      borderColor: 'hut-yellow',
      popular: true,
    },
    {
      title: 'Week Explorer',
      price: 'R4,995',
      per: '/7 nights',
      savings: 'Save R1,665 vs nightly rate',
      features: [
        '7 consecutive nights',
        'Private capsule pod',
        '3 breakfasts included',
        'Free surf lesson (1 hour)',
        'All amenities included',
        'Ideal for remote workers',
      ],
      cta: 'Book Week',
      variant: 'secondary',
      borderColor: 'turquoise-surf',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All prices include WiFi, solar power, and access to communal spaces. R500 refundable deposit applies to all bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>

        {/* Deposit Policy */}
        <div className="bg-sand-white rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-3 text-center">Important: Deposit Policy</h3>
          <p className="text-gray-700 text-center">
            A <strong>R500 refundable deposit</strong> is required for all bookings. Foreign guests must pay in cash; South African guests can pay by card with EFT refund. A one-time cleaning fee is deducted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
