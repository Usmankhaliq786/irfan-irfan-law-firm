# Justice Law Firm Website

A stunning, Awwwards-level website for a fictional premium law firm, built with Next.js, React, Tailwind CSS, and GSAP animations.

## 🎯 Features

- **Modern, Premium Design**: Dark, cinematic aesthetic with elegant typography
- **Advanced GSAP Animations**: Scroll-triggered animations, parallax effects, and smooth transitions
- **Smooth Scrolling**: Powered by Lenis for buttery-smooth scroll behavior
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Multiple Pages**:
  - Landing Page with hero, practice areas, team preview, awards, testimonials, and CTA
  - About Page with firm history, values, and timeline
  - Team Page with attorney profiles
  - Individual Attorney Pages (dynamic routes)
  - Practice Areas Page with detailed descriptions
  - Case Studies Page
  - Contact Page with form validation
- **Reusable Components**: Clean, modular component architecture
- **TypeScript**: Full type safety throughout the codebase
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:

```bash
cd justice-law-firm
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
justice-law-firm/
├── app/                          # Next.js App Router pages
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── cases/
│   │   └── page.tsx             # Case studies page
│   ├── contact/
│   │   └── page.tsx             # Contact page with form
│   ├── practice-areas/
│   │   └── page.tsx             # Practice areas page
│   ├── team/
│   │   ├── [slug]/
│   │   │   └── page.tsx         # Individual attorney pages (dynamic)
│   │   └── page.tsx             # Team listing page
│   ├── layout.tsx                # Root layout with fonts and providers
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles and Tailwind
├── components/
│   ├── layout/
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Navbar.tsx            # Navigation bar
│   │   └── SmoothScroll.tsx      # Lenis smooth scroll provider
│   └── sections/
│       ├── AwardsSection.tsx     # Awards marquee
│       ├── CTASection.tsx        # Call-to-action section
│       ├── HeroSection.tsx       # Landing page hero
│       ├── PracticeAreasSection.tsx
│       ├── TeamPreviewSection.tsx
│       └── TestimonialsSection.tsx
├── data/
│   ├── attorneys.ts              # Attorney profiles data
│   ├── cases.ts                  # Case studies, testimonials, awards
│   └── practice-areas.ts         # Practice area information
├── lib/
│   └── utils.ts                  # Utility functions (cn helper)
├── public/                       # Static assets
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json
```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'charcoal': {
    // Dark background shades
    950: '#0a0a0a',  // Darkest
    900: '#1a1a1a',
    // ... more shades
  },
  'gold': {
    // Accent color
    500: '#D4AF37',  // Primary gold
    // ... more shades
  },
}
```

### Fonts

Fonts are configured in `app/layout.tsx`:

```typescript
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display", // For headings
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", // For body text
});
```

To change fonts:

1. Import different Google Fonts in `layout.tsx`
2. Update the CSS variables
3. Fonts are automatically applied via Tailwind classes:
   - `font-display` for headings
   - `font-body` for body text

### Content & Copy

#### Firm Information

Edit `data/attorneys.ts`, `data/cases.ts`, and `data/practice-areas.ts` to update:

- Attorney profiles and bios
- Case studies
- Practice area descriptions
- Testimonials
- Awards

#### Page Content

Each page component contains its text content. Key files:

- **Landing Page**: `app/page.tsx` and `components/sections/*.tsx`
- **About Page**: `app/about/page.tsx`
- **Contact Info**: `app/contact/page.tsx` (office locations)
- **Footer**: `components/layout/Footer.tsx`

### Animation Timings

GSAP animations are defined in each component's `useEffect` hook. Common patterns:

```typescript
// Fade up animation
gsap.fromTo(
  ".element",
  { y: 60, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1, // ← Adjust duration
    ease: "power3.out", // ← Change easing
    scrollTrigger: {
      trigger: ".element",
      start: "top 80%", // ← Adjust trigger point
    },
  }
);
```

**Key animation files**:

- `components/sections/HeroSection.tsx` - Hero animations
- `components/sections/PracticeAreasSection.tsx` - Card animations
- Each page component contains its own scroll animations

### Smooth Scroll Settings

Edit `components/layout/SmoothScroll.tsx`:

```typescript
const lenis = new Lenis({
  duration: 1.2,        // ← Scroll duration
  easing: (t) => ...,   // ← Easing function
  smoothWheel: true,
})
```

## 🎬 GSAP Animation Tips

### Installed Plugins

- `ScrollTrigger` - Scroll-based animations
- All animations use `gsap.context()` for proper cleanup

### Common Patterns

**Stagger Animation**:

```typescript
gsap.fromTo(
  ".cards",
  { y: 80, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.15, // Delay between each element
  }
);
```

**Parallax Effect**:

```typescript
gsap.to(".element", {
  y: -30,
  scrollTrigger: {
    trigger: ".element",
    scrub: true, // Tie to scroll position
  },
});
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **React**: 18.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: GSAP 3.12 + ScrollTrigger
- **Smooth Scroll**: Lenis 1.1
- **Icons**: Lucide React
- **Language**: TypeScript 5.3

## 📝 Key Files to Customize

1. **Colors & Branding**: `tailwind.config.js`
2. **Firm Name & Tagline**: `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`
3. **Contact Information**: `app/contact/page.tsx`
4. **Meta Tags & SEO**: `app/layout.tsx`
5. **Attorney Profiles**: `data/attorneys.ts`
6. **Practice Areas**: `data/practice-areas.ts`
7. **Case Studies**: `data/cases.ts`

## 🎯 Best Practices

- All animations use `gsap.context()` for automatic cleanup
- Components are client-side (`'use client'`) when using hooks or GSAP
- Semantic HTML with proper headings hierarchy
- Accessible navigation and form elements
- Optimized for Core Web Vitals

## 📄 License

This is a demo project created for educational purposes.

## 🙏 Credits

- Design inspiration: Awwwards winning websites
- Fonts: Google Fonts (Playfair Display, Inter)
- Icons: Lucide React
- Animations: GSAP

---

**Built with ❤️ for modern web experiences**
