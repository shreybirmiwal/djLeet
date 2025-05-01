/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if using different extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        opensauce: ['"Open Sauce One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}