// middleware/auth-login.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // If the user is authenticated, redirect them to the dashboard
  if (authStore.isAuthenticated) {
    return navigateTo('/dashboard');
  }
});