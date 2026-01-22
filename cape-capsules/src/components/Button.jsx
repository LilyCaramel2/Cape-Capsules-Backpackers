import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-primary group relative overflow-hidden ${className}`}
    >
      {/* Animated wave effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-turquoise-surf to-ocean-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
      
      {/* Button text */}
      <span className="relative z-10">{children}</span>
      
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-hut-yellow transition-opacity duration-500"></span>
    </button>
  );
};

export default Button;
