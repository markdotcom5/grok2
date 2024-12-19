/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Custom primary color
        secondary: "#10B981", // Custom secondary color
      },
    },
  },
  plugins: [],
};

module.exports = config;
