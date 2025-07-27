<template>
 <v-hover v-slot:default="{ isHovering, props }">
  <v-card v-bind="props" class="service-card" :elevation="isHovering ? 10 : 2">
   <v-card-text>
    <v-icon
     size="50"
     class="mb-4"
     color="primary"
     style="
      background-color: #f5f1ff;
      color: rgb(11, 100, 11) !important;
      border-radius: 50%;
      padding: 40px;
      border: 1px solid gray;
     "
    >
     {{ icon }}
    </v-icon>
    <h4 class="service-title">{{ title }}</h4>
    <p class="service-description">{{ description }}</p>
    <p
     style="
      margin-top: 20px;
      font-weight: 600;
      font-size: 16px;
      /* color: rgb(11, 100, 11); */
      cursor: pointer;
     "
    >
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
 transition: all 0.5s ease;
 height: 100%;
 background-color: rgb(246, 253, 253);
}
.service-card:hover {
 background-color: rgb(31, 119, 38);
 color: white;
 transform: translateY(-8px);
}
.service-title {
 font-size: 25px;
 font-weight: 700;
 margin-bottom: 10px;
 /* color: #222; */
}
.service-description {
 font-size: 16px;
 /* color: #575757; */
}
</style>
