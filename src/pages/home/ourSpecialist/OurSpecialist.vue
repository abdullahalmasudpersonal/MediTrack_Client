<template>
 <div class="ourSpecialist">
  <v-container>
   <h5 class="ourSecialistTag"># Meet Our Specialists</h5>
   <h2 class="ourSpecialistHeading">
    Connect with our expert specialists<br />
    dedicated to your care
   </h2>
   <div class="ourSpecialistDiv">
    <div style="display: inline-block; padding: 2px">
     <div class="specialDoctorImgDiv">
      <img src="@/assets/image/ourSpecialist/team1-1.jpg" alt="doctor" />
      <div class="doctorLindedinAccIconDiv">
       <v-icon class="doctorLindedinAccIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Addison Patel</h3>
     <h5 style="text-align: center">Chief Executive Officer</h5>
    </div>

    <div style="display: inline-block; padding: 2px">
     <div class="specialDoctorImgDiv">
      <img src="@/assets/image/ourSpecialist/team2-1.jpg" alt="doctor" />
      <div class="doctorLindedinAccIconDiv">
       <v-icon class="doctorLindedinAccIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Emily Carter</h3>
     <h5 style="text-align: center">Chief Medical Officer</h5>
    </div>

    <div style="display: inline-block; padding: 2px">
     <div class="specialDoctorImgDiv">
      <img src="@/assets/image/ourSpecialist/team3-1.jpg" alt="doctor" />
      <div class="doctorLindedinAccIconDiv">
       <v-icon class="doctorLindedinAccIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Michael Thompson</h3>
     <h5 style="text-align: center">Chief Operating Officer</h5>
    </div>

    <div style="display: inline-block; padding: 2px">
     <div class="specialDoctorImgDiv">
      <img src="@/assets/image/ourSpecialist/team4-1.jpg" alt="doctor" />
      <div class="doctorLindedinAccIconDiv">
       <v-icon class="doctorLindedinAccIcon">mdi-linkedin</v-icon>
      </div>
     </div>
     <h3 style="text-align: center; margin-top: 40px">Dr. Sarah Nguyen</h3>
     <h5 style="text-align: center">Chief Growth Officer</h5>
    </div>
   </div>
   <p style="text-align: center">Click here to see All Our Specialists</p>
  </v-container>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ourSpecialist {
 min-height: 90vh;
}
.ourSecialistTag {
 text-align: center;
 font-family: 'sans-serif';
 color: #10b981;
}
.ourSpecialistHeading {
 font-size: clamp(1.4rem, 2.5vw, 2rem);
 max-width: 600px;
 margin: 0 auto;
 text-align: center;
 line-height: 1.2;
 word-break: break-word;
}
/* ------------------------- */
.ourSpecialistDiv {
 display: grid;
 grid-template-columns: auto auto auto auto;
 justify-content: space-between;
 margin: 40px auto;
}
/* ------------------------- */
.specialDoctorImgDiv {
 width: 270px;
 height: 340px;
 position: relative;
}
.specialDoctorImgDiv img {
 width: 270px;
 height: 340px;
 border-radius: 20px;
}
.doctorLindedinAccIcon {
 font-size: 18px;
 padding: 23px;
 border-radius: 50%;
 background: rgb(21, 98, 199);
 color: white;
 cursor: pointer;
}
.doctorLindedinAccIconDiv {
 display: block;
 padding: 8px;
 background: rgb(255, 255, 255);
 display: inline-block;
 border-radius: 50%;
 position: absolute;
 bottom: -35px;
 left: 50%;
 transform: translateX(-50%);
}
/* -------------------------- */
@media (max-width: 1279px) {
 .ourSpecialistDiv {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  gap: 20px;
  margin: 40px auto;
 }
}
@media (max-width: 610px) {
 .specialDoctorImgDiv {
  width: 320px;
  height: 390px;
 }
 .specialDoctorImgDiv img {
  width: 320px;
  height: 390px;
 }
 /* ----------------------- */
 .ourSpecialistDiv {
  display: grid;
  grid-template-columns: auto;
  /* justify-content: space-around; */
  gap: 25px;
  margin: 40px auto;
 }
}
</style>
