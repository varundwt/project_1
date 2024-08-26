/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      one :"#C54939",
      two:"#000000",
      three:"#FFFFFF",
      four:"#707070"
    },
    fontFamily: {
      'sans': ['Poppins'],      
    }

  },
  plugins: [],
}

