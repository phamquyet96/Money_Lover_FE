/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-green': '#00710f',
        'custom-gray': '#e4e4e4',
        'button-green': '#0e9f6e',
        'inflow': '#28a9e9'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}