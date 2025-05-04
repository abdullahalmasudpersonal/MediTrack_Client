<template>
 <div class="ourSpecialist">
  <v-container>
   <h5 style="text-align: center"># Meet Our Specialists</h5>
   <h2 class="ourSpecialistHeading">
    Connect with our expert specialists<br />
    dedicated to your care
   </h2>
   <div class="specialistsDiv">
    <div class="singleSpecialistDiv">
     <img src="@/assets/image/ourSpecialist/team1-1.jpg" alt="doctor" />
     <h3>Dr. Addison Patel</h3>
     <h5>Chief Executive Officer</h5>
    </div>
    <div class="singleSpecialistDiv">
     <img src="@/assets/image/ourSpecialist/team1-1.jpg" alt="doctor" />
     <h3>Dr. Addison Patel</h3>
     <h5>Chief Executive Officer</h5>
    </div>
    <div class="singleSpecialistDiv">
     <img src="@/assets/image/ourSpecialist/team1-1.jpg" alt="doctor" />
     <h3>Dr. Addison Patel</h3>
     <h5>Chief Executive Officer</h5>
    </div>
    <div class="singleSpecialistDiv">
     <img src="@/assets/image/ourSpecialist/team1-1.jpg" alt="doctor" />
     <h3>Dr. Addison Patel</h3>
     <h5>Chief Executive Officer</h5>
    </div>
   </div>
  </v-container>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ourSpecialist {
 min-height: 90vh;
 background-color: rgb(171, 201, 228);
}
.ourSpecialistHeading {
 font-size: clamp(1.2rem, 2.5vw, 2rem); /* রেসপনসিভ ফন্ট সাইজ */
 max-width: 600px; /* লাইন ব্রেক নিশ্চিত করতে */
 margin: 0 auto; /* সেন্টারে রাখতে */
 text-align: center;
 line-height: 1.4;
 word-break: break-word;
}
.specialistsDiv {
 min-height: 80vh;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.singleSpecialistDiv img {
 max-height: 300px;
 max-width: 200px;
 margin: auto;
}
.singleSpecialistDiv h3,
h5 {
 text-align: center;
}
@media (max-width: 830px) {
 .specialistsDiv {
  display: grid;
  grid-template-columns: 50% 50%;
 }
}
</style>
