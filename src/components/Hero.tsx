import dragonWatermark from '../../assets/OIP.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary">
      {/* Fixed background watermark - dragon image */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src={dragonWatermark}
          alt="background watermark"
          className="w-full h-full object-cover opacity-[0.08] mix-blend-multiply"
        />
      </div>

      {/* Background gradient effect - very subtle */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl animate-fade-in">
        <h1
          style={{ color: '#ffffff' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
        >
          Hey, I'm <span style={{ color: '#00ff00' }}>SAGAR KUMAR SINGH</span>
        </h1>

        <p
          style={{ color: '#e0e0e0' }}
          className="text-lg sm:text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          B.Tech. (Hons.) Student at IIT Kharagpur building scalable full-stack web applications and intelligent mobile/embedded robotic systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-dark transition-all transform hover:scale-105 glow text-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-primary transition-all transform hover:scale-105 text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
