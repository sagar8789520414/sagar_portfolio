# Quick Reference Guide

## 🚀 Essential Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm install          # Install dependencies
npm update           # Update packages
```

### Deployment
```bash
# Vercel (recommended)
npm run build
git push origin main

# Netlify
npm run build
# Drag dist folder to Netlify

# GitHub Pages
npm run build
git add dist -f
git commit -m "Deploy"
git push origin main
```

---

## 📁 File Locations

### Components
```
src/components/
├── Navigation.tsx      # Top nav bar
├── Hero.tsx            # Landing section
├── AboutMe.tsx         # About section
├── Toolkit.tsx         # Skills grid
├── ProjectCard.tsx     # Project card
├── ProjectsGrid.tsx    # Projects container
├── Services.tsx        # Services section
├── Education.tsx       # Education timeline
├── Contact.tsx         # Contact form
└── Footer.tsx          # Footer
```

### Configuration
```
tailwind.config.js     # Colors, fonts, themes
vite.config.ts         # Build settings
tsconfig.json          # TypeScript settings
postcss.config.js      # CSS processing
```

### Styles
```
src/index.css          # Global styles
```

---

## 🎨 Quick Customizations

### Change Accent Color
**File**: `tailwind.config.js`
```js
colors: {
  accent: '#your-color',
  'accent-dark': '#darker-shade',
}
```

### Update Hero Text
**File**: `src/components/Hero.tsx`
```tsx
<h1>Hey, I'm <span className="accent-text">YOUR NAME</span></h1>
<p>Your headline here...</p>
```

### Add Project
**File**: `src/components/ProjectsGrid.tsx`
```tsx
{
  id: 'unique-id',
  title: 'Project Name',
  subtitle: 'Type | Timeline',
  tags: ['React', 'Node.js'],
  description: 'Description...',
  liveLink: 'https://...',
  sourceLink: 'https://github.com/...',
  category: 'web',
}
```

### Update Social Links
**File**: `src/components/Footer.tsx`
```tsx
<a href="https://github.com/YOUR_USERNAME">🐙</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">💼</a>
```

### Change Theme Colors
**File**: `tailwind.config.js`
```js
colors: {
  primary: '#1a1a1a',
  secondary: '#2d2d2d',
  accent: '#00ff00',
  text: '#ffffff',
  'text-muted': '#b0b0b0',
}
```

---

## 🔧 Common Tasks

### Add New Section
1. Create `src/components/YourSection.tsx`
2. Import in `App.tsx`
3. Add to JSX: `<YourSection />`

### Integrate Contact Form
**Options**:
- Formspree: https://formspree.io
- EmailJS: https://www.emailjs.com
- Netlify Forms: Built-in
- Custom API: Your backend

**Update**: `src/components/Contact.tsx` → `handleSubmit` function

### Enable Light Mode
**File**: `src/App.tsx`
```tsx
const [isDark, setIsDark] = useState(false) // Change to false
```

### Add Animation to Element
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

---

## 📱 Responsive Classes

### Tailwind Breakpoints
```
sm:  640px   (small screens)
md:  768px   (medium screens)
lg:  1024px  (large screens)
xl:  1280px  (extra large)
2xl: 1536px  (2x large)
```

### Common Patterns
```tsx
// Single column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Stack on mobile, row on desktop
<div className="flex flex-col md:flex-row">

// Responsive text size
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Responsive padding
<div className="px-4 md:px-6 lg:px-8">
```

---

## 🎯 Component Props

### ProjectCard
```tsx
<ProjectCard
  title="string"
  subtitle="string"
  tags={string[]}
  description="string"
  liveLink="string (URL)"
  sourceLink="string (URL)"
/>
```

### Navigation
```tsx
<Navigation
  isDark={boolean}
  setIsDark={(value: boolean) => void}
/>
```

---

## 🐛 Troubleshooting

### Port 3000 in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles Not Updating
```bash
# Clear cache and rebuild
npm run build
```

### Animations Not Working
- Check GSAP is imported
- Verify ScrollTrigger is registered
- Check browser console for errors

---

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Load**: Images load on scroll
3. **Code Split**: Vite does this automatically
4. **Minify**: Production build minifies code
5. **Gzip**: Enable on server

---

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://gsap.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

---

## 📋 Deployment Checklist

- [ ] Update all personal information
- [ ] Test locally: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Check for errors
- [ ] Update social links
- [ ] Test on mobile
- [ ] Deploy to hosting
- [ ] Test live site
- [ ] Monitor performance

---

## 🎨 CSS Classes Reference

### Text Colors
```
text-text              # White text
text-text-muted        # Gray text
accent-text            # Green text
```

### Backgrounds
```
bg-primary             # Dark background
bg-secondary           # Slightly lighter
accent-bg              # Green background
```

### Borders
```
border-secondary       # Gray border
border-accent          # Green border
```

### Effects
```
glow                   # Green glow effect
accent-hover           # Hover text effect
rounded-lg             # Rounded corners
```

---

## 🚀 Deployment URLs

### Vercel
```
https://your-project.vercel.app
```

### Netlify
```
https://your-project.netlify.app
```

### Custom Domain
```
https://yourdomain.com
```

---

## 📞 Quick Support

**Issue**: Component not showing
- Check import in App.tsx
- Verify component file exists
- Check browser console

**Issue**: Styles not applied
- Clear cache: `npm run build`
- Check Tailwind config
- Verify class names

**Issue**: Animations not working
- Check GSAP import
- Verify ref is attached
- Check ScrollTrigger registration

---

## 💡 Pro Tips

1. **Use TypeScript**: Catch errors early
2. **Test Responsive**: Use DevTools
3. **Monitor Performance**: Use Lighthouse
4. **Keep Dependencies Updated**: `npm update`
5. **Use Git**: Track changes with commits

---

## 📚 Documentation

- `README.md` - Project overview
- `SETUP_GUIDE.md` - Setup & deployment
- `COMPONENT_DOCS.md` - Component reference
- `PROJECT_SUMMARY.md` - Project details
- `QUICK_REFERENCE.md` - This file

---

**Last Updated**: May 25, 2026

**Version**: 1.0.0
