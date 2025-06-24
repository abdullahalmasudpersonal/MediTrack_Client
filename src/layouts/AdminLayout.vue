<template>
 <!-- <v-layout class="rounded rounded-md border">
  <v-navigation-drawer>
   <v-list nav>
    <v-list-item title="Navigation drawer" link></v-list-item>
   </v-list>
  </v-navigation-drawer>

  <v-app-bar title="Application bar"></v-app-bar>

  <v-main class="d-flex align-center justify-center"> </v-main>
 </v-layout> -->
 <!-- <div class="admin-layout"> -->
 <v-app>
  <v-layout>
   <div class="admin-layout">
    <AdminSidebar />
    <DashboardNavber />
    <v-main>
     <div class="admin-content">
      <router-view />
     </div>
    </v-main>
   </div>
  </v-layout>
 </v-app>
 <!-- </div> -->
</template>
<!-- <div class="admin-layout">
   <AdminSidebar />
   <div class="admin-content">
    <DashboardNavber />
    <router-view />
   </div>
  </div> -->
<script setup lang="ts">
import AdminSidebar from '@/components/navigation/AdminSidebar.vue'
import DashboardNavber from '@/components/navigation/DashboardNavber.vue'
</script>

<style scoped>
.admin-layout {
 flex: 1;
 /* display: flex;
 min-height: 100vh; */
}
.admin-content {
 flex: 1;
 padding: 20px;
 /* border: 10px solid rgb(119, 70, 70); */
 /* box-shadow:
  rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
 /* overflow-y: auto; */
 background-color: #e7e2e2;

 /* border-left: 1px solid #e0e0e0; */
}
</style>
