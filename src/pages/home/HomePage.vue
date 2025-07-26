<template>
 <!-- <v-container>
  <BannerPage />
 </v-container> -->
 <BannerPage />
 <OurSpecialCare />
 <HomeService />
 <div class="bgcolor">
  <v-container>
   <OurSpecialist />
   <CustomerReview />
   <LatestNews />
  </v-container>
 </div>
</template>

<script setup lang="ts">
import BannerPage from './banner/BannerPage.vue'
import CustomerReview from './customerReview/CustomerReview.vue'
import HomeService from './homeService/HomeService.vue'
import LatestNews from './news/LatestNews.vue'
import OurSpecialCare from './ourSpecialCare/OurSpecialCare.vue'
import OurSpecialist from './ourSpecialist/OurSpecialist.vue'
</script>

<style scoped>
.bgcolor {
 background-color: rgb(248, 255, 249);
}
</style>
