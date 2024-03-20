// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-snackbar",
    "shadcn-nuxt",
  ],
  runtimeConfig: {
    public: {
      MAP_BOX_TOKEN: process.env.MAP_BOX_TOKEN || "",
    },
  },
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
  googleFonts: {
    fontsDir: "assets/fonts",
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
