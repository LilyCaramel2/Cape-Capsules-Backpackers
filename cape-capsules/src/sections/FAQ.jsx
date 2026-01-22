import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What time is check-in and check-out?',
      answer: 'Check-in is from 2:00 PM. Check-out is strictly at 10:00 AM to allow cleaning for incoming guests. Early check-in or late check-out may be available—ask at reception.',
    },
    {
      question: 'Is breakfast included?',
      answer: 'Breakfast is available for R110 per person (toast, eggs, fruit, coffee/tea). Not included in standard rates but included in some packages.',
    },
    {
      question: 'How does the deposit work?',
      answer: 'All bookings require a R500 refundable deposit. Foreign guests pay cash (no Swift refunds); SA guests can pay by card with EFT refund. A cleaning fee is deducted.',
    },
    {
      question: 'Can I smoke cannabis on the property?',
      answer: 'Yes, in designated outdoor areas only (garden and balcony). No smoking inside the building. Must be 18+ and comply with South African cannabis laws.',
    },
    {
      question: 'Is there WiFi?',
      answer: 'Yes, fast and reliable WiFi throughout the property. We also have solar power, so no loadshedding interruptions.',
    },
    {
      question: 'Can I rent surf equipment?',
      answer: 'Yes! We rent wetsuits and surfboards. Please book at least one day in advance at reception.',
    },
    {
      question: 'How far is the beach?',
      answer: 'Literally across the road! East Beach and Surfers Corner are a 2-5 minute walk.',
    },
    {
      question: 'Is parking available?',
      answer: 'Street parking is available. Cape Town has standard urban parking considerations—ask staff for tips.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-sand-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-sand-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <span className={`text-ocean-blue text-2xl transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-sand-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
