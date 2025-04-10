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
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
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

  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/auth/confirm',
      exclude: ['/'],
    },
  },
});
