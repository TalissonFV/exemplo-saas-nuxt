<template>
  <div>
    <Header :navigation="customNavigation" ></Header>
    <UContainer class="flex items-center justify-center min-h-screen">
      <UCard class="w-full max-w-md">
        <template #header>
          <h1 class="text-2xl font-bold text-center">Login</h1>
        </template>
  
        <form @submit.prevent="handleLogin">
          <UFormGroup label="Email" name="email" class="mb-4">
            <UInput v-model="email" type="email" placeholder="Enter your email" required />
          </UFormGroup>
  
          <UFormGroup label="Password" name="password" class="mb-6">
            <UInput v-model="password" type="password" placeholder="Enter your password" required />
          </UFormGroup>
  
          <UButton type="submit" block>Login</UButton>
        </form>
  
        <template #footer>
          <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth.store';
import { useRouter } from 'vue-router';

definePageMeta({
  middleware: 'auth-login',
});


const email = ref('');
const password = ref('');
const error = ref('');
const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    });
    router.push('/dashboard'); // Redirect to dashboard after login
  } catch (err) {
    error.value = 'Invalid email or password';
  }
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>