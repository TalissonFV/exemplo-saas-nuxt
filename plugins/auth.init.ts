export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  authStore.initializeToken(); // Initialize the token from localStorage
});