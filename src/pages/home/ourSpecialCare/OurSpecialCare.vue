<template>
 <div class="specialCare">
  <v-container>
   <h5 class="specialCareTag"># Our Special Features</h5>
   <h2 class="specialCareHeading" data-aos="fade-down">
    <!-- Features That You Will Love
    <span style="color: rgb(11, 100, 11)">Us and Enjoy Specialized</span> Care -->
    <span
     v-for="(char, index) in headingText"
     :key="index"
     class="char"
     :style="{ animationDelay: index * 0.05 + 's' }"
    >
     {{ char }}
    </span>
   </h2>
   <div>
    <v-row>
     <v-col
      v-for="(care, index) in carelist"
      :key="index"
      cols="12"
      sm="6"
      md="6"
      lg="3"
      data-aos="fade-right"
      :data-aos-delay="index * 200"
     >
      <div class="specialCareCard" :style="{ backgroundColor: care.bgcolor }">
       <h4 class="special-caretitle">
        <v-icon class="special-careicon">{{ care.icon }}</v-icon
        >&nbsp; {{ care.title }}
       </h4>
       <p>{{ care.description }}</p>
      </div>
     </v-col>
    </v-row>
   </div>
  </v-container>
 </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import { onMounted, ref } from 'vue'
const headingText = ref('Features That You Will Love Us and Enjoy Specialized Care')

onMounted(() => {
 AOS.init({
  duration: 1000,
 })
})

const carelist = [
 {
  icon: 'mdi-hand-heart',
  title: 'Patient Care',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
  bgcolor: 'rgb(204, 233, 215)',
  hoverbgcolor: '',
 },
 {
  icon: 'mdi-briefcase-check',
  title: 'Experience',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
  bgcolor: 'rgb(215, 233, 204)',
  hoverbgcolor: '',
 },
 {
  icon: 'mdi-certificate',
  title: 'Certified Dentists',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
  bgcolor: 'rgb(204, 231, 233)',
  hoverbgcolor: '',
 },
 {
  icon: 'mdi-tooth-outline',
  title: 'Quality Brackets',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
  bgcolor: 'rgb(204, 214, 233)',
  hoverbgcolor: '',
 },
]
</script>

<style scoped>
.specialCare {
 background-color: aliceblue;
 text-align: center;
 padding-top: 90px;
 padding-bottom: 90px;
}
.specialCareTag {
 font-family: 'sans-serif';
 color: rgb(11, 100, 11);
 font-size: 16px;
 padding-bottom: 8px;
}
.specialCareHeading {
 font-size: clamp(1.4rem, 2.5vw, 2rem);
 max-width: 600px;
 margin: 0 auto;
 margin-bottom: 50px;
 text-align: center;
 line-height: 1.2;
 word-break: break-word;
}
/*---------- specialCareCard -------------- */
.specialCareCard {
 position: relative;
 background-color: rgb(204, 214, 233);
 color: rgb(41, 41, 41);
 border-radius: 3px;
 text-align: left;
 padding: 25px;
 z-index: 0;
 overflow: hidden;
 transition: transform 0.4s ease;
}
.special-caretitle {
 position: relative;
 font-size: clamp(1.2rem, 2.5vw, 1.4rem);
 margin-bottom: 12px;
}
.special-careicon {
 padding: 28px;
 font-size: 27px;
 background-color: rgb(11, 100, 11);
 color: white;
 border-radius: 50%;
}
.specialCareCard:before {
 content: '';
 position: absolute;
 border-radius: 3px;
 width: 0%;
 height: 0%;
 top: 0;
 left: 0;
 background: rgb(92, 212, 212);
 color: white;
 transition: all 1s ease;
 z-index: -1;
 transform: rotate(0deg);
 transform-origin: top left;
}
.specialCareCard:hover:before {
 width: 100%;
 height: 100%;
 color: white;
}
/* /////////// title /////////////////////////// */
.char {
 opacity: 0;
 transform: translateY(20px);
 animation: fadeInUp 0.5s forwards;
}
@keyframes fadeInUp {
 to {
  opacity: 1;
  transform: translateY(0);
 }
}
</style>
