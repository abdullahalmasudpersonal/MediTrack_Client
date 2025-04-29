<script setup lang="ts">
import AppHeader from '../components/navigation/AppHeader.vue'
import AppFooter from '../components/navigation/AppFooter.vue'
</script>

<template>
 <div>
  <AppHeader />
  <router-view> </router-view>
  <AppFooter />
 </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
