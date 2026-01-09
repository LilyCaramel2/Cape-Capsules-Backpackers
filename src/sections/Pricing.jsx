import React from 'react'
import Button from '../components/Button'

/**
 * Cape Capsules Pricing Section
 * 
 * 3 pricing tiers based on Notion specs:
 * 1. R380/night - Dorm Capsule (single night)
 * 2. R2,995 - Weekly Stay (7 nights)
 * 3. R4,995 - Monthly Nomad (30 nights)
 */

function Pricing() {
  const pricingTiers = [
    {
      name: 'Single Night',
      description: 'Perfect for short stays and weekend getaways',
      price: 'R380',
      period: 'per night',
      features: [
        'Private capsule bed',
        'Shared bathroom facilities',
        'Access to kitchen & common areas',
        'Free WiFi',
        'Secure locker storage',
        'R500 refundable deposit'
      ],
      cta: 'Book Now',
      variant: 'secondary',
      popular: false
    },
    {
      name: 'Weekly Stay',
      description: 'Best value for surf trips and exploring Cape Town',
      price: 'R2,995',
      period: '7 nights',
      features: [
        'Everything in Single Night',
        'Save R665 vs nightly rate',
        'Priority bed selection',
        'Weekly linen change included',
        'Extended quiet work hours',
        'Flexible check-in/out times'
      ],
      cta: 'Book Weekly',
      variant: 'primary',
      popular: true,
      savings: 'Save 15%'
    },
    {
      name: 'Monthly Nomad',
      description: 'For digital nomads settling into Muizenberg life',
      price: 'R4,995',
      period: '30 nights',
      features: [
        'Everything in Weekly Stay',
        'Save R6,405 vs nightly rate',
        'Dedicated workspace access',
        'Monthly community dinner',
        'Local discount card',
        'Priority re-booking'
      ],
      cta: 'Book Monthly',
      variant: 'secondary',
      popular: false,
      savings: 'Save 56%'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-h2 text-deep-sea mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-inter text-body text-navy-ink max-w-2xl mx-auto">
            No hidden fees. All rates include WiFi, kitchen access, and common areas. Weekly and monthly discounts automatically applied.
          </p>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`bg-sand-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative ${
                tier.popular ? 'ring-4 ring-ocean-blue md:-translate-y-4' : 'hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ocean-blue text-pure-white font-poppins font-semibold text-sm px-6 py-2 rounded-full shadow-button">
                    🌟 Most Popular
                  </span>
                </div>
              )}
              
              {/* Savings Badge */}
              {tier.savings && (
                <div className="absolute -top-4 -right-4">
                  <span className="bg-hut-red text-pure-white font-poppins font-bold text-xs px-4 py-2 rounded-full shadow-button">
                    {tier.savings}
                  </span>
                </div>
              )}
              
              {/* Tier Name & Description */}
              <div className="mb-6">
                <h3 className="font-poppins font-semibold text-h3 text-ocean-blue mb-2">
                  {tier.name}
                </h3>
                <p className="font-inter text-small text-navy-ink">
                  {tier.description}
                </p>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="font-poppins font-bold text-5xl text-deep-sea">
                    {tier.price}
                  </span>
                </div>
                <p className="font-inter text-small text-navy-ink mt-1">
                  {tier.period}
                </p>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="font-inter text-body text-navy-ink flex items-start"
                  >
                    <span className="text-turquoise-surf mr-2 mt-1 text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                variant={tier.variant} 
                href="#booking" 
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="bg-sand-white rounded-card p-6 text-center">
          <p className="font-inter text-body text-navy-ink">
            💳 <strong className="text-ocean-blue">R500 refundable deposit</strong> required for all bookings. Cash or card accepted. PayFast secure payment gateway.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Pricing
