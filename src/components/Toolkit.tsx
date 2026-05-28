import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const toolkitRows = [
  {
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'SQL',
      'Verilog',
      'HTML',
      'CSS',
      'C',
      'C++',
    ],
    direction: 'left' as const,
  },
  {
    items: [
      'Docker',
      'MongoDB',
      'MySQL',
      'SQLite',
      'Android Studio',
      'FPGA Programming',
      'SolidWorks',
      'Git/GitHub',
      'Webpack',
    ],
    direction: 'right' as const,
  },
  {
    items: [
      'React.js',
      'React Native',
      'Node.js',
      'Express.js',
      'FastAPI',
      'Django',
      'Bootstrap',
      'Tailwind CSS',
      'GraphQL',
    ],
    direction: 'left' as const,
  },
]

export default function Toolkit() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    rowsRef.current.forEach((row, rowIndex) => {
      if (!row) return

      const direction = toolkitRows[rowIndex].direction
      const halfWidth = row.scrollWidth / 2

      // Kill any existing animations
      gsap.killTweensOf(row)

      // Animate continuous scroll
      if (direction === 'left') {
        gsap.to(row, {
          x: -halfWidth,
          duration: 40,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const val = parseFloat(x) % halfWidth
              return val
            }),
          },
        })
      } else {
        // Right direction - move in opposite direction
        gsap.to(row, {
          x: halfWidth,
          duration: 60,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const val = parseFloat(x) % halfWidth
              return val > 0 ? val - halfWidth : val
            }),
          },
        })
      }
    })

    return () => {
      gsap.killTweensOf(rowsRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-primary">
      <div className="max-w-full">
        <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-center px-4">
          My <span className="accent-text">Toolkit</span>
        </h2>

        <div className="space-y-8">
          {toolkitRows.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden w-full">
              <div
                ref={(el) => {
                  rowsRef.current[rowIndex] = el
                }}
                className="flex gap-4 whitespace-nowrap px-4"
              >
                {/* Duplicate items for seamless infinite loop */}
                {[...row.items, ...row.items].map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex-shrink-0 px-8 py-4 bg-secondary border-2 border-secondary/80 rounded-lg transition-all duration-300 cursor-default flex items-center justify-center group"
                  >
                    <span className="text-lg font-mono font-bold text-text transition-colors duration-300 whitespace-nowrap" style={{ color: 'inherit' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(170, 250, 230, 1)' }} onMouseLeave={(e) => { e.currentTarget.style.color = '#b0b0b0' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
