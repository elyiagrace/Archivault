/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          // You can add custom colors here
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
        },
        fontFamily: {
          // Add custom font families here
          'sans': ['Graphik', 'sans-serif'],
          'serif': ['Merriweather', 'serif'],
        },
      },
    },
    plugins: [],
  }