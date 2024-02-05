/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    backgroundImage: {
      "hero-lg": "url('./svg/homepage-desktop.svg')",
      "hero-sm": "url('./svg/homepage-mobile.svg')",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          250: "#726F6C",
        },
        yellow: {
          150: "#F4F1EA",
        },
      },
    },
  },
  plugins: [],
};
