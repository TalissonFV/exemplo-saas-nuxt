import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    name: '',
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
      const cookie = useCookie('auth-token', {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        secure: true,
      });
      cookie.value = token;
    },
    clearToken() {
      this.token = null;
      const cookie = useCookie('auth-token');
      cookie.value = null;
    },
    initializeToken() {
      const cookie = useCookie('auth-token');
      if (cookie.value) {
        this.token = cookie.value;
      }
    },
    async login(credentials) {
      try {
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: credentials,
        });

        // Set the token in the store
        this.token = response.access_token;

        // Set the cookie
        const cookie = useCookie('auth-token', {
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        cookie.value = response.access_token;
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    async register(credentials) {
      try {
        await $fetch('/api/auth/register', {
          method: 'POST',
          body: credentials,
        });
      } catch (error) {
        throw error;
      }
    },
    logout() {
      this.clearToken();
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});