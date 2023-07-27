/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mgBlue: "#353998",
        mgGreen: "#27637d",
        mgWhite: "#FFF",
        mgOffWhite: "rgba(255, 255, 255, 0.60)",
        mgBlack: "#000000",
      },
    },
  },
  plugins: [],
};
