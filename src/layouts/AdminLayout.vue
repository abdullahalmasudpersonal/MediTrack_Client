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
   <div class="admin-content">
    <div class="admin-content-div">
     <DashboardNavber />
     <router-view />
    </div>
   </div>
  </v-main>
 </v-app>
</template>
<script setup lang="ts">
import AdminSidebar from '@/components/navigation/AdminSidebar.vue'
import DashboardNavber from '@/components/navigation/DashboardNavber.vue'

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
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
.v-main {
 flex: 1;
 background-color: #25293c;
}
.admin-content {
 color: rgb(255, 255, 255);
 margin: 20px;
}
.admin-content-div {
 max-width: 1400px;
 margin: 0 auto;
}
</style>
