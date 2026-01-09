import React from 'react';
import Button from '../components/Button';

const Reviews = () => {
  const reviews = [
    {
      name: 'Peter',
      location: 'Brazil',
      date: 'August 2025',
      rating: 5,
      quote: 'They go out of their way for you. I have stayed at Cape Capsules 3 times already—last stay 1½ months during winter of 2025. I will be back!',
    },
    {
      name: 'Ulrich',
      location: 'Berlin',
      date: 'July 2025',
      rating: 5,
      quote: 'What a nice happy place! Stayed from 12-30/7/25... I truly felt at home. Lovely staff, friendly and polite. Coming back next year. Bis Bald!',
    },
    {
      name: 'Hans Müller',
      location: 'Germany',
      date: 'September 2024',
      rating: 5,
      quote: 'Best Surfing Hostel in Muizenberg! Away from the madness where everybody crowds the waters, but close enough to walk to go surfing. The place has a good vibe and the staff is geil. I call this my new home from home.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-navy-ink text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-white">What Our Guests Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-hut-yellow text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-200 mb-4 italic">"{review.quote}"</p>
              <div className="border-t border-gray-500 pt-3">
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-gray-300">{review.location} • {review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary">
            Read More Reviews on Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
