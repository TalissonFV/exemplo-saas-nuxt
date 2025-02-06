<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-bold text-center">Create Account</h1>
      </template>

      <UForm :schema="schema" :state="state" @submit="register" class="space-y-4">
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" placeholder="John Doe" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" type="email" placeholder="john@example.com" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" placeholder="••••••••" />
        </UFormGroup>

        <UFormGroup label="Confirm Password" name="confirmPassword">
          <UInput v-model="state.confirmPassword" type="password" placeholder="••••••••" />
        </UFormGroup>

        <UButton 
          type="submit" 
          color="primary" 
          block
          :loading="loading"
          :disabled="loading"
        >
          Create Account
        </UButton>
      </UForm>

      <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account? 
        <ULink to="/login" class="text-primary-500 hover:underline">Sign in</ULink>
      </p>
    </UCard>
    <UNotifications />
  </div>
</template>

<script setup>
import { z } from 'zod'

const toast  = useToast()
const router = useRouter()
const loading = ref(false)
const authStore = useAuthStore();

// Form state
const state = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

definePageMeta({
  middleware: 'auth-login',
});

// Validation schema
const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

async function register () {
  loading.value = true
  try {

    const { name, email, password } = state
    await authStore.register({
      name: name,
      email: email,
      password: password,
    });
    
    toast.add({
      title: 'Success',
      description: 'Account created successfully!',
      color: 'green'
    })
    router.push('/login')

  } catch (error) {
    console.log(error)
    toast.add({
      title: 'Error',
      description: error.statusMessage || 'Registration failed',
      color: 'red'
    })
  }
  finally {
    loading.value = false
  }
};
</script>
