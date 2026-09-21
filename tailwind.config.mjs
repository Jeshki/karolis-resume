/** @type {import('tailwindcss').Config} */
const config = {
  // darkMode: 'class', // <-- IŠTRINTI ŠIĄ EILUTĘ
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111827', 
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      fontWeight: {
        thin: '300',
        extralight: '300',
        light: '300',
        normal: '300',
        medium: '300',
        semibold: '300',
        bold: '300',
        extrabold: '300',
        black: '300',
      },
    },
  },
  plugins: [],
};

export default config;