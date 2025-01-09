/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FC1503",
        'third-color': '#1E1E1E',
      },
      boxShadow: {
        'custom-blue': '0px 0px 5px 1px rgba(4, 9, 243, 0.29)',
      },

      screens: {
        'ml': '800px',
      },
    },
  },
  plugins: [],
}