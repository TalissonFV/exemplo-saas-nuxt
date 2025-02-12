// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: process.env.NODE_ENV !== 'production',
  compatibilityDate: "2025-02-05",
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
  ],
  app: {
    head: {
      title: 'SaaSify',
      htmlAttrs: {
        lang: 'en'
      }
    },
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    dbName: process.env.DB_NAME,
    jwtSecret: process.env.JWT_SECRET
  },
  imports: {
    dirs: ['./stores'],
  },
  typescript: {
    typeCheck: true
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  }
  
});
