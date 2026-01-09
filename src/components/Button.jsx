import React from 'react';

const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-block text-center text-lg shadow-lg hover:shadow-2xl transform hover:scale-105';
  
  const variants = {
    primary: 'bg-hut-yellow text-navy-ink hover:bg-yellow-400 border-4 border-navy-ink',
    secondary: 'bg-ocean-blue text-white hover:bg-deep-sea-blue border-4 border-white',
    urgent: 'bg-island-red text-white hover:bg-red-600 border-4 border-navy-ink animate-pulse',
    turquoise: 'bg-turquoise-surf text-white hover:bg-cyan-400 border-4 border-navy-ink',
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
