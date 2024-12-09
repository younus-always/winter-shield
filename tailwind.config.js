import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Poppins",
        body: "Nunito",
      },
      colors: {
        prime: 'rgba(48, 39, 132, 1)',
        secon: 'rgba(245, 207, 0, 1)',
        footer: 'rgba(98, 215,255, 1)'
      },
    },
  },
  plugins: [daisyui],
}

