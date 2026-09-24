# Deployment Guide

Deploy your Justice Law Firm website to production with these popular hosting platforms.

## 🚀 Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Create a Vercel Account**

   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to Git**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Import Project**

   - Click "New Project" in Vercel dashboard
   - Import your Git repository
   - Vercel auto-detects Next.js settings ✅
   - Click "Deploy"

4. **Done!**
   - Your site will be live at `your-project.vercel.app`
   - Vercel provides free SSL certificate
   - Automatic deployments on every git push

### Custom Domain (Vercel)

1. Go to Project Settings → Domains
2. Add your domain (e.g., `justicefirm.com`)
3. Update your domain's DNS records as instructed
4. SSL certificate auto-provisioned

**Cost**: Free for personal projects, $20/month for teams

---

## 🌐 Netlify

Another excellent option with generous free tier.

### Steps:

1. **Create Account**

   - Go to [netlify.com](https://netlify.com)
   - Sign up with Git provider

2. **Connect Repository**

   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     ```
     Build command: npm run build
     Publish directory: .next
     ```

3. **Deploy**

   - Click "Deploy site"
   - Site live at `random-name.netlify.app`

4. **Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Update DNS records

**Cost**: Free for personal use, paid plans from $19/month

---

## ☁️ AWS Amplify

For those using AWS ecosystem.

### Steps:

1. **AWS Console**

   - Log into [AWS Console](https://console.aws.amazon.com)
   - Navigate to AWS Amplify

2. **Connect Repository**

   - Choose "Host web app"
   - Connect Git repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - "**/*"
       cache:
         paths:
           - node_modules/**/*
     ```

3. **Deploy**
   - Click "Save and deploy"

**Cost**: Pay-as-you-go pricing

---

## 🐳 Docker Deployment

For self-hosting on your own server.

### Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t justice-law-firm .

# Run container
docker run -p 3000:3000 justice-law-firm
```

---

## 🔧 Static Export (Optional)

If you don't need server-side features, export as static HTML.

### Enable Static Export

**File**: `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Build

```bash
npm run build
```

Output folder: `out/`

Upload the `out/` folder to any static host:

- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- Amazon S3

---

## 🌍 Environment Variables

If you add backend features (API keys, database URLs), use environment variables.

### Local Development

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=your_database_connection
```

### Production (Vercel/Netlify)

1. Go to project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

**Important**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

---

## ✅ Pre-Deployment Checklist

Before deploying:

- [ ] Test production build locally: `npm run build && npm start`
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check browser console for errors
- [ ] Test contact form (add backend if needed)
- [ ] Add Google Analytics (if desired)
- [ ] Set up domain and SSL
- [ ] Update meta tags and SEO
- [ ] Create sitemap.xml (optional)
- [ ] Set up monitoring/analytics

---

## 🔍 SEO & Performance

### Add Sitemap

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://justicefirm.com",
      lastModified: new Date(),
    },
    {
      url: "https://justicefirm.com/about",
      lastModified: new Date(),
    },
    // ... add all pages
  ];
}
```

### Add Robots.txt

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://justicefirm.com/sitemap.xml",
  };
}
```

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
  `}
</Script>
```

---

## 🐛 Troubleshooting Production Issues

### Build Errors

**Error**: "Module not found"

- **Solution**: Ensure all imports use correct paths and case sensitivity

**Error**: "Type errors"

- **Solution**: Fix TypeScript errors before deploying

### Runtime Errors

**Error**: "window is not defined"

- **Solution**: Ensure client-side code is wrapped in `'use client'`

**Error**: "Hydration mismatch"

- **Solution**: Ensure server and client render the same content

### Performance Issues

- Enable Next.js Image Optimization
- Use Vercel Analytics to identify slow pages
- Optimize GSAP animations (use `will-change` CSS)
- Lazy load components not immediately visible

---

## 📊 Monitoring

### Vercel Analytics

- Built-in performance monitoring
- Real user metrics
- Free for hobby projects

### Sentry (Error Tracking)

```bash
npm install @sentry/nextjs
```

Follow Sentry Next.js integration guide.

---

## 🔐 Security

### Headers

Add security headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ]
}
```

### Contact Form Backend

The current contact form logs to console. For production:

1. **Use a form service**:

   - Formspree
   - Getform
   - Basin

2. **Or build API route**:
   Create `app/api/contact/route.ts`:
   ```typescript
   export async function POST(request: Request) {
     const data = await request.json();
     // Send email via SendGrid, AWS SES, etc.
     return Response.json({ success: true });
   }
   ```

---

## 🎯 Quick Deploy Commands

```bash
# Vercel
npm install -g vercel
vercel

# Netlify
npm install -g netlify-cli
netlify deploy

# Build for static hosting
npm run build
# Upload 'out' folder
```

---

**Need help?** Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
