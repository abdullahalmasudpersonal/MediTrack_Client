<template>
 <v-app>
  <v-navigation-drawer
   v-model="drawer"
   :permanent="isDesktop"
   :temporary="!isDesktop"
   app
   class="sideber-bg-color text-white"
  >
   <AdminSidebar />
  </v-navigation-drawer>
  <v-main>
   <AdminDashboardNavber @toggle-drawer="drawer = !drawer" />
   <div class="admin-content">
    <div class="admin-content-div">
     <router-view />
    </div>
   </div>
  </v-main>
 </v-app>
</template>
<script setup lang="ts">
import AdminSidebar from '@/components/navigation/sideberNavigation/AdminSidebar.vue'

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import AdminDashboardNavber from '@/components/navigation/dashboardNavber/AdminDashboardNavber.vue'
const drawer = ref(true)
const windowWidth = ref(window.innerWidth)
const isDesktop = computed(() => windowWidth.value > 1000)

// window resize listener
function updateWidth() {
 windowWidth.value = window.innerWidth
 if (!isDesktop.value) drawer.value = false
}

onMounted(() => {
 window.addEventListener('resize', updateWidth)
 updateWidth()
})

onBeforeUnmount(() => {
 window.removeEventListener('resize', updateWidth)
})
</script>

<style scoped>
.sideber-bg-color {
 background-color: rgb(34, 23, 85);
}
.v-main {
 flex: 1;
 background-color: #2b1758;
}
.admin-content {
 margin: 20px 10px;
}
.admin-content-div {
 max-width: 1600px;
 margin: 0 auto;
}
</style>
