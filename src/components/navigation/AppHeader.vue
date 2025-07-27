<template>
 <v-app-bar app class="navber" height="70">
  <v-container class="d-flex align-center justify-space-between">
   <router-link to="/" style="text-decoration: none">
    <div class="d-flex align-center">
     <v-img :src="logo" width="47" />
     <p class="logoname">&nbsp;MediTrack</p>
    </div>
   </router-link>
   <div class="headerMenu d-none d-md-flex">
    <ul>
     <li>
      <router-link exact-active-class="active-link" class="navitem" to="/">Home</router-link>
     </li>
     <li>
      <router-link exact-active-class="active-link" class="navitem" to="/doctor-list"
       >Find Doctor</router-link
      >
     </li>
     <li>
      <router-link exact-active-class="active-link" class="navitem" to="/services"
       >Services</router-link
      >
     </li>
     <li>
      <router-link exact-active-class="active-link" class="navitem" to="/about">About</router-link>
     </li>
     <li>
      <router-link exact-active-class="active-link" class="navitem" to="/contactus"
       >Contact Us</router-link
      >
     </li>
    </ul>
   </div>
   <div class="headerMenu d-none d-md-flex">
    <ul>
     <li>
      <router-link
       exact-active-class="active-link"
       class="navitem"
       v-if="!token"
       :to="{ name: 'login' }"
       >Login</router-link
      >
      <router-link exact-active-class="active-link" class="navitem" v-else :to="dashboardPath"
       >Dashboard</router-link
      >
     </li>
    </ul>
   </div>
   <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
  </v-container>
 </v-app-bar>
 <!-- mobile menu/drawer -->
 <v-navigation-drawer app temporary class="d-md-none" v-model="drawer">
  <v-list density="compact" nav>
   <v-list-item to="/" prepend-icon="mdi-view-dashboard" exact>
    <v-list-item-title>Home</v-list-item-title>
   </v-list-item>
   <v-list-item to="/doctor-list" prepend-icon="mdi-account-search" exact>
    <v-list-item-title>Find Doctor</v-list-item-title>
   </v-list-item>
   <v-list-item to="/services" prepend-icon="mdi-briefcase" exact>
    <v-list-item-title>Services</v-list-item-title>
   </v-list-item>
   <v-list-item to="/about" prepend-icon="mdi-information" exact>
    <v-list-item-title>About</v-list-item-title>
   </v-list-item>
   <v-list-item to="/contactus" prepend-icon="mdi-phone" exact>
    <v-list-item-title>Contact Us</v-list-item-title>
   </v-list-item>
   <v-list-item v-if="!token" :to="{ name: 'login' }" prepend-icon="mdi-shield-lock" exact>
    <v-list-item-title>Login</v-list-item-title>
   </v-list-item>
   <v-list-item v-else :to="dashboardPath" prepend-icon="mdi-phone" exact>
    <v-list-item-title>Dashboard</v-list-item-title>
   </v-list-item>
  </v-list>
 </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ref } from 'vue'
import logo from '@/assets/image/logo/meditrack.png'

const drawer = ref(false)
const token = localStorage.getItem('access_token')
const user = JSON.parse(localStorage.getItem('user') || 'null')
const role = user?.role

const dashboardPath = computed(() => {
 return `/${role}`
})
</script>
<style scoped>
.navber {
 background-color: rgb(247, 255, 237) !important;
}
.logoname {
 font-weight: 700;
 font-family: 'Times New Roman', Times, serif;
 font-size: 24px;
 margin: 0;
 color: rgb(11, 100, 11);
}
.headerMenu ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 gap: 5px;
}
.headerMenu ul li {
 padding: 5px 13px;
 font-weight: 600;
 font-size: 16px;
 font-family: 'Times New Roman', Times, serif;
}
.navitem {
 color: rgb(0, 0, 0);
 text-decoration: none;
 transition: color 0.3s ease;
}
.navitem:hover {
 color: rgb(11, 100, 11);
}
.active-link {
 color: rgb(11, 100, 11);
 font-weight: 700;
 border-bottom: 2px solid #1976d2;
}
</style>
