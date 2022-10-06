/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        weed: "#285028",
      },
    },
  },
  plugins: [],
};
