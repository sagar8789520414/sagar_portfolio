# Sagar Kumar Singh - Developer Portfolio

A production-ready, fully responsive developer portfolio website built with React.js, TypeScript, Tailwind CSS, and GSAP animations. This portfolio showcases full-stack web development capabilities, embedded systems expertise, and robotics projects.

## 🎯 Features

- **Digital Minimalist Design**: Dark-mode theme with neon green accents inspired by modern web design
- **Fully Responsive**: Mobile-first approach with fluid layouts for all screen sizes
- **Interactive Animations**: Smooth scroll animations and hover effects using GSAP
- **Project Showcase**: Two-column hover layout with smooth transitions revealing project details
- **Dark/Light Mode Toggle**: Theme switcher for user preference
- **Modular Architecture**: Highly reusable React components for maintainability
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Ready**: Semantic HTML and proper meta tags

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: GSAP (GreenSock Animation Platform)
- **Build Tool**: Vite
- **Package Manager**: npm

## 📋 Project Structure

```
sagar-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Top navigation with theme toggle
│   │   ├── Hero.tsx             # Hero section with CTA buttons
│   │   ├── AboutMe.tsx          # About section with narrative
│   │   ├── Toolkit.tsx          # Skills/toolkit grid
│   │   ├── ProjectCard.tsx      # Individual project card component
│   │   ├── ProjectsGrid.tsx     # Projects grid layout
│   │   ├── Services.tsx         # Services offered
│   │   ├── Education.tsx        # Education timeline
│   │   ├── Contact.tsx          # Contact form
│   │   └── Footer.tsx           # Footer with social links
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm 7+

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd sagar-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Single column layouts, optimized touch targets
- **Tablet**: Two-column grids for projects and services
- **Desktop**: Full three-column layouts with enhanced hover effects

## 🎨 Design System

### Color Palette

- **Primary**: `#1a1a1a` (Dark background)
- **Secondary**: `#2d2d2d` (Card backgrounds)
- **Accent**: `#00ff00` (Neon green for highlights)
- **Text**: `#ffffff` (Primary text)
- **Text Muted**: `#b0b0b0` (Secondary text)

### Typography

- **Headings**: Bold, sans-serif
- **Body**: System font stack for optimal readability
- **Code/Tags**: Monospace font

## ✨ Key Components

### ProjectCard Component

The `ProjectCard` component implements the critical two-column hover layout:

- **Left Column (Static)**: Project title, subtitle, tech tags, and action buttons
- **Right Column (Hover Overlay)**: Smooth fade-in description and goals
- **Animations**: GSAP-powered transitions for smooth reveal effects

```tsx
<ProjectCard
  title="Project Name"
  subtitle="Project Type | Timeline"
  tags={['React', 'TypeScript', 'Node.js']}
  description="Detailed project description..."
  liveLink="https://..."
  sourceLink="https://github.com/..."
/>
```

### Animation Features

- **Scroll Animations**: Elements fade in as they enter the viewport
- **Hover Effects**: Cards and buttons respond to user interaction
- **Staggered Animations**: Multiple elements animate with delays for visual flow
- **Smooth Transitions**: All state changes use CSS transitions or GSAP

## 🔧 Customization

### Update Personal Information

Edit the content in each component file:

- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/AboutMe.tsx`
- **Projects**: `src/components/ProjectsGrid.tsx`
- **Education**: `src/components/Education.tsx`
- **Contact**: `src/components/Contact.tsx`

### Modify Colors

Update the color variables in `tailwind.config.js`:

```js
colors: {
  primary: '#1a1a1a',
  accent: '#00ff00',
  // ... other colors
}
```

### Add New Projects

Add project objects to the `projects` array in `ProjectsGrid.tsx`:

```tsx
{
  id: 'unique-id',
  title: 'Project Title',
  subtitle: 'Project Type | Timeline',
  tags: ['Tech1', 'Tech2'],
  description: 'Detailed description...',
  liveLink: 'https://...',
  sourceLink: 'https://github.com/...',
  category: 'web' | 'embedded',
}
```

## 📊 Performance

- **Build Size**: ~277 KB (uncompressed), ~97 KB (gzipped)
- **Lighthouse Score**: Optimized for Core Web Vitals
- **Load Time**: < 2 seconds on 4G connection

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Vite and deploys

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name
2. Run: `npm run build`
3. Push the `dist` folder to your `gh-pages` branch

## 📝 Content Sections

### 1. Hero Section
- Headline with accent color
- Compelling sub-headline
- Call-to-action buttons

### 2. About Me
- Professional narrative
- Background and expertise
- Personal philosophy

### 3. Toolkit
- Categorized skills grid
- Languages, frameworks, and tools
- Interactive hover effects

### 4. Projects
- **Web Applications**: Full-stack projects
- **Embedded & Robotics**: Hardware-software integration projects
- Interactive project cards with descriptions

### 5. Services
- Full-Stack Web Development
- API Architecture & Integration
- Embedded Software & Robotics

### 6. Education
- Timeline layout
- Degree and institution information
- Visual timeline indicators

### 7. Contact
- Contact form with validation
- Success message feedback
- Social media links

### 8. Footer
- Quick navigation links
- Social media links
- Copyright information

## 🔐 Security

- No sensitive data stored in the frontend
- Form submissions should be handled by a backend service
- All external links open in new tabs with `rel="noopener noreferrer"`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

For questions or suggestions, reach out through:
- GitHub: [@sagar8789520414](https://github.com/sagar8789520414)
- LinkedIn: [Sagar Kumar Singh](https://linkedin.com/in/sagar-kumar-singh-iit)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
