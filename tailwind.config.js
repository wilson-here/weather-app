/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/src/assets/img/bg.jpg')",
      },
      colors: {
        main: "#008DEF",
      },
    },
  },
  plugins: [],
};
