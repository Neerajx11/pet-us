/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff4c29",
        bgprimary: "#334756",
        bgsecondary: "#2c394b",
        bgdark: "#082032",
      },
    },
  },
  plugins: [],
};
