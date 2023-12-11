/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { position: 'relative', bottom: '-10rem', opacity: 0.2 },
          '100%': { position: 'relative', bottom: '0rem', opacity: 1 },
        }
      },
      backgroundImage: {
        'nav': "url('/nav-bg.jpg')",
        'side': "url('/side-bg.jpg')",
        'welcome': "url('/background.avif')"
      },
      animation: {
        welcome: "wiggle 1s ease-in-out"
      },
    },
    fontFamily: {
      quote: 'Kalnia, Arial, sans-serif'
    },
  },
  plugins: [],
};
