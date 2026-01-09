import React from 'react';
import Button from './Button';

const PricingCard = ({ title, price, period, features, isPopular = false }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 flex flex-col">
      {isPopular && (
        <div className="bg-brand-red text-white text-sm font-bold px-4 py-1 rounded-full mb-4 text-center">
          Most Popular
        </div>
      )}
      
      <h3 className="text-center">{title}</h3>
      
      <div className="text-center my-6">
        <div className="text-4xl font-black text-gray-900">{price}</div>
        <div className="text-sm text-gray-600">{period}</div>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-brand-yellow mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="w-full">
        Book {title}
      </Button>
      
      <p className="text-xs text-center mt-4 text-gray-600">
        <span className="bg-brand-yellow bg-opacity-20 px-2 py-1 rounded">R500 refundable deposit applies</span>
      </p>
    </div>
  );
};

export default PricingCard;
