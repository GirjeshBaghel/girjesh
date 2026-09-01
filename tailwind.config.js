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
        bg: {
          primary: '#05060B',
          secondary: '#080A12',
          card: '#0D101A',
        },
        text: {
          primary: '#F8FAFC',
          muted: '#98A2B3',
          subtle: '#64748B',
        },
        border: {
          DEFAULT: '#202638',
          subtle: '#151928',
        },
        brand: {
          blue: '#5B7CFF',
          purple: '#8B5CF6',
          cyan: '#22D3EE',
          green: '#22C55E',
          pink: '#EC4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue-purple': 'linear-gradient(135deg, #5B7CFF, #8B5CF6)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #22D3EE, #5B7CFF)',
        'gradient-hero': 'radial-gradient(ellipse at 60% 50%, rgba(91, 124, 255, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(91, 124, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(91, 124, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(91,124,255,0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(91,124,255,0.6)' },
        },
        'slide-up': {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
