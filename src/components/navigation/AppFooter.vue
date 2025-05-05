<template>
 <div class="footer">
  <v-container class="footerContainer">
   <div class="footerDiv">
    <div style="display: flex; align-items: center">
     <img src="../../assets/image/logo/meditrack.png" class="logo" alt="logo" />
     <p
      style="
       font-size: 28px;
       font-weight: 700;
       /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
       color: #dadada;
      "
     >
      &nbsp;MediTrack
     </p>
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
   </div>
   <div class="footerDiv"><h2>Our Services</h2></div>
   <div class="footerDiv">
    <h2>Useful Links</h2>
   </div>
   <div class="footerDiv">
    <h2>Contact</h2>
   </div>
  </v-container>
 </div>

 <div class="footerButtomDiv">
  <span>Copyright © MediTrack 2025</span>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
 color: white;
 background: linear-gradient(to right, #091222 10%, #0d162e 70%, #03112c);
}
.footerContainer {
 display: grid;
 grid-template-columns: 25% 25% 25% 25%;
 gap: 10px;
}
.footerDiv {
 min-height: 350px;
 font-family: 'Times New Roman', Times, serif;
 font-size: 17px;
 font-weight: bold;
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
 background: #0013a5;
 color: rgb(255, 255, 255);
 border-radius: 50%;
 padding: 20px;
 margin-top: 30px;
 margin-right: 8px;
 cursor: pointer;
}
.footerButtomDiv {
 height: 70px;
 background: linear-gradient(to right, rgb(6, 10, 19) 60%, rgb(3, 15, 31));
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
}
@media (max-width: 850px) {
 .footerContainer {
  display: grid;
  grid-template-columns: 50% 50%;
 }
}
@media (max-width: 500px) {
 .footerContainer {
  display: grid;
  grid-template-columns: auto;
 }
}
</style>
