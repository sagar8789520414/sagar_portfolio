import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Toolkit from './components/Toolkit'
import ProjectsGrid from './components/ProjectsGrid'
import Services from './components/Services'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WatermarkSection from './components/WatermarkSection'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (!isDark) {
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg) saturate(0.5) brightness(0.95) sepia(0.6)'
      document.body.classList.add('light-theme')
    } else {
      document.documentElement.style.filter = 'none'
      document.body.classList.remove('light-theme')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-primary text-text">
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <WatermarkSection>
        <Hero />
        <AboutMe />
      </WatermarkSection>
      <Toolkit />
      <ProjectsGrid />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
