import React from 'react';

const Amenities = () => {
  const amenities = [
    { title: 'Strong WiFi', description: 'Fast, reliable internet throughout' },
    { title: 'Beach Access', description: 'Cross the road to East Beach' },
    { title: 'Solar Power', description: 'No loadshedding, stay powered 24/7' },
    { title: 'Self-Catering Kitchen', description: 'Fridge, stove, microwave, air fryer' },
    { title: 'Cowork Spaces', description: '3 desks in quiet library area' },
    { title: 'Laundry Service', description: 'Washing & drying at reception (fee applies)' },
    { title: 'Bike Rentals', description: 'Explore Muizenberg on two wheels' },
    { title: 'Surf Equipment', description: 'Wetsuits & boards available (book ahead)' },
    { title: 'Breakfast Available', description: 'R110pp: eggs, toast, fruit, coffee' },
    { title: 'Braai Facilities', description: 'BBQ area with wood/charcoal for sale' },
    { title: 'Rooftop Deck', description: 'Ocean views, yoga space, sunrise spot' },
    { title: '420-Friendly', description: 'Designated outdoor smoking areas' },
  ];

  return (
    <section id="amenities" className="section-container bg-white">
      <h2 className="text-center mb-12">Everything You Need</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="bg-brand-sand rounded-lg p-6 border-2 border-gray-200">
            <h3>{amenity.title}</h3>
            <p className="text-gray-600">{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
