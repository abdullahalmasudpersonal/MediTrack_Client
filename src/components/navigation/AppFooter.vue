<template>
 <div class="footer">
  <v-container>
   <v-row class="footerDiv">
    <v-col cols="12" sm="6" md="3" class="footerChildDiv">
     <div style="display: flex; align-items: center">
      <img src="../../assets/image/logo/meditrack.png" class="logo" alt="logo" />
      <p style="font-size: 26px; font-weight: 700; color: rgb(16, 148, 16)">&nbsp;MediTrack</p>
     </div>
     <p style="margin-top: 30px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore aliqua.
     </p>
     <div>
      <v-icon class="footerSocialIon">mdi-facebook</v-icon>
      <v-icon class="footerSocialIon">mdi-twitter</v-icon>
      <v-icon class="footerSocialIon">mdi-linkedin</v-icon>
      <v-icon class="footerSocialIon">mdi-instagram</v-icon>
     </div>
    </v-col>
    <v-col cols="12" sm="6" md="3" class="footerChildDiv">
     <h2>Our Services</h2>
     <ul class="ourServices">
      <li>Cosmetic Dentistry</li>
      <li>General Dentistry</li>
      <li>Certified Dentist</li>
      <li>New Technology</li>
      <li>Accept Insurance</li>
     </ul>
    </v-col>
    <v-col cols="12" sm="6" md="3">
     <h2>Useful Links</h2>
     <ul class="UsefulLinks">
      <li>Contact Us</li>
      <li>Solutions</li>
      <li>Privacy Policy</li>
      <li>Terms of Use</li>
     </ul>
    </v-col>
    <v-col cols="12" sm="6" md="3">
     <h2>Contact Us</h2>
     <ul class="contactUs">
      <li>
       <v-icon class="">mdi-phone</v-icon>
       +123(456)123
      </li>
      <li><v-icon class="">mdi-email</v-icon> abdullah@gmail.com</li>
      <li><v-icon class="">mdi-map-marker</v-icon> 50 NW-2nd Ave, Miami USA</li>
      <li><v-icon class="">mdi-clock-time-eight</v-icon> Every day 3.00 - 10.00 PM</li>
     </ul>
    </v-col>
   </v-row>
  </v-container>
 </div>

 <div class="footerButtomDiv">
  <span>Copyright © MediTrack 2025</span>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
 color: rgb(255, 255, 255);
 background: linear-gradient(to right, #033d06 10%, #093809 70%, #0b4403);
}
.footerDiv {
 margin-top: 40px;
 margin-bottom: 40px;
}
.logo {
 width: 50px;
 height: 50px;
 margin: 0;
 padding: 0;
}
.footerSocialIon {
 height: 30px;
 width: 30px;
 font-size: 22px;
 background: #00751a;
 color: rgb(255, 255, 255);
 border-radius: 50%;
 padding: 23px;
 margin-top: 30px;
 margin-right: 8px;
 cursor: pointer;
}
.footerSocialIon:hover {
 background: #01aa0f;
 color: white;
 transition: 0.3s ease;
}
/* ///////////// Useful Links ///////////////// */
.UsefulLinks {
 list-style: none; /* bullet বাদ */
 padding: 0;
 margin-top: 16px;
}
.UsefulLinks li {
 padding: 6px 0;
 color: #f1f1f1;
 cursor: pointer;
 font-size: 15px;
 transition: color 0.3s ease;
}
.UsefulLinks li:hover {
 color: #ffffff;
 text-decoration: underline;
}
/* ///////////// ourServices ///////////////// */
.ourServices {
 list-style: none; /* bullet বাদ */
 padding: 0;
 margin-top: 16px;
}
.ourServices li {
 padding: 6px 0;
 color: #f1f1f1;
 cursor: pointer;
 font-size: 15px;
 transition: color 0.3s ease;
}
.ourServices li:hover {
 color: #ffffff;
 text-decoration: underline;
}
/* ///////////// contactUs ///////////////// */
.contactUs {
 list-style: none; /* bullet বাদ */
 padding: 0;
 margin-top: 16px;
}
.contactUs li {
 padding: 6px 0;
 color: #f1f1f1;
 cursor: pointer;
 font-size: 15px;
 transition: color 0.3s ease;
}
.contactUs li:hover {
 color: #ffffff;
}
/* ////////////////////////// */
.footerButtomDiv {
 height: 70px;
 background: linear-gradient(to right, rgb(3, 51, 22), rgb(5, 71, 5) 60%, rgb(6, 59, 13));
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>
