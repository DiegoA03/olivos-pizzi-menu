/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leo: '#3498db',
        raph: '#e74c3c',
        don: '#9b59b6',
        mikey: '#f39c12',
        neonGreen: '#4cd137'
      },
    },
  },
  plugins: [],
}