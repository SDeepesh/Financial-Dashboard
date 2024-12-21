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
        accent: '#FFA500',
        muted: '#B1B1B1',
      },
      textColor: {
        h1: '#343C6A',
        h2: '#343C6A',
        muted: '#B1B1B1',
      },
      spacing: {
        '18px': '18px',
        '26px': '26px',
      },
      borderRadius: {
        '10px': '10px',
      },
      filter: {
        primary:
          'brightness(0) saturate(100%) invert(38%) sepia(85%) saturate(1000%) hue-rotate(200deg) brightness(91%) contrast(89%)',
        inactive:
          'brightness(0) saturate(100%) invert(85%) sepia(14%) saturate(69%) hue-rotate(181deg) brightness(91%) contrast(87%)',
      },
    },
  },
  plugins: [],
};
