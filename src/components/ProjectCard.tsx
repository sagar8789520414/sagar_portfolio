import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface ProjectCardProps {
  id?: string
  title: string
  description: string
  tags: string[]
  liveLink?: string
  sourceLink?: string
  checkItLink?: string
  sourceCodeLink?: string
  watermarkImage?: string
  variant?: 'single' | 'grid'
}

export default function ProjectCard({
  title,
  description,
  tags,
  sourceLink,
  watermarkImage,
  variant = 'grid',
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-all duration-700 transform ${
        variant === 'single' ? 'p-10' : 'p-8'
      } h-[398px] ${
        isHovered ? 'scale-102' : 'scale-100'
      } ${
        isHovered
          ? 'bg-white/5 backdrop-blur-md border border-white/5'
          : 'bg-primary border border-accent/20'
      }`}
      style={
        isHovered
          ? {
              boxShadow: 'inset 0 1px 0 0 rgba(170, 250, 230, 0.5), 0 8px 16px 0 rgba(170, 250, 230, 0.15)',
            }
          : {
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.05)',
            }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Optional Watermark Background */}
      {watermarkImage && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img
            src={watermarkImage}
            alt="watermark"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3
          className={`text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-700 ${
            isHovered ? 'text-cyan-300' : 'text-white'
          }`}
          style={{ fontFamily: 'Courier New, monospace', color: isHovered ? 'rgba(170, 250, 230, 1)' : '#ffffff' }}
        >
          {title}
        </h3>

        {/* Description - 2 lines initially, full text on hover */}
        <div className="mb-4 flex-grow overflow-y-auto">
          {/* Initial 2-line description */}
          <p
            className={`text-text-muted text-sm sm:text-base leading-relaxed transition-opacity duration-[2000ms] ${
              isHovered ? 'opacity-0 hidden' : 'opacity-100 line-clamp-3'
            }`}
          >
            {description}
          </p>
          
          {/* Full description on hover */}
          <p
            className={`text-text-muted text-sm sm:text-base leading-relaxed transition-opacity duration-[2000ms] ${
              isHovered ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            {description}
          </p>
        </div>

        {/* Technology Badges - Glass effect like Education */}
        <div className={`mb-4 transition-all duration-1000 ${isHovered ? 'opacity-0 hidden' : 'opacity-100'}`}>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded text-white text-xs sm:text-sm font-mono font-semibold transition-all duration-300"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 4px 12px 0 rgba(255, 255, 255, 0.05)',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons - Fixed at bottom */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          {/* Primary Button - Check it */}
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-accent text-primary font-bold font-mono rounded text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-700 hover:scale-108 active:scale-95 opacity-70"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.6), inset 0 0 10px rgba(0, 255, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 0 30px rgba(0, 255, 0, 0.8), inset 0 0 15px rgba(0, 255, 0, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 0 20px rgba(0, 255, 0, 0.6), inset 0 0 10px rgba(0, 255, 0, 0.2)'
            }}
          >
            Check it
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
