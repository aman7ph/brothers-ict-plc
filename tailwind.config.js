/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(217 70 239)",
        "primary-1": "rgb(232 121 249)",
        "primary-2": "rgb(240 171 252)",
        "primary-3": "rgb(245 208 254)",
        "primary-4": "rgb(250 232 255)",
        light: "#ffffff",
        gray: "rgb(17 24 39)",
        "secondary-dark": "#020420",
        red: "red-900",
      },
      fontFamily: { display: ["Roboto", "sans-serif"] },
    },
  },
  plugins: [],
};
