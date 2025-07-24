<template>
 <div class="bannerpage">
  <div class="fade-slider">
   <transition-group name="fade" tag="div" class="slider-wrapper">
    <v-img
     v-if="items.length"
     :key="current"
     :src="items[current]"
     class="slider-img"
     cover
    ></v-img>
   </transition-group>
  </div>
 </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import banner1 from '@/assets/image/banner/banner1.jpg'
import banner2 from '@/assets/image/banner/banner2.jpg'
import banner3 from '@/assets/image/banner/banner3.jpg'

const current = ref(0)
const items = [banner1, banner2, banner3]

onMounted(() => {
 setInterval(() => {
  current.value = (current.value + 1) % items.length
 }, 7000)
})
</script>

<style scoped>
.bannerpage {
 margin-top: 30px;
 margin-bottom: 50px;
}
.fade-slider {
 height: 550px;
 position: relative;
 overflow: hidden;
 border-radius: 5px;
}

.slider-wrapper {
 position: relative;
 width: 100%;
 height: 100%;
}

.slider-img {
 width: 100%;
 height: 100%;
 position: absolute;
 top: 0;
 left: 0;
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity 2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
</style>
