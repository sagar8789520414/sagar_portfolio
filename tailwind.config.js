/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
        accent: '#00ff00',
        'accent-dark': '#00cc00',
      },
      textColor: {
        text: '#ffffff',
        'text-muted': '#b0b0b0',
        'text-light': '#e0e0e0',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        sans: ['Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}
