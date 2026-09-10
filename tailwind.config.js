/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1DB954',
          'green-hover': '#1ed760',
          dark: '#0e0e11',
          card: '#16161c',
          border: '#262631',
          surface: '#1f1f2a',
          pill: '#2a2a38',
          text: '#f3f4f6',
          muted: '#8e8ea0',
          accent: '#e11d48',
          gold: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(29, 185, 84, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(29, 185, 84, 0.8)' },
        },
        waveBar: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'wave-bar': 'waveBar 0.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
