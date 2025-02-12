<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar -->
    <aside 
      class="fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 z-50"
      :class="isSidebarOpen ? 'w-64' : 'w-20'"
    >
      <div class="p-4 flex flex-col h-full">
        <!-- Logo -->
        <div class="flex items-center gap-2 mb-8 px-2">
          <UIcon name="i-heroicons-chart-bar" class="w-8 h-8 text-primary-500 shrink-0" />
          <span v-if="isSidebarOpen" class="text-xl font-bold truncate">SaaSify</span>
        </div>

        <!-- Navigation Menu -->
        <nav class="flex-1 space-y-1">
          <UButton
            v-for="item in menuItems"
            :key="item.label"
            variant="ghost"
            color="gray"
            class="w-full justify-start"
            :class="{ '!bg-primary-50 dark:!bg-gray-700': item.active }"
          >
            <UIcon :name="item.icon" class="w-5 h-5 mr-3 shrink-0" />
            <span v-if="isSidebarOpen" class="truncate">{{ item.label }}</span>
          </UButton>
        </nav>

        <!-- Collapse Button -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <UButton
            variant="ghost"
            color="gray"
            class="w-full justify-start"
            @click="isSidebarOpen = !isSidebarOpen"
          >
            <UIcon 
              :name="isSidebarOpen ? 'i-heroicons-chevron-left' : 'i-heroicons-chevron-right'" 
              class="w-5 h-5 shrink-0" 
            />
            <span v-if="isSidebarOpen" class="ml-3">Collapse</span>
          </UButton>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main 
      class="transition-all duration-300"
      :class="[isSidebarOpen ? 'ml-64' : 'ml-20']"
    >
      <!-- Header -->
      <header class="bg-white dark:bg-gray-800 shadow-sm">
        <div class="flex items-center justify-between px-6 py-4">
          <div class="flex items-center gap-4">
            <UButton
              variant="ghost"
              color="gray"
              class="md:hidden"
              @click="isSidebarOpen = !isSidebarOpen"
            >
              <UIcon name="i-heroicons-bars-3" class="w-5 h-5" />
            </UButton>
            <h1 class="text-xl font-semibold">Dashboard</h1>
          </div>
          
          <div class="flex items-center gap-4">
            <UButton
              variant="ghost"
              color="gray"
              icon="i-heroicons-bell"
            />
            <UDropdown :items="userMenuItems">
              <UAvatar
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="User"
                size="md"
                class="cursor-pointer"
              />
            </UDropdown>
          </div>
        </div>
      </header>

      <!-- Content -->
      <div class="p-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <UCard
            v-for="stat in stats"
            :key="stat.title"
            class="hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ stat.title }}</p>
                <p class="text-2xl font-bold mt-1">{{ stat.value }}</p>
              </div>
              <UIcon 
                :name="stat.icon" 
                class="w-12 h-12 text-primary-500 opacity-20" 
              />
            </div>
          </UCard>
        </div>

        <!-- Chart Section -->
        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">Performance Overview</h3>
              <UButton
                variant="ghost"
                color="gray"
                icon="i-heroicons-ellipsis-vertical"
              />
            </div>
          </template>
          
          <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 dark:text-gray-400">Chart Placeholder</span>
          </div>
        </UCard>

        <!-- Recent Activity -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold">Recent Activity</h3>
          </template>

          <ul class="space-y-4">
            <li 
              v-for="activity in recentActivities"
              :key="activity.id"
              class="flex items-center gap-4"
            >
              <UIcon 
                :name="activity.icon" 
                class="w-8 h-8 p-2 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-500" 
              />
              <div>
                <p class="font-medium">{{ activity.title }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ activity.description }}</p>
              </div>
              <span class="ml-auto text-sm text-gray-500 dark:text-gray-400">{{ activity.time }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});
useHead({
  title: 'SaaSify - Dashboard'
})

const authStore = useAuthStore();
const router = useRouter();

const isSidebarOpen = ref(true)

const menuItems = [
  { label: 'Dashboard', icon: 'i-heroicons-home', active: true },
  { label: 'Analytics', icon: 'i-heroicons-chart-bar' },
  { label: 'Projects', icon: 'i-heroicons-folder' },
  { label: 'Team', icon: 'i-heroicons-user-group' },
  { label: 'Settings', icon: 'i-heroicons-cog-6-tooth' },
]

const userMenuItems = [
  [
    { label: 'Profile', icon: 'i-heroicons-user-circle' },
    { label: 'Settings', icon: 'i-heroicons-cog-8-tooth' }
  ],
  [
    { 
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      click: () => {
        authStore.logout();
        router.push('/login')
    }}
  ]
]

const stats = [
  { title: 'Total Revenue', value: '$54,230', icon: 'i-heroicons-currency-dollar' },
  { title: 'Active Users', value: '2,430', icon: 'i-heroicons-users' },
  { title: 'New Projects', value: '12', icon: 'i-heroicons-document-plus' },
  { title: 'Pending Tasks', value: '18', icon: 'i-heroicons-clipboard-document-list' }
]

const recentActivities = [
  { id: 1, title: 'New Project', description: 'Team dashboard design', time: '5m ago', icon: 'i-heroicons-folder-plus' },
  { id: 2, title: 'Update', description: 'Updated payment gateway', time: '2h ago', icon: 'i-heroicons-credit-card' },
  { id: 3, title: 'Meeting', description: 'Team sync meeting', time: '4h ago', icon: 'i-heroicons-calendar' }
]
</script>

<style>
/* Smooth transitions */
aside, main {
  transition: all 0.3s ease-in-out;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}
</style>