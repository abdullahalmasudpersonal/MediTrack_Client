<template>
 <v-card class="pa-6">
  <p class="text-h6 font-weight-bold">Update Profile Data</p>
  {{ myProfile?.name }}
  <!-- এখানে আপনার Update Profile Form এর কোড লিখবেন -->
 </v-card>
</template>

<script setup lang="ts">
import { useUserStore } from '@/pinia/stores/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { myProfile } = storeToRefs(userStore)
</script>

<style scoped></style>
