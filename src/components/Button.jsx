import React from 'react'

/**
 * Cape Capsules Button Component - LOCKED VARIANTS
 * 
 * Variants:
 * - primary: Ocean blue gradient (THE ONLY gradient allowed on buttons)
 * - secondary: Transparent with ocean blue border
 * - urgent: Hut yellow background (for Book Now CTAs only)
 */

function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-button font-poppins font-semibold text-base transition-all duration-300 ease-in-out'
  
  const variantStyles = {
    primary: 'bg-primary-button text-pure-white hover:shadow-button-hover hover:-translate-y-0.5 shadow-button',
    secondary: 'bg-transparent border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-pure-white',
    urgent: 'bg-hut-yellow text-navy-ink font-bold hover:bg-yellow-400 hover:shadow-button-hover shadow-button'
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`
  
  // If href provided, render as link
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...props}
      >
        {children}
      </a>
    )
  }
  
  // Otherwise render as button
  return (
    <button 
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
