/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3F3F3F",
        "secondary": "#666666",
        "tertiary": "#EEEEEC",
        "quaternary": "#E5E5E5",
        "quinary": "#FFFFFF",
        "senary": "#333333"



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