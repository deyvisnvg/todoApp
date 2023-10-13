/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        main: "#ECF0FB",
      },
      backgroundImage: {
        bottonAdd: "linear-gradient(to top, #918bd3, #8f9ade, #90a9e7, #93b7ee, #9ac5f4)"
      }
    },
  },
  plugins: [],
}