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
    jwtSecret: process.env.JWT_SECRET,
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID
    }
  },
  imports: {
    dirs: ['./stores'],
  },
  typescript: {
    typeCheck: true
  },
  plugins: ['~/plugins/firebase.client.ts'],
  
});
