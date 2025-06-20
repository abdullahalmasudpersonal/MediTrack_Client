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
 <v-card>
  <v-layout>
   <v-navigation-drawer permanent>
    <template v-slot:prepend>
     <v-list-item lines="two"></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" nav>
     <v-list-item
      prepend-icon="mdi-dashboard"
      title="Dashboard"
      value="dashboard"
      to="/admin"
      nav
      exact
     ></v-list-item>
     <v-list-item
      prepend-icon="mdi-account-group-outline"
      title="Users"
      value="users"
      to="/admin/users"
      nav
      exact
     ></v-list-item>
    </v-list>
   </v-navigation-drawer>
   <v-main style="height: 250px"></v-main>
  </v-layout>
 </v-card>
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
 background-color: #2c3e50;
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
 color: #1abc9c;
}
</style>
