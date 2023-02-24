/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      anton: ["PT Sans Narrow", "sans-serif"],
      sans: ["Anton", "sans-serif"],
    },

    screens: {
      xs: "325px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      main: {
        brand: "#FCFE00",
      },
      white: {
        main: "#FFFFFF",
      },
      green: {
        main: "#39FF14",
      },
      black: {
        main: "#0D0D0D",
      },
      pink: {
        main: "#FF0F7A",
      },
      blue:{
        main:"#5501EE",
      }
    },
  },
  plugins: [],
};
