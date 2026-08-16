/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          dark: "#100F1C",      // Dark whimsical night-sky background
          darker: "#0a0a12",    // Deep shadow overlays
          secondary: "#18152A", // Secondary layout containers
          lavender: "#B9A7FF",  // Dreamy lavender
          pink: "#FF8FC7",      // Pastel pink
          peach: "#FFB38A",     // Soft peach
          cyan: "#8FE7FF",      // Cyber cyan
          yellow: "#FFE58A",    // Warm golden yellow
          mint: "#A8F0C6",      // Refreshing green-mint
          muted: "#66608A",     // Deep sky muted purple-gray
          border: "#292445",    // Pixel grid outline
        }
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
        retro: ["'VT323'", "monospace"],
        sans: ["'Outfit'", "sans-serif"],
      },
      animation: {
        'idle-float': 'float 3.5s ease-in-out infinite',
        'pixel-sparkle': 'sparkle 1.8s ease-in-out infinite',
        'scanline': 'scanline 10s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'blink': 'blink 1.2s step-end infinite',
        'cloud-drift': 'cloudDrift 45s linear infinite',
        'cloud-drift-slow': 'cloudDrift 75s linear infinite',
        'code-float': 'codeFloat 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: 1 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'brightness(1) drop-shadow(0 0 2px rgba(185,167,255,0.2))' },
          '50%': { opacity: '1', filter: 'brightness(1.2) drop-shadow(0 0 8px rgba(185,167,255,0.6))' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        codeFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: 0.3 },
          '50%': { transform: 'translateY(-20px) rotate(5deg)', opacity: 0.7 },
        }
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0,0,0,1)',
        'pixel-lavender': '4px 4px 0px 0px #B9A7FF',
        'pixel-cyan': '4px 4px 0px 0px #8FE7FF',
        'pixel-pink': '4px 4px 0px 0px #FF8FC7',
        'pixel-peach': '4px 4px 0px 0px #FFB38A',
        'pixel-yellow': '4px 4px 0px 0px #FFE58A',
        'pixel-mint': '4px 4px 0px 0px #A8F0C6',
        'pixel-in': 'inset 4px 4px 0px 0px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
