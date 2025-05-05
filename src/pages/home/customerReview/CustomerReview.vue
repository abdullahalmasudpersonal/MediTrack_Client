<template>
 <v-container>
  <section class="testimonial-section">
   <h4 class="text-center text-teal-500 mb-2">Testimonial</h4>
   <h2 class="text-center text-3xl font-bold mb-10">What Our Clients Say</h2>

   <Swiper
    :modules="[Autoplay, Pagination]"
    :loop="true"
    :space-between="20"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :breakpoints="{
     0: { slidesPerView: 1 },
     640: { slidesPerView: 2 },
     1024: { slidesPerView: 3 },
    }"
    class="testimonial-swiper"
   >
    <SwiperSlide v-for="(review, index) in reviews" :key="index">
     <div class="testimonial-card">
      <h4>Abdulalh</h4>
     </div>
     <!-- <div class="testimonial-card shadow p-6 rounded-lg bg-white h-full">
     <div class="flex items-center mb-4">
      <img :src="review.image" alt="Avatar" class="w-12 h-12 rounded-full mr-4" />
      <div>
       <h3 class="font-bold text-lg">{{ review.name }}</h3>
       <p class="text-gray-500 text-sm">{{ review.title }}</p>
      </div>
     </div>
     <p class="text-gray-700 italic">“{{ review.message }}”</p> -->
     <!-- </div> -->
    </SwiperSlide>
   </Swiper>
  </section>
 </v-container>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
 {
  name: 'Juhon Hewitt',
  title: 'Happy Customer',
  message:
   'Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta.',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
 },
 {
  name: 'Laverne Hewitt',
  title: 'Happy Customer',
  message:
   'Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor.',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
 },
 {
  name: 'John Kimes',
  title: 'Happy Customer',
  message:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a.',
  image: 'https://randomuser.me/api/portraits/men/50.jpg',
 },
 {
  name: 'Sarah Blake',
  title: 'Happy Customer',
  message: 'Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.',
  image: 'https://randomuser.me/api/portraits/women/68.jpg',
 },
]
</script>

<style scoped>
.testimonial-section {
 /* padding: 4rem 1rem; */
 background: #8eadcc;
}

.testimonial-swiper {
 max-width: 1200px;
 margin: 0 auto;
 background: rgb(113, 93, 133);
}
.testimonial-card {
 background: rgb(202, 193, 193) !important;
 min-height: 200px;
}
</style>
