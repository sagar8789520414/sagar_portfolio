import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    // Set initial state to visible
    gsap.set(contentRef.current, { opacity: 1, y: 0 })

    gsap.from(contentRef.current, {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          About <span className="accent-text">Me</span>
        </h2>

        <div ref={contentRef} className="space-y-6 text-base sm:text-lg text-text-muted leading-relaxed">
          <p>
            I am a software developer specializing in JavaScript, React.js, FastAPI, and web ecosystems, driven by a passion for structural precision, performance, and user experience.
          </p>

          <p>
            By bridging my rigorous engineering background at IIT Kharagpur with modern software frameworks, I design efficient, digital-minimalist tools that solve real-world complexities.
          </p>

          <p>
            I thrive at the intersection of robust backend systems, interactive web UIs, and hardware-software integration. My experience spans full-stack web development, AI/ML integration, and embedded systems programming.
          </p>

          <p>
            I'm always open to collaborations where I can contribute, learn, and grow. If my skills and experience align with your needs, feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  )
}
