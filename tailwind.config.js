/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        black: "#121214",
        yellow: "#eba417",
        red: "#e52e4d",
        green: "#33cc95",
        "gray-100": "#323238",
        "gray-300": "#29292e",
        "gray-600": "#202024",
        "gray-900": "#c4c4c5",
        "gray-950": "#7c7c8b",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
