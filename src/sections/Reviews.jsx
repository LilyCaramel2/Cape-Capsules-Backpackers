import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'United Kingdom',
      rating: 5,
      text: 'Perfect spot for surfers! Walking distance to the beach, super clean, and the WiFi actually works. The capsule pods give you privacy without paying hotel prices.',
    },
    {
      name: 'Marco T.',
      location: 'Germany',
      rating: 5,
      text: 'Stayed for two weeks while working remotely. The cowork space was quiet, solar power meant no loadshedding issues, and the rooftop deck has incredible views.',
    },
    {
      name: 'Lerato N.',
      location: 'South Africa',
      rating: 4,
      text: 'Great weekend escape from Joburg. The 420-friendly policy is a bonus, and the staff are super helpful. Only wish breakfast was included in the rate!',
    },
  ];

  return (
    <section id="reviews" className="section-container bg-white">
      <h2 className="text-center mb-12">What Our Guests Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-brand-sand rounded-lg p-6 border-2 border-gray-200">
            <div className="mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-brand-yellow text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{review.text}</p>
            <div className="border-t pt-4">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-600">{review.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg mb-4">4.4/5 on Google Reviews</p>
        <a 
          href="https://search.google.com/local/reviews?placeid=ChIJaVzNqZQfzB0RLYrVhB6iM3s" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-blue"
        >
          Read More Reviews on Google
        </a>
      </div>
    </section>
  );
};

export default Reviews;
