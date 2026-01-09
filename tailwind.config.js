/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // REAL Cape Capsules Palette from logo/brand guidelines
        'ocean-blue': '#0B5ED7',      // Primary blue (links only)
        'deep-sea-blue': '#083E8C',   // Navy accent
        'turquoise-surf': '#1ECAD3',  // Bright turquoise accent
        'hut-yellow': '#FFD400',      // Beach hut yellow (all buttons)
        'island-red': '#E63946',      // Vibrant red (header/footer/badges)
        'sand-white': '#F6F1E6',      // Warm sand background
        'pure-white': '#FFFFFF',      // Clean white
        'navy-ink': '#0B1F3B',        // Dark navy for text
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
}
