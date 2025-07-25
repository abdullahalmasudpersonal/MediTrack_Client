<template>
 <div class="fade-slider">
  <transition-group name="fade" tag="div" class="slider-wrapper">
   <v-img v-if="items.length" :key="current" :src="items[current]" class="slider-img" cover></v-img>
  </transition-group>
  <!-- Overlay Content -->
  <div class="banner-content">
   <h1 class="banner-title">Services</h1>
   <p class="banner-subtitle">Home <span class="separator">●</span><span> Services</span></p>
  </div>
 </div>
 <v-container>
  <div class="service-intro">
   <p class="section-subtitle">Our Services</p>
   <h3 class="section-title">Our Healthcare Services</h3>
   <p class="section-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Quis ipsum suspendisse.
   </p>
  </div>
  <div class="service-section">
   <v-row>
    <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="4">
     <ServiceCard :icon="service.icon" :title="service.title" :description="service.description" />
    </v-col>
   </v-row>
  </div>
 </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import banner2 from '@/assets/image/banner/banner2.jpg'
import ServiceCard from './ServiceCard.vue'

const current = ref(0)
const items = [banner2]

onMounted(() => {
 setInterval(() => {
  current.value = (current.value + 1) % items.length
 }, 7000)
})

// import ServiceCard from '@/components/ServiceCard.vue'

const services = [
 {
  icon: 'mdi-stethoscope',
  title: 'General Checkup',
  description: 'Routine health exams and personalized advice from our general physicians.',
 },
 {
  icon: 'mdi-heart-pulse',
  title: 'Cardiology',
  description: 'Advanced cardiac care and consultations from expert cardiologists.',
 },
 {
  icon: 'mdi-eye',
  title: 'Eye Care',
  description: 'Comprehensive eye exams and treatment for various eye conditions.',
 },
 {
  icon: 'mdi-tooth',
  title: 'Dental Care',
  description: 'Modern dental services from cleaning to advanced dental procedures.',
 },
 {
  icon: 'mdi-hospital-box',
  title: 'Emergency Services',
  description: '24/7 emergency support and urgent medical response services.',
 },
 {
  icon: 'mdi-baby-face',
  title: 'Pediatrics',
  description: 'Specialized care for infants, children, and adolescents.',
 },
]
</script>

<style scoped>
.fade-slider {
 height: 380px;
 position: relative;
 overflow: hidden;
}
.slider-wrapper {
 position: absolute;
 width: 100%;
 height: 100%;
 z-index: 1;
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
.banner-content {
 position: relative;
 z-index: 2;
 height: 100%;
 width: 100%;
 color: white;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 0 20px;
 background: rgba(0, 0, 0, 0.678);
}
.banner-title {
 font-size: 3rem;
 font-weight: bold;
}
.banner-subtitle {
 font-size: 1.2rem;
 font-weight: 600;
 margin-bottom: 1rem;
 max-width: 600px;
}
.separator {
 margin: 0 6px;
 font-weight: bold;
 color: #0c8b00;
}
/* ////////////////////////////////////////// */
.service-intro {
 max-width: 750px;
 margin: 0 auto;
 text-align: center;
 padding: 60px 20px 30px;
}
.section-subtitle {
 color: #225e00;
 font-weight: 600;
 font-size: 19px;
 margin-bottom: 10px;
 letter-spacing: 1px;
}
.section-title {
 font-size: 36px;
 font-weight: 700;
 margin-bottom: 16px;
 color: #222;
}
.service-section {
 padding: 60px 0px;
}
</style>
