module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BED5ED",
        primarydark: "#599eb5ff",
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
