import React from 'react';
import Button from './Button';

const PricingCard = ({ 
  badge, 
  title, 
  price, 
  per, 
  savings, 
  features, 
  cta, 
  variant = 'secondary',
  borderColor = 'ocean-blue',
  popular = false 
}) => {
  const borderColors = {
    'ocean-blue': 'border-t-ocean-blue',
    'hut-yellow': 'border-t-hut-yellow',
    'turquoise-surf': 'border-t-turquoise-surf',
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg border-t-4 ${borderColors[borderColor]} p-8 hover:shadow-xl transition-shadow duration-300 relative ${popular ? 'scale-105' : ''}`}>
      {badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-hut-yellow text-navy-ink px-4 py-1 rounded-full text-sm font-bold">
            {badge}
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      
      <div className="text-center mb-6">
        <span className="text-5xl font-bold text-ocean-blue">{price}</span>
        <span className="text-gray-600 text-lg">{per}</span>
      </div>
      
      {savings && (
        <p className="text-center text-green-600 font-semibold mb-4">{savings}</p>
      )}
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-turquoise-surf mt-1">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={variant} className="w-full mb-4">
        {cta}
      </Button>
      
      <p className="text-xs text-center text-gray-500">R500 refundable deposit</p>
    </div>
  );
};

export default PricingCard;
