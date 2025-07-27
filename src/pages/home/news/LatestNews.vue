<template>
 <div class="latestNews">
  <h5 class="ourNewsTag"># Latest News</h5>
  <h2 class="newHeading">Our Latest News and Blogs</h2>
  <v-row>
   <v-col
    cols="12"
    md="6"
    lg="4"
    v-for="(news, index) in newslist"
    :key="index"
    data-aos="zoom-in-up"
    :data-aos-delay="index * 200"
   >
    <div class="newDiv">
     <strong style="display: inline-block; margin-bottom: 15px"
      >By: {{ news.writername }} &nbsp;&nbsp;|&nbsp;&nbsp; {{ news.date }}</strong
     >
     <v-img style="border-radius: 5px" :src="news.img" alt="news img" />
     <h5 class="newTitle">{{ news.title }}</h5>
     <p class="learnMoreArrow" style="color: rgb(11, 100, 11); cursor: pointer">
      Learn More &nbsp;<v-icon style="color: rgb(11, 100, 11)">mdi-arrow-right</v-icon>
     </p>
    </div>
   </v-col>
  </v-row>
 </div>
</template>

<script setup lang="ts">
import new1 from '@/assets/image/homepage/news/blog-1.jpg'
import new2 from '@/assets/image/homepage/news/blog-2.jpg'
import new3 from '@/assets/image/homepage/news/blog-5.jpg'

const newslist = [
 {
  writername: 'Dr. Abdullah',
  title: 'Telemedicine vs. Traditional healthcare what’s right for you?',
  img: new1,
  date: 'February 4, 2025',
 },
 {
  writername: 'Dr. Abdullah',
  title: 'How Telemedicine can improve the quality of healthcare',
  img: new2,
  date: 'February 4, 2025',
 },
 {
  writername: 'Dr. Abdullah',
  title: 'How can we get telemedicine and telehealth services?',
  img: new3,
  date: 'February 4, 2025',
 },
]
</script>

<style scoped>
.latestNews {
 padding-top: 90px;
 padding-bottom: 90px;
}
.ourNewsTag {
 text-align: center;
 font-family: 'sans-serif';
 color: rgb(11, 100, 11);
 font-size: 16px;
}
.newHeading {
 text-align: center;
 color: rgb(43, 43, 43);
 margin-bottom: 40px;
 font-size: clamp(1.7rem, 2.5vw, 2rem);
 font-family: system-ui, '-apple-system';
}
.newDiv {
 transition: all 0.3s ease;
}
.newDiv:hover {
 transform: translateY(-5px);
}
.newTitle {
 margin-top: 15px;
 font-size: 24px;
 font-weight: 500;
}
.learnMoreArrow {
 margin-top: 10px;
 font-weight: 600;
}
.v-icon {
 font-size: 13px;
 color: rgb(43, 43, 43);
}
</style>
