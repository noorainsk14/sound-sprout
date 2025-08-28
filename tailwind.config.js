/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router (if used)
    "./components/**/*.{js,ts,jsx,tsx}", // Components folder
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-100%, -62%) scale(0.7)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1.3)",
          },
        },
      },
    },
  },
  plugins: [],
};
