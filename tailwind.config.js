/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F6946",
        secondary: "#E4B7A0",
        tertiary: "#A45C40",
        greener: "#3F6946",
        gray: "#A4B8C4",
        lightBlack: "#8A8484",
        lightergray: "#D9DDDC",
        lightgray: "#C7C6C1"
      },
    },
    screens: {
      xs: "320px",
      md: "768px",
      tablet: "640px",
      lg: "1024px",
      desktop: "1280px",
      xl: "1375px",
    },
  },
  plugins: [],
};
