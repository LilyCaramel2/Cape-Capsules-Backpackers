import React from 'react';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  const pricingOptions = [
    {
      title: 'Private Capsule',
      price: 'R380',
      period: 'per night',
      features: [
        'Private capsule pod with curtain',
        'Reading light & power outlets',
        'Personal safety deposit box',
        'Access to all facilities',
        'Fast WiFi & solar power',
        'Shared kitchen & bathrooms',
      ],
      isPopular: false,
    },
    {
      title: 'Weekend Escape',
      price: 'R2,995',
      period: 'Friday to Sunday (3 nights)',
      features: [
        'Save R245 vs nightly rate',
        'Private capsule pod',
        'Weekend breakfast included',
        'Late check-out (12 PM Sunday)',
        'All amenities included',
        'Perfect for surf weekends',
      ],
      isPopular: true,
    },
    {
      title: 'Week Explorer',
      price: 'R4,995',
      period: '7 consecutive nights',
      features: [
        'Save R1,665 vs nightly rate',
        'Private capsule pod',
        '3 breakfasts included',
        'Free surf lesson (1 hour)',
        'All amenities included',
        'Ideal for remote workers',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2>Simple, Transparent Pricing</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          All prices include WiFi, solar power, and access to communal spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>

      {/* Deposit Policy */}
      <div className="bg-brand-yellow bg-opacity-10 border-2 border-brand-yellow rounded-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-center mb-3 text-brand-red">Important: Deposit Policy</h3>
        <p className="text-center">
          A R500 refundable deposit is required for all bookings. Foreign guests must pay in cash; South African guests can pay by card with EFT refund.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
