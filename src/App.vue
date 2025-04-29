<script setup lang="ts"></script>

<template>
 <div id="app">
  <router-view> </router-view>
 </div>
</template>

<!-- <script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Import Layouts
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

// Current route object
const route = useRoute()

// এখানে নির্ধারণ করবো কোন Layout লাগবে
const layout = computed(() => {
 const layoutName = (route.meta.layout as string) || '/'

 switch (layoutName) {
  case 'auth':
   return AuthLayout
  case 'admin':
   return AdminLayout
  default:
   return MainLayout
 }
})
</script>

<template>
 <component :is="layout" />
</template> -->
