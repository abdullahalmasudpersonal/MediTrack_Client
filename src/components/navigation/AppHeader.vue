<!-- <template>
 <div class="header">
  <v-container>
   <div class="headerDiv">
    <router-link to="/" style="text-decoration: none">
     <div style="display: flex; align-items: center">
      <img src="@/assets/image/logo/meditrack.png" class="logo" alt="logo" />
      <p style="font-weight: 700; font-size: 24px; margin: 0">MediTrack</p>
     </div>
    </router-link>
    <div class="headerMenu">
     <ul>
      <li><router-link style="text-decoration: none" to="/">Home</router-link></li>
      <li>
       <router-link style="text-decoration: none" to="/doctor-list">Find Doctor</router-link>
      </li>
      <li><router-link style="text-decoration: none" to="/services">Services</router-link></li>
      <li><router-link style="text-decoration: none" to="/about">About</router-link></li>
      <li><router-link style="text-decoration: none" to="/blog">Blog</router-link></li>
      <li><router-link style="text-decoration: none" to="/contactus">Contact Us</router-link></li>
     </ul>
    </div>
    <div class="headerMenu">
     <ul>
      <li><router-link style="text-decoration: none" to="/contactus">Appointment</router-link></li>
      <li>
       <router-link v-if="!token" style="text-decoration: none" :to="{ name: 'login' }"
        >Login</router-link
       >
       <router-link v-else style="text-decoration: none" :to="dashboardPath">Dashboard</router-link>
      </li>
     </ul>
    </div>
   </div>
  </v-container>
 </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const token = localStorage.getItem('access_token')
const user = JSON.parse(localStorage.getItem('user') || 'null')
const role = user?.role

const dashboardPath = computed(() => {
 return `/${role}`
})
</script>

<style>
.header {
 background: rgb(224, 224, 224);
 position: sticky;
 top: 0;
 z-index: 10;
}
.headerDiv {
 height: 70px;
 background: rgb(224, 224, 224);
 display: flex;
 align-items: center;
 justify-content: space-between;
}
.logo {
 height: 50px;
 width: 50px;
}
.headerMenu ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
}
.headerMenu ul li {
 padding: 5px 15px;
 font-weight: 600;
}
</style> -->
<template>
 <v-app-bar app color="primary" dark>
  <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
  <v-toolbar-title class="font-weight-bold">MyApp</v-toolbar-title>

  <v-spacer />

  <!-- Desktop Links -->
  <div class="d-none d-md-flex">
   <v-btn text to="/">Homess</v-btn>
   <v-btn text to="/about">About</v-btn>
   <v-btn text to="/contact">Contact</v-btn>
  </div>
 </v-app-bar>

 <!-- Drawer for Mobile -->
 <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
  <v-list>
   <v-list-item to="/">
    <v-list-item-title>Home</v-list-item-title>
   </v-list-item>
   <v-list-item to="/about">
    <v-list-item-title>About</v-list-item-title>
   </v-list-item>
   <v-list-item to="/contact">
    <v-list-item-title>Contact</v-list-item-title>
   </v-list-item>
  </v-list>
 </v-navigation-drawer>

 <!-- Page Content -->
 <v-main>
  <v-container class="mt-10">
   <router-view />
  </v-container>
 </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style scoped>
.v-btn {
 text-transform: none;
}
</style>
