// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: process.env.NODE_ENV !== 'production', // Disable source maps in production
  compatibilityDate: "2025-02-05",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt", // Add Pinia module
    "@nuxt/ui",
  ],
  runtimeConfig: {
    public: {
      appUrl: process.env.BASE_URL || "http://localhost:3001",
    },
  },
  imports: {
    dirs: ['./stores'], // Automatically import stores from the `stores` directory
  }
});
