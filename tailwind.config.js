/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ========================================
        // 🔒 LOCKED PALETTE - NON-NEGOTIABLE
        // ========================================
        // Based on Muizenberg Beach Huts + Ocean
        // Documented in: Cape Capsules Backpackers – Complete Project Hub (Notion)
        // Last Updated: 2026-01-09
        // ========================================
        
        // PRIMARY COLORS
        'ocean-blue': '#0B5ED7',      // Primary CTAs, key links, important UI elements
        'deep-sea': '#083E8C',         // Headings, dark sections, nav backgrounds
        'turquoise-surf': '#1ECAD3',   // Accents, gradient partner, hover states
        
        // ACCENT COLORS
        'hut-yellow': '#FFD400',       // Urgent CTAs, highlights, small badges (use sparingly)
        'hut-red': '#E63946',          // Promotions, warnings, very limited use only
        
        // NEUTRALS
        'navy-ink': '#0B1F3B',         // Body text on light backgrounds, footer text
        'sand-white': '#F6F1E6',       // Light backgrounds, cards, panels
        'pure-white': '#FFFFFF',       // Page background, hero text, text on dark
      },
      fontFamily: {
        // 🔒 LOCKED Typography
        'poppins': ['Poppins', 'sans-serif'],  // Headings: 700 weight
        'inter': ['Inter', 'sans-serif'],      // Body: 400 weight
      },
      fontSize: {
        // 🔒 LOCKED Type Scale
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],  // 56px
        'h1': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],       // 48px
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],     // 40px
        'h3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],    // 28px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],     // 16px
        'small': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }], // 14px
      },
      backgroundImage: {
        // 🔒 LOCKED Gradients - ONLY these gradients are allowed
        // Primary Button Gradient (THE ONLY button gradient allowed)
        'primary-button': 'linear-gradient(135deg, #0B5ED7 0%, #1ECAD3 100%)',
        
        // Hero Section Gradient (sky to sea effect)
        'hero-sky-sea': 'linear-gradient(180deg, #5FA9FF 0%, #3B82F6 40%, #0B5ED7 100%)',
        
        // Optional card/section gradients (use sparingly)
        'ocean-depth': 'linear-gradient(180deg, #1ECAD3 0%, #0B5ED7 60%, #083E8C 100%)',
        'card-subtle': 'linear-gradient(180deg, #FFFFFF 0%, #F6F1E6 100%)',
      },
      boxShadow: {
        // 🔒 LOCKED Shadows
        'button': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        // Minimal responsive scale (extends Tailwind defaults)
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
      },
      borderRadius: {
        // 🔒 LOCKED Radius Scale
        'card': '1rem',      // 16px - cards, booking blocks
        'button': '0.75rem', // 12px - buttons, badges
      },
      screens: {
        // 🔒 LOCKED Breakpoints (extends Tailwind defaults: sm:640, md:768, lg:1024, xl:1280)
        '2xl': '1440px',
      },
      textShadow: {
        // Custom text shadow for hero text
        'hero': '0 2px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    // Custom plugin for text-shadow utility
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-hero': {
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
