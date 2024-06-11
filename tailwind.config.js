/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackCustom: {
          900: "#000000",
          800: "#0c0d0f",
          700: "#151618",
          600: "#1b1e20",
          500: "#212529",
          400: "#282d32",
          300: "#2f353b"
        },
        greenCustom: "#30f422",
        aquamarine: "#7fffd4",
      },
    },
  },
  plugins: [],
}

