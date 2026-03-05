# RK Edge AI Solutions — Website

> **Private AI. Secure Systems. Edge Intelligence.**

A modern, fully responsive Next.js landing page for RK Edge AI Solutions — a startup offering AI-powered edge computing and security products built on Raspberry Pi.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 📁 Project Structure

```
rk-edge-ai-solutions/
├── components/
│   ├── Navbar.js          # Sticky header with mobile menu + dark/light toggle
│   ├── Hero.js            # Animated hero with particle canvas + live AI demo card
│   ├── About.js           # Company mission + privacy-first pillars
│   ├── Products.js        # 4 product cards with live UI previews
│   ├── HowItWorks.js      # 4-step workflow: Camera → Pi → AI → Alert
│   ├── Features.js        # 8 feature cards + Cloud vs Edge comparison table
│   ├── Technology.js      # Tech stack cards: Pi, TFLite, Python, OpenCV, LLM
│   ├── Demo.js            # Interactive dashboard mockup with alerts + camera feeds
│   ├── UseCases.js        # 6 use case cards: Home, Shop, Office, Temple, School, Warehouse
│   ├── Pricing.js         # 3-tier pricing: ₹9,999 / ₹19,999 / Custom
│   ├── Testimonials.js    # 6 testimonial cards with masonry layout
│   ├── Contact.js         # Contact form + info + quick action buttons
│   └── Footer.js          # Multi-column footer with social links
├── pages/
│   ├── _app.js            # Global CSS + dark mode initialization
│   ├── _document.js       # HTML head with SEO meta tags
│   └── index.js           # Main page assembling all sections
├── styles/
│   └── globals.css        # Tailwind imports + custom design system
├── tailwind.config.js     # Brand colors, fonts, animations, keyframes
├── next.config.js
└── package.json
```

---

## 🎨 Design System

**Color Palette**
- Primary: `brand-500` (#1fb8f5) — Electric cyan
- Accent: `accent-500` (#8b5cf6) — Electric violet
- Background: `#050d18` — Deep navy
- Surface: `#0a1628` — Card background

**Typography**
- Display: Syne (headings, bold UI)
- Body: DM Sans (paragraphs, labels)
- Mono: Space Mono (code, badges, metrics)

**Key Design Patterns**
- Glassmorphism cards with neon borders
- Particle network canvas in hero
- Live camera feed + dashboard mockups
- Scan line animations for the "AI active" feel
- Mesh gradient backgrounds
- Staggered reveal animations

---

## 📦 Sections

| Section | Description |
|---|---|
| Hero | Animated particle background, live AI detection card, stats |
| About | Mission statement, 3 pillars, quick stats |
| Products | 4 cards with animated UI previews per product |
| How It Works | 4-step pipeline with connecting arrows |
| Features | 8 benefit cards + comparison table |
| Technology | 6 tech stack cards with specs |
| Demo | Full dashboard mockup with cameras & alerts |
| Use Cases | 6 industry cards + CTA banner |
| Pricing | 3 tiers, one-time payments, feature lists |
| Testimonials | 6 masonry-layout reviews |
| Contact | Form with validation + contact info |
| Footer | Multi-column with socials & legal links |

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Syne + DM Sans + Space Mono)
- **Animations**: Pure CSS keyframes + Tailwind animations

---

## 📱 Responsive Breakpoints

- Mobile: `< 640px` — Single column, hamburger menu
- Tablet: `640px–1024px` — 2 columns, compact sections
- Desktop: `> 1024px` — Full layout, 3–4 columns, horizontal flows

---

## 🌙 Dark / Light Mode

Toggle via the sun/moon button in the navbar. The site defaults to dark mode. Light mode uses `html.light` class overrides.

---

## 📄 License

© 2025 RK Edge AI Solutions. All Rights Reserved.
# EdgeAISolutions
