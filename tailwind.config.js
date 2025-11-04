/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4a90e2",
          dark: "#357abd",
        },
        gradient: {
          start: "#667eea",
          end: "#764ba2",
        },
        error: "#e63946",
      },
    },
  },
  plugins: [],
};
