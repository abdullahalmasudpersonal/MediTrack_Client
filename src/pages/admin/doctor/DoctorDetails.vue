<template>
 <!-- <div>Doctor id: {{ singleDoctorforAdmin?.user.id }}</div> -->
 <div>
  <v-form>
   <v-row dense>
    <v-col cols="12" md="6">
     <v-text-field label="Name" />
    </v-col>
   </v-row>
  </v-form>
 </div>
</template>

<script setup lang="ts">
import { useDoctorStore } from '@/pinia/stores/doctorStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const doctorId = route.params.id
const doctorStore = useDoctorStore()
const { singleDoctorforAdmin: singleDoctor } = storeToRefs(doctorStore)

const fetchSingleDoctor = async () => {
 await doctorStore.getSingleDoctorForAdminStore(doctorId as string)
}
onMounted(fetchSingleDoctor)
</script>

<style scoped></style>
