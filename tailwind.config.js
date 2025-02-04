/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      sm: '640px',    // Small devices (e.g., phones)
      md: '768px',    // Medium devices (e.g., tablets)
      lg: '1024px',   // Large devices (e.g., laptops)
      xl: '1280px',   // Extra-large devices (e.g., desktops)
      '2xl': '1536px', // Very large desktops
      '3xl': '1920px', // 1080p full-HD screens (optional)
      '4k': '2560px',  // 4K resolution screens (optional)
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '6rem',
        '3xl': '8rem', 
        '4k': '10rem',
      },
    },
    extend: {
      keyframes: {
        moveIn: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        moveIn2: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        borderMove: {
          to: { '--border-angle': '360deg' }
      },
      rotateBorder: {
        to: { '--border-angle': '360deg' }
      },
    },
      animation: {
        borderMove: 'border 4s linear infinite',
        moveIn: 'moveIn 0.8s ease-out forwards',
        moveIn2: 'moveIn2 0.9s ease-out forwards',
        rotateBorder: 'rotateBorder 3s linear infinite',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.02em',
        wider: '0.04em',
        widest: '0.1em',
        widest2: '0.4em', // Example custom value
      }
    },
  },
  plugins: [],
};


