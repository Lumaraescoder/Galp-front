/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)']
      }
    }
  },
  variants: {
    extend: { textColor: ['hover'] }
  },
  plugins: [require('tailwind-scrollbar')]
};
