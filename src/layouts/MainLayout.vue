<template>
 <v-app>
  <AppHeader />
  <v-main
   ><v-container> <router-view /></v-container
  ></v-main>
  <AppFooter />
 </v-app>
</template>

<script setup lang="ts">
import AppFooter from '@/components/navigation/AppFooter.vue'
import AppHeader from '@/components/navigation/AppHeader.vue'
</script>

<style scoped></style>
