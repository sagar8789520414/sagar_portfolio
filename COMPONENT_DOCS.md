# Component Documentation

## Overview

This document provides detailed documentation for all React components in the portfolio.

## Component List

### 1. Navigation Component

**File**: `src/components/Navigation.tsx`

**Purpose**: Fixed top navigation bar with theme toggle and mobile menu

**Props**:
```tsx
interface NavigationProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}
```

**Features**:
- Fixed positioning with backdrop blur
- Responsive mobile menu
- Theme toggle button
- Smooth navigation links

**Usage**:
```tsx
<Navigation isDark={isDark} setIsDark={setIsDark} />
```

---

### 2. Hero Component

**File**: `src/components/Hero.tsx`

**Purpose**: Landing section with headline, subheadline, and CTA buttons

**Features**:
- GSAP timeline animations
- Gradient background effects
- Responsive typography
- Two CTA buttons with hover effects

**Animations**:
- Title fades in with downward motion
- Subtitle follows with stagger
- Buttons appear last

**Customization**:
```tsx
// Edit headline
<h1>Hey, I'm <span className="accent-text">YOUR NAME</span></h1>

// Edit subheadline
<p>Your custom headline...</p>

// Edit button links
<a href="#projects">View My Work</a>
<a href="#contact">Contact Me</a>
```

---

### 3. AboutMe Component

**File**: `src/components/AboutMe.tsx`

**Purpose**: Professional narrative section

**Features**:
- Scroll-triggered animations
- Multiple paragraph sections
- Muted text styling for readability

**Scroll Animation**:
- Triggers when section enters viewport
- Fades in with upward motion
- Scrub effect for smooth scroll interaction

**Content Structure**:
```tsx
<p>Paragraph 1: Introduction</p>
<p>Paragraph 2: Background</p>
<p>Paragraph 3: Expertise</p>
<p>Paragraph 4: Call to action</p>
```

---

### 4. Toolkit Component

**File**: `src/components/Toolkit.tsx`

**Purpose**: Display skills and tools in categorized grid

**Data Structure**:
```tsx
interface ToolkitCategory {
  title: string
  items: string[]
}
```

**Categories**:
1. Core Languages
2. Web Development
3. Mobile, Embedded & Tools

**Features**:
- Responsive 3-column grid (1 on mobile, 3 on desktop)
- Staggered animations for each category
- Hover effects on skill badges
- Border highlight on hover

**Customization**:
```tsx
const toolkitData: ToolkitCategory[] = [
  {
    title: 'Your Category',
    items: ['Skill1', 'Skill2', 'Skill3'],
  },
]
```

---

### 5. ProjectCard Component

**File**: `src/components/ProjectCard.tsx`

**Purpose**: Individual project card with hover reveal effect

**Props**:
```tsx
interface ProjectCardProps {
  title: string
  subtitle: string
  tags: string[]
  description: string
  liveLink: string
  sourceLink: string
}
```

**Layout**:
- **Left Column (Static)**:
  - Project title
  - Subtitle
  - Technology tags
  - Action buttons

- **Right Column (Hover Overlay)**:
  - Description & Goals heading
  - Detailed project description
  - Gradient background

**Animations**:
- Smooth opacity fade-in on hover
- Lateral slide-in effect
- GSAP-powered transitions

**Button Styles**:
- **Primary**: Solid accent background
- **Secondary**: Outline style with accent border

**Customization**:
```tsx
<ProjectCard
  title="Your Project"
  subtitle="Project Type | Timeline"
  tags={['React', 'Node.js']}
  description="Your detailed description..."
  liveLink="https://your-project.com"
  sourceLink="https://github.com/your-repo"
/>
```

---

### 6. ProjectsGrid Component

**File**: `src/components/ProjectsGrid.tsx`

**Purpose**: Display projects in categorized sections

**Data Structure**:
```tsx
interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  description: string
  liveLink: string
  sourceLink: string
  category: 'web' | 'embedded'
}
```

**Categories**:
1. **Web Applications**: Full-stack projects
2. **Mobile, Embedded & Robotics**: Hardware-software projects

**Layout**:
- 2-column grid on desktop
- 1-column on mobile
- Categorized sections with headers

**Animations**:
- Staggered animations for each project card
- Different triggers for each category section

**Adding Projects**:
```tsx
const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Name',
    subtitle: 'Type | Timeline',
    tags: ['Tech1', 'Tech2'],
    description: 'Description...',
    liveLink: 'https://...',
    sourceLink: 'https://github.com/...',
    category: 'web',
  },
]
```

---

### 7. Services Component

**File**: `src/components/Services.tsx`

**Purpose**: Showcase services offered

**Data Structure**:
```tsx
interface Service {
  title: string
  description: string
  icon: string
}
```

**Default Services**:
1. Full-Stack Web Development
2. API Architecture & Integration
3. Embedded Software & Robotics

**Features**:
- 3-column grid layout
- Icon display (emoji)
- Hover effects with scale and shadow
- Staggered animations

**Customization**:
```tsx
const services: Service[] = [
  {
    title: 'Your Service',
    description: 'Service description...',
    icon: '💻',
  },
]
```

---

### 8. Education Component

**File**: `src/components/Education.tsx`

**Purpose**: Display education timeline

**Data Structure**:
```tsx
interface EducationItem {
  year: string
  degree: string
  institution: string
}
```

**Layout**:
- Vertical timeline with left border
- Timeline dots at each entry
- Card-based design for each entry

**Animations**:
- Alternating left/right animations
- Staggered timing for each entry
- Scroll-triggered animations

**Customization**:
```tsx
const educationData: EducationItem[] = [
  {
    year: '2023 - 2027',
    degree: 'Your Degree',
    institution: 'Your Institution',
  },
]
```

---

### 9. Contact Component

**File**: `src/components/Contact.tsx`

**Purpose**: Contact form for user inquiries

**Form Fields**:
- **Title**: What the message is about
- **Message**: Full message content

**Features**:
- Form validation (required fields)
- Success message display
- Auto-reset after submission
- Scroll-triggered animations

**Form Handling**:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Currently logs to console
  // Integrate with backend service here
  console.log('Form submitted:', formData)
}
```

**Integration Options**:
1. **Formspree**: https://formspree.io
2. **EmailJS**: https://www.emailjs.com
3. **Netlify Forms**: Built-in with Netlify
4. **Custom Backend**: Your own API endpoint

**Example with Formspree**:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setSubmitted(true)
    setFormData({ title: '', message: '' })
  }
}
```

---

### 10. Footer Component

**File**: `src/components/Footer.tsx`

**Purpose**: Footer with links and social media

**Sections**:
1. **About**: Brief description
2. **Quick Links**: Navigation links
3. **Social**: Social media links

**Features**:
- Responsive 3-column grid
- Social media emoji links
- Copyright year auto-update
- Hover effects on links

**Customization**:
```tsx
// Update social links
<a href="https://github.com/YOUR_USERNAME">🐙</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">💼</a>
```

---

## Animation Patterns

### Pattern 1: Scroll-Triggered Fade-In

```tsx
useEffect(() => {
  gsap.from(elementRef.current, {
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top center',
      end: 'center center',
      scrub: 1,
    },
    opacity: 0,
    y: 50,
    duration: 1,
  })
}, [])
```

### Pattern 2: Staggered Animation

```tsx
gsap.from(itemsRef.current, {
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top center',
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.2,
})
```

### Pattern 3: Timeline Animation

```tsx
const tl = gsap.timeline()

tl.from(titleRef.current, {
  duration: 0.8,
  opacity: 0,
  y: 30,
  ease: 'power3.out',
})
  .from(subtitleRef.current, {
    duration: 0.8,
    opacity: 0,
    y: 20,
    ease: 'power3.out',
  }, '-=0.4')
```

### Pattern 4: Hover Animation

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

---

## Styling System

### Tailwind Classes Used

**Layout**:
- `flex`, `grid`, `gap-*`
- `px-*`, `py-*`, `p-*`
- `max-w-*`, `w-full`

**Typography**:
- `text-*` (sizes)
- `font-bold`, `font-mono`
- `text-text`, `text-text-muted`

**Colors**:
- `bg-primary`, `bg-secondary`
- `accent-text`, `accent-bg`
- `border-accent`, `border-secondary`

**Effects**:
- `rounded-lg`, `rounded-full`
- `border`, `shadow-lg`
- `hover:*`, `transition-*`

**Responsive**:
- `sm:`, `md:`, `lg:` prefixes
- `flex-col sm:flex-row`
- `grid-cols-1 md:grid-cols-2`

### Custom CSS Classes

**In `index.css`**:
- `.accent-text`: Green text color
- `.accent-bg`: Green background
- `.glow`: Box shadow glow effect
- `.accent-hover`: Hover text effect

---

## Performance Considerations

### Optimization Techniques

1. **Lazy Loading**: Components load on scroll
2. **Code Splitting**: Vite automatically splits code
3. **Image Optimization**: Use WebP format
4. **CSS Optimization**: Tailwind purges unused styles
5. **Animation Performance**: GSAP uses GPU acceleration

### Bundle Size

- React: ~42 KB
- GSAP: ~35 KB
- Tailwind CSS: ~15 KB
- Total: ~277 KB (uncompressed)

---

## Accessibility Features

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Color contrast compliance
- Focus states on interactive elements

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

---

## Common Customizations

### Change Accent Color

1. Update `tailwind.config.js`:
```js
accent: '#your-color',
```

2. Update `index.css`:
```css
.glow {
  box-shadow: 0 0 20px rgba(your-color, 0.3);
}
```

### Add New Section

1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to JSX between other sections

### Modify Animations

1. Adjust duration: `duration: 0.6`
2. Change easing: `ease: 'power3.out'`
3. Modify delay: `delay: 0.2`
4. Update stagger: `stagger: 0.15`

---

## Troubleshooting

### Component Not Rendering
- Check import statement
- Verify component is added to App.tsx
- Check browser console for errors

### Animations Not Working
- Ensure GSAP is imported
- Check ScrollTrigger is registered
- Verify ref is properly attached to element

### Styling Issues
- Clear Tailwind cache
- Check for conflicting classes
- Verify color variables in config

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://gsap.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Last Updated**: May 2026
