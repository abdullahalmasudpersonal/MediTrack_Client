<script setup lang="ts">
import 'aos/dist/aos.css'
import { useSnackbarStore } from '@/pinia/stores/snackbarStore'
import { storeToRefs } from 'pinia'

const snackbarStore = useSnackbarStore()
const snackbar = storeToRefs(snackbarStore)
</script>

<template>
 <div id="app">
  <!-- তোমার মূল রাউটার ভিউ -->
  <router-view />

  <!-- ✅ Global Snackbar -->
  <v-snackbar
   v-model="snackbar.show.value"
   :color="snackbar.color.value"
   :timeout="snackbar.timeout.value"
   location="top right"
   elevation="4"
  >
   {{ snackbar.message }}
  </v-snackbar>
 </div>
</template>

<style scoped>
#app {
 min-height: 100vh;
 background-color: #fafafa;
}
</style>

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
