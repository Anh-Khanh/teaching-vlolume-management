/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {
        red: "#94070D",
        btn: "#950B0B",
      },
      borderRadius: {
        1: "6px",
      },
      height: {
        400: "400px",
      },
      width: {
        450: "400px",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadowColor: {
        red: "#9409A0",
      },
    },
  },
  plugins: [],
};
