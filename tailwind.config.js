/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LOCKED BRAND TOKENS - USE ONLY THESE 4
        'brand-blue': '#0B5ED7',      // Links ONLY, never backgrounds
        'brand-yellow': '#FFC928',     // ALL buttons & highlights
        'brand-red': '#C1121F',        // Header, footer, badges
        'brand-sand': '#F6F1E6',       // Body background, all sections
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
