/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cGreen: '#11cc00ff',
        cGray: '#e2d4baff',
        cBlue: '#77b6eaff',
        cViolet: '#a379c9ff',
        cDark: '#000f08ff',
      },

      keyframes: {
        slideInLeft: {
          '0%': { position: 'relative', left: '-150px' },
          '100%': { position: 'relative', left: '0px' },
        },
      },

      animation: {
        // reference the keyframe
        slideInLeft: 'slideInLeft 2s ease-in-out',
      },
    },

  },
  plugins: [],
};