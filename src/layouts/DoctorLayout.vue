<template>
 <v-app>
  <v-navigation-drawer
   v-model="drawer"
   :permanent="isDesktop"
   :temporary="!isDesktop"
   app
   class="sideber-bg-color text-white"
  >
   <DoctorSidebar />
  </v-navigation-drawer>
  <v-main>
   <DoctorDashboardNavber @toggle-drawer="drawer = !drawer" />
   <div class="doctor-content">
    <div class="doctor-content-div">
     <router-view />
    </div>
   </div>
  </v-main>
 </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import DoctorDashboardNavber from '@/components/navigation/dashboardNavber/DoctorDashboardNavber.vue'
import DoctorSidebar from '@/components/navigation/sideberNavigation/DoctorSidebar.vue'

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
 background-color: rgb(40, 30, 85);
}
.v-main {
 flex: 1;
 background-color: #25293c;
}
.doctor-content {
 color: rgb(255, 255, 255);
 margin: 20px 10px;
}
.doctor-content-div {
 max-width: 1600px;
 margin: 0 auto;
}
</style>
