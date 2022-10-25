/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "baseColor": "#be0a0b",
        "text": "#3f3d56"
      },
      boxShadow: {
        "big": "0 10px 35px rgba(0, 0, 0, 0.12)",
        "small": "0 5px 15px rgba(0, 0, 0, 0.08)"
      }
    },
  },
  plugins: [],
}
