/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        exs: "400px", // নতুন কাস্টম ব্রেকপয়েন্ট (ডিফল্ট ব্রেকপয়েন্ট ঠিক থাকবে)
        xs: "520px", // নতুন কাস্টম ব্রেকপয়েন্ট (ডিফল্ট ব্রেকপয়েন্ট ঠিক থাকবে)
      },
      backgroundImage: {
        "bg_back_1": "url('https://i.ibb.co.com/chNcV5p6/banner-1.jpg')",
        "bg_back_2": "url('https://i.ibb.co.com/gMvxbRvV/banner-2.jpg')",
        "bg_back_3": "url('https://i.ibb.co.com/0V2RLG4t/banner-3.jpg')",
        "bg_back_4": "url('https://i.ibb.co.com/XxVsG9Bn/hotel-img-1.webp')",
        "bg_back_5": "url('https://i.ibb.co.com/99Lxmc3K/hotel-img-2.jpg')"
      }
    },
  },
  plugins: [daisyui],
}