<template>
  <div>
    <h1 class="text-3xl">Register</h1>
    <form @submit.prevent="register" class="mt-6">
      <div>
        <input v-model="email" type="email" placeholder="Email" required />
      </div>
      <div class="mt-4">
        <input v-model="password" type="password" placeholder="Password" required />
      </div>
      <button type="submit" class="mt-6">Register</button>
    </form>
    <div v-if="message" class="mt-4">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const message = ref('');
const authStore = useAuthStore();

const router = useRouter();

definePageMeta({
  middleware: 'auth-login',
});

const register = async () => {
  try {
    await authStore.register({
      email: email.value,
      password: password.value,
    });
    router.push('/login');
  } catch (error) {
    console.log(error)
    message.value = error.message || 'Registration failed';
  }
};
</script>
