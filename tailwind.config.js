/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "str": "#B62B24",
        "agi": "#5BEF36",
        "int": "#36ACEF",
        "deg": "#757575",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
}
