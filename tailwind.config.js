/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    container: {
      padding: '1.4rem',
    },
    extend: {
      spacing:{
        quarter: '25%',
      },
      fontFamily:{
        'sans': "'Work Sans', 'sans-serif'",
        'cascadia': 'Cascadia Code',
      },
      colors:{
        'do-blue-dark': '#080c2d',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-light': 'rgb(0,105,255)',

      }
    },
  },
  plugins: [],
}

