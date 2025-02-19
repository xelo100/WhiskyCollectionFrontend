/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            primary: "#6c23eb",
            secondary: "#dedde2",
        }
    },
  },
  plugins: [],
}

