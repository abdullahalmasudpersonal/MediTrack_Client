<template>
 <div class="doctor-navber">
  <div class="d-flex align-center justify-center">
   <button v-if="!isDesktop" @click="$emit('toggle-drawer')"><v-icon>mdi-menu</v-icon></button>
   <p class="text-h6 ml-5">Doctor Panel</p>
  </div>
  <div class="d-flex align-center justify-center">
   <v-btn class="mr-4" @click="logout">Logout</v-btn>
   <v-img
    style="cursor: pointer"
    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
    width="40"
    class="rounded-circle"
   />
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
</script>

<style scoped>
.doctor-navber {
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
