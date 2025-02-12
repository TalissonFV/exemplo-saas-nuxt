// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: process.env.NODE_ENV !== 'production', // Disable source maps in production
  compatibilityDate: "2025-02-05",
  devtools: { enabled: true },
  ssr: true, // Enable SSR (Server-Side Rendering)
  modules: [
    "@pinia/nuxt", // Add Pinia module
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
    dirs: ['./stores'], // Automatically import stores from the `stores` directory
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
