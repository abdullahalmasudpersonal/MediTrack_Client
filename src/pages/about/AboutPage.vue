<template>
 <div class="backgroundImg">
  <div class="banner-content">
   <h1 class="banner-title">About</h1>
   <p class="banner-subtitle">Home <span class="separator">●</span><span> About</span></p>
  </div>
 </div>
 <div style="padding-top: 90px; padding-bottom: 90px">
  <v-container>
   <v-row>
    <v-col cols="12" md="6"> <v-img :src="aboutimg" /></v-col>
    <v-col cols="12" md="6">
     <p style="color: #225e00; font-weight: 600; font-size: 17px; margin-bottom: 10px">About Us</p>
     <h4 style="font-size: clamp(1.2rem, 2vw, 2rem); font-weight: 800">
      Connect to Call a Doctor by Video or Audio During the COVID-19 Pandemic
     </h4>
     <p style="margin-top: 10px; margin-bottom: 25px; font-size: 17px; color: gray">
      Many healthcare systems around the world together with government agencies and startup
      companies are building and delivering Telehealth solutions the future of non-emergency and
      routine healthcare delivery
     </p>
     <v-row>
      <v-col cols="12" sm="6" md="6" v-for="(service, index) in servicelist" :key="index">
       <v-card class="mx-auto" :title="service.title" :prepend-icon="service.icon" link></v-card>
      </v-col>
     </v-row>
    </v-col>
   </v-row>
  </v-container>
  <!-- <v-row>
   <v-col cols="12" md="6">
    <v-container>
     <p>Online Consult</p>
     <h4>Get 24/7 Care Right From Your Phone</h4>
     <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy
     </p>
    </v-container>
   </v-col>
   <v-col cols="12" md="6"><v-img :src="aboutimg" /> </v-col>
  </v-row> -->
 </div>
</template>

<script setup lang="ts">
import aboutimg from '@/assets/image/aboutPage/about-3.jpg'

const servicelist = [
 { title: 'Orthopedic Solutions', icon: 'mdi-doctor' },
 { title: 'Chronic Disease', icon: 'mdi-doctor' },
 { title: 'COVID-19 Test', icon: 'mdi-doctor' },
 { title: 'Diabetic Test', icon: 'mdi-doctor' },
 { title: 'Family Solutions', icon: 'mdi-doctor' },
 { title: 'Medical Questions', icon: 'mdi-doctor' },
 { title: 'Medical Questions', icon: 'mdi-doctor' },
 { title: 'Medical Questions', icon: 'mdi-doctor' },
]
</script>

<style scoped>
.backgroundImg {
 position: relative;
 color: white;
 background-image: url('@/assets/image/banner/banner1.jpg');
 background-size: cover;
 background-position: center;
 background-attachment: fixed;
 height: 40vh;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow: hidden;
}
.backgroundImg::before {
 content: '';
 position: absolute;
 inset: 0;
 background-color: rgba(0, 0, 0, 0.658);
 z-index: 0;
}
.banner-content {
 position: relative;
 text-align: center;
 z-index: 1;
}
.banner-title {
 font-size: 3rem;
 font-weight: bold;
}
.banner-subtitle {
 font-size: 1rem;
 font-weight: 600;
 margin-bottom: 1rem;
}
.separator {
 margin: 0 6px;
 font-weight: bold;
 color: #0c8b00;
}
</style>
