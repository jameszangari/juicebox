module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        112: "28rem",
        120: "30rem",
      }),
      minHeight: (theme) => ({
        80: "20rem",
      }),
      colors: {
        jbgray: "#bfbfbf",
        jbpink: "#E87970",
        jbblue: "#4EB7E4",
        jbblue2: "#2487DA",
        jbpurple: "#69469C",
        jbyellow: "#F8D853",
        palette: {
          lighter: "#F5F3FF",
          light: "#DDD6FE",
          primary: "#4EB7E4",
          dark: "#2487DA",
        },
      },
      fontFamily: {
        primary: ['"Montserrat"'],
        secondary: ['"Corben"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
