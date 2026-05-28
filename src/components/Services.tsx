import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Service {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description:
      'Crafting high-performance, responsive single-page web applications utilizing React.js, Node.js, and FastAPI with clean state management.',
    icon: '/assets/coding.png',
  },
  {
    title: 'API Architecture & Integration',
    description:
      'Designing secure RESTful APIs, implementing robust authentication gates (JWT), and connecting intelligent AI gateways like Gemini and Groq.',
    icon: '/assets/api.png',
  },
  {
    title: 'Embedded Software & Robotics',
    description:
      'Writing efficient code for hardware automation, custom state architectures, and wireless data communication protocols like UART.',
    icon: '/assets/artificial-intelligence.png',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [visibleServices, setVisibleServices] = useState<number[]>([])

  useEffect(() => {
    // Animate services on load
    services.forEach((_, index) => {
      setTimeout(() => {
        setVisibleServices((prev) => [...prev, index])
      }, index * 150) // 150ms stagger between each service
    })
  }, [])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return
      // Set initial visible state
      gsap.set(card, { opacity: 1, y: 0 })
      
      gsap.from(card, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.15,
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          What I <span className="accent-text">Offer</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`relative rounded-lg overflow-hidden transition-all duration-700 transform p-8 ${
                visibleServices.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${
                hoveredIndex === index
                  ? 'bg-white/5 backdrop-blur-md border border-white/5'
                  : 'bg-secondary/50 border border-secondary'
              }`}
              style={
                hoveredIndex === index
                  ? {
                      boxShadow: 'inset 0 1px 0 0 rgba(170, 250, 230, 0.5), 0 8px 16px 0 rgba(170, 250, 230, 0.15)',
                    }
                  : {
                      boxShadow: '0 0 20px rgba(0, 255, 0, 0.05)',
                    }
              }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mb-4">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(10000%) hue-rotate(90deg)',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-700 ${
                hoveredIndex === index ? 'text-accent' : 'text-white'
              }`}>
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
