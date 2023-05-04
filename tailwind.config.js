/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://thumbs.dreamstime.com/b/mexican-food-mix-colorful-background-mexico-copyspace-frame-66442175.jpg')",
      }
    }
  },
  plugins: [require("daisyui")],
}