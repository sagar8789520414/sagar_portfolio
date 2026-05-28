import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface EducationItem {
  year: string
  degree: string
  institution: string
}

const educationData: EducationItem[] = [
  {
    year: '2023 - 2027',
    degree: 'B.Tech. (Hons.) in Mechanical Engineering',
    institution: 'IIT Kharagpur',
  },
  {
    year: '2021 - 2023',
    degree: 'CBSE Class XII',
    institution: 'DAV Public School, N.I.T Campus Jamshedpur',
  },
  {
    year: '2019 - 2021',
    degree: 'CBSE Class X',
    institution: 'DAV Public School, N.I.T Campus Jamshedpur',
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return
      // Set initial visible state
      gsap.set(item, { opacity: 1, x: 0 })
      
      gsap.from(item, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
        duration: 0.6,
        delay: index * 0.15,
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="accent-text">Education</span>
        </h2>

        <div className="space-y-4">
          {educationData.map((item, index) => (
            <div
              key={item.degree}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="relative pl-8 border-l-2 border-accent pb-4 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-primary"></div>

              <div 
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/5"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(170, 250, 230, 0.7), 0 8px 16px 0 rgba(170, 250, 230, 0.2)'
                }}
              >
                <span className="text-sm font-mono" style={{ color: 'rgba(170, 250, 230, 1)' }}>{item.year}</span>
                <h3 className="text-xl font-bold mt-2 mb-1 text-text">{item.degree}</h3>
                <p className="text-text-muted text-sm">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
