/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg_back_1": "url('./src/assets/banner_1.jpg')",
        "bg_back_2": "url('./src/assets/banner_2.jpg')",
        "bg_back_3": "url('./src/assets/banner_3.jpg')",
        "bg_back_4": "url('./src/assets/hotel_img_1.webp')",
        "bg_back_5": "url('./src/assets/hotel_img_10.webp')"

      }
    },
  },
  plugins: [daisyui],
}