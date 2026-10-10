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
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // primary athletic red
          600: '#dc2626', // power red
          700: '#b91c1c', // deep crimson
          800: '#991b1b', // dark scarlet
          900: '#7f1d1d',
          accent: '#f97316', // fiery orange accent
          crimson: '#e11d48',
          amber: '#f59e0b',
        },
        dark: {
          bg: '#090a0f',
          card: '#12141c',
          surface: '#181b26',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#94a3b8',
        },
        light: {
          bg: '#fafafa',
          card: '#ffffff',
          surface: '#f4f4f5',
          border: 'rgba(0, 0, 0, 0.08)',
          muted: '#71717a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-red': '0 0 40px -10px rgba(239, 68, 68, 0.45)',
        'glow-orange': '0 0 40px -10px rgba(249, 115, 22, 0.45)',
      }
    },
  },
  plugins: [],
}
