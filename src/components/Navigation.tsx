import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

interface NavigationProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export default function Navigation({ isDark, setIsDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [isVisible, setIsVisible] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact']
      
      // Hide navbar if scrolled to top (less than 100px from top)
      if (window.scrollY < 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full bg-primary/98 backdrop-blur-md z-50 border-b border-secondary/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        {/* Animated line inside navbar */}
        {isVisible && (
          <div
            style={{
              height: '2px',
              background: `linear-gradient(90deg, transparent, rgba(170, 250, 230, 1) ${
                activeSection === 'about' ? '20%' : activeSection === 'projects' ? '50%' : '80%'
              }, transparent)`,
              boxShadow: '0 0 15px rgba(170, 250, 230, 0.9), 0 0 30px rgba(170, 250, 230, 0.6)',
              transition: 'all 0.5s ease',
            }}
          ></div>
        )}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Left - Name */}
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <h1 className="text-5xl cursor-pointer hover:opacity-80 transition-opacity" style={{ fontFamily: 'Dancing Script, cursive', color: 'rgba(170, 250, 230, 1)', fontWeight: 900, letterSpacing: '0.05em' }}>
                SKS
              </h1>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-mono text-lg font-bold transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : 'text-text-muted hover:text-accent'
                  }`}
                  style={{ fontFamily: 'Courier New, monospace', letterSpacing: '0.05em' }}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Right - Theme Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setIsDark(!isDark)}
              className="relative inline-flex items-center h-10 w-20 rounded-full border-2 border-white/5 transition-all duration-300 bg-white/10 backdrop-blur-md"
              style={{
                boxShadow: 'inset 0 1px 0 0 rgba(170, 250, 230, 0.3), 0 4px 12px 0 rgba(170, 250, 230, 0.1)',
              }}
              aria-label="Toggle theme"
            >
              {/* Background */}
              <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDark ? 'bg-primary' : 'bg-primary'}`}></div>
              
              {/* Slider */}
              <div
                className={`absolute w-8 h-8 rounded-full transition-transform duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-1' : 'translate-x-10'
                }`}
                style={{ backgroundColor: 'rgba(170, 250, 230, 1)' }}
              >
                {isDark ? <Moon size={16} className="text-primary" /> : <Sun size={16} className="text-primary" />}
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-4 p-2 text-white text-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-secondary/50 pt-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block px-6 py-3 font-mono text-lg font-bold rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : 'text-text-muted hover:text-accent'
                  }`}
                  style={{ fontFamily: 'Courier New, monospace' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
