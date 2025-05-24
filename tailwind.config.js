/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary:"#B58ADC",
        secondary:"#8E60AF",
        gdone:"#D5B400",
        gdtwo:"#FFD971",
        footer: "#493178"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}

