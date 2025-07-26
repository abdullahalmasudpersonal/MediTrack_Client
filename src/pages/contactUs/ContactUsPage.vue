<template>
 <div class="backgroundImg">
  <div class="banner-content">
   <h1 class="banner-title">Contact Us</h1>
   <p class="banner-subtitle">Home <span class="separator">●</span><span> Contact Us</span></p>
  </div>
 </div>
 <div style="padding-top: 100px; padding-bottom: 90px">
  <v-container>
   <v-row>
    <v-col cols="12" md="4" lg="4">
     <v-card
      style="
       padding: 30px;
       text-align: center;
       box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      "
     >
      <v-icon
       style="
        padding: 30px;
        font-size: 30px;
        background-color: #225e00;
        color: white;
        border-radius: 50%;
        margin: auto;
        border: 1px solid gray;
        margin-bottom: 15px;
       "
       >mdi-email</v-icon
      >
      <h4 style="font-size: clamp(1.2rem, 1.2vw, 2rem)">Email Here</h4>
      <p style="font-size: 17px; color: gray">admin@tinzer.com</p>
      <p style="font-size: 17px; color: gray">info@tinzer.com</p>
     </v-card>
    </v-col>
    <v-col cols="12" md="4" lg="4">
     <v-card
      style="
       padding: 30px;
       text-align: center;
       box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      "
     >
      <v-icon
       style="
        padding: 30px;
        font-size: 30px;
        background-color: #225e00;
        color: white;
        border-radius: 50%;
        margin: auto;
        border: 1px solid gray;
        margin-bottom: 15px;
       "
       >mdi-map-marker</v-icon
      >
      <h4 style="font-size: clamp(1.2rem, 1.2vw, 2rem)">Location Here</h4>
      <p style="font-size: 17px; color: gray">2750 Quadra Street Victoria,</p>
      <p style="font-size: 17px; color: gray">New York, United Staded</p>
     </v-card>
    </v-col>
    <v-col cols="12" md="4" lg="4">
     <v-card
      style="
       padding: 30px;
       text-align: center;
       box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      "
     >
      <v-icon
       style="
        padding: 30px;
        font-size: 30px;
        background-color: #225e00;
        color: white;
        border-radius: 50%;
        margin: auto;
        border: 1px solid gray;
        margin-bottom: 15px;
       "
       >mdi-phone-plus</v-icon
      >
      <h4 style="font-size: clamp(1.2rem, 1.2vw, 2rem)">Call Here</h4>
      <p style="font-size: 17px; color: gray">+123 456 7890</p>
      <p style="font-size: 17px; color: gray">+241 452 4526</p>
     </v-card>
    </v-col>
   </v-row>
   <div style="text-align: center; margin-top: 70px; margin-bottom: 40px">
    <p style="font-size: 17px; font-weight: 600; color: #225e00; margin-bottom: 7px">Contact Us</p>
    <h3 style="font-size: clamp(1.2rem, 2vw, 2.5rem)">Drop us Message for any Query</h3>
    <p style="max-width: 600px; margin: auto; margin-top: 10px; font-size: 17px; color: gray">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua.
    </p>
   </div>
   <v-form>
    <v-row>
     <v-col cols="12" md="6">
      <v-text-field :rules="[rules.required]" label="Name"></v-text-field>
     </v-col>
     <v-col cols="12" md="6">
      <v-text-field :rules="[rules.required, rules.email]" label="Email"></v-text-field>
     </v-col>
     <v-col cols="12" md="6">
      <v-text-field :rules="[rules.required, rules.phone]" label="Phone"></v-text-field>
     </v-col>
     <v-col cols="12" md="6">
      <v-text-field :rules="[rules.required]" label="Subject"></v-text-field>
     </v-col>
     <v-col cols="12">
      <v-textarea
       :rules="[rules.required]"
       label="Your Message"
       rows="5"
       max-rows="7"
       auto-grow
       counter
       maxlength="1000"
       style="max-height: 300px"
      ></v-textarea>
     </v-col>
     <v-col cols="12" class="text-center mt-4">
      <v-btn color="success" width="200px" size="large" rounded elevation="4"> Submit </v-btn>
     </v-col>
    </v-row>
   </v-form>
  </v-container>
 </div>
</template>

<script setup lang="ts">
const rules = {
 required: (v: string) => !!v || 'This field is required',
 email: (v: string) => /.+@.+\..+/.test(v) || 'Invalid email',
 phone: (v: string) => /^((\+8801|01)\d{9})$/.test(v) || 'Invalid Bangladeshi number',
}
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
/* /////////////////////////// */
</style>
