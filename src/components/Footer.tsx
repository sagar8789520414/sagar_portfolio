export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: '/assets/github.png',
      href: 'https://github.com/sagar8789520414',
      label: 'GitHub',
      title: 'GitHub',
    },
    {
      icon: '/assets/linkedin.png',
      href: 'https://www.linkedin.com/in/sagar-kumar-singh-737046288/',
      label: 'LinkedIn',
      title: 'LinkedIn',
    },
    {
      icon: '/assets/instagram.png',
      href: 'https://www.instagram.com/sagarsingh12382/',
      label: 'Instagram',
      title: 'Instagram',
    },
  ]

  return (
    <footer className="border-t-4 border-secondary/50 bg-primary/98 backdrop-blur-md border-b border-accent relative">
      {/* Cyan-green line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50"
        style={{
          height: '2px',
          background: `linear-gradient(90deg, transparent, rgba(170, 250, 230, 1) 50%, transparent)`,
          boxShadow: '0 0 15px rgba(170, 250, 230, 0.9), 0 0 30px rgba(170, 250, 230, 0.6)',
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="py-8 px-8 md:px-16">
          {/* Main Footer Content - Two Sections */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-8">
            {/* Left Section - Sagar & Quick Links */}
            <div className="flex flex-col md:flex-row gap-20">
              {/* Name & Description */}
              <div className="space-y-3 min-w-max">
                <h3 className="text-xl font-bold accent-text" style={{ fontFamily: 'Courier New, monospace' }}>
                  Sagar Kumar Singh
                </h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                  Full-stack developer building scalable web applications and intelligent robotic systems.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold accent-text" style={{ fontFamily: 'Courier New, monospace' }}>
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
                      → About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
                      → Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
                      → Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section - Social Links */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold accent-text" style={{ fontFamily: 'Courier New, monospace' }}>
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center"
                    aria-label={social.label}
                    title={social.title}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(179, 253, 187, 1))'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(0, 255, 0, 0))'
                      }}
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="w-5 h-5 transition-all duration-300"
                        style={{
                          filter: 'invert(1) sepia(1) saturate(10000%) hue-rotate(90deg)',
                        }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-accent pt-6">
            <p className="text-center text-text-muted text-xs" style={{ fontFamily: 'Courier New, monospace' }}>
              © {currentYear} Sagar Kumar Singh. All rights reserved. | Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
