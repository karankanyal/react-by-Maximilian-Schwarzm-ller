/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mainContainerBG: 'radial-gradient(#0b201d, #021619)',
        gamepadBG: 'linear-gradient(#4df8df, #4df0f8)',
      },

      backgroundColor: {
        inputBG: '#192f2b',
        inputButtonBG: '#54a399',
        onHoverBG: '#3b766f',
        startGameBG: 'rgb(0,20,20)',
      },

      borderColor: {
        inputBorder: '#54a399',
        onHoverBorder: '#3b766f',
      },

      fontFamily: {
        headingFontFamily: "'Handjet', monospace",
      },

      textColor: {
        headingColor: '#c1e2dd',
        headingEMColor: '#00eeff',
        headingHelperColor: '#c6f4f2',
        welcomeNameColor: '#54a399',
        setNameColor: '#d1f0ec',
        inputColor: '#d1f0ec',
      },
    },
  },
  plugins: [],
};
