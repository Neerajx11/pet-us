/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#ff4c29",
        primarylight: "rgba(255, 76, 41, 0.1)",
        bgprimary: "#334756",
        bgsecondary: "#2c394b",
        bgdark: "#082032",
      },
    },
  },
  plugins: [],
};
