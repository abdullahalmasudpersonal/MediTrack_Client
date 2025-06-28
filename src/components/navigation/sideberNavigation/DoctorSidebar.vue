<!-- <template>
 <aside class="sidebar">
  <nav>
   <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/doctor">Dashboard</router-link></li>
    <li><router-link to="/doctor/appointments">Appointments</router-link></li>
    <li><router-link to="/doctor/profile">Profile</router-link></li>
    <li @click="logout">Logout</li>
   </ul>
  </nav>
 </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
 localStorage.removeItem('access_token')
 localStorage.removeItem('user')
 localStorage.removeItem('refresh_token')
 router.push({ name: 'login' })
}
</script>

<style scoped>
.sidebar {
 width: 250px;
 background-color: #34495e;
 min-height: 100vh;
 padding: 20px;
 color: #ecf0f1;
}
.sidebar ul {
 list-style: none;
 padding: 0;
}
.sidebar ul li {
 margin-bottom: 20px;
}
.sidebar ul li a {
 color: inherit;
 text-decoration: none;
}
.sidebar ul li a:hover {
 color: #e67e22;
}
</style> -->

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
   <!-- <v-list-item title="Logout" /> -->
  </template>
 </v-list>
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

type MenuItem = {
 title: string
 icon: string
 to?: string // optional, if children exists
 children?: MenuItem[] // optional and recursive
}

const menuItems: MenuItem[] = [
 {
  title: 'Dashboard',
  icon: 'mdi-home',
  to: '/doctor',
 },
 // {
 //  title: 'Doctor',
 //  icon: 'mdi-doctor',
 //  children: [
 //   { title: 'List', icon: 'mdi-list-box', to: '/doctor/doctor-list' },
 //   { title: 'Create', icon: 'mdi-account-plus-outline', to: '/doctor/create-doctor' },
 //  ],
 // },
 {
  title: 'Appoinment',
  icon: 'mdi-account-injury-outline',
  to: '/doctor/doctor-appointment',
 },
 {
  title: 'Patient',
  icon: 'mdi-account-injury-outline',
  to: '/doctor/doctor-patient',
 },
 {
  title: 'Prescription',
  icon: 'mdi-account-injury-outline',
  to: '/doctor/doctor-prescription',
 },
]
</script>

<style scoped></style>
