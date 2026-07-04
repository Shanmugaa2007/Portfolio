/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05060f',
          900: '#0a0c1b',
          800: '#12152b',
        },
        accent: {
          blue: '#4f7cff',
          purple: '#9b5cff',
          cyan: '#38e0ff',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 50% 0%, rgba(79,124,255,0.18), transparent 60%)',
        'aurora': 'linear-gradient(120deg, #4f7cff 0%, #9b5cff 45%, #38e0ff 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(79,124,255,0.35)',
        'glow-purple': '0 0 40px rgba(155,92,255,0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        gradient: 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
