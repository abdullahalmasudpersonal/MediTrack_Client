<template>
 <div class="admin-navber">
  <button v-if="!isDesktop" @click="$emit('toggle-drawer')"><v-icon>mdi-menu</v-icon></button>
 </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// screen width tracking
const windowWidth = ref(window.innerWidth)
const isDesktop = computed(() => windowWidth.value > 1000)
function updateWidth() {
 windowWidth.value = window.innerWidth
}
onMounted(() => {
 window.addEventListener('resize', updateWidth)
})
onBeforeUnmount(() => {
 window.removeEventListener('resize', updateWidth)
})
defineEmits(['toggle-drawer'])
</script>

<style scoped>
.admin-navber {
 position: sticky;
 top: 20px;
 height: 60px;
 background-color: #59595e;
 border-radius: 5px;
 margin-bottom: 30px;
 display: flex;
 align-items: center;
 padding: 10px;
}
</style>
