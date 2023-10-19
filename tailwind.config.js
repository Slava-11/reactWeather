/ @type {import('tailwindcss').Config} */;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: '375px',
        forDesktop: "1024px",
        forDesktopHD: "1440px",
      },
      boxShadow: {
        'custom': '2px 5px 25px -3px rgba(180, 180, 180, 0.25)',
      },
      colors: {
        'black': '#000',
        'white': '#fff',
        'mainColor': '#4793FF',
        'redColor' : '#8b0000',
        'blueTransparent': 'rgba(71, 147, 255, 0.2)',
        'mainBgColor': '#0D1117',
        'secondBgColor': '#4F4F4F;',
        'mainTextColor': '#939CB0',
      },
    },
  },
  plugins: [],
};
