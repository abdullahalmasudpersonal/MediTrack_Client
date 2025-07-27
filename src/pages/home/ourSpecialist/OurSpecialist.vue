<template>
 <div style="padding-top: 90px; padding-bottom: 90px">
  <h5 class="ourSecialistTag"># Meet Our Specialists</h5>
  <h2 class="ourSpecialistHeading">
   <span
    v-for="(char, index) in headingText"
    :key="index"
    class="char"
    :style="{ animationDelay: index * 0.05 + 's' }"
   >
    {{ char }}
   </span>
  </h2>
  <v-row>
   <v-col
    cols="12"
    sm="6"
    md="3"
    lg="3"
    v-for="(doctor, index) in doctorlist"
    :key="index"
    data-aos="fade-up-right"
    :data-aos-delay="index * 200"
   >
    <div class="doctorimagediv">
     <v-img :src="doctor.img" alt="doctor" class="responsive-img" />
     <div class="doctorLindedinIconDiv">
      <v-icon class="doctorLindedinIcon">mdi-linkedin</v-icon>
     </div>
    </div>
    <h3 style="text-align: center; margin-top: 40px">{{ doctor.name }}</h3>
    <h5 style="text-align: center">{{ doctor.title }}</h5>
   </v-col>
  </v-row>

  <p style="text-align: center; margin-top: 30px">
   Click here to see All Our
   <router-link to="/doctor-list"><span class="specialistSpan">Specialists</span></router-link>
  </p>
 </div>
</template>

<script setup lang="ts">
import doctor1 from '@/assets/image/ourSpecialist/team1-1.jpg'
import doctor2 from '@/assets/image/ourSpecialist/team2-1.jpg'
import doctor3 from '@/assets/image/ourSpecialist/team3-1.jpg'
import doctor4 from '@/assets/image/ourSpecialist/team4-1.jpg'
import { ref } from 'vue'
const headingText = ref('Connect with our expert specialists dedicated to your care')

const doctorlist = [
 {
  name: 'Dr. Addison Patel',
  title: 'Chief Executive Officer',
  img: doctor1,
 },
 {
  name: 'Dr. Emily Carter',
  title: 'Chief Medical Officer',
  img: doctor2,
 },
 {
  name: 'Dr. Michael Thompson',
  title: 'Chief Operating Officer',
  img: doctor3,
 },
 {
  name: 'Dr. Sarah Nguyen',
  title: 'Chief Growth Officer',
  img: doctor4,
 },
]
</script>

<style scoped>
.ourSecialistTag {
 text-align: center;
 font-family: 'sans-serif';
 color: rgb(11, 100, 11);
 font-size: 16px;
}
.ourSpecialistHeading {
 font-size: clamp(1.4rem, 2.5vw, 2rem);
 max-width: 600px;
 margin: 0 auto;
 margin-bottom: 50px;
 text-align: center;
 line-height: 1.2;
 word-break: break-word;
}
.doctorimagediv {
 position: relative;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 border-radius: 10px;
 transition: all 0.4s ease;
}
.doctorimagediv:hover {
 box-shadow:
  rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
  rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
 transform: translateY(-3px);
}
.responsive-img {
 max-width: 100%;
 height: auto;
 border-radius: 10px;
}
.doctorLindedinIconDiv {
 padding: 8px;
 background: rgb(255, 255, 255);
 border-radius: 50%;
 position: absolute;
 bottom: -35px;
 left: 50%;
 transform: translateX(-50%);
}
.doctorLindedinIcon {
 font-size: 18px;
 padding: 23px;
 border-radius: 50%;
 background: rgb(11, 100, 11);
 color: white;
 cursor: pointer;
 transition: all 0.3s ease;
}
.doctorLindedinIcon:hover {
 background: rgb(27, 163, 197);
}
.specialistSpan {
 color: rgb(11, 100, 11);
 cursor: pointer;
 text-decoration: underline;
 font-weight: 600;
 transition: 0.3s;
}
.specialistSpan:hover {
 color: rgb(38, 182, 2);
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
