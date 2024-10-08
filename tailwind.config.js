/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    colors: {
      one :"#C54939",
      two:"#000000",
      three:"#FFFFFF",
      four:"#707070",
      five:"#080810",
      six:"#C96A5E",
      seven:"#0B0B16",
      eight:"#615D58",
      nine:"#1D5455",
      ten:"#50BEC1",
      eleven: "#752450"

      

    },
    fontFamily: {
      'sans': ['Poppins'],      
    }

  },
  plugins: [],
}

