<template>
 <aside class="sidebar">
  <nav>
   <ul>
    <li><router-link to="/patient">Dashboard</router-link></li>
    <li><router-link to="/patient/appointments">Appointments</router-link></li>
    <li><router-link to="/patient/profile">Profile</router-link></li>
   </ul>
  </nav>
 </aside>
</template>

<script setup lang="ts">
// No extra logic needed for now
</script>

<style scoped>
.sidebar {
 width: 250px;
 background-color: #1abc9c;
 min-height: 100vh;
 padding: 20px;
 color: white;
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
 color: #2c3e50;
}
</style>
