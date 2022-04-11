module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)",
      }),
      spacing: {
        0.1: "0.063rem",
      },
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
      },
    },
    /* plugins: [require("tailwindcss-brand-colors")], */
  },
};
