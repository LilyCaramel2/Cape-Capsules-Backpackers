import React from 'react'

/**
 * Cape Capsules Gallery Section
 * 
 * 8 image placeholders in Tailwind grid layout
 * Ready for future asset drop with alt text
 * Images to showcase:
 * - Beachfront location
 * - Capsule interiors
 * - Common areas
 * - Muizenberg beach views
 */

function Gallery() {
  const galleryImages = [
    {
      placeholder: '🏖️',
      alt: 'Cape Capsules beachfront exterior with Muizenberg beach huts',
      caption: 'Beachfront Location'
    },
    {
      placeholder: '🛌',
      alt: 'Modern capsule bed interior with privacy curtain and reading light',
      caption: 'Private Capsules'
    },
    {
      placeholder: '🌊',
      alt: 'Muizenberg beach waves with surfers at sunrise',
      caption: 'Surf Paradise'
    },
    {
      placeholder: '🍴',
      alt: 'Shared kitchen and dining area with communal tables',
      caption: 'Common Kitchen'
    },
    {
      placeholder: '🏝️',
      alt: 'Colorful Muizenberg beach huts with mountain backdrop',
      caption: 'Iconic Beach Huts'
    },
    {
      placeholder: '💻',
      alt: 'Coworking lounge space with fast WiFi and desks',
      caption: 'Work-Friendly Spaces'
    },
    {
      placeholder: '☕',
      alt: 'Cozy common lounge with comfortable seating and plants',
      caption: 'Relax & Connect'
    },
    {
      placeholder: '🌅',
      alt: 'Sunset view from Cape Capsules terrace overlooking ocean',
      caption: 'Sunset Views'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-h2 text-deep-sea mb-4">
            See Cape Capsules
          </h2>
          <p className="font-inter text-body text-navy-ink max-w-2xl mx-auto">
            Your beachfront home in Muizenberg — where surf culture meets modern capsule comfort.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-sand-white group cursor-pointer"
            >
              {/* Placeholder (will be replaced with actual images) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {image.placeholder}
                </div>
                <p className="font-inter text-small text-navy-ink text-center px-4 font-semibold">
                  {image.caption}
                </p>
              </div>
              
              {/* Future: Replace this div with <img> when assets are ready */}
              {/* Example:
              <img 
                src={`/images/gallery/${image.filename}`} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              */}
              
              {/* Alt text stored in data attribute for future implementation */}
              <div className="sr-only">{image.alt}</div>
            </div>
          ))}
        </div>
        
        {/* Note for future asset drop */}
        <div className="mt-12 text-center">
          <p className="font-inter text-small text-navy-ink/60">
            📸 Gallery images coming soon — authentic Cape Capsules photos currently being processed
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Gallery
