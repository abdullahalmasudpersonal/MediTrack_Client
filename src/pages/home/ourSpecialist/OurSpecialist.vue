<template>
 <div class="">
  <v-container style="max-width: 1400px; margin: 0 auto">
   <h5 class="ourSecialistTag"># Meet Our Specialists</h5>
   <h2 class="ourSpecialistHeading">
    Connect with our expert specialists<br />
    dedicated to your care
   </h2>
   <v-row>
    <v-col cols="12" sm="6" md="3" lg="3">
     <div class="doctorimagediv">
      <img src="@/assets/image/ourSpecialist/team1-1.jpg" alt="doctor" class="responsive-img" />
      <div class="doctorLindedinIconDiv">
       <v-icon class="doctorLindedinIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Addison Patel</h3>
     <h5 style="text-align: center">Chief Executive Officer</h5>
    </v-col>

    <v-col cols="12" sm="6" md="3" lg="3">
     <div class="doctorimagediv">
      <img src="@/assets/image/ourSpecialist/team2-1.jpg" alt="doctor" class="responsive-img" />
      <div class="doctorLindedinIconDiv">
       <v-icon class="doctorLindedinIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Emily Carter</h3>
     <h5 style="text-align: center">Chief Medical Officer</h5>
    </v-col>

    <v-col cols="12" sm="6" md="3" lg="3">
     <div class="doctorimagediv">
      <img src="@/assets/image/ourSpecialist/team3-1.jpg" alt="doctor" class="responsive-img" />
      <div class="doctorLindedinIconDiv">
       <v-icon class="doctorLindedinIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Michael Thompson</h3>
     <h5 style="text-align: center">Chief Operating Officer</h5>
    </v-col>

    <v-col cols="12" sm="6" md="3" lg="3">
     <div class="doctorimagediv">
      <img src="@/assets/image/ourSpecialist/team4-1.jpg" alt="doctor" class="responsive-img" />
      <div class="doctorLindedinIconDiv">
       <v-icon class="doctorLindedinIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Sarah Nguyen</h3>
     <h5 style="text-align: center">Chief Growth Officer</h5>
    </v-col>
   </v-row>

   <p style="text-align: center; margin-top: 40px">
    Click here to see All Our <span class="specialistSpan">Specialists</span>
   </p>
  </v-container>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ourSecialistTag {
 text-align: center;
 font-family: 'sans-serif';
 color: #10b981;
 margin-top: 40px;
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
}
.responsive-img {
 max-width: 100%;
 height: auto;
 border-radius: 10px;
}
.doctorLindedinIconDiv {
 /* display: block; */
 /* display: inline-block; */
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
 background: rgb(21, 98, 199);
 color: white;
 cursor: pointer;
}
.specialistSpan {
 color: rgb(21, 199, 89);
 cursor: pointer;
 text-decoration: underline;
 font-weight: 600;
 transition: 0.3s;
}
.specialistSpan:hover {
 color: rgb(21, 98, 199);
}
</style>
