import React from 'react'
import Button from '../components/Button'

/**
 * Cape Capsules Booking Section
 * 
 * Clear "How to book" flow with:
 * - Primary CTA: Book Now / Check Availability
 * - Secondary CTA: WhatsApp direct contact
 * - Nightsbridge context per Notion commercial plan
 */

function Booking() {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-ocean-blue via-deep-sea to-turquoise-surf">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-poppins font-bold text-h2 text-pure-white text-shadow-hero mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="font-inter text-lg text-white/90 max-w-2xl mx-auto">
            Choose your dates and secure your capsule in just a few clicks. We'll confirm your booking within 24 hours.
          </p>
        </div>
        
        {/* Booking Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-poppins font-semibold text-xl text-pure-white mb-2">
              1. Check Availability
            </h3>
            <p className="font-inter text-small text-white/80">
              Select your dates and preferred capsule type
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-poppins font-semibold text-xl text-pure-white mb-2">
              2. Secure Payment
            </h3>
            <p className="font-inter text-small text-white/80">
              PayFast secure gateway or WhatsApp direct payment
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-poppins font-semibold text-xl text-pure-white mb-2">
              3. Confirmation
            </h3>
            <p className="font-inter text-small text-white/80">
              Receive booking details and check-in instructions
            </p>
          </div>
          
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="urgent" 
            href="https://capecapsules.nightsbridge.co.za/book" 
            className="w-full sm:w-auto text-lg"
          >
            📅 Check Availability
          </Button>
          <Button 
            variant="secondary" 
            href="https://wa.me/27824131499?text=Hi!%20I'd%20like%20to%20book%20a%20capsule%20at%20Cape%20Capsules" 
            className="w-full sm:w-auto text-lg"
          >
            💬 WhatsApp Us
          </Button>
        </div>
        
        {/* Additional Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20">
          <p className="font-inter text-small text-white/90 mb-3">
            🔒 <strong>Secure Booking:</strong> We use <strong>PayFast</strong> (South Africa's leading payment gateway) and <strong>Nightsbridge</strong> booking engine for safe, reliable reservations.
          </p>
          <p className="font-inter text-small text-white/80">
            Prefer to chat first? <a href="https://wa.me/27824131499" className="underline hover:text-hut-yellow transition-colors">WhatsApp us</a> for questions, special requests, or group bookings.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Booking
