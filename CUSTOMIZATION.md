# Visual Customization Guide

Quick reference for customizing the visual appearance of the Justice Law Firm website.

## 🎨 Color Palette

### Current Colors

**Primary Dark (Charcoal)**

- `#0a0a0a` - Deepest background
- `#1a1a1a` - Main background
- `#454545` - Dark elements
- `#f6f6f6` - Light text

**Accent (Gold)**

- `#D4AF37` - Primary gold (buttons, highlights)
- `#facc15` - Hover states
- `#ca8a04` - Darker gold

### Changing Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  'charcoal': {
    950: '#0a0a0a',  // ← Change this
    900: '#1a1a1a',
    // etc.
  },
  'gold': {
    500: '#D4AF37',  // ← Change this
  },
}
```

**Alternative Color Schemes**:

**Blue Accent (Professional)**:

```javascript
'accent': {
  500: '#0066CC',  // Royal blue
}
```

**Green Accent (Trust)**:

```javascript
'accent': {
  500: '#047857',  // Forest green
}
```

**Purple Accent (Modern)**:

```javascript
'accent': {
  500: '#7C3AED',  // Vibrant purple
}
```

Remember to replace all instances of `gold` in the codebase with your new color name, or simply change the hex values.

## 📝 Typography

### Current Fonts

**Display Font (Headings)**: Playfair Display (serif)
**Body Font**: Inter (sans-serif)

### Changing Fonts

**File**: `app/layout.tsx`

**Example - Using Different Google Fonts**:

```typescript
import { Montserrat, Roboto } from "next/font/google";

const display = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});
```

**Popular Font Combinations**:

1. **Modern & Clean**:

   - Display: Montserrat
   - Body: Open Sans

2. **Elegant & Professional**:

   - Display: Cormorant Garamond
   - Body: Source Sans Pro

3. **Bold & Contemporary**:

   - Display: Poppins
   - Body: Inter

4. **Classic & Sophisticated**:
   - Display: Playfair Display (current)
   - Body: Lora

### Font Sizes

Defined in `app/globals.css`:

```css
.heading-1 {
  @apply text-5xl md:text-7xl lg:text-8xl;
  /* Mobile: 48px, Tablet: 72px, Desktop: 96px */
}

.heading-2 {
  @apply text-4xl md:text-5xl lg:text-6xl;
  /* Mobile: 36px, Tablet: 48px, Desktop: 60px */
}
```

## 🎬 Animation Settings

### Global Animation Speed

**File**: `components/layout/SmoothScroll.tsx`

```typescript
const lenis = new Lenis({
  duration: 1.2, // ← Lower = faster, Higher = slower
});
```

- `1.0` - Snappy
- `1.2` - Default (smooth)
- `1.5` - Luxurious

### Individual Animation Speeds

In each component's GSAP animations:

```typescript
gsap.fromTo(
  element,
  {
    /* start state */
  },
  {
    /* end state */
    duration: 1, // ← Animation length in seconds
    stagger: 0.1, // ← Delay between multiple elements
    ease: "power3.out", // ← Easing curve
  }
);
```

**Common Easing Options**:

- `power1.out` - Gentle
- `power2.out` - Moderate
- `power3.out` - Strong (default)
- `power4.out` - Very strong
- `elastic.out` - Bouncy
- `back.out` - Overshoot

### Disabling Animations

To disable specific animations, comment out or remove the `useEffect` block:

```typescript
// useEffect(() => {
//   const ctx = gsap.context(() => {
//     // Animation code here
//   }, ref)
//   return () => ctx.revert()
// }, [])
```

## 🖼️ Background Effects

### Grain Texture

Current: Subtle noise overlay

**File**: `app/globals.css`

```css
.grain-texture {
  background-image: url("data:image/svg+xml...");
  opacity: 0.05; // ← Adjust intensity (0-1)
}
```

### Gradient Backgrounds

**File**: `components/sections/HeroSection.tsx`

```typescript
style={{
  background: 'radial-gradient(ellipse at 50% 0%, #1a1a1a 0%, #0a0a0a 100%)',
}}
```

**Alternative Gradients**:

```css
/* Vertical */
background: 'linear-gradient(to bottom, #1a1a1a, #0a0a0a)'

/* Diagonal */
background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)'

/* Multi-color */
background: 'linear-gradient(to right, #1a1a1a, #2d1a1a, #0a0a0a)'
```

### Ambient Light Effects

The glowing orbs in the background:

```tsx
<div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
```

Adjust:

- Position: `top-0`, `left-1/4`, etc.
- Size: `w-96 h-96`
- Color & Opacity: `bg-gold-500/5` (5% opacity)
- Blur: `blur-3xl`

## 📐 Spacing & Layout

### Container Width

**File**: `app/globals.css`

```css
.page-container {
  @apply max-w-7xl; // ← Change this
  /* Options: max-w-6xl, max-w-7xl (default), max-w-8xl */
}
```

### Section Padding

```css
.section-padding {
  @apply py-20 md:py-32 lg:py-40;
  /* Mobile: 80px, Tablet: 128px, Desktop: 160px */
}
```

Adjust for tighter or looser spacing:

- Tight: `py-12 md:py-16 lg:py-20`
- Default: `py-20 md:py-32 lg:py-40`
- Spacious: `py-32 md:py-48 lg:py-64`

## 🎯 Button Styles

**File**: `app/globals.css`

```css
.btn-primary {
  @apply px-8 py-4 bg-gold-500 text-charcoal-950;
  /* Adjust padding, background, text color */
}
```

**Button Variants**:

**Rounded Buttons**:

```css
@apply rounded-full; /* Instead of default rounded */
```

**Larger Buttons**:

```css
@apply px-12 py-6 text-lg;
```

**Outlined Only**:

```css
@apply bg-transparent border-2 border-gold-500;
```

## 🌙 Light Mode (Optional)

To add a light mode, you'd need to:

1. Add theme provider
2. Define light color variants
3. Update all components with conditional classes

**Quick light palette suggestion**:

- Background: `#ffffff`
- Text: `#0a0a0a`
- Accent: `#D4AF37` (keep gold)

## 🎭 Card Hover Effects

Current cards have:

- Scale up
- Border color change
- Shadow increase

**File**: Any section with cards

```tsx
className = "hover:scale-105 hover:border-gold-500 hover:shadow-2xl";
```

**Alternative Effects**:

**Lift Up**:

```tsx
className = "hover:-translate-y-4 transition-transform";
```

**Glow**:

```tsx
className = "hover:shadow-gold-500/50 hover:shadow-2xl";
```

**Tilt** (requires more code):

```typescript
// Add 3D transform on mouse move
onMouseMove={(e) => {
  // Calculate tilt based on mouse position
}}
```

## 📱 Mobile Optimization

### Adjusting Mobile Spacing

Use Tailwind's responsive prefixes:

```tsx
className = "text-4xl md:text-6xl lg:text-8xl";
//         Mobile ↑   Tablet ↑   Desktop ↑
```

### Hiding Elements on Mobile

```tsx
className = "hidden md:block"; // Hide on mobile, show on tablet+
className = "md:hidden"; // Show on mobile, hide on tablet+
```

## 🎪 Special Effects

### Marquee Speed

**File**: `components/sections/AwardsSection.tsx`

```typescript
gsap.to(".awards-marquee", {
  x: "-50%",
  duration: 30, // ← Lower = faster
  repeat: -1,
});
```

### Parallax Intensity

In parallax effects:

```typescript
gsap.to(".element", {
  y: -30, // ← Increase for more movement
  scrollTrigger: {
    scrub: true,
  },
});
```

---

## Quick Reference: Common Tasks

| Task                   | File                                  | Line/Section       |
| ---------------------- | ------------------------------------- | ------------------ |
| Change accent color    | `tailwind.config.js`                  | `colors.gold`      |
| Change fonts           | `app/layout.tsx`                      | Import statements  |
| Adjust animation speed | `components/layout/SmoothScroll.tsx`  | `duration`         |
| Modify hero text       | `components/sections/HeroSection.tsx` | JSX content        |
| Update contact info    | `app/contact/page.tsx`                | `offices` array    |
| Change navbar links    | `components/layout/Navbar.tsx`        | `navigation` array |

---

**Pro Tip**: Always test changes on multiple screen sizes using browser dev tools (F12 → Toggle device toolbar).
