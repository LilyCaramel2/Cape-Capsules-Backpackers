import React from 'react'
import Button from '../components/Button'

/**
 * Cape Capsules Value Propositions Section
 * 
 * 3 value cards highlighting:
 * 1. Muizenberg surf culture & beachfront location
 * 2. Community vibe & social atmosphere
 * 3. Long-stay & digital nomad friendly
 */

function ValueProps() {
  const values = [
    {
      icon: '🏄',
      title: 'Surf & Beach Life',
      description: 'Wake up to rolling waves just steps from your capsule. Muizenberg is South Africa\'s surf capital — perfect for beginners and seasoned riders alike.',
      features: [
        'Walking distance to surf schools',
        'Board storage available',
        'Wetsuit rental nearby',
        'Sunrise beach walks'
      ]
    },
    {
      icon: '🌍',
      title: 'Community & Connection',
      description: 'Meet fellow travellers, digital nomads, and locals in our vibrant common areas. Solo travellers always feel at home here.',
      features: [
        'Shared kitchen & dining space',
        'Regular social events',
        'Local tips & travel advice',
        'Safe & welcoming vibe'
      ]
    },
    {
      icon: '💻',
      title: 'Digital Nomad Ready',
      description: 'Long-stay discounts, fast WiFi, and solar-powered reliability make Cape Capsules perfect for remote workers exploring Cape Town.',
      features: [
        'Weekly & monthly rates',
        'High-speed fibre WiFi',
        'Quiet work-friendly spaces',
        'Solar backup power'
      ]
    }
  ]

  return (
    <section id="why-stay" className="py-20 bg-sand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-h2 text-deep-sea mb-4">
            Why Choose Cape Capsules?
          </h2>
          <p className="font-inter text-body text-navy-ink max-w-2xl mx-auto">
            More than just a place to sleep — your basecamp for Muizenberg adventures, community, and coastal living.
          </p>
        </div>
        
        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{value.icon}</div>
              
              {/* Title */}
              <h3 className="font-poppins font-semibold text-h3 text-ocean-blue mb-3">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="font-inter text-body text-navy-ink mb-6">
                {value.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2">
                {value.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="font-inter text-body text-navy-ink flex items-start"
                  >
                    <span className="text-turquoise-surf mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" href="#booking">
            Book Your Stay Now
          </Button>
        </div>
        
      </div>
    </section>
  )
}

export default ValueProps
