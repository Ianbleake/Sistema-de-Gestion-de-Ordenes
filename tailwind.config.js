/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      abel: ['Abel'],
      varela:['Varela Round']
    },
    extend: {
      colors:{
        nav:'#2FA5AE'
      }
    },
  },
  plugins: [],
}