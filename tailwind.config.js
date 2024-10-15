/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ce9100",
        "primary-hover": "#6b8e23",
        secondary: "#556b2f",
        "secondary-hover": "#bc8f8f",
        neutral: "#282520",
        "neutral-800": "#33302b",
        tertiary: "#d32f2f",
        "tertiary-hover": "#e57373",
        body: "#4d6581",
        grey: "#eee",
        white: "#fff",
        black: "#09114a",
      },
      screens: {
        mobile: "200px",
        tablet: "834px",
        screen: "1140px",
        large: "1200px",
        desktop: "1440px",
        error: "#d9534f",
      },
    },
  },
  plugins: [],
};
