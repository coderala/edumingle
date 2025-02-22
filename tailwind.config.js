// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#4D1BB6",
        light: "#EEE8F8",
        yellow: "#EBD61D",
        // light: "#EEE8F8",
      },
    },
  },
  plugins: [],
};
