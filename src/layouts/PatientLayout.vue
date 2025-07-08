<template>
 <v-app>
  <v-navigation-drawer
   v-model="drawer"
   :permanent="isDesktop"
   :temporary="!isDesktop"
   app
   class="sideber-bg-color text-white"
  >
   <PatientSidebar />
  </v-navigation-drawer>
  <v-main>
   <div class="patient-content">
    <div class="patient-content-div">
     <PatientDashboardNavber @toggle-drawer="drawer = !drawer" />
     <router-view />
    </div>
   </div>
  </v-main>
 </v-app>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import PatientSidebar from '@/components/navigation/sideberNavigation/PatientSidebar.vue'
import PatientDashboardNavber from '@/components/navigation/dashboardNavber/PatientDashboardNavber.vue'
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
.patient-content {
 color: rgb(255, 255, 255);
 margin: 20px;
}
.patient-content-div {
 max-width: 1400px;
 margin: 0 auto;
}
</style>
