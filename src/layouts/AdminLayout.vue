<template>
 <v-app>
  <AdminSidebar />
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
