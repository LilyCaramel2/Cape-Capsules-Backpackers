import React from 'react';

const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'gradient-button text-white hover:shadow-lg hover:scale-105',
    secondary: 'border-2 border-ocean-blue text-ocean-blue bg-transparent hover:bg-ocean-blue hover:text-white',
    urgent: 'bg-hut-yellow text-navy-ink hover:bg-opacity-90 hover:shadow-lg',
    turquoise: 'border-2 border-turquoise-surf text-turquoise-surf bg-transparent hover:bg-turquoise-surf hover:text-white',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
