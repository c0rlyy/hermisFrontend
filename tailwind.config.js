/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelPinkBg: {
          50: "#fdede8",
        },
        pastelYellowBg: {
          50: "#fdfde8",
        },
        pastelGreenFont: {
          50: "#B2EBCC",
        },
        mintGreen: {
          50: "#757575",
          100: "#A8DADC",
        },
        darkGray: {
          50: "#4A4A4A",
        },
        pinktable: {
          50: "#FFDDEE",
        },
        pastelPeach:{
          50:"#FEE8D4"
        },
        pastelRose:{50:"#D21F61"},

        "pastel-green-blue": "#f0f4f4",
      },
    },
  },
  plugins: [],
};
