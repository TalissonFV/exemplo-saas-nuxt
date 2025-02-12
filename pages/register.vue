<template>
  <div>

    <Header :navigation="[]" :showGetStartedButton="false"></Header>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <UCard class="w-full max-w-md">
        <template #header>
          <h1 class="text-2xl font-bold text-center">Create Account</h1>
        </template>

         <!-- Google Sign-In Button -->
         <UButton
          color="white"
          block
          class="mb-4"
          @click="signInWithGoogle"
        >
          <UIcon name="i-logos-google-icon" class="w-5 h-5 mr-2" />
          Sign up with Google
        </UButton>

        <div class="relative flex items-center my-6">
          <div class="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span class="flex-shrink mx-4 text-gray-500 dark:text-gray-400">or</span>
          <div class="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>
  
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
  </div>
</template>

<script setup>
import { z } from 'zod'
import { signInWithPopup } from 'firebase/auth'

const toast = useToast()
const router = useRouter()
const loading = ref(false)
const googleLoading = ref(false)
const authStore = useAuthStore()

const state = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

definePageMeta({
  middleware: 'auth-login',
});

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

async function signInWithGoogle() {
  googleLoading.value = true
  try {
    const { $firebase } = useNuxtApp()
    const result = await signInWithPopup($firebase.auth, $firebase.googleProvider)
    
    const user = result.user
    await authStore.googleRegister({
      name: user.displayName || 'Google User',
      email: user.email,
      provider: 'google',
      googleId: user.uid
    })

    toast.add({
      title: 'Success',
      description: 'Signed in with Google!',
      color: 'green'
    })
    router.push('/dashboard')
  } catch (error) {
    toast.add({
      title: 'Error',
      description: error.message || 'Google sign-in failed',
      color: 'red'
    })
  } finally {
    googleLoading.value = false
  }
}

async function register() {
  loading.value = true
  try {
    const { name, email, password } = state
    await authStore.register({
      name: name,
      email: email,
      password: password,
      provider: 'email'
    })
    
    toast.add({
      title: 'Success',
      description: 'Account created successfully!',
      color: 'green'
    })
    router.push('/login')
  } catch (error) {
    toast.add({
      title: 'Error',
      description: error.statusMessage || 'Registration failed',
      color: 'red'
    })
  } finally {
    loading.value = false
  }
}

</script>
