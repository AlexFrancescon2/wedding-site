module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#98C6E8",
        primarylight: "#D4E9F7",
        primarydark: "#537893",
        primarydark30: "#70a0afff",
        black: "#2E2E2E",
      },
      fontFamily: {
        title: ["'Dancing Script'", "cursive"],
        accent: ["'Alex Brush'", "cursive"],
        body: ["'Quicksand'", "sans-serif"],
      },
      spacing: {
        section: "5rem",
      },
    },
  },
  plugins: [],
};
