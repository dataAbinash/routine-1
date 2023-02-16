/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      accent: '#FB536A',
      dark: '#2F2E41',
      white : '#fff',
      link : 'dodgerblue',
      gray : 'gray',
      black : 'black'
    }
  },
  plugins: [],
}