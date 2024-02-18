/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1A1A1A",
  "secondary": "#FF5733",
  "tertiary": "#3FC8A2",
  "fourth": "#E5E5E5",
  "fifth": "#333333",
  "sixth": "#CC0000"
      }
      
    },
    screens: {
      'sm': '640px',
      'lg': { 'max': '1024px' },

      'md': { 'max': '660px' },

    }
  },
  plugins: [],
}