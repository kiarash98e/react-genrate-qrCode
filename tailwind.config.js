module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extends:{}
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
