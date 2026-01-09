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

  const services = [
    'Surf lessons with on-site instructors',
    'Hiking guides for Table Mountain',
    'Boat trips (weather permitting)',
    'Kite surfing school discounts',
    'Daily housekeeping in common areas',
    'Linen change service (R60)',
    'Safety deposit boxes in capsules',
  ];

  return (
    <section id="amenities" className="py-20 bg-sand-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Everything You Need</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-ocean-blue">{amenity.title}</h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Need More?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-turquoise-surf mt-1">✓</span>
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
