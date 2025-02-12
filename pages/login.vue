<template>
  <div>
    <Header :navigation="[]" :showGetStartedButton="false"></Header>
    <UContainer class="flex items-center justify-center min-h-screen">
      <UCard class="w-full max-w-md">
        <template #header>
          <h1 class="text-2xl font-bold text-center">Login</h1>
        </template>

        <!-- Google Sign-In Button -->
        <UButton
          color="white"
          block
          class="mb-4"
          @click="signInWithGoogle"
          :loading="googleLoading"
          :disabled="googleLoading"
        >
          <UIcon name="i-logos-google-icon" class="w-5 h-5 mr-2" />
          Sign in with Google
        </UButton>

        <div class="relative flex items-center my-6">
          <div class="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span class="flex-shrink mx-4 text-gray-500 dark:text-gray-400">or</span>
          <div class="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        <!-- Email/Password Login Form -->
        <form @submit.prevent="handleLogin">
          <UFormGroup label="Email" name="email" class="mb-4">
            <UInput v-model="email" type="email" placeholder="Enter your email" required />
          </UFormGroup>

          <UFormGroup label="Password" name="password" class="mb-6">
            <UInput v-model="password" type="password" placeholder="Enter your password" required />
          </UFormGroup>

          <UButton type="submit" block :loading="loading" :disabled="loading">
            Login
          </UButton>
        </form>

        <template #footer>
          <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
          
          <!-- Register Button -->
          <div class="text-center mt-4">
            <p>Don't have an account?</p>
            <UButton variant="outline" color="primary" @click="navigateToRegister" class="mt-2">
              Register
            </UButton>
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth.store';
import { useRouter } from 'vue-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

definePageMeta({
  middleware: 'auth-login',
});

const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const googleLoading = ref(false);
const authStore = useAuthStore();
const router = useRouter();

// Email/Password Login
const handleLogin = async () => {
  loading.value = true;
  error.value = '';
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    });
    router.push('/dashboard');
  } catch (err) {
    error.value = 'Invalid email or password';
  } finally {
    loading.value = false;
  }
};

const signInWithGoogle = async () => {
  googleLoading.value = true;
  error.value = '';
  try {
    const { $firebase } = useNuxtApp()
    const result = await signInWithPopup($firebase.auth, $firebase.googleProvider);
    
    const user = result.user;
    await authStore.loginWithGoogle({
      name: user.displayName || 'Google User',
      email: user.email,
      googleId: user.uid,
    });

    router.push('/dashboard');
  } catch (err) {
    error.value = 'Google sign-in failed. Please try again.';
  } finally {
    googleLoading.value = false;
  }
};

const navigateToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>