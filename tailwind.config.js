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
        jblightgray: "#F5F3FF",
        jbgray: "#c0c0c0",
        jbpink: "#ff5b5b",
        jbblue: "#00ace5",
        jbblue2: "#2487DA",
        jbpurple: "#5c2d91",
        jbyellow: "#ffd200",
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
