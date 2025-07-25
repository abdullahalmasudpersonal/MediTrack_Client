<template>
 <v-container>
  <BannerPage />
  <OurSpecialist />
  <CustomerReview />
  <LatestNews />
 </v-container>
</template>

<script setup lang="ts">
import BannerPage from './banner/BannerPage.vue'
import CustomerReview from './customerReview/CustomerReview.vue'
import LatestNews from './news/LatestNews.vue'
import OurSpecialist from './ourSpecialist/OurSpecialist.vue'
</script>

<style scoped></style>
