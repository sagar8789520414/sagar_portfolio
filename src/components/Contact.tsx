import { useState, useRef, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!formRef.current) return

    // Set initial visible state
    gsap.set(formRef.current, { opacity: 1, y: 0 })

    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Using Formspree for email functionality
      const formId = import.meta.env.VITE_FORMSPREE_ID
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: formData.subject,
          message: formData.message,
          email: import.meta.env.VITE_CONTACT_EMAIL,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ subject: '', message: '' })

        // Reset after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Contact <span className="accent-text">Me</span>
        </h2>

        <div ref={formRef} className="bg-secondary/20 rounded-2xl p-10 border border-accent/40 max-w-2xl mx-auto select-none">
          {submitted ? (
            <div className="text-center py-10">
              <div className="mb-4 flex justify-center">
                <CheckCircle size={48} className="text-accent animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold accent-text mb-2">Message Sent!</h3>
              <p className="text-text-muted">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-base font-bold mb-3 text-text select-none">
                  Subject <span className="accent-text">:-</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="A clear summary of your inquiry"
                  className="w-full px-5 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-lg focus:outline-none focus:bg-white/20 transition-all text-text placeholder-text-muted/50 font-mono text-sm"
                  style={{
                    boxShadow: 'inset 0 1px 0 0 rgba(170, 250, 230, 0.3), 0 4px 12px 0 rgba(170, 250, 230, 0.1)',
                  }}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-bold mb-3 text-text select-none">
                  Message <span className="accent-text">:-</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Details of your message. Be as specific as possible..."
                  rows={6}
                  className="w-full px-5 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-lg focus:outline-none focus:bg-white/20 transition-all text-text placeholder-text-muted/50 resize-none font-mono text-sm"
                  style={{
                    boxShadow: 'inset 0 1px 0 0 rgba(170, 250, 230, 0.3), 0 4px 12px 0 rgba(170, 250, 230, 0.1)',
                  }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-dark transition-all transform hover:scale-105 glow text-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
