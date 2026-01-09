import React from 'react';

const ValueProps = () => {
  const props = [
    {
      title: 'Steps From The Surf',
      description: 'Walk to the waves in under 2 minutes. East Beach and Surfers Corner are right across the road—perfect for morning surf sessions and sunset strolls.',
    },
    {
      title: 'Private Capsule Pods',
      description: 'Your own cozy space with privacy curtain, reading light, power outlets, and personal safety deposit box. All the comfort of a private room at backpacker prices.',
    },
    {
      title: 'Community & Comfort',
      description: 'Shared kitchen, cowork spaces with fast WiFi, Netflix lounge, rooftop deck with ocean views. Connect with fellow travelers or find your quiet corner.',
    },
    {
      title: 'Solar Power, No Loadshedding',
      description: 'Stay connected and powered up 24/7. Our solar system keeps the lights on, WiFi running, and devices charged—even during South Africa\'s power cuts.',
    },
    {
      title: '420-Friendly Accommodation',
      description: 'Designated outdoor smoking areas. Cape Town is a cannabis-friendly city, and we welcome responsible adult use in our garden and balcony spaces.',
    },
    {
      title: 'Adventure Hub',
      description: 'Surf lessons, wetsuit rentals, bike hire, hiking guides, and boat trips available. We\'ll help you experience the best of Muizenberg and the Cape.',
    },
  ];

  return (
    <section className="section-container bg-brand-sand">
      <h2 className="text-center mb-12">Why Choose Cape Capsules?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.map((prop, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 border-2 border-gray-200"
          >
            <h3>{prop.title}</h3>
            <p className="text-gray-700">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
