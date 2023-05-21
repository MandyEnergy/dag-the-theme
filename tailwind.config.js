/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'primary': {
          50: '#E6EDEE',
          100: '#CDDCDD',
          200: '#B4CACC',
          300: '#9BB9BB',
          400: '#83A8AA',
          500: '#6A9699',
          600: '#518588',
          700: '#387377',
          800: '#1F6266',
          900: '#075156',
        },
        'secondary': {
          50: '#FFFAF0',
          100: '#FFF5E2',
          200: '#FFF1D4',
          300: '#FFECC5',
          400: '#FFE8B7',
          500: '#FFE3A9',
          600: '#FFDE9A',
          700: '#FFDA8C',
          800: '#FFD57E',
          900: '#FFD170',
        },
        'accent': {
          50: '#f7fcfb',
          100: '#eff8f7',
          200: '#e8f5f3',
          300: '#e0f2ef',
          400: '#d8efeb',
          500: '#d0ebe6',
          600: '#c8e8e2',
          700: '#c1e5de',
          800: '#b9e1da',
          900: '#b1ded6',
        }
      },
      fontFamily: {
        'fredoka-one': ['Fredoka One', 'sans-serif'],
        'futurua-light': ['Futura Light', 'sans-serif'] ,
        'futurua-book': ['Futura Book', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
