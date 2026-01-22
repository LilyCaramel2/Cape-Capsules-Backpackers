# 🏖️ Cape Capsules Backpackers

**Modern beachfront capsule hostel website for Muizenberg, Cape Town**

A complete digital redesign for Cape Capsules Backpackers, transforming their outdated Springnest CMS site into a fast, mobile-first React application with seamless booking integration and optimized direct bookings.

---

## 🚀 Project Overview

**Business**: Beachfront capsule hostel in Muizenberg, Cape Town  
**Target Market**: Young travellers, digital nomads, surf tourists, budget-conscious but style-aware guests  
**Current Live Site**: [https://www.capecapsules.co.za](https://www.capecapsules.co.za) (Springnest CMS)  
**Deployment Target**: Cloudflare Pages

### Goals
- Replace slow Springnest CMS with blazing-fast React + Vite + Tailwind stack
- Increase direct bookings and reduce Nightsbridge dependency
- Implement PayFast payment gateway (save R400-R1,100/month)
- Mobile-first responsive design optimized for travellers on-the-go
- Improve Google Business Profile visibility and SEO

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Poppins, Inter)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Version Control**: GitHub

---

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/LilyCaramel2/Cape-Capsules-Backpackers.git
   cd Cape-Capsules-Backpackers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   
   Production files will be generated in the `dist/` directory.

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🎨 Locked Design System

**⚠️ CRITICAL**: The design system is **LOCKED and NON-NEGOTIABLE**. All colors, typography, and component styles are defined in the [Notion Project Hub](https://www.notion.so/2e32cc971ee881b99ce8df8e1ac386cf) and must not be modified without authorization.

### Color Palette

**Primary Colors**
- `ocean-blue` (#0B5ED7) - Primary CTAs, key links
- `deep-sea` (#083E8C) - Headings, navigation, footer
- `turquoise-surf` (#1ECAD3) - Accents, gradient partner, hover states

**Accent Colors**
- `hut-yellow` (#FFD400) - Urgent CTAs (Book Now button only)
- `hut-red` (#E63946) - Promotions, limited use

**Neutrals**
- `navy-ink` (#0B1F3B) - Body text
- `sand-white` (#F6F1E6) - Light backgrounds, cards
- `pure-white` (#FFFFFF) - Page background, hero text

### Typography

- **Headings**: Poppins 700
  - H1: 3.5rem (56px)
  - H2: 2.5rem (40px)
  - H3: 1.75rem (28px)
- **Body**: Inter 400, 1rem (16px), line-height 1.6
- **Buttons**: Poppins 600, 1rem (16px)

### Button Rules

**PRIMARY BUTTON** (MANDATORY):
```css
background: linear-gradient(135deg, #0B5ED7 0%, #1ECAD3 100%);
color: #FFFFFF;
padding: 1rem 2rem;
border-radius: 0.75rem;
```

**Secondary Button**:
```css
background: transparent;
border: 2px solid #0B5ED7;
color: #0B5ED7;
```

**Urgent CTA**:
```css
background: #FFD400;
color: #0B1F3B;
font-weight: 700;
```

**⚠️ RULE**: The primary button gradient is **THE ONLY gradient allowed** in UI elements (excluding hero section background).

---

## 📁 Project Structure

```
Cape-Capsules-Backpackers/
├── public/
│   ├── brand/            # Logo assets
│   └── images/           # Gallery and section images
├── src/
│   ├── components/
│   │   ├── Button.jsx    # ✅ LOCKED - 3 variants (primary, secondary, urgent)
│   │   ├── Header.jsx    # ✅ COMPLETE - Sticky nav with top bar
│   │   └── Footer.jsx    # ✅ COMPLETE - 4 columns, R500 deposit note
│   ├── sections/
│   │   ├── Hero.jsx          # ✅ COMPLETE - Girl surfer logo, gradient, CTAs
│   │   ├── ValueProps.jsx    # ✅ COMPLETE - 6 value cards
│   │   ├── Pricing.jsx       # ✅ COMPLETE - R380/R2995/R4995 tiers
│   │   ├── Booking.jsx       # ✅ COMPLETE - How to book flow
│   │   ├── Gallery.jsx       # ✅ COMPLETE - 8 image placeholders
│   │   ├── Cannabis420.jsx   # ✅ COMPLETE - 420 policy section
│   │   ├── Amenities.jsx     # ✅ COMPLETE - List of amenities
│   │   ├── Reviews.jsx       # ✅ COMPLETE - Google reviews showcase
│   │   ├── Location.jsx      # ✅ COMPLETE - Muizenberg map and info
│   │   └── FAQ.jsx           # ✅ COMPLETE - Common questions
│   ├── styles/
│   │   ├── globals.css       # ✅ Global styles, Tailwind directives
│   │   └── typography.css    # ✅ LOCKED typography system
│   ├── App.jsx               # ✅ Main app component
│   └── main.jsx              # ✅ React entry point
├── index.html                # ✅ HTML shell with Google Fonts
├── tailwind.config.js        # ✅ LOCKED color palette and design tokens
├── vite.config.js            # ✅ Vite configuration
├── postcss.config.js         # ✅ PostCSS + Tailwind setup
├── package.json              # ✅ Dependencies and scripts
└── README.md                 # 📄 This file
```

---

## 🏗️ Component Architecture

All components follow a **modular, reusable** architecture:

### Shared Components (`src/components/`)
- **Button.jsx**: Reusable button with 3 variants (primary gradient, secondary outline, urgent yellow)
- **Header.jsx**: Sticky navigation with top bar (location, phone, socials) and main nav
- **Footer.jsx**: 4-column footer (Brand, Quick Links, Stay Types, Contact) with R500 deposit note

### Section Components (`src/sections/`)
- **Hero.jsx**: Full-viewport hero with gradient background, logo placeholder, CTAs, trust badges
- **ValueProps.jsx**: 3 value cards highlighting Muizenberg surf, community, long-stay benefits
- **Pricing.jsx**: 3 pricing tiers (R380 dorm, R2,995 weekly, R4,995 monthly)
- **Booking.jsx**: Simple booking flow with primary CTA (Check Availability) and WhatsApp CTA
- **Gallery.jsx**: 8 image grid showcasing beachfront location, capsules, common areas
- **Cannabis420.jsx**: Clear, friendly 420 policy (designated areas only, hostel rules)

---

## 🚀 Deployment

### Cloudflare Pages

1. **Connect Repository**
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
   - Click "Create a project" → "Connect to Git"
   - Select this repository: `LilyCaramel2/Cape-Capsules-Backpackers`

2. **Build Configuration**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (default)
   - **Node version**: 18.x or higher

3. **Environment Variables**
   - None required for static site
   - Future: Add PayFast API keys if needed for direct booking integration

4. **Deploy**
   - Push to `main` branch triggers automatic deployment
   - Preview deployments available for all branches

### Custom Domain
- **Primary**: `www.capecapsules.co.za`
- Configure DNS in Cloudflare DNS dashboard
- SSL certificate auto-provisioned by Cloudflare

---

## 📋 Development Workflow

### Anti-Drift Rules (MANDATORY)

1. **Notion + GitHub = Single Source of Truth**: Never freestyle specs
2. **Full-File Updates**: When a component changes, update ALL related files in same commit
3. **Build Log Every Session**: Date/time, files touched, summary, follow-ups (update Notion)
4. **Locked Elements Stay Locked**: Color palette, typography, button gradient are FINAL
5. **Test After Every Commit**: Ensure locked behaviour never regresses

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes, test locally
npm run dev

# Commit with descriptive message
git add .
git commit -m "Add ValueProps section with 3 cards"

# Push and create PR
git push origin feature/new-section
```

### Build Log Updates

After every significant change, update the **Build Log** section in the [Notion Project Hub](https://www.notion.so/2e32cc971ee881b99ce8df8e1ac386cf):

- **Date/Time** (SAST)
- **Files Touched**
- **Summary** of changes
- **Follow-Ups** / next steps

---

## 🎯 Roadmap

### ✅ Phase 1: Core Architecture (COMPLETE)
- [x] Initialize React + Vite + Tailwind structure
- [x] Configure locked design system (colors, typography, shadows)
- [x] Create Button component (3 variants)
- [x] Create Header component (top bar + sticky nav)
- [x] Create Footer component (4 columns, R500 deposit note)
- [x] Create Hero section (gradient background, logo placeholder, CTAs)

### ✅ Phase 2: Content Sections (COMPLETE)
- [x] Add ValueProps section (3 cards)
- [x] Add Pricing section (R380/R2995/R4995 tiers)
- [x] Add Booking section (Check Availability + WhatsApp CTAs)
- [x] Add Gallery section (8 image placeholders)
- [x] Add Cannabis420 section (420 policy)

### ✅ Phase 3: Additional Content (COMPLETE)
- [x] Add Reviews section (Google reviews showcase)
- [x] Add Location section (Muizenberg map, surf spots, transport)
- [x] Add FAQ section (common questions)

### 🎨 Phase 4: Assets & Polish
- [ ] Generate girl-surfer logo (AI)
- [ ] Generate hero background image (Muizenberg huts + mountain + waves)
- [ ] Optimize gallery images (WebP format, lazy loading)
- [ ] Performance audit (Lighthouse score 90+)

### 🚀 Phase 5: Launch
- [ ] Deploy to Cloudflare Pages
- [ ] Configure custom domain (www.capecapsules.co.za)
- [ ] Test mobile responsive on real devices
- [ ] Google Business Profile optimization
- [ ] Social media launch pack (5 posts)

---

## 📞 Support & Contact

**Developer**: Caramel Digital Design  
**Website**: [www.carameldigitaldesign.online](https://www.carameldigitaldesign.online)  
**Project Manager**: Lily Caramel  

**Client**: Cape Capsules Backpackers  
**Location**: Muizenberg Beach, Cape Town  
**Website**: [www.capecapsules.co.za](https://www.capecapsules.co.za)

---

## 📝 License

Proprietary - © 2026 Caramel Digital Design. All rights reserved.  
Developed exclusively for Cape Capsules Backpackers.

---

**Project Status**: 🟢 Phase 3 Complete → Polishing Assets
**Last Updated**: January 9, 2026
