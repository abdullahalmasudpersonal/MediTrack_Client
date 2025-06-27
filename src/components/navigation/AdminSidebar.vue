<!-- <template>
 <aside class="sidebar">
  <nav>
   <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/admin">Dashboard</router-link></li>
    <li><router-link to="/admin/users">Manage Users</router-link></li>
    <li @click="logout">Logout</li>
   </ul>
  </nav>
 </aside>
</template> -->

<template>
 <v-navigation-drawer class="sideber-bg-color text-white">
  <template v-slot:prepend>
   <router-link to="/" class="text-decoration-none">
    <div class="d-flex align-center justify-center py-3">
     <v-img src="/src/assets/image/logo/meditrack.png" max-width="55" class="mr-2" />
     <span class="text-h5 font-weight-bold">MediTrack</span>
    </div>
   </router-link>
  </template>
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
 </v-navigation-drawer>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router'
// const router = useRouter()

// const logout = () => {
//  localStorage.removeItem('access_token')
//  localStorage.removeItem('user')
//  localStorage.removeItem('refresh_token')
//  router.push({ name: 'login' })
// }

const menuItems = [
 {
  title: 'Dashboard',
  icon: 'mdi-home',
  to: '/admin',
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
  title: 'Patient',
  icon: 'mdi-account-injury-outline',
  to: '/admin/patient-list',
 },
]
</script>

<style scoped>
.sideber-bg-color {
 background-color: rgb(40, 30, 85);
}
/* .v-navigation-drawer {
 height: 100vh;
 position: fixed;
 top: 0;
 left: 0;
} */
</style>
