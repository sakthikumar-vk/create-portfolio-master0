/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0B1A2E",
        "secondary": "#F87215",
        "tertiary": "#53D5BA",
        "fourth": "#F0F0F0",
        "fifth": "#333333",
        "sixth": "#980000"
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