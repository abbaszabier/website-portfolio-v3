/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "neomorph-light": "3px 3px 6px #bebebe, -3px -3px 6px #ffffff",
        "neomorph-light-pressed":
          "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
        "neomorph-dark": "3px 3px 6px #191919, -3px -3px 6px #2c2c2c",
        "neomorph-dark-pressed":
          "inset 3px 3px 6px #191919, inset -3px -3px 6px #2c2c2c",
      },
      backgroundImage: {
        "neomorph-light": "linear-gradient(145deg, #f0f0f0, #cacaca)",
        "neomorph-light-pressed": "linear-gradient(145deg, #cacaca, #f0f0f0)",
        "neomorph-dark": "linear-gradient(145deg, #2c2c2c, #1c1c1c)",
        "neomorph-dark-pressed": "linear-gradient(145deg, #1c1c1c, #2c2c2c)",
      },
      screens: {
        xs: { max: "480px" },
        sm: "481px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      animation: {
        moveShape1: "moveShape1 3s ease-in-out infinite",
        moveShape2: "moveShape2 4s ease-in-out infinite",
        moveShape3: "moveShape3 5s ease-in-out infinite",
      },
      keyframes: {
        moveShape1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(30px, -30px)" },
        },
        moveShape2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-30px, 30px)" },
        },
        moveShape3: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, 20px)" },
        },
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
