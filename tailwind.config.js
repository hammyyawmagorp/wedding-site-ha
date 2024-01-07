/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      weddinggold: "#BFB48F",
      weddingpurple: "#564E58",
      weddingmaroon: "#904E55",
      weddingwhite: "#F2EFE9",
      weddingblack: "#252627",
    },

    extend: { fontFamily: ["Quicksand", "sans-serif"] },
  },
};
