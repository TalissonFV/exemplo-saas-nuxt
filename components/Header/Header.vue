<template>
  <nav class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Left side -->
         <div>
            <ULink to="/">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-chart-bar" class="w-8 h-8 text-primary-500" />
                <span class="text-xl font-bold">SaaSify</span>
              </div>
            </ULink>
         </div>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <UButton
            v-for="link in navigation"
            :key="link.name"
            variant="ghost"
            color="gray"
            :to="link.href"
          >
            <UIcon :name="link.icon" class="w-5 h-5 mr-2" />
            {{ link.name }}
          </UButton>
          <UButton to="/login" color="primary">
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 mr-2" />
            Get Started
          </UButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  navigation: {
    type: Array,
    default: () => [
    ]
  }
});
</script>