import { useRef, useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

interface Project {
  id: string
  title: string
  tags: string[]
  description: string
  liveLink: string
  sourceLink: string
  category: 'web' | 'embedded'
}

const projects: Project[] = [
  {
    id: 'chatbot',
    title: 'Multimodal AI Chatbot Gateway',
    tags: ['React.js', 'TypeScript', 'FastAPI', 'Python', 'Docker', 'Gemini API', 'Groq API'],
    description:
      'Developed a robust multimodal chatbot supporting text and image inputs. Implemented a Python-based AI gateway with automatic fallback capabilities between Gemini and Groq models for elite reliability. Built backend features including secure JWT authentication, image validation (≤5MB), and rate limiting in FastAPI.',
    liveLink: 'https://multimodal-ai-chatbot.vercel.app',
    sourceLink: 'https://github.com/sagar8789520414/Multimodal-Chat',
    category: 'web',
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust Full-Stack Platform',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'MapBox', 'Bootstrap', 'REST API'],
    description:
      'Developed a full-stack travel web app for exploring destinations and managing personalized itineraries. Implemented RESTful APIs, dynamic routing, and MongoDB database for seamless itinerary storage. Features a responsive and interactive UI powered by Bootstrap and MapBox with Cloudinary integration.',
    liveLink: 'https://wanderlust-travel-app.vercel.app',
    sourceLink: 'https://github.com/sagar8789520414/Wanderlust_Project',
    category: 'web',
  },
  {
    id: 'weather-app',
    title: 'Weather-App',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'React.js', 'Bootstrap', 'REST API'],
    description:
      'Built a weather app using React.js, Bootstrap, and REST APIs to display real-time weather data for global locations. Designed weather reports with JavaScript using condition-based styling and themed visuals for better UX. Integrated location-based search and error handling using React.js and HTML/CSS to improve accessibility.',
    liveLink: '#',
    sourceLink: 'https://github.com/sagar8789520414/Weather-App',
    category: 'web',
  },
  {
    id: 'ecomender',
    title: 'Eco-Mender Autonomous Bot',
    tags: ['Embedded Systems', 'Verilog', 'FPGA Programming', 'SolidWorks', '3D Printing'],
    description:
      'Engineered for the e-Yantra Robotics Competition (IIT Bombay) with FPGA-based control and sensing. Demonstrated hardware parallel processing via a custom Verilog-based CPU architecture for real-time operations. Established UART-based wireless communication for seamless bot-to-hub data exchange.',
    liveLink: 'https://github.com/sagar8789520414',
    sourceLink: 'https://github.com/sagar8789520414',
    category: 'embedded',
  },
]

export default function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleProjects, setVisibleProjects] = useState<string[]>([])

  useEffect(() => {
    // Animate projects on load
    projects.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjects((prev) => [...prev, project.id])
      }, index * 150) // 150ms stagger between each project
    })
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          Featured <span className="accent-text">Projects</span>
        </h2>

        {/* All Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`transition-all duration-700 transform ${
                visibleProjects.includes(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
