/** @type {import('tailwindcss').Config} */
const config = {
  // darkMode: 'class', // <-- IŠTRINTI ŠIĄ EILUTĘ
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', 
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;