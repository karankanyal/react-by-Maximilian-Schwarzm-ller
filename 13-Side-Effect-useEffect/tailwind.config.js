/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        pColor: "#9eb5b4",
      },

      dropShadow: {
        custom: "0 0 8px rgba(0, 0, 0, 0.4)",
      },

      letterSpacing: {
        "extra-wide": "1rem",
      },
      borderColor: {
        customSectionBorder: "#0d373e",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },

      animation: {
        "slide-up-fade-in": "slide-up-fade-in 0.3s ease-out forwards",
      },
      keyframes: {
        "slide-up-fade-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
