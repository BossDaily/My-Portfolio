/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        waves:
          "https://raw.githubusercontent.com/BossDaily/My-Portfolio/main/public/stats_bottom_wave1.svg",
      },
      colors: {
        BlackRussian: "#10002B",
        Windsor: "#3C096C",
        Heliotrope: "#C77DFF",
        "Medium-Purple": "#B469EF",
        "Purple-Heart": "#7B2CBF",
      },
    },
    fontFamily: {
      header: ["Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [require('flowbite/plugin'), require("tailwindcss-animate")],
};
