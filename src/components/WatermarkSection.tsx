import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import dragonWatermark from '../../assets/OIP.jpg'

interface WatermarkSectionProps {
  children: ReactNode
}

export default function WatermarkSection({ children }: WatermarkSectionProps) {
  const watermarkRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!watermarkRef.current) return

    // Animate watermark fade-in on mount
    gsap.fromTo(
      watermarkRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.05,
        duration: 3,
        ease: 'power2.inOut',
        delay: 0.5,
      }
    )
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !watermarkRef.current) return

    // Parallax scroll effect - watermark moves up as you scroll down
    const handleScroll = () => {
      if (!sectionRef.current || !watermarkRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollY = window.scrollY
      
      // Calculate parallax offset - moves up faster than scroll
      const parallaxOffset = scrollY * 0.5
      
      // Show watermark only while within Hero + AboutMe sections
      if (rect.bottom > 0) {
        watermarkRef.current.style.visibility = 'visible'
        watermarkRef.current.style.transform = `translateY(-${parallaxOffset}px)`
      } else {
        watermarkRef.current.style.visibility = 'hidden'
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className="relative">
      {/* Background watermark - dragon image with parallax effect */}
      <div
        ref={watermarkRef}
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
        style={{
          opacity: 0,
          visibility: 'visible',
          mixBlendMode: 'multiply',
          willChange: 'transform',
        }}
      >
        <img
          ref={imgRef}
          src={dragonWatermark}
          alt="background watermark"
          className="w-full h-full object-cover"
          style={{
            position: 'fixed',
            top: 0,
            left: '25%',
          }}
        />
      </div>

      {/* Content with proper z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
