<template>
 <!-- <v-container>
  <BannerPage />
 </v-container> -->
 <BannerPage />
 <FeaturedCard />
 <OurSpecialCare />
 <HomeService />
 <div class="bgcolor">
  <v-container>
   <OurSpecialist />
  </v-container>
  <NumberPage />
  <v-container>
   <CustomerReview />
  </v-container>
  <v-container>
   <LatestNews />
  </v-container>
  <MapPage />
 </div>
</template>

<script setup lang="ts">
import BannerPage from './banner/BannerPage.vue'
import CustomerReview from './customerReview/CustomerReview.vue'
import FeaturedCard from './featuredCard/FeaturedCard.vue'
import HomeService from './homeService/HomeService.vue'
import MapPage from './map/MapPage.vue'
import LatestNews from './news/LatestNews.vue'
import NumberPage from './numbers/NumberPage.vue'
import OurSpecialCare from './ourSpecialCare/OurSpecialCare.vue'
import OurSpecialist from './ourSpecialist/OurSpecialist.vue'
</script>

<style scoped>
.bgcolor {
 background-color: rgb(248, 255, 249);
}
</style>
