/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        user: "url('https://percycordova.github.io/Guide/Assets/Tropa-28-lg.png)",
      },
      dropShadow: {
        shadowDefaut: "drop-shadow(3px -3px 9px rgba(0, 0, 0, 0.25))",
      },
    },
  },
  plugins: [],
};
