/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        redditOrangeRed: "#FF4500",
        redditUrchin: "#172E35",
        redditDugong: "#F26F7",
        redditBeluga: "#FFFFFF",
        redditDolphin: "#D7DFE2",
        redditSeal: "#BBC7CC",
        redditNarwhal: "#7A9299",
        redditSquidInk: "#000000",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
