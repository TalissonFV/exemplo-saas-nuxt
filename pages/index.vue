<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Navbar -->
    <Header :navigation="customNavigation" />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-indigo-600 to-green-500 py-20 mt-24">
      <div class="container mx-auto px-4 text-center">
        <UBadge variant="solid" color="white" class="mb-6">Version 2.0 is here!</UBadge>
        <h1 class="text-5xl font-bold text-white mb-6">
          Simplify Your Workflow with Smart Automation
        </h1>
        <p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Transform your business processes with our AI-powered automation platform. Focus on what matters while we handle the rest.
        </p>
        <div class="flex justify-center gap-4">
          <UButton to="/login" size="xl" color="white" variant="solid" class="px-8">
            Get Started Free
          </UButton>
          <UButton to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size="xl" color="white" variant="outline" class="px-8">
            Watch Demo
          </UButton>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800" id="features">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <UBadge 
            variant="solid" 
            color="primary"
            class="mb-4 dark:bg-primary-500 dark:text-white bg-primary-100 text-primary-700"
          >
            Why choose us
          </UBadge>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Powerful features designed to help you work smarter, not harder
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard
            v-for="feature in features"
            :key="feature.title"
            class="hover:shadow-lg transition-shadow"
          >
            <UIcon :name="feature.icon" class="w-12 h-12 text-primary-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20" id="pricing">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <UBadge 
            variant="solid" 
            color="primary"
            class="mb-4 dark:bg-primary-500 dark:text-white bg-primary-100 text-primary-700"
          >
            Pricing
          </UBadge>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Start for free and scale as you grow. No hidden fees, ever.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <UCard
            v-for="plan in pricing"
            :key="plan.title"
            class="relative border-2 dark:border-gray-700"
            :class="{ 'border-primary-500': plan.highlight }"
          >
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-2">{{ plan.title }}</h3>
              <p class="text-4xl font-bold mb-4">
                {{ plan.price }}
                <span class="text-lg text-gray-500">{{ plan.interval }}</span>
              </p>
              <UButton color="primary" variant="outline" class="w-full mb-6">
                Get Started
              </UButton>
              <ul class="space-y-3 text-left">
                <li
                  v-for="item in plan.features"
                  :key="item"
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-heroicons-chart-bar" class="w-8 h-8 text-primary-500" />
              <span class="text-xl font-bold text-white">SaaSify</span>
            </div>
            <p class="text-sm">Making work easier since 2023</p>
          </div>
          <div v-for="section in footerLinks" :key="section.title">
            <h4 class="text-white font-semibold mb-4">{{ section.title }}</h4>
            <ul class="space-y-2">
              <li v-for="link in section.links" :key="link">
                <ULink class="hover:text-white transition-colors">{{ link }}</ULink>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          © {{ new Date().getFullYear() }} SaaSify. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

definePageMeta({
  title: 'SaaSify',
})

// Define custom navigation
const customNavigation = [
  { name: 'Features', href: '#features', icon: 'i-heroicons-sparkles' },
  { name: 'Pricing', href: '#pricing', icon: 'i-heroicons-currency-dollar' },
  { name: 'Blog', href: '#blog', icon: 'i-heroicons-newspaper' },
  { name: 'Contact', href: '#contact', icon: 'i-heroicons-envelope' }
];


const features = [
  {
    icon: 'i-heroicons-chart-bar',
    title: 'Advanced Analytics',
    description: 'Get deep insights into your business metrics'
  },
  {
    icon: 'i-heroicons-scale',
    title: 'Scalable Infrastructure',
    description: 'Grow without worrying about technical limits'
  },
  {
    icon: 'i-heroicons-bolt',
    title: 'Real-time Processing',
    description: 'Instant updates and lightning-fast responses'
  }
]

const pricing = [
  {
    title: 'Starter',
    price: '$29',
    interval: '/month',
    features: ['Up to 5 users', 'Basic analytics', '24/7 support', '1GB storage'],
    highlight: false
  },
  {
    title: 'Professional',
    price: '$99',
    interval: '/month',
    features: ['Up to 20 users', 'Advanced analytics', 'Priority support', '10GB storage'],
    highlight: true
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    interval: '/month',
    features: ['Unlimited users', 'Custom solutions', 'Dedicated support', 'Unlimited storage'],
    highlight: false
  }
]

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Documentation', 'Status']
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact']
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'GDPR']
  }
]
</script>

<style>
/* Custom gradient background */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

/* Smooth transitions */
.hover\:shadow-lg {
  transition: box-shadow 0.3s ease-in-out;
}
</style>
