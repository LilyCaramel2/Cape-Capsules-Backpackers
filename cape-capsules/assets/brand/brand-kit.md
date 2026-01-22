# Cape Capsules Brand Kit
## Surf & Strategy Design System

*Last Updated: January 9, 2026*

---

## Color Palette

### Primary Colors
```css
--ocean-blue: #0B5ED7;      /* Primary CTAs, links, headers */
--deep-sea-blue: #083E8C;   /* Depth, authority, footer accents */
--turquoise-surf: #1ECAD3;  /* Energy, highlights, success states */
--hut-yellow: #FFD400;      /* Urgency, "Book Now", attention */
```

### Neutrals & Backgrounds
```css
--navy-ink: #0B1F3B;        /* Body text, dark sections */
--sand-white: #F6F1E6;      /* Warm backgrounds, alternating sections */
--pure-white: #FFFFFF;      /* Cards, clean sections */
```

### Accent (Use Sparingly)
```css
--island-red: #E63946;      /* Urgent badges ONLY, not primary palette */
```

### Caramel Digital Accent (For credit/footer only)
```css
--lotus-purple: #D946EF;
--lotus-cyan: #06B6D4;
```

---

## Typography

### Font Families
- **Headings:** Poppins (weights: 600, 700)
- **Body:** Inter (weights: 400, 500, 600)

### Type Scale
```css
/* Desktop */
h1: 3.5rem (56px), Poppins 700, line-height 1.1
h2: 2.5rem (40px), Poppins 700, line-height 1.2
h3: 1.75rem (28px), Poppins 600, line-height 1.3
h4: 1.25rem (20px), Poppins 600, line-height 1.4
body: 1rem (16px), Inter 400, line-height 1.6
small: 0.875rem (14px), Inter 400, line-height 1.5

/* Mobile */
h1: 2.5rem (40px)
h2: 2rem (32px)
h3: 1.5rem (24px)
```

---

## Button System

### Primary Button (Gradient)
```css
background: linear-gradient(135deg, #0B5ED7 0%, #1ECAD3 100%);
color: #FFFFFF;
font-family: Poppins;
font-weight: 600;
font-size: 1rem;
padding: 1rem 2rem;
border-radius: 0.75rem;
transition: all 0.3s ease;
box-shadow: 0 4px 12px rgba(11, 94, 215, 0.25);

/* Hover State */
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(11, 94, 215, 0.35);
```

### Secondary Button (Outline)
```css
background: transparent;
color: #0B5ED7;
border: 2px solid #0B5ED7;
font-family: Poppins;
font-weight: 600;
font-size: 1rem;
padding: 1rem 2rem;
border-radius: 0.75rem;
transition: all 0.3s ease;

/* Hover State */
background: #0B5ED7;
color: #FFFFFF;
transform: translateY(-2px);
```

### Urgent CTA Button
```css
background: #FFD400;
color: #0B1F3B;
font-family: Poppins;
font-weight: 700;
font-size: 1rem;
padding: 1rem 2rem;
border-radius: 0.75rem;
transition: all 0.3s ease;
box-shadow: 0 4px 12px rgba(255, 212, 0, 0.25);

/* Hover State */
background: #FFC800;
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(255, 212, 0, 0.35);
```

---

## Component Styling

### Cards
```css
background: #FFFFFF;
border-radius: 1rem;
padding: 2rem;
border: 2px solid #F6F1E6;
transition: all 0.3s ease;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

/* Hover State */
border-color: #1ECAD3;
transform: translateY(-4px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
```

### Section Spacing
```css
padding: 5rem 0; /* Desktop */
padding: 3rem 0; /* Mobile */
```

### Container Max Width
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 1.5rem;
```

---

## Design Principles

### DO:
- Use **flat colors** for backgrounds and sections
- Reserve **gradients ONLY for CTA buttons**
- Maintain **clean white space** between sections
- Use **Turquoise Surf** for highlights and success states
- Use **Hut Yellow** sparingly for urgency and attention
- Keep **Ocean Blue** as the primary brand color

### DON'T:
- No gradients in hero backgrounds
- No gradients in section backgrounds
- No multi-color gradients anywhere
- Don't use Island Red except for urgent badges
- Don't mix too many colors in one section

---

## Logo Usage

### File Location
- Primary: `/public/brand/cape-capsules-logo.jpg`
- Format: JPG, transparent background preferred
- Size: 150px width × auto height (header)
- Size: 200px width × auto height (footer)

### Spacing
- Minimum clear space: 20px on all sides
- Header logo: Left-aligned with 2rem padding
- Footer logo: Centered or left in footer grid

---

## Social Media

### Icon Style
- Outline/line style (not filled)
- Size: 24px × 24px
- Color: Ocean Blue (#0B5ED7) in header
- Color: Pure White (#FFFFFF) in footer
- Hover: Turquoise Surf (#1ECAD3)
- Transition: 0.3s ease

### Platforms
- Instagram (primary)
- Facebook
- TikTok
- WhatsApp (booking)

---

## Accessibility

### Contrast Ratios
- Navy Ink on Sand White: 10.2:1 ✓
- Navy Ink on Pure White: 13.1:1 ✓
- Ocean Blue on Pure White: 4.8:1 ✓
- Pure White on Ocean Blue: 4.8:1 ✓

### Focus States
```css
outline: 2px solid #1ECAD3;
outline-offset: 3px;
border-radius: 0.5rem;
```

### Screen Reader
- All images require alt text
- All buttons require aria-labels
- Navigation requires aria-current for active page

---

## Responsive Breakpoints

```css
/* Mobile First */
base: 320px - 639px
sm: 640px (tablet portrait)
md: 768px (tablet landscape)
lg: 1024px (desktop)
xl: 1280px (large desktop)
2xl: 1536px (extra large)
```

---

## Animation Guidelines

### Transitions
- Standard: `all 0.3s ease`
- Fast: `all 0.15s ease`
- Slow: `all 0.5s ease`

### Hover Effects
- Buttons: Lift 2px + shadow increase
- Cards: Lift 4px + border color change
- Links: Underline appear from left

### Page Load
- Fade in: 0.5s ease-in
- Stagger elements: 0.1s delay between

---

## File Naming Conventions

### Components
- PascalCase: `Header.jsx`, `PricingCard.jsx`
- One component per file
- Export default at bottom

### Assets
- kebab-case: `cape-capsules-logo.jpg`
- Descriptive: `hero-muizenberg-beach.jpg`
- Numbered series: `gallery-1.jpg` through `gallery-8.jpg`

### Styles
- kebab-case: `globals.css`, `typography.css`

---

## Brand Voice

### Tone
- Friendly but professional
- Adventurous but reliable
- Community-focused
- Transparent about pricing

### Key Phrases
- "Steps from the surf"
- "Your capsule by the ocean"
- "Cannabis-friendly accommodation"
- "Book direct and save"
- "A happy place for happy people" (original tagline - consider updating)

---

## Legal & Policies

### Always Display
- R500 refundable deposit on all bookings
- Foreign guests: Cash deposit only (no Swift refunds)
- South African guests: Card accepted, EFT refund
- Cleaning fee: One-time deduction from deposit
- Cannabis: Designated outdoor areas only
- Check-out: 10:00 AM sharp

---

## Credits

### Footer Credit
```html
Digital strategy & design by <a href="https://carameldigitaldesign.online">Caramel Digital Design</a>
```

### Link Styling
- Color: Turquoise Surf (#1ECAD3)
- Hover: Lotus Cyan (#06B6D4)
- Underline on hover

---

*This brand kit is maintained by Caramel Digital Design for Cape Capsules Backpackers.*