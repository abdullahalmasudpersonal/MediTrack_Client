<template>
 <section>
  <h5 class="customerReviewTag"># Testimonial</h5>
  <h2 class="customerReviewTitle">What Our Clients Say</h2>

  <Swiper
   :modules="[Autoplay, Pagination]"
   :loop="true"
   :space-between="20"
   :autoplay="{ delay: 4000, disableOnInteraction: false }"
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
     <div style="display: flex; justify-content: space-between">
      <div style="display: flex; gap: 10px">
       <img :src="review.image" alt="Avatar" class="reviewCustomerImage" />
       <div>
        <h3 class="font-bold text-lg">{{ review.name }}</h3>
        <p class="text-gray-500 text-sm">{{ review.title }}</p>
       </div>
      </div>
      <v-icon class="reviewCustomerDoubleQuotation">mdi-format-quote-close</v-icon>
     </div>
     <p style="margin-top: 15px; font-size: 15px">
      “Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum
      porta. Cras ultricies ligula magna dictum porta.”
     </p>
    </div>
   </SwiperSlide>
  </Swiper>
 </section>
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
.customerReviewTag {
 text-align: center;
 font-family: 'sans-serif';
 color: rgb(11, 100, 11);
 margin-top: 80px;
 font-size: 16px;
}
.customerReviewTitle {
 text-align: center;
 color: rgb(43, 43, 43);
 margin-bottom: 40px;
 font-size: clamp(1.7rem, 2.5vw, 2rem);
 font-family: system-ui, '-apple-system';
}
.testimonial-swiper {
 max-width: 1200px;
 margin: 0 auto;
 color: rgb(59, 67, 73);
}
.swiper {
 padding: 2px;
 padding-bottom: 40px;
}
.testimonial-card {
 min-height: 140px;
 padding: 25px;
 border-radius: 10px;
 box-shadow:
  rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.reviewCustomerImage {
 height: 60px;
 width: 60px;
 border-radius: 50%;
}
.reviewCustomerDoubleQuotation {
 font-size: 60px;
 color: rgb(11, 100, 11);
}
</style>
