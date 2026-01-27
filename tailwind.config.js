/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Deep black/gray for background
        secondary: "#ffffff", // Clean white for text
        accent: "#3b82f6", // Subtle blue accent (customizable)

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional sans-serif
      }
    },
  },
  plugins: [],
}
