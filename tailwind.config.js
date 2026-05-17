/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        circular: ["circular-web", "sans-serif"],
        robert: ["robert-regular", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
      },
      colors: {
        brandBlue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        brandViolet: {
          300: "#5724ff",
        },
        brandYellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};