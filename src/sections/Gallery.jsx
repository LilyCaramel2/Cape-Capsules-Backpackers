import React from 'react';
import Button from '../components/Button';

const Gallery = () => {
  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Capsule interior with privacy curtain' },
    { src: '/images/gallery-2.jpg', alt: 'Beachfront view from balcony' },
    { src: '/images/gallery-3.jpg', alt: 'Communal kitchen' },
    { src: '/images/gallery-4.jpg', alt: 'Cowork space / library' },
    { src: '/images/gallery-5.jpg', alt: 'Rooftop deck with ocean view' },
    { src: '/images/gallery-6.jpg', alt: 'Beach huts across the road' },
    { src: '/images/gallery-7.jpg', alt: 'Common lounge area' },
    { src: '/images/gallery-8.jpg', alt: 'Surfers on Muizenberg Beach' },
  ];

  return (
    <section id="gallery" className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">See Cape Capsules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div 
                className="w-full h-full bg-gradient-to-br from-ocean-blue to-turquoise-surf flex items-center justify-center"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onError={(e) => {
                  e.target.style.backgroundImage = 'none';
                }}
              >
                <div className="text-white text-center p-4">
                  <p className="text-sm opacity-75">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Ready to Book Your Stay?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
