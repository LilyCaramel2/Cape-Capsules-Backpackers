# 🚀 Deployment Instructions

## ✅ What's Been Done

1. ✅ **Vite config updated** - Base path set to `/Cape-Capsules-Backpackers/`
2. ✅ **GitHub Actions workflow created** - Automatic build on every push to `main`
3. ✅ **Full React app built** - All components, sections, and styling complete

## 🔧 Final Setup Required (One-Time Only)

You need to enable GitHub Pages in your repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/LilyCaramel2/Cape-Capsules-Backpackers
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 2: Trigger First Build

The workflow will automatically trigger because I just pushed the workflow file. Check the build status:

1. Go to **Actions** tab in your repo
2. You should see "Deploy to GitHub Pages" running
3. Wait 2-3 minutes for it to complete
4. Once complete, your site will be live at:
   **https://lilycaramel2.github.io/Cape-Capsules-Backpackers/**

### Step 3: Verify It Works

Once the Action completes:
- Visit: https://lilycaramel2.github.io/Cape-Capsules-Backpackers/
- You should see the full Cape Capsules website
- All sections should load with proper styling

---

## 🔄 How It Works Now

**Automatic Deployment:**
Every time you push to the `main` branch:
1. GitHub Actions automatically runs
2. Installs dependencies (`npm ci`)
3. Builds the React app (`npm run build`)
4. Deploys the `/dist` folder to GitHub Pages
5. Site updates in 2-3 minutes

**Manual Trigger:**
You can also manually trigger a deployment:
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages**
3. Click **Run workflow**

---

## 📁 What's Deployed

The built site includes:
- ✅ Header with top bar, navigation, mobile menu
- ✅ Hero section with "Sleep Steps From The Waves"
- ✅ Value Props (6 reasons to choose Cape Capsules)
- ✅ Pricing (3 tiers with R500 deposit messaging)
- ✅ Cannabis 420-Friendly section (strategic differentiator)
- ✅ Amenities grid (12 amenities)
- ✅ Booking widget area (NightsBridge placeholder)
- ✅ Gallery (8 image placeholders)
- ✅ Reviews (3 testimonials)
- ✅ Location with Google Maps
- ✅ FAQ accordion
- ✅ Footer with Caramel Digital Design credit

**Color Palette:**
- Ocean Blue (#0B5ED7)
- Turquoise Surf (#1ECAD3)
- Hut Yellow (#FFD400)
- Navy Ink (#0B1F3B)
- Sand White (#F6F1E6)

**Design Rules:**
- ✅ Gradients ONLY on primary CTA buttons
- ✅ Flat backgrounds everywhere else
- ✅ R500 deposit messaging in pricing
- ✅ 420-friendly section prominent

---

## 🎨 Next Steps (Content)

1. **Add brand assets** to `/public/brand/`:
   - `cape-capsules-logo.jpg`
   - Push to trigger rebuild

2. **Add gallery images** to `/public/images/`:
   - `gallery-1.jpg` through `gallery-8.jpg`
   - Push to trigger rebuild

3. **Update social media links** in `src/components/Header.jsx` and `Footer.jsx`

4. **Add NightsBridge booking widget** in `src/sections/Booking.jsx`

---

## 🌐 Custom Domain (Future)

When ready to use **www.capecapsules.co.za**:

1. Update `vite.config.js` - change `base: '/'` (remove repo name)
2. In GitHub Settings > Pages, add custom domain
3. Update DNS at your domain provider
4. GitHub will provide CNAME record instructions

---

## ❓ Troubleshooting

**Site still blank?**
- Check Actions tab - is workflow still running?
- Wait 2-3 minutes after workflow completes
- Hard refresh browser (Ctrl+Shift+R)

**Workflow failed?**
- Check Actions tab for error messages
- Most common: node modules need updating
- Re-run the workflow from Actions tab

**Need to rebuild?**
- Make any small change to any file
- Push to `main` branch
- Workflow triggers automatically

---

*Setup by Caramel Digital Design - https://carameldigitaldesign.online*
