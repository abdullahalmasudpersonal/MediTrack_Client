<template>
 <div class="backgroundImg">
  <v-container>
   <div class="service-intro">
    <h5 class="section-subtitle"># Our Services</h5>
    <h2 class="section-title" data-aos="fade-down">
     <span
      v-for="(char, index) in headingText"
      :key="index"
      class="char"
      :style="{ animationDelay: index * 0.1 + 's' }"
     >
      {{ char }}
     </span>
    </h2>
    <p class="section-description" data-aos="fade-down">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Quis ipsum suspendisse.
    </p>
   </div>
   <div style="padding-top: 20px; padding-bottom: 100px">
    <v-row>
     <v-col
      v-for="(service, index) in services"
      :key="index"
      cols="12"
      sm="6"
      md="4"
      data-aos="fade-left"
      :data-aos-delay="index * 200"
     >
      <div class="service-section">
       <ServiceCard
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
       />
      </div>
     </v-col>
    </v-row>
   </div>
  </v-container>
 </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/pages/ourServices/ServiceCard.vue'
import { ref } from 'vue'
const headingText = ref('Our Healthcare Services')

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
.backgroundImg {
 position: relative;
 color: white;
 background-image: url('@/assets/image/banner/banner1.jpg');
 background-size: cover;
 background-position: center;
 background-attachment: fixed;
 overflow: hidden;
}
.backgroundImg::before {
 content: '';
 position: absolute;
 inset: 0;
 background-color: rgba(0, 0, 0, 0.726);
 z-index: 0;
}
/* ////////////// service-intro ////////////// */
.service-intro {
 position: relative;
 max-width: 750px;
 margin: 0 auto;
 text-align: center;
 padding: 60px 20px 30px;
 z-index: 1;
}
.section-subtitle {
 font-family: 'sans-serif';
 color: rgb(20, 173, 20);
 font-size: 16px;
}
.section-title {
 font-size: 36px;
 font-weight: 700;
 margin-bottom: 16px;
}
.section-description {
 font-size: 17px;
 font-weight: 600;
 line-height: 1.8;
}
/* /////////// title /////////////////////////// */
.char {
 opacity: 0;
 transform: translateY(20px);
 animation: fadeInUp 0.5s forwards;
}
@keyframes fadeInUp {
 to {
  opacity: 1;
  transform: translateY(0);
 }
}
</style>
