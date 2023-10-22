/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#fffffe",
        "purple": {
          50: '#FAF5FF',
          100: '#E9D8FD',
          200: '#D6BCFA',
          300: '#B794F4',
          400: '#9F7AEA',
          500: '#805AD5',
          600: '#6B46C1',
          700: '#553C9A',
          800: '#44337A',
          900: '#322659',
        },
        "charcoal": "#2b2c34",
        "lavender-mist": "#d1d1e9"
      },
    },
  },
  plugins: [],
}

