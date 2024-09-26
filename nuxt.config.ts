// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
      'nuxt-primevue',
      "nuxt-icon",
      "@pinia/nuxt",
      "@nuxtjs/tailwindcss",
      "@pinia-plugin-persistedstate/nuxt"
  ],

  css: [
      "~/assets/css/main.css",
      'primevue/resources/themes/aura-light-green/theme.css',
      'primeicons/primeicons.css'
  ],

  postcss: {
      plugins: {
      tailwindcss: {},
      autoprefixer: {},
      },
  },

  compatibilityDate: "2024-09-26",
});