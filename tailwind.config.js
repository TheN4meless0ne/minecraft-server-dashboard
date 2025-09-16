/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        minecraft: {
          green: '#00AA00',
          dark: '#2C2F33',
          light: '#36393F',
          accent: '#7289DA',
        }
      }
    },
  },
  plugins: [],
}