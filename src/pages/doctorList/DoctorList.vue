<template>
 <v-container>
  <div style="margin: 30px auto 30px auto">
   <div>
    <!-- search ber/filter -->
   </div>
   <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 4" :key="n">
     <v-skeleton-loader
      v-if="loading"
      class="mx-auto border"
      max-width="323"
      min-height="293"
      type="image, article"
     ></v-skeleton-loader>
    </v-col>
    <v-col v-for="doctor in allDoctor" :key="doctor.id" cols="12" sm="6" md="4" lg="3">
     <div class="doctor-div">
      <v-img style="border-radius: 5px 5px 0 0" :src="doctor?.photo" />
      <div class="doctor-card">
       <h3>{{ doctor?.name }}</h3>
       <p style="color: rgb(0, 131, 81); font-weight: 600">
        {{ doctor?.specialization.charAt(0).toUpperCase() + doctor?.specialization.slice(1) }}
       </p>
       <h5 class="mt-1 font-weight-medium">MCPS, FCPS, FRCP(Glasg), FACC(USA)</h5>
       <v-btn color="#4527A0" block class="mt-3" @click="goToAppointmentPage(doctor.id)"
        >Get Appointment</v-btn
       >
       <v-btn color="indigo-darken-3" block class="mt-3" @click="goToDoctorProfile(doctor.id)"
        >View Doctor Profile</v-btn
       >
      </div>
     </div>
    </v-col>
   </v-row>
  </div>
 </v-container>
</template>

<script setup lang="ts">
import { useDoctorStore } from '@/pinia/stores/doctorStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function goToDoctorProfile(id: string) {
 router.push({ name: 'doctorDetails', params: { id } })
}
function goToAppointmentPage(id: string) {
 router.push({ name: 'appointment', params: { id } })
}
const doctorStore = useDoctorStore()
const { allDoctor, loading } = storeToRefs(doctorStore)
onMounted(async () => {
 await doctorStore.getAllDoctorStore()
})
</script>

<style scoped>
.doctor-div {
 background-color: rgb(247, 247, 247);
 border-radius: 5px;
 border: 1px solid rgb(235, 235, 235);
}

.doctor-card {
 background-color: rgb(247, 247, 247);
 min-height: 80px;
 width: 100%;
 padding: 10px;
 border-radius: 0 0 5px 5px;
}
</style>
