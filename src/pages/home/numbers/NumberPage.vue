<template>
 <div class="backgroundImg" ref="counterSection">
  <v-container>
   <div class="service-intro">
    <v-row>
     <v-col cols="12" md="6" lg="3" v-for="(counter, index) in counterlist" :key="index">
      <div>
       <p
        style="
         font-size: clamp(1.5rem, 2vw, 3rem);
         font-weight: 600;
         text-align: center;
         margin-bottom: 10px;
        "
       >
        {{ counter.currentValue.toLocaleString() }}{{ counter.suffix || '' }}
       </p>
       <h4 style="font-size: clamp(1.2rem, 0.5vw, 2rem); text-align: center">
        {{ counter.title }}
       </h4>
      </div>
     </v-col>
    </v-row>
   </div>
  </v-container>
 </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface CounterItem {
 title: string
 target: number
 currentValue: number
 suffix?: string
}
const counterlist = ref<CounterItem[]>([
 { title: 'Virtual Consultations Completed', target: 3500, currentValue: 0 },
 { title: 'Homes Clinically Supported', target: 454, currentValue: 0, suffix: '+' },
 { title: 'Virtual Care Solutions', target: 4505, currentValue: 0 },
 { title: 'Connections Success Rate', target: 88, currentValue: 0, suffix: '%' },
])

function animateCounter(counter: CounterItem, duration = 1000) {
 const startTime = performance.now()
 const startValue = 0
 const endValue = counter.target

 function update(currentTime: number) {
  const elapsed = currentTime - startTime
  const progress = Math.min(elapsed / duration, 1)
  counter.currentValue = Math.floor(progress * (endValue - startValue) + startValue)

  if (progress < 1) {
   requestAnimationFrame(update)
  } else {
   counter.currentValue = endValue
  }
 }
 requestAnimationFrame(update)
}

onMounted(() => {
 counterlist.value.forEach((counter) => {
  animateCounter(counter)
 })
})

// /////////////////
const counterSection = ref<HTMLElement | null>(null)
// const hasAnimated = ref(false)

function resetCounters() {
 counterlist.value.forEach((counter) => {
  counter.currentValue = 0
 })
}

// function setupObserver() {
//  const observer = new IntersectionObserver(
//   (entries) => {
//    const entry = entries[0]
//    if (entry.isIntersecting && !hasAnimated.value) {
//     counterlist.value.forEach((counter) => {
//      animateCounter(counter)
//     })
//     hasAnimated.value = true
//     observer.disconnect() // একবারই animate হবে
//    }
//   },
//   {
//    threshold: 0.3, // ৩০% এলিমেন্ট স্ক্রিনে আসলে কাজ করবে
//   },
//  )

//  if (counterSection.value) {
//   observer.observe(counterSection.value)
//  }
// }

function setupObserver() {
 const observer = new IntersectionObserver(
  (entries) => {
   const entry = entries[0]

   if (entry.isIntersecting) {
    // ভিউতে আসলে animate শুরু
    counterlist.value.forEach((counter) => {
     animateCounter(counter)
    })
   } else {
    // ভিউ থেকে চলে গেলে reset
    resetCounters()
   }
  },
  {
   threshold: 0.3,
  },
 )

 if (counterSection.value) {
  observer.observe(counterSection.value)
 }
}

onMounted(() => {
 setupObserver()
})
</script>

<style scoped>
.backgroundImg {
 position: relative;
 color: white;
 background-image: url('@/assets/image/banner/banner1.jpg');
 background-size: cover;
 background-position: center;
 background-attachment: fixed;
 overflow: hidden;
}
.backgroundImg::before {
 content: '';
 position: absolute;
 inset: 0;
 background-color: rgba(0, 0, 0, 0.76);
 z-index: 0;
}
.service-intro {
 position: relative;
 z-index: 1;
 padding: 100px 0;
}
</style>
