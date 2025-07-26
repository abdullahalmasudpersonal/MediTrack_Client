<template>
 <!-- <v-container>
  <BannerPage />
 </v-container> -->
 <BannerPage />
 <OurSpecialCare />
 <HomeService />
 <v-container>
  <OurSpecialist />
  <CustomerReview />
  <LatestNews />
 </v-container>
</template>

<script setup lang="ts">
import BannerPage from './banner/BannerPage.vue'
import CustomerReview from './customerReview/CustomerReview.vue'
import HomeService from './homeService/HomeService.vue'
import LatestNews from './news/LatestNews.vue'
import OurSpecialCare from './ourSpecialCare/OurSpecialCare.vue'
import OurSpecialist from './ourSpecialist/OurSpecialist.vue'
</script>

<style scoped></style>
