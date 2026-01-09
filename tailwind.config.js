/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LOCKED Muizenberg Beach Huts Palette
        'ocean-blue': '#0A7C9E',      // Primary: buttons, links, CTAs
        'deep-sea': '#083E8C',         // Depth: hover states, footer
        'turquoise-surf': '#1ECAD3',   // Highlights: gradients, surf accents
        'hut-yellow': '#FFD400',       // Urgent: Book Now CTAs only
        'hut-red': '#E63946',          // Promo: badges, sale tags (minimal use)
        'hut-green': '#3BCEAC',        // Success: checkmarks, badges
        'navy-ink': '#1A365D',         // Text: body, nav, footer text
        'sand-white': '#F6F1E6',       // Backgrounds: cards, booking blocks
        'pure-white': '#FFFFFF',       // Hero text, clean headers
      },
      fontFamily: {
        // LOCKED Typography
        'poppins': ['Poppins', 'sans-serif'],  // Headings: 700 weight
        'inter': ['Inter', 'sans-serif'],      // Body: 400 weight
      },
      fontSize: {
        // LOCKED Type Scale
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],  // 56px
        'h1': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],       // 48px
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],     // 40px
        'h3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],    // 28px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],     // 16px
        'small': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }], // 14px
      },
      backgroundImage: {
        // LOCKED Gradients - ONLY these are allowed
        'hero-sky-sea': 'linear-gradient(180deg, #5FA9FF 0%, #3B82F6 40%, #0A7C9E 100%)',
        'ocean-depth': 'linear-gradient(180deg, #1ECAD3 0%, #0A7C9E 60%, #083E8C 100%)',
        'primary-button': 'linear-gradient(135deg, #0A7C9E 0%, #1ECAD3 100%)',
        'card-subtle': 'linear-gradient(180deg, #FFFFFF 0%, #F6F1E6 100%)',
      },
      boxShadow: {
        // LOCKED Shadows
        'button': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        // Minimal responsive scale (extends default)
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
      },
      borderRadius: {
        // LOCKED Radius Scale
        'card': '1rem',      // 16px - cards, booking blocks
        'button': '0.75rem', // 12px - buttons, badges
      },
      screens: {
        // LOCKED Breakpoints (extends defaults: sm:640, md:768, lg:1024, xl:1280)
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
