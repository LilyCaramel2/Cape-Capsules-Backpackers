import React from 'react';

const Location = () => {
  const attractions = [
    { name: 'East Beach', distance: '2 min walk', description: 'kite surfing paradise' },
    { name: 'Surfers Corner', distance: '5 min walk', description: 'pubs, clubs, restaurants' },
    { name: 'St. James Tidal Pool', distance: '10 min walk', description: '' },
    { name: 'Kalk Bay', distance: '15 min drive', description: 'cafes, art, thrift shops' },
    { name: 'False Bay', distance: 'beachfront', description: 'Swimming, surfing, beach walks' },
    { name: 'Muizenberg Peak', distance: 'hiking trail', description: 'ocean views' },
  ];

  return (
    <section id="location" className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Prime Muizenberg Beachfront</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-ocean-blue to-turquoise-surf flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="text-2xl font-bold mb-2">🗺️ Google Maps</p>
                <p className="text-sm">Map embed will be inserted here</p>
                <p className="text-xs mt-4 opacity-75">[Placeholder for Google Maps iframe]</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">Address</h3>
              <p className="text-gray-700">
                <strong>Cape Capsules Backpackers</strong><br />
                Muizenberg Beach<br />
                Cape Town, Western Cape<br />
                South Africa
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Nearby Attractions</h3>
              <ul className="space-y-3">
                {attractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-turquoise-surf mt-1">•</span>
                    <div>
                      <strong>{attraction.name}</strong> - {attraction.distance}
                      {attraction.description && <span className="text-gray-600"> ({attraction.description})</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Transport</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-turquoise-surf">✓</span>
                  <span><strong>Train:</strong> Muizenberg Station (10 min walk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-turquoise-surf">✓</span>
                  <span><strong>Airport:</strong> Cape Town International (35 min drive)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-turquoise-surf">✓</span>
                  <span><strong>Uber/Bolt:</strong> Available 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
