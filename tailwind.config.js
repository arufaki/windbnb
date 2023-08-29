/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      muli: ["Mulish", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        crimson: "#EB5757",
        "dark-grey": "#333",
        gunmetal: "#828282",
        gray: "#4F4F4F",
        "light-grey": "#F2F2F2",
        "soft-grey": "#BDBDBD",
      },
      boxShadow: {
        "3xl": "0px 1px 6px 0px rgba(0, 0, 0, 0.10);",
      },
    },
  },
  plugins: [],
};
