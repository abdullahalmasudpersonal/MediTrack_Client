<template>
 <div class="backToHomeOption">
  <v-icon class="backToHomelIon">mdi-home</v-icon>
  <router-link :to="{ name: 'home' }"> <button>Continue to home</button></router-link>
 </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.backToHomeOption {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 200px;
 width: 180px;
 color: rgb(27, 1, 99);
}
.backToHomelIon {
 font-size: 40px;
}
.backToHomeOption button {
 font-size: 20px;
 font-weight: 600;
}
</style>
