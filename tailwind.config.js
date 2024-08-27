/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {}
    },
    colors: {
      one :"#C54939",
      two:"#000000",
      three:"#FFFFFF",
      four:"#707070",
      five:"#080810",
      six:"#C96A5E",
      seven:"#0B0B16",
      eight:"#615D58"
      

    },
    fontFamily: {
      'sans': ['Poppins'],      
    }

  },
  plugins: [],
}

