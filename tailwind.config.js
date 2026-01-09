/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0B5ED7',
        'deep-sea-blue': '#083E8C',
        'turquoise-surf': '#1ECAD3',
        'hut-yellow': '#FFD400',
        'navy-ink': '#0B1F3B',
        'sand-white': '#F6F1E6',
        'pure-white': '#FFFFFF',
        'island-red': '#E63946',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
