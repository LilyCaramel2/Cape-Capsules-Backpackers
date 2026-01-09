import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const Booking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [capsuleType, setCapsuleType] = useState('private');
  const [nights, setNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const pricing = {
    private: 380,
    weekend: 2995, // 3 nights Fri-Sun
    week: 4995,    // 7 nights
  };

  // Calculate nights and total price
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const nightCount = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setNights(nightCount > 0 ? nightCount : 0);

      if (capsuleType === 'private') {
        setTotalPrice(nightCount * pricing.private * guests);
      } else if (capsuleType === 'weekend') {
        setTotalPrice(pricing.weekend * guests);
      } else if (capsuleType === 'week') {
        setTotalPrice(pricing.week * guests);
      }
    }
  }, [checkIn, checkOut, guests, capsuleType]);

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book:

📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut}
👥 Guests: ${guests}
🛏️ Type: ${capsuleType === 'private' ? 'Private Capsule' : capsuleType === 'weekend' ? 'Weekend Escape' : 'Week Explorer'}
🌙 Nights: ${nights}
💰 Total: R${totalPrice.toLocaleString()}

Please confirm availability!`;
    
    window.open(`https://wa.me/27824131499?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePayFastBooking = () => {
    alert('PayFast integration coming soon! For now, please book via WhatsApp.');
    // TODO: Integrate PayFast payment gateway
  };

  return (
    <section id="booking" className="section-container bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mb-4">Check Availability & Book</h2>
        <p className="text-center text-gray-600 mb-12">Zero commission. Direct booking. Instant confirmation.</p>

        <div className="bg-sand-white rounded-2xl p-8 shadow-xl border-2 border-hut-yellow">
          
          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-semibold mb-2">Check-In Date</label>
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-turquoise-surf focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Check-Out Date</label>
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-turquoise-surf focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Guest & Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-semibold mb-2">Number of Guests</label>
              <select 
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-turquoise-surf focus:outline-none transition-colors"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Capsule Type</label>
              <select 
                value={capsuleType}
                onChange={(e) => setCapsuleType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-turquoise-surf focus:outline-none transition-colors"
              >
                <option value="private">Private Capsule (R{pricing.private}/night)</option>
                <option value="weekend">Weekend Escape (R{pricing.weekend.toLocaleString()}/3 nights)</option>
                <option value="week">Week Explorer (R{pricing.week.toLocaleString()}/7 nights)</option>
              </select>
            </div>
          </div>

          {/* Price Summary */}
          {nights > 0 && (
            <div className="bg-white rounded-lg p-6 mb-6 border-2 border-turquoise-surf">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Nights:</span>
                <span className="font-bold">{nights}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Guests:</span>
                <span className="font-bold">{guests}</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-3xl font-black text-island-red">R{totalPrice.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">+ R500 refundable deposit (paid on arrival)</p>
              </div>
            </div>
          )}

          {/* Booking Buttons */}
          <div className="space-y-4">
            <Button onClick={handleWhatsAppBooking} className="w-full text-lg py-4">
              📱 Book via WhatsApp (Instant Response)
            </Button>
            
            <button
              onClick={handlePayFastBooking}
              className="w-full bg-turquoise-surf text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              💳 Pay Now with PayFast (Coming Soon)
            </button>

            <p className="text-center text-sm text-gray-600">
              Questions? Call us: <a href="tel:+27824131499" className="text-ocean-blue font-semibold">+27 82 413 1499</a>
            </p>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="text-center p-4">
            <div className="text-3xl mb-2">✓</div>
            <p className="text-sm font-semibold">Zero Commission</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm font-semibold">Instant Confirmation</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-sm font-semibold">Secure Payments</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">💯</div>
            <p className="text-sm font-semibold">Best Price Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
