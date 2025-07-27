<template>
 <div>
  <v-container>
   <v-row style="padding: 90px 70px">
    <v-col
     cols="12"
     md="4"
     sm="6"
     v-for="(feature, index) in featuredlist"
     :key="index"
     @mouseover="hoverIndex = index"
     @mouseleave="hoverIndex = null"
    >
     <div
      class="featuredCard"
      :style="{ backgroundColor: hoverIndex === index ? feature.hoverColor : feature.bgColor }"
     >
      <h4
       style="font-size: clamp(1.5rem, 1.3vw, 2.5rem); font-family: Gill Sans; margin-bottom: 15px"
      >
       <v-icon style="font-size: 60px">{{ feature.icon }}</v-icon>
       {{ feature.title }}
      </h4>
      <p>
       {{ feature.description }}
      </p>
      <p style="font-weight: 600; margin-top: 15px; cursor: pointer; display: inline-block">
       Read More
      </p>
     </div>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoverIndex = ref<number | null>(null)
const featuredlist = [
 {
  title: 'Certified Dentist',
  icon: 'mdi-account-injury-outline',
  description:
   ' Lpsum dolor sit amet consectetur lor adipiscing elit convallis urna quisque id malesuada loremoi pellen demi text tesque.',
  bgColor: 'rgb(121, 133, 13)',
  hoverColor: 'rgb(79, 148, 33)',
 },
 {
  title: 'New Technology',
  icon: 'mdi-stethoscope',
  description:
   ' Lpsum dolor sit amet consectetur lor adipiscing elit convallis urna quisque id malesuada loremoi pellen demi text tesque.',
  bgColor: 'rgb(136, 85, 27)',
  hoverColor: 'rgb(148, 117, 33)',
 },
 {
  title: 'Accept Insurance',
  icon: 'mdi-shield-check',
  description:
   ' Lpsum dolor sit amet consectetur lor adipiscing elit convallis urna quisque id malesuada loremoi pellen demi text tesque.',
  bgColor: 'rgb(13, 95, 133)',
  hoverColor: 'rgb(33, 132, 150)',
 },
]
</script>

<style scoped>
.featuredCard {
 color: white;
 min-height: 200px;
 border-radius: 3px;
 padding: 30px;
 transition:
  background-color 0.3s ease,
  box-shadow 0.3s ease,
  transform 0.3s ease;
 box-shadow:
  rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.featuredCard:hover {
 background-position: bottom right;
 box-shadow:
  rgba(0, 0, 0, 0.356) 0px 15px 25px,
  rgba(0, 0, 0, 0.253) 0px 5px 10px;
 transform: translateY(-5px);
}
</style>
