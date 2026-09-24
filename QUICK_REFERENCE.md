# ⚡ Quick Reference Card

Fast access to common tasks and file locations.

## 🚀 Quick Start

```bash
cd justice-law-firm
npm install
npm run dev
# Visit http://localhost:3000
```

## 📁 File Quick Access

| Task                | File Path                                          |
| ------------------- | -------------------------------------------------- |
| Change firm name    | `components/layout/Navbar.tsx` line 49-56          |
| Update colors       | `tailwind.config.js` line 9-27                     |
| Change fonts        | `app/layout.tsx` line 8-18                         |
| Edit hero text      | `components/sections/HeroSection.tsx` line 111-119 |
| Add attorney        | `data/attorneys.ts`                                |
| Add practice area   | `data/practice-areas.ts`                           |
| Modify contact form | `app/contact/page.tsx`                             |
| Change navigation   | `components/layout/Navbar.tsx` line 11-18          |
| Update footer       | `components/layout/Footer.tsx`                     |
| Adjust animations   | Any component's `useEffect` hook                   |
| Change scroll speed | `components/layout/SmoothScroll.tsx` line 8        |

## 🎨 Common Customizations

### Change Accent Color

**File**: `tailwind.config.js`

```javascript
'gold': { 500: '#YOUR_COLOR' }
```

Then search/replace 'gold' class names throughout.

### Change Font

**File**: `app/layout.tsx`

```typescript
import { Your_Font } from "next/font/google";
```

### Adjust Animation Speed

**File**: `components/layout/SmoothScroll.tsx`

```typescript
duration: 1.2, // Lower = faster
```

### Change Container Width

**File**: `app/globals.css`

```css
.page-container {
  @apply max-w-7xl; /* Change to max-w-6xl or max-w-8xl */
}
```

## 🎬 Animation Quick Tweaks

### Make Animations Faster

In any component:

```typescript
duration: 0.6, // Instead of 1.0
stagger: 0.08, // Instead of 0.15
```

### Make Animations Slower/Luxurious

```typescript
duration: 1.5, // Instead of 1.0
stagger: 0.2, // Instead of 0.15
```

### Disable an Animation

Comment out the entire `useEffect` block or:

```typescript
// gsap.fromTo(...)
```

## 📝 Content Updates

### Add New Attorney

**File**: `data/attorneys.ts`

Copy existing entry and modify:

```typescript
{
  id: 'slug-name',
  name: 'Full Name',
  role: 'Position',
  specialization: ['Area 1', 'Area 2'],
  bio: 'Biography...',
  barAdmissions: ['State 1', 'State 2'],
  keyCases: ['Case 1', 'Case 2'],
  email: 'email@firm.com',
  phone: '+1 (555) 000-0000',
  image: '/path/to/image.jpg'
}
```

### Add Office Location

**File**: `app/contact/page.tsx` line 7-26

Add to `offices` array:

```typescript
{
  city: 'City Name',
  address: 'Street Address',
  cityState: 'City, State Zip',
  phone: '+1 (555) 000-0000',
  email: 'city@firm.com',
}
```

### Modify Practice Areas

**File**: `data/practice-areas.ts`

Add or edit entries in the array.

## 🎯 Navigation Updates

### Add Menu Item

**File**: `components/layout/Navbar.tsx` line 11

```typescript
{ name: 'New Page', href: '/new-page' },
```

### Add Footer Link

**File**: `components/layout/Footer.tsx` line 7

Add to appropriate section in `footerLinks`.

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

## 📱 Responsive Testing

In browser (F12):

- Mobile: 375x667 (iPhone SE)
- Tablet: 768x1024 (iPad)
- Desktop: 1920x1080

Or use Chrome DevTools device toolbar (Ctrl+Shift+M / Cmd+Shift+M)

## 🎨 Tailwind Class Patterns

```tsx
{/* Responsive text */}
<h1 className="text-4xl md:text-6xl lg:text-8xl">

{/* Responsive padding */}
<div className="px-4 md:px-8 lg:px-12">

{/* Hover effect */}
<button className="hover:bg-gold-500 transition-all duration-300">

{/* Responsive grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## 🐛 Common Issues & Fixes

| Issue                  | Solution                              |
| ---------------------- | ------------------------------------- |
| Port 3000 in use       | `npm run dev -- -p 3001`              |
| Module not found       | Delete node_modules, `npm install`    |
| Build errors           | Check TypeScript errors, fix them     |
| Animations not working | Check browser console for GSAP errors |
| Styles not applying    | Clear cache, restart dev server       |

## 📦 Deployment (Quick)

### Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Build for Static

```javascript
// next.config.js
output: "export";
```

```bash
npm run build
# Upload 'out' folder
```

## 🔗 Important Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **GSAP**: https://greensock.com/docs/
- **Lucide Icons**: https://lucide.dev/icons/

## 📞 Contact Form Backend

Current: Logs to console

For production, use:

- **Formspree**: https://formspree.io/
- **Getform**: https://getform.io/
- **Custom API**: Create `app/api/contact/route.ts`

## 💡 Pro Tips

1. **Use VSCode extensions**:

   - Tailwind CSS IntelliSense
   - ESLint
   - TypeScript Error Translator

2. **Hot reload**: Edit files and save, browser auto-updates

3. **Component copy**: Copy existing components as templates

4. **Data-driven**: Most content in `data/` folder for easy updates

5. **Type safety**: Follow existing TypeScript patterns

6. **Responsive first**: Always test mobile view

7. **Animation performance**: Keep under 60fps

8. **Git workflow**:
   ```bash
   git add .
   git commit -m "Description"
   git push
   ```

## 🎓 Learning Path

1. Start: README.md
2. Setup: SETUP.md
3. Customize: CUSTOMIZATION.md
4. Deploy: DEPLOYMENT.md
5. Reference: This file
6. Deep dive: Explore code

## ⌨️ Keyboard Shortcuts (Browser)

- `Ctrl/Cmd + Shift + M`: Toggle device toolbar
- `Ctrl/Cmd + Shift + C`: Inspect element
- `Ctrl/Cmd + R`: Refresh page
- `Ctrl/Cmd + Shift + R`: Hard refresh

## 📊 Project Stats (Quick)

- Pages: 7
- Components: 15+
- Data entries: 30+
- Dependencies: ~10 main packages
- Lines of code: ~5,000
- Build time: ~2 minutes

---

**Keep this file handy for quick reference while developing! 🚀**

For detailed information, see the full documentation files (README.md, etc.)
