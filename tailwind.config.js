/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LOCKED Cape Capsules Palette
        'ocean-blue': '#0B5ED7',
        'deep-sea': '#083E8C',
        'turquoise-surf': '#1ECAD3',
        'hut-yellow': '#FFD400',
        'island-red': '#E63946',
        'navy-ink': '#0B1F3B',
        'sand-white': '#F6F1E6',
      },
      fontFamily: {
        // LOCKED Typography
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        // LOCKED Primary Button Gradient (ONLY gradient allowed in UI)
        'primary-gradient': 'linear-gradient(135deg, #0B5ED7 0%, #1ECAD3 100%)',
      },
    },
  },
  plugins: [],
}
