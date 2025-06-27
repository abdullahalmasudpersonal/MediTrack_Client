<template>
 <div class="patient-layout">
  <PatientSidebar />
  <div class="patient-content">
   <router-view />
  </div>
 </div>
</template>

<script setup lang="ts">
import PatientSidebar from '@/components/navigation/sideberNavigation/PatientSidebar.vue'
</script>

<style scoped>
.patient-layout {
 display: flex;
 min-height: 100vh;
 background-color: #f9f9f9;
}
.patient-content {
 flex: 1;
 padding: 20px;
 overflow-y: auto;
 background-color: #fff;
 box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
 border-left: 1px solid #e0e0e0;
}
</style>
