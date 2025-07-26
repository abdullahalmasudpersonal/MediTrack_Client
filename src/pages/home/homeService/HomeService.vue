<template>
 <div class="backgroundImg">
  <v-container>
   <div class="service-intro">
    <h5 class="section-subtitle"># Our Services</h5>
    <h2 class="section-title">Our Healthcare Services</h2>
    <p class="section-description">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Quis ipsum suspendisse.
    </p>
   </div>
   <div>
    <div class="service-section">
     <v-row>
      <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="4">
       <ServiceCard
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
       />
      </v-col>
     </v-row>
    </div>
   </div>
  </v-container>
 </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/pages/ourServices/ServiceCard.vue'

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
 color: #10b981;
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
.service-section {
 padding-top: 20px;
 padding-bottom: 100px;
}
</style>
