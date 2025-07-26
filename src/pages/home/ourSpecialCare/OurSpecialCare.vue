<template>
 <div class="specialCare">
  <v-container>
   <h5 class="specialCareTag"># Our Special Features</h5>
   <h2 class="specialCareHeading">
    Features That You Will Love
    <span style="text-decoration: underline">Us and Enjoy Specialized</span> Care
   </h2>
   <div>
    <v-row>
     <v-col v-for="(care, index) in carelist" :key="index" cols="12" sm="6" md="6" lg="3">
      <div class="specialCareCard">
       <h4 style="font-size: clamp(1.2rem, 2.5vw, 1.4rem); margin-bottom: 12px">
        <v-icon
         style="
          padding: 28px;
          font-size: 27px;
          background-color: aqua;
          color: white;
          border-radius: 50%;
         "
         >{{ care.icon }}</v-icon
        >&nbsp;{{ care.title }}
       </h4>
       <p>{{ care.description }}</p>
      </div>
     </v-col>
    </v-row>
   </div>
  </v-container>
 </div>
</template>

<script setup lang="ts">
const carelist = [
 {
  icon: 'mdi-hand-heart',
  title: 'Patient Care',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
 },
 {
  icon: 'mdi-hand-heart',
  title: 'Experience',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
 },
 {
  icon: 'mdi-hand-heart',
  title: 'Certified Dentists',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
 },
 {
  icon: 'mdi-hand-heart',
  title: 'Quality Brackets',
  description:
   'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed do eiusmod tempor',
 },
]
</script>

<style scoped>
.specialCare {
 /* height: 500px; */
 background-color: aliceblue;
 text-align: center;
 padding-top: 90px;
 padding-bottom: 90px;
}
.specialCareTag {
 font-family: 'sans-serif';
 color: #10b981;
 font-size: 16px;
 padding-bottom: 8px;
}
.specialCareHeading {
 font-size: clamp(1.4rem, 2.5vw, 2rem);
 max-width: 600px;
 margin: 0 auto;
 margin-bottom: 50px;
 text-align: center;
 line-height: 1.2;
 word-break: break-word;
}
/*---------- specialCareCard -------------- */
.specialCareCard {
 background-color: rgb(255, 255, 255);
 border-radius: 3px;
 text-align: left;
 padding: 25px;
}
</style>
