// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "nuxt-icon", "@nuxtjs/google-fonts"],
  googleFonts: {
    fontsDir: 'assets/fonts',
    families: {
      Jost: [400, 500, 600, 700],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
