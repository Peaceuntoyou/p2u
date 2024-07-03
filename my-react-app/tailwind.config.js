/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '50px': '50px', '60px' : '60px', '8px' : '8px',
        '10px' : '10px', '6px' : '6px', '12px' : '12px',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], 
        serif: ['Georgia', 'serif'], 
        mono: ['Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}

