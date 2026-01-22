# Same.new Build Instructions for Cape Capsules

## 🚨 URGENT: Color Palette Correction

**STOP.** Before building anything else, verify these colors in `tailwind.config.js`:

```javascript
colors: {
  'ocean-blue': '#0B5ED7',
  'deep-sea-blue': '#083E8C',
  'turquoise-surf': '#1ECAD3',
  'hut-yellow': '#FFD400',
  'navy-ink': '#0B1F3B',
  'sand-white': '#F6F1E6',
  'pure-white': '#FFFFFF',
  'island-red': '#E63946', // Use SPARINGLY
}
```

**DELETE these if they exist:**
- Sunset Orange
- Mint Green
- Coral Pink
- Any other colors not listed above

---

## 📁 Required Repo Structure

```
cape-capsules/
├── public/
│   ├── brand/
│   │   ├── cape-capsules-logo.jpg
│   │   └── Cape-Capsules-Surf-Business-Palette.jpg
│   ├── images/
│   │   ├── hero-placeholder.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   ├── gallery-4.jpg
│   │   ├── gallery-5.jpg
│   │   ├── gallery-6.jpg
│   │   ├── gallery-7.jpg
│   │   └── gallery-8.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── PricingCard.jsx
│   │   ├── ReviewCard.jsx
│   │   └── AmenityCard.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── ValueProps.jsx
│   │   ├── Pricing.jsx
│   │   ├── Amenities.jsx
│   │   ├── Cannabis420.jsx
│   │   ├── Gallery.jsx
│   │   ├── Reviews.jsx
│   │   ├── Booking.jsx
│   │   ├── Location.jsx
│   │   └── FAQ.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── typography.css
│   ├── App.jsx
│   └── main.jsx
├── assets/
│   ├── brand/
│   │   └── brand-kit.md
│   └── content/
│       └── website-sections.md
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Button Implementation

### Primary Button (Gradient - ONLY place gradients are used)
```jsx
<Button variant="primary">
  // Uses: background: linear-gradient(135deg, #0B5ED7 0%, #1ECAD3 100%)
</Button>
```

### Secondary Button (Outline)
```jsx
<Button variant="secondary">
  // Uses: border: 2px solid #0B5ED7, background: transparent
</Button>
```

### Urgent CTA Button
```jsx
<Button variant="urgent">
  // Uses: background: #FFD400, color: #0B1F3B
</Button>
```

---

## 🏗️ Component Requirements

### Header.jsx
**Must include:**
- Logo: `/public/brand/cape-capsules-logo.jpg` (150px width)
- Navigation: Home, Capsules, Amenities, 420 Friendly, Location, Gallery, FAQ, Contact
- "420 Friendly" link in Turquoise Surf color
- Phone: +27 82 413 1499
- CTA: "Book Direct & Save" (gradient button)
- Mobile: Hamburger menu, full-screen overlay with Navy Ink background

**Top Bar (above header):**
- Background: Navy Ink (#0B1F3B)
- Left: Location + phone
- Right: Social icons (Instagram, Facebook, TikTok, WhatsApp)
- Icon hover: Turquoise Surf

### Footer.jsx
**Must include:**
- Background: Navy Ink (#0B1F3B)
- 4-column grid (responsive to 1 column mobile)
- Column 1: Logo + tagline + social icons
- Column 2: Quick links
- Column 3: Stay types
- Column 4: Contact info
- Bottom bar: Copyright + Caramel Digital Design credit

**Footer Credit:**
```html
Digital strategy & design by <a href="https://carameldigitaldesign.online" className="text-turquoise-surf hover:text-lotus-cyan">Caramel Digital Design</a>
```

### Hero.jsx
**Layout:**
- Full viewport height (`min-h-screen`)
- Background: Hero image with gradient overlay
- Overlay: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)`
- **NO ocean gradients, NO multi-color backgrounds**

**Content:**
- H1: "Sleep Steps From The Waves"
- Subtitle: "Private beach capsules in Muizenberg from R380/night"
- Primary CTA: "Check Availability" (gradient button)
- Secondary CTA: "WhatsApp Us" (outline button)
- Trust badges: 4.4/5 Google, Beachfront, Solar Power, 420-Friendly

---

## 📱 Section Requirements

### ValueProps.jsx
- Background: Sand White (#F6F1E6)
- Title: "Why Choose Cape Capsules?"
- 6 cards in responsive grid (3 cols desktop, 2 cols tablet, 1 col mobile)
- Card hover: Lift 4px + Turquoise Surf border

### Pricing.jsx
- Background: Pure White (#FFFFFF)
- Title: "Simple, Transparent Pricing"
- 3 pricing cards with colored top borders:
  - Capsule: Ocean Blue border
  - Weekend: Hut Yellow border + "Most Popular" badge
  - Week: Turquoise Surf border
- ALL cards show: "R500 refundable deposit"
- Below cards: Deposit policy explanation

### Cannabis420.jsx (NEW SECTION)
- Background: Turquoise Surf (#1ECAD3) with opacity 0.1
- Title: "Cannabis-Friendly Accommodation"
- Policy list with checkmarks
- Local scene info
- CTA: "Book Your Cannabis-Friendly Stay" (Turquoise outline button)
- **This is strategic - Cape Town's missing 420 tourism market**

### Amenities.jsx
- Background: Sand White (#F6F1E6)
- Title: "Everything You Need"
- 12 amenity cards in grid (emoji/icon + title + short description)
- Additional services section below

### Gallery.jsx
- Background: Pure White (#FFFFFF)
- Title: "See Cape Capsules"
- 8 image placeholders (use SVG placeholders until images uploaded)
- Lightbox functionality on click
- CTA below: "Ready to Book Your Stay?" (gradient button)

### Reviews.jsx
- Background: Navy Ink (#0B1F3B)
- Title: "What Our Guests Say" (white text)
- 3 review cards with stars, names, dates, quotes
- CTA: "Read More Reviews on Google" (outline button)

### Booking.jsx
- Background: Sand White (#F6F1E6)
- Title: "Check Availability"
- Copy: "Book direct and save!"
- NightsBridge widget placeholder (iframe)
- Alternative: "Prefer WhatsApp?" CTA (Turquoise button)
- Contact info below

### Location.jsx
- Background: Pure White (#FFFFFF)
- Google Maps embed placeholder
- Address, nearby attractions, transport info

### FAQ.jsx (Optional but recommended)
- Accordion component
- Questions from website-sections.md
- Accordion icon color: Ocean Blue
- Open state background: Sand White

---

## 🚫 Design Rules (CRITICAL)

### DO:
- ✅ Use flat colors for all backgrounds
- ✅ Use gradient ONLY on primary CTA buttons
- ✅ Maintain clean white space (5rem desktop, 3rem mobile)
- ✅ Use Turquoise Surf for highlights and success
- ✅ Use Hut Yellow sparingly for urgency
- ✅ Keep Ocean Blue as primary brand color

### DON'T:
- ❌ NO gradients in hero background
- ❌ NO gradients in section backgrounds
- ❌ NO multi-color gradients anywhere except buttons
- ❌ NO Island Red except for urgent badges (sparingly)
- ❌ NO mixing too many colors in one section

---

## 📝 Content Source

All copy is in: `/assets/content/website-sections.md`

**Pull from that file for:**
- Hero headlines
- Value prop cards
- Pricing details
- Amenities list
- 420 section content
- Reviews
- FAQ answers
- Footer content

---

## 🔗 External Links

### Booking Widget
- NightsBridge: [Insert embed code from Cape Capsules account]

### Social Media
- Instagram: [Insert URL]
- Facebook: [Insert URL]
- TikTok: [Insert URL]
- WhatsApp: `https://wa.me/27824131499?text=Hi!%20I'd%20like%20to%20book%20a%20capsule`

### Phone Links
```html
<a href="tel:+27824131499">+27 82 413 1499</a>
```

---

## 🚀 Deployment Instructions

Once build is complete:

1. **Export from Same.new**
   - Download ZIP or connect to GitHub

2. **Upload Brand Assets**
   - Add logo to `/public/brand/`
   - Add gallery images to `/public/images/`

3. **Deploy to Cloudflare Pages**
   ```bash
   npm run build
   # Upload /dist folder to Cloudflare Pages
   ```

4. **Connect Custom Domain**
   - Point www.capecapsules.co.za to Cloudflare Pages

5. **Test Booking Widget**
   - Verify NightsBridge integration works
   - Test on mobile devices

---

## ✅ Final Checklist Before Deployment

- [ ] Color palette matches Surf & Strategy palette exactly
- [ ] No gradients except primary CTA buttons
- [ ] Logo displays correctly (150px in header)
- [ ] All navigation links work
- [ ] Mobile menu functions properly
- [ ] All CTAs point to booking widget or WhatsApp
- [ ] Footer credit links to Caramel Digital Design
- [ ] Social icons link to correct profiles
- [ ] Phone numbers are clickable tel: links
- [ ] R500 deposit mentioned in pricing and FAQ
- [ ] 420 section included and prominent
- [ ] Responsive on mobile, tablet, desktop
- [ ] All images have alt text
- [ ] Page loads under 3 seconds

---

## 🆘 Same.new Token Management

If tokens running low:

1. **Priority 1:** Color palette + Header + Footer + Hero
2. **Priority 2:** Pricing + Booking + 420 section
3. **Priority 3:** Gallery + Reviews + FAQ
4. **Priority 4:** Polish, animations, micro-interactions

**If tokens expire:**
- Export current build
- Upload to GitHub repo
- Continue manually or in new Same.new session

---

*Instructions prepared by Caramel Digital Design for Cape Capsules Backpackers website build.*