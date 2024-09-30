/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        headingColor: '#edbf68',
        customShopHeading: '#a59b8b',
        productTitleColor: '#fbd392',
        productPriceColor: '#d1b68b',
      },

      fontFamily: {},

      backgroundColor: {
        cartButtonbg: '#edbf68',
        productbg: '#5f4e33',
        addToCartbg: '#f4b115',
      },
    },
  },
  plugins: [],
};
