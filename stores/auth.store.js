import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    name: '',
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
      const cookie = useCookie('auth-token-example-saas', {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        secure: true,
      });
      cookie.value = token;
    },
    clearToken() {
      this.token = null;
      const cookie = useCookie('auth-token-example-saas');
      cookie.value = null;
    },
    initializeToken() {
      const cookie = useCookie('auth-token-example-saas');
      if (cookie.value) {
        this.token = cookie.value;
      }
    },
    async login(credentials) {
      try {
        const response = await $fetch('/api/auth/login/email-login', {
          method: 'POST',
          body: credentials,
        });

        this.token = response.access_token;

        const cookie = useCookie('auth-token-example-saas', {
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        cookie.value = response.access_token;
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    async loginWithGoogle(userData) {
      try {
        const response = await $fetch('/api/auth/login/google-login', {
          method: 'POST',
          body: userData,
        });

        
        this.token = response.access_token;

        const cookie = useCookie('auth-token-example-saas', {
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        cookie.value = response.access_token;
      } catch (error) {
        throw new Error('Google login failed');
      }
    },

    async register(credentials) {
      try {
        await $fetch('/api/auth/register/email-register', {
          method: 'POST',
          body: credentials,
        });
      } catch (error) {
        throw error;
      }
    },
    async googleRegister(credentials) {
      try {
        await $fetch('/api/auth/register/google-register', {
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