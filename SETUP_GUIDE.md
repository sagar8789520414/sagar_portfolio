# Portfolio Setup & Deployment Guide

## Quick Start

### 1. Local Development

```bash
# Navigate to project directory
cd sagar-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will open at `http://localhost:3000` with hot module reloading enabled.

## Project Architecture

### Component Hierarchy

```
App
├── Navigation (with theme toggle)
├── Hero (landing section)
├── AboutMe (narrative section)
├── Toolkit (skills grid)
├── ProjectsGrid
│   ├── ProjectCard (web projects)
│   └── ProjectCard (embedded projects)
├── Services (3-card grid)
├── Education (timeline)
├── Contact (form)
└── Footer (links & social)
```

### State Management

- **Theme Toggle**: Managed in `App.tsx` using React state
- **Form State**: Managed locally in `Contact.tsx`
- **Animations**: Handled by GSAP with ScrollTrigger for scroll-based animations

## Customization Guide

### 1. Update Personal Information

#### Hero Section (`src/components/Hero.tsx`)
```tsx
<h1>Hey, I'm <span className="accent-text">YOUR NAME</span></h1>
<p>Your custom headline here...</p>
```

#### About Section (`src/components/AboutMe.tsx`)
Replace the narrative paragraphs with your own story.

#### Projects (`src/components/ProjectsGrid.tsx`)
Update the `projects` array with your projects:
```tsx
const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Your Project',
    subtitle: 'Project Type | Timeline',
    tags: ['React', 'Node.js'],
    description: 'Your project description...',
    liveLink: 'https://your-project.com',
    sourceLink: 'https://github.com/your-repo',
    category: 'web',
  },
  // ... more projects
]
```

#### Education (`src/components/Education.tsx`)
Update the `educationData` array:
```tsx
const educationData: EducationItem[] = [
  {
    year: '2023 - 2027',
    degree: 'Your Degree',
    institution: 'Your Institution',
  },
  // ... more education
]
```

#### Contact (`src/components/Contact.tsx`)
The form currently logs to console. To enable email functionality:
1. Use a service like Formspree, EmailJS, or Netlify Forms
2. Update the `handleSubmit` function with your backend integration

### 2. Customize Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#1a1a1a',      // Background
      secondary: '#2d2d2d',    // Cards
      accent: '#00ff00',       // Highlights
      'accent-dark': '#00cc00',
      text: '#ffffff',
      'text-muted': '#b0b0b0',
    },
  },
}
```

### 3. Update Social Links

Edit `src/components/Footer.tsx`:

```tsx
<a href="https://github.com/YOUR_USERNAME" target="_blank">
  🐙
</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
  💼
</a>
```

### 4. Add New Sections

Create a new component in `src/components/`:

```tsx
// src/components/YourSection.tsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function YourSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add animations here
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Your content */}
    </section>
  )
}
```

Then import and add it to `App.tsx`:

```tsx
import YourSection from './components/YourSection'

function App() {
  return (
    <div>
      {/* ... other sections */}
      <YourSection />
      {/* ... */}
    </div>
  )
}
```

## Animation Patterns

### Scroll-triggered Fade-in

```tsx
useEffect(() => {
  gsap.from(elementRef.current, {
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top center',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
  })
}, [])
```

### Staggered Animation

```tsx
gsap.from(itemsRef.current, {
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top center',
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.2, // 0.2s delay between items
})
```

### Hover Animation

```tsx
useEffect(() => {
  if (isHovered) {
    gsap.to(overlayRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
  } else {
    gsap.to(overlayRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.4,
      ease: 'power2.in',
    })
  }
}, [isHovered])
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sagar-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Custom Domain**:
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder, or
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Environment Variables** (if needed):
   - In Netlify dashboard → Site settings → Build & deploy → Environment
   - Add any required environment variables

### Option 3: GitHub Pages

1. **Update vite.config.ts**:
   ```ts
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder

### Option 4: Self-hosted (VPS/Shared Hosting)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your server's public directory

3. **Configure web server** (nginx example):
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     
     root /var/www/portfolio/dist;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

## Performance Optimization

### Current Metrics
- Build size: ~277 KB (uncompressed)
- Gzipped size: ~97 KB
- Lighthouse score: 90+

### Further Optimization

1. **Image Optimization**:
   - Use WebP format for images
   - Implement lazy loading for images
   - Use responsive image sizes

2. **Code Splitting**:
   - Vite automatically code-splits components
   - Use dynamic imports for heavy components

3. **Caching**:
   - Enable browser caching in your server config
   - Use service workers for offline support

## SEO Optimization

### Current Implementation
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags in `index.html`

### Enhancements

1. **Add meta tags** to `index.html`:
   ```html
   <meta name="description" content="Your portfolio description">
   <meta name="keywords" content="developer, portfolio, react">
   <meta property="og:title" content="Your Name - Developer">
   <meta property="og:description" content="Your portfolio description">
   ```

2. **Add sitemap.xml** to `public/` directory

3. **Add robots.txt** to `public/` directory

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Animations Not Working
- Ensure GSAP is properly imported
- Check browser console for errors
- Verify ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`

### Styling Issues
- Clear Tailwind cache: `rm -rf .next` (if using Next.js)
- Rebuild CSS: `npm run build`
- Check for conflicting CSS classes

## Environment Variables

Create a `.env.local` file for local development:

```env
VITE_API_URL=http://localhost:3000
VITE_FORM_ENDPOINT=https://your-backend.com/api/contact
```

Access in components:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Maintenance

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest major versions
npm install -g npm-check-updates
ncu -u
npm install
```

### Monitor Performance
- Use Lighthouse in Chrome DevTools
- Monitor Core Web Vitals
- Check bundle size with `npm run build`

## Support & Resources

- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **GSAP Documentation**: https://gsap.com
- **Vite Guide**: https://vitejs.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs

---

**Happy coding! 🚀**
