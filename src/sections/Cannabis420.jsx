import React from 'react';
import Button from '../components/Button';

const Cannabis420 = () => {
  return (
    <section id="cannabis" className="py-20" style={{ backgroundColor: 'rgba(30, 202, 211, 0.1)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Cannabis-Friendly Accommodation</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Cape Town embraces cannabis culture. We provide safe, designated spaces for responsible adult use.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
            <p className="text-gray-700 mb-6">
              Muizenberg is part of Cape Town's vibrant cannabis tourism scene. Unlike many hostels that ban use entirely, we welcome adult guests to enjoy cannabis in our designated outdoor areas.
            </p>

            <h3 className="text-2xl font-bold mb-4">Our Policy</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-turquoise-surf mt-1">✓</span>
                <span>Designated outdoor smoking areas (garden & balcony)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-turquoise-surf mt-1">✓</span>
                <span>No smoking inside the building</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-turquoise-surf mt-1">✓</span>
                <span>Must be 18+ and comply with SA cannabis laws</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-turquoise-surf mt-1">✓</span>
                <span>Respectful use around other guests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-turquoise-surf mt-1">✓</span>
                <span>Edibles welcome in your capsule</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Local Scene</h3>
            <p className="text-gray-700 mb-4">
              Cape Town has a thriving cannabis community with:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-turquoise-surf">•</span>
                <span>Legal dispensaries nearby</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-turquoise-surf">•</span>
                <span>420-friendly cafes and events</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-turquoise-surf">•</span>
                <span>Cannabis tours and experiences</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-turquoise-surf">•</span>
                <span>Social clubs and meetups</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">Ask at reception for recommendations and local tips.</p>
          </div>

          <div className="text-center">
            <Button variant="turquoise" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Your Cannabis-Friendly Stay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cannabis420;
