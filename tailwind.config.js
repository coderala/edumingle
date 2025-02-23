// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      dark: "#4D1BB6",
      light: "#EEE8F8",
      yellow: "#EBD61D",
    },
    fontFamily: {
      poppins: ["Poppins", "serif"],
      prompt: ["Prompt", "serif"],
    },
  },
};
export const plugins = [];
