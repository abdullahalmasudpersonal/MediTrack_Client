<template>
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
      <li><router-link style="text-decoration: none" to="/services">Home</router-link></li>
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
.v-container {
 padding-top: 0 !important;
 padding-bottom: 0 !important;
 max-width: 1400px !important;
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
 /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
}
</style>
