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
 <v-navigation-drawer permanent>
  <template v-slot:prepend>
   <div class="d-flex align-center justify-center py-3">
    <v-img src="/src/assets/image/logo/meditrack.png" max-width="55" class="mr-2" />
    <span class="text-h5 font-weight-bold">MediTrack</span>
   </div>
  </template>
  <v-divider></v-divider>

  <!-- <v-list v-model:opened="open">
   <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

   <v-list-group value="Users">
    <template v-slot:activator="{ props }">
     <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
    </template>

    <v-list-group value="Admin">
     <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" title="Admin"></v-list-item>
     </template>

     <v-list-item
      v-for="([title, icon], i) in admins"
      :key="i"
      :prepend-icon="icon"
      :title="title"
      :value="title"
     ></v-list-item>
    </v-list-group>

    <v-list-group value="Actions">
     <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" title="Actions"></v-list-item>
     </template>

     <v-list-item
      v-for="([title, icon], i) in cruds"
      :key="i"
      :prepend-icon="icon"
      :title="title"
      :value="title"
     ></v-list-item>
    </v-list-group>
   </v-list-group>
  </v-list> -->

  <v-list>
   <template v-for="(item, i) in menuItems" :key="i">
    <v-list-group v-if="item.children" :value="item.title">
     <template #activator="{ props }">
      <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title" />
     </template>

     <v-list-item
      v-for="(child, j) in item.children"
      :key="j"
      :prepend-icon="child.icon"
      :title="child.title"
      :to="child.to"
     />
    </v-list-group>

    <v-list-item v-else :prepend-icon="item.icon" :title="item.title" :to="item.to" />
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
 // {
 //  title: 'Doctor',
 //  children: [{ title: 'Create' }, { title: 'Update' }, { title: 'List' }],
 // },
 // {
 //  title: 'Action',
 // },
]
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

.v-list {
 background-color: #2f3142;
 color: white;
}
.v-list-item-title {
 font-weight: 500;
}
</style>
