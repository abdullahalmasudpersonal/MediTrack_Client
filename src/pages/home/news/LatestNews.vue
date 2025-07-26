<template>
 <div>
  <div class="latestNews">
   <h5 class="ourNewsTag"># News</h5>
   <h3 class="newHeading">Our Latest News and Blogs</h3>
   <div class="latestNewsDiv">
    <div class="singleNesDiv">
     <strong style="display: inline-block; margin-bottom: 15px"
      >By: Dr. Abdullah &nbsp;&nbsp;|&nbsp;&nbsp; February 4, 2025</strong
     ><br />
     <img src="@/assets/image/homepage/news/blog-1.jpg" alt="news img" />
     <h5>Telemedicine vs. Traditional healthcare what’s right for you?</h5>
     <p>Learn More &nbsp;<v-icon>mdi-arrow-right</v-icon></p>
    </div>

    <div class="singleNesDiv">
     <strong style="display: inline-block; margin-bottom: 15px"
      >By: Dr. Abdullah &nbsp;&nbsp;|&nbsp;&nbsp; February 4, 2025</strong
     ><br />
     <img src="@/assets/image/homepage/news/blog-2.jpg" alt="news img" />
     <h5>How Telemedicine can improve the quality of healthcare</h5>
     <p>Learn More &nbsp;<v-icon>mdi-arrow-right</v-icon></p>
    </div>

    <div class="singleNesDiv">
     <strong style="display: inline-block; margin-bottom: 15px"
      >By: Dr. Abdullah &nbsp;&nbsp;|&nbsp;&nbsp; February 4, 2025</strong
     ><br />
     <img src="@/assets/image/homepage/news/blog-5.jpg" alt="news img" />
     <h5>How can we get telemedicine and telehealth services?</h5>
     <p>Learn More &nbsp;<v-icon>mdi-arrow-right</v-icon></p>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.latestNews {
 padding-top: 90px;
 padding-bottom: 80px;
}
.ourNewsTag {
 text-align: center;
 font-family: 'sans-serif';
 color: #10b981;
 font-size: 16px;
}
.newHeading {
 text-align: center;
 color: rgb(43, 43, 43);
 margin-bottom: 40px;
 font-size: clamp(1.7rem, 2.5vw, 2rem);
 font-family: system-ui, '-apple-system';
}
.latestNewsDiv {
 display: grid;
 grid-template-columns: auto auto auto;
 gap: 20px;
}
/* ---------------------- */
.singleNesDiv {
 width: 360px;
 margin: auto auto 15px auto;
}
.singleNesDiv img {
 width: 360px;
 height: 250px;
 border-radius: 10px;
}
.singleNesDiv h5 {
 margin-top: 15px;
 font-size: 24px;
 font-weight: 500;
}
.singleNesDiv p {
 margin-top: 10px;
 font-weight: 600;
}
.v-icon {
 font-size: 13px;
 color: rgb(43, 43, 43);
}
/* -------------- */
@media (max-width: 1279px) {
 .latestNewsDiv {
  display: grid;
  grid-template-columns: auto auto;
  /* justify-content: space-around; */
  gap: 20px;
 }
}
@media (max-width: 775px) {
 .latestNewsDiv {
  display: grid;
  grid-template-columns: auto;
  /* justify-content: space-around; */
  gap: 20px;
 }
 .singleNesDiv {
  width: 340px;
 }
 .singleNesDiv img {
  width: 340px;
 }
}
</style>
