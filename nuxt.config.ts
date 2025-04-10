// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: ['cookie'],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxt/icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/',
      exclude: [],
    },
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK,
    },
  },
  app: {
    head: {
      script: [
        {
          src: 'https://js.stripe.com/v3/',
          defer: true,
        },
      ],
    },
  },
});
