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
    <section id="location" className="section-container bg-white">
      <h2 className="text-center mb-12">Prime Muizenberg Beachfront</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Google Maps Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8!2d18.47!3d-34.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s43%20Royal%20Road%2C%20Muizenberg%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1234567890"
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Cape Capsules Location - 43 Royal Road, Muizenberg"
          ></iframe>
        </div>

        {/* Location Info */}
        <div>
          <div className="mb-8">
            <h3>Address</h3>
            <p className="text-gray-700">
              <strong>Cape Capsules Backpackers</strong><br />
              43 Royal Road<br />
              Muizenberg, 7945<br />
              Cape Town, Western Cape<br />
              South Africa
            </p>
          </div>

          <div className="mb-8">
            <h3>Nearby Attractions</h3>
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
            <h3>Transport</h3>
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
    </section>
  );
};

export default Location;
