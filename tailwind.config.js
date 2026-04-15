/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34E0A1',
        dark: {
          bg: '#0E1015',
          card: '#1C1F26',
          light: '#12141A'
        }
      }
    },
  },
  plugins: [],
}
