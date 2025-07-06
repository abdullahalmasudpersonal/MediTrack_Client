<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
 <div class="admin-navber">
  <div class="d-flex align-center">
   <button v-if="!isDesktop" @click="$emit('toggle-drawer')"><v-icon>mdi-menu</v-icon></button>
   <p class="text-h6 ml-5">Admin Panel</p>
  </div>
  <div class="d-flex align-center">
   <v-menu location="bottom end" offset-y>
    <template #activator="{ props }">
     <v-img
      v-bind="props"
      style="cursor: pointer"
      src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
      width="40"
      class="rounded-circle"
     />
    </template>
    <v-card style="background-color: rgb(47, 51, 73)">
     <v-list style="background-color: rgb(47, 51, 73)">
      <v-list-item
       color="white"
       style="color: white"
       prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
       title="Abdullah Al Masud"
       subtitle="Admin"
      >
      </v-list-item>
     </v-list>
     <v-divider color="white" class=""></v-divider>

     <v-list style="background-color: rgb(47, 51, 73); color: whitesmoke; padding: 7px">
      <v-list-item
       v-for="(item, i) in items"
       :key="i"
       :value="item"
       class="rounded ps-3"
       density="compact"
       :to="item.to"
      >
       <template v-slot:prepend>
        <div style="margin-inline-end: 5px">
         <v-icon :icon="item.icon" style="margin-inline-end: 4px"></v-icon>
        </div>
       </template>
       <v-list-item-title v-text="item.title" />
      </v-list-item>
      <v-btn
       @click="logout"
       block
       variant="tonal"
       prepend-icon="mdi-logout"
       class="text-white mt-2"
       color="red"
       >Logout</v-btn
      >
     </v-list>
    </v-card>
   </v-menu>
  </div>
 </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// screen width tracking
const windowWidth = ref(window.innerWidth)
const isDesktop = computed(() => windowWidth.value > 1000)
function updateWidth() {
 windowWidth.value = window.innerWidth
}
onMounted(() => {
 window.addEventListener('resize', updateWidth)
})
onBeforeUnmount(() => {
 window.removeEventListener('resize', updateWidth)
})
defineEmits(['toggle-drawer'])

///// logout fn //////////
const logout = () => {
 localStorage.removeItem('access_token')
 localStorage.removeItem('user')
 localStorage.removeItem('refresh_token')
 router.push({ name: 'login' })
}
const items = [
 { title: 'Profile', icon: 'mdi-account', to: '/admin/admin-profile' },
 { title: 'Setting', icon: 'mdi-cog' },
]
</script>

<style scoped>
.admin-navber {
 position: sticky;
 top: 20px;
 height: 60px;
 background-color: #59595e;
 border-radius: 5px;
 margin-bottom: 30px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 10px 15px;
}
</style>
<!-- <v-btn class="mr-4" @click="logout">Logout</v-btn>
   <v-img
    style="cursor: pointer"
    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
    width="40"
    class="rounded-circle"
   /> -->
