# Quick Start Guide - Justice Law Firm Website

## Prerequisites Check

Before starting, ensure you have:

- ✅ Node.js version 18.x or higher
- ✅ A package manager (npm comes with Node.js, or install yarn/pnpm)

To check your Node.js version:

```bash
node --version
```

If you need to install/update Node.js, visit: https://nodejs.org/

## Step-by-Step Installation

### 1. Navigate to Project Directory

Open your terminal/command prompt and navigate to the project:

```bash
cd justice-law-firm
```

### 2. Install Dependencies

Choose one of the following commands based on your preferred package manager:

**Using npm (recommended for beginners):**

```bash
npm install
```

**Using yarn:**

```bash
yarn install
```

**Using pnpm:**

```bash
pnpm install
```

This will install all required packages:

- Next.js
- React
- Tailwind CSS
- GSAP (animation library)
- Lenis (smooth scrolling)
- Lucide React (icons)
- And all their dependencies

⏱️ **Installation time**: 1-3 minutes depending on your internet connection.

### 3. Start Development Server

After installation completes, start the development server:

**Using npm:**

```bash
npm run dev
```

**Using yarn:**

```bash
yarn dev
```

**Using pnpm:**

```bash
pnpm dev
```

You should see output similar to:

```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

### 4. View the Website

Open your web browser and navigate to:

```
http://localhost:3000
```

🎉 **You should now see the Justice Law Firm website running!**

## What to Expect

When the site loads, you'll see:

- ✨ Smooth animated hero section with staggered text reveal
- 🎯 Practice areas with hover effects
- 👥 Team preview section
- 🏆 Awards marquee
- 💬 Testimonials carousel
- 📱 Fully responsive design

Try scrolling down - you'll see various scroll-triggered animations!

## Making Changes

The development server includes **hot reload** - any changes you make to the code will automatically update in the browser.

### Quick Customization Test

1. Open `app/page.tsx`
2. Find the Hero section text
3. Change "Strategic Counsel for Complex Disputes" to your own text
4. Save the file
5. Watch the browser automatically update!

## Navigation

The site includes these pages:

- **Home**: http://localhost:3000/
- **About**: http://localhost:3000/about
- **Practice Areas**: http://localhost:3000/practice-areas
- **Team**: http://localhost:3000/team
- **Case Studies**: http://localhost:3000/cases
- **Contact**: http://localhost:3000/contact

## Building for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

## Troubleshooting

### Port 3000 Already in Use

If you see an error about port 3000 being in use, you can:

1. **Use a different port:**

   ```bash
   npm run dev -- -p 3001
   ```

   Then visit http://localhost:3001

2. **Or stop the other process using port 3000**

### Module Not Found Errors

If you see "Module not found" errors:

1. Delete `node_modules` folder
2. Delete `package-lock.json` (or `yarn.lock`/`pnpm-lock.yaml`)
3. Run `npm install` again

### TypeScript Errors

The project uses TypeScript. Some IDE errors are expected until dependencies are installed. After running `npm install`, restart your code editor.

### Slow Performance

If animations are laggy:

- Check your browser console for errors
- Try disabling browser extensions
- Close other resource-intensive applications

## Next Steps

Once the site is running:

1. **Read the README.md** - Comprehensive guide to the project structure
2. **Explore the code** - Start with `app/page.tsx` (landing page)
3. **Customize content** - Edit files in the `data/` folder
4. **Modify styles** - Check `tailwind.config.js` for colors
5. **Add your content** - Replace placeholder text and data

## Getting Help

Common questions:

**Q: Can I use this commercially?**
A: This is a demo project. Modify as needed for your use case.

**Q: How do I change the color scheme?**
A: Edit `tailwind.config.js` - search for `charcoal` and `gold` colors.

**Q: How do I disable animations?**
A: Comment out the `useEffect` hooks in component files, or remove GSAP imports.

**Q: Can I add more pages?**
A: Yes! Create new folders in the `app/` directory following the App Router pattern.

## Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- GSAP Docs: https://greensock.com/docs/
- React: https://react.dev/

---

**Happy coding! 🚀**

For detailed customization instructions, see **README.md** in the project root.
