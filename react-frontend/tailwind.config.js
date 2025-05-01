/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX files in src
  ],
  theme: {
    extend: {
      // Add custom animations or colors if needed later
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Slower spin for records
        'fade-colors': 'fadeColors 5s ease-in-out infinite', // For text color fade
      },
      keyframes: {
        fadeColors: { // Define the color fading animation
          '0%, 100%': { color: '#a855f7' }, // purple-500
          '25%': { color: '#3b82f6' },    // blue-500
          '50%': { color: '#ec4899' },    // pink-500
          '75%': { color: '#22d3ee' },    // cyan-400
        }
      }
    },
  },
  plugins: [],
}