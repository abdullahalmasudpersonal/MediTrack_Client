<template>
 <div class="map-container">
  <iframe
   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34667.393569945845!2d90.4364032!3d23.7043712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1753616985323!5m2!1sen!2sbd"
   width="100%"
   height="450"
   style="border: 0"
   allowfullscreen="true"
   loading="lazy"
   referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.map-container {
 width: 100%;
 height: 450px;
 overflow: hidden;
}
</style>
