<template>
 <!-- <template v-slot:prepend> -->
 <router-link to="/" class="text-decoration-none">
  <div class="d-flex align-center justify-center py-3">
   <v-img src="/src/assets/image/logo/meditrack.png" max-width="50" class="mr-2" />
   <span class="text-h5 font-weight-bold">MediTrack</span>
  </div>
 </router-link>
 <!-- </template> -->
 <v-divider></v-divider>

 <v-list>
  <template v-for="item in menuItems" :key="item.title">
   <v-list-group v-if="item.children" :value="item.title">
    <template #activator="{ props }">
     <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title" exact />
    </template>

    <v-list-item
     v-for="(child, j) in item.children"
     :key="j"
     :prepend-icon="child.icon"
     :title="child.title"
     :to="child.to"
     exact
    />
   </v-list-group>

   <v-list-item v-else :prepend-icon="item.icon" :title="item.title" :to="item.to" exact />
  </template>
 </v-list>
</template>
<script setup lang="ts">
// import { useRouter } from 'vue-router'
// const router = useRouter()

const menuItems = [
 {
  title: 'Dashboard',
  icon: 'mdi-home',
  to: '/patient',
 },
 {
  title: 'Doctor',
  icon: 'mdi-doctor',
  children: [
   { title: 'List', icon: 'mdi-list-box', to: '/admin/doctor-list' },
   { title: 'Create', icon: 'mdi-account-plus-outline', to: '/admin/create-doctor' },
  ],
 },
 {
  title: 'Appointment',
  icon: 'mdi-account-injury-outline',
  to: '/patient/patient-appointment',
 },
 {
  title: 'Payment',
  icon: 'mdi-account-injury-outline',
  // to: '/patient/patient-appointments',
 },
]
</script>

<style scoped></style>
