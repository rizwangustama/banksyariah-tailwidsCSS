/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        clifford: '#da373d',
        primary: '#34A5DD',
        secondary: '#FFB800',
        background: "#FAFAFA",
        dark: '#0B151E',
        lightGray: '#656565',
        Black: '#232631'
      }
    },
  },
  plugins: [],
}
