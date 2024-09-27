/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "2000px",
    },
    fontFamily: {
      customFont: ["BurgerElbow", "Gotham", "GothamBold", "GothamBlack"],
      // Add more custom font families as needed
    },
    extend: {
      colors: {
        amarilloLR: "#FFD100",
        rojoLR: "#DA291C",
        azulLR: "#005EB8",
        azulClaroLR: "#b6e3e8",
        tuquesaLR: "#2DADBE",
        violetaLR: "#AF1685",
        verdeLR: "#309B42",
        naranjaLR: "#FF8200",
      },
    },
  },
  plugins: [],
}
