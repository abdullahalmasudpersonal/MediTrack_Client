<template>
 <v-hover v-slot:default="{ isHovering, props }">
  <v-card v-bind="props" class="service-card" :elevation="isHovering ? 10 : 2">
   <v-card-text>
    <v-icon
     size="50"
     class="mb-4"
     color="primary"
     style="background-color: #f5fffe; border-radius: 50%; padding: 40px; border: 1px solid #1b3774"
    >
     {{ icon }}
    </v-icon>
    <h4 class="service-title">{{ title }}</h4>
    <p class="service-description">{{ description }}</p>
    <p style="margin-top: 20px; font-weight: 600; font-size: 16px; color: #0c8b00; cursor: pointer">
     Read More +
    </p>
   </v-card-text>
  </v-card>
 </v-hover>
</template>

<script setup lang="ts">
defineProps<{
 icon: string
 title: string
 description: string
}>()
</script>

<style scoped>
.service-card {
 padding: 30px 20px;
 border-radius: 12px;
 text-align: center;
 transition: all 0.3s ease;
 height: 100%;
}
.service-title {
 font-size: 25px;
 font-weight: 700;
 margin-bottom: 10px;
 color: #222;
}
.service-description {
 font-size: 15px;
 color: #666;
}
</style>
