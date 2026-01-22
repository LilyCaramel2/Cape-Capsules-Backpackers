/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF0080',
          cyan: '#00FFFF',
          gold: '#FFD700',
          purple: '#BC13FE',
        },
        dark: {
          bg: '#050505',
          card: '#121212',
          border: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 10px rgba(255, 0, 128, 0.7), 0 0 20px rgba(255, 0, 128, 0.5)',
        'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(to right, #FF0080, #00FFFF)',
      }
    },
  },
  plugins: [],
}
