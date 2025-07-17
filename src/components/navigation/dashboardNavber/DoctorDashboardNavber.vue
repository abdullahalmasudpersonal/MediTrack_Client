<template>
 <div class="doctor-navber">
  <div class="d-flex align-center">
   <button v-if="!isDesktop" @click="$emit('toggle-drawer')"><v-icon>mdi-menu</v-icon></button>
   <p class="text-h6 ml-5">Doctor Panel</p>
  </div>
  <div class="d-flex align-center">
   <v-menu location="bottom end" offset-y>
    <template #activator="{ props }">
     <v-img
      v-bind="props"
      style="cursor: pointer"
      :src="myProfile?.photo || default_profile_img"
      width="40"
      class="rounded-circle border-sm"
     />
    </template>
    <v-card style="background-color: rgb(47, 51, 73)">
     <v-list style="background-color: rgb(47, 51, 73)">
      <v-list-item
       color="white"
       style="color: white"
       :prepend-avatar="myProfile?.photo || default_profile_img"
       :title="myProfile?.name || 'Loading...'"
       :subtitle="myProfile?.user?.role || ''"
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
       <v-list-item-title>{{ item.title }}</v-list-item-title>
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
import { useUserStore } from '@/pinia/stores/userStore'
import { storeToRefs } from 'pinia'
import default_profile_img from '@/assets/image/profile/default-user.png'
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

// ///////////// profile box data /////////////
const items = [
 { title: 'Profile', icon: 'mdi-account', to: '/doctor/doctor-profile' },
 { title: 'Setting', icon: 'mdi-cog', to: '' },
]

/////////////// load profile data //////////
const userStore = useUserStore()
const { myProfile } = storeToRefs(userStore)
onMounted(async () => {
 await userStore.getMyProfileStore()
})
</script>

<style scoped>
.doctor-navber {
 position: sticky;
 top: 20px;
 height: 60px;
 background: linear-gradient(-45deg, #523486, #4b1cb8, #57309b, #331ba0);
 z-index: 10;
 border-radius: 5px;
 margin-bottom: 30px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 10px 15px;
}
</style>
