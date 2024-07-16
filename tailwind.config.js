/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey_10: "#191919",
        grey_15: "#262626",
        grey_20: "#33333",
        grey_30: "#4C4C4D",
        grey_35: "#59595A",
        grey_40: "#656567",
        grey_60: "#98989A",
        grey_90: "#E6E6E6",
        absolute_white: "#FFF",
        green_50: "#9EFF00",
        green_60: "#B1FF33",
        green_70: "#C5FF66",
        green_80: "#D8FF99",
        green_90: "#ECFFCC",
        green_95: "#F5FFE5",
        green_97: "#F9FFF0",
        green_99: "#FDFFFA",
      },
    },
  },
  plugins: [],
};
