<template>
 <div class="counter">
  <h2>{{ displayValue }}</h2>
  <p>{{ title }}</p>
 </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
 end: number
 duration?: number
 title?: string
}

const props = defineProps<Props>()

const displayValue = ref(0)

onMounted(() => {
 let start = 0
 const end = props.end || 100
 const duration = props.duration || 2000
 const increment = Math.ceil(end / (duration / 16))

 const updateCounter = () => {
  start += increment
  if (start >= end) {
   displayValue.value = end
  } else {
   displayValue.value = start
   requestAnimationFrame(updateCounter)
  }
 }

 updateCounter()
})
</script>

<style scoped></style>
