/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: "rgb(37 99 235)",
      },
    },
  },
  plugins: [require("daisyui")],
};
