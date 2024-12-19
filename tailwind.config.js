/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['28px', { lineHeight: '33.89px' }],
        h2: ['22px', { lineHeight: '26.63px' }],
      },
      colors: {
        primary: '#232323',
        secondary: '#343C6A',
      },
      textColor: {
        h1: '#343C6A',
        h2: '#343C6A',
      },
    },
  },
  plugins: [],
};
