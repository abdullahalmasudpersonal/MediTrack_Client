<template>
 <v-data-table
  :loading="loading"
  :headers="headers"
  :items="allPatient || []"
  :items-per-page="10"
  class="text-center"
 >
  <template v-slot:[`item.user.created_at`]="{ item }">
   {{ formatDate(item.user.created_at) }}
  </template>

  <template v-slot:[`item.user.status`]="{ item }">
   <div style="display: flex; justify-content: center">
    <v-switch
     v-model="item.user.status"
     color="deep-purple-darken-3"
     false-value="inactive"
     true-value="active"
     hide-details
     @change="toggleDoctorStatus(item)"
    ></v-switch>
   </div>
  </template>

  <template v-slot:[`item.user.id`]="{ item }">
   <v-btn
    @click="navigateDoctorDetails(item)"
    variant="tonal"
    size="small"
    rounded="xs"
    elevation="4"
    color="deep-purple-lighten-1"
    >Details</v-btn
   >
  </template>
 </v-data-table>
</template>

<script setup lang="ts">
import { formatDate } from '@/components/shared/formatDate'
import { usePatientStore } from '@/pinia/stores/patientStore'
import type { TGetPatient } from '@/types/patient.types'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const headers = [
 { title: 'Name', key: 'name' },
 { title: 'Email', key: 'user.email', align: 'center' },
 { title: 'Phone', key: 'phone_number', align: 'center' },
 { title: 'Join', key: 'user.created_at', align: 'center' },
 { title: 'Status', key: 'user.status', align: 'center' },
 { title: 'Details', key: 'user.id', align: 'center' },
] as const

const patientStore = usePatientStore()
onMounted(async () => {
 await patientStore.getAllPatient()
})
const { allPatient, loading } = storeToRefs(patientStore)

const toggleDoctorStatus = async (item: TGetPatient) => {
 const newStatus = item.user.status
 console.log(newStatus)
 // await doctorStore.updateDoctorStatusStore(item.user.id, { status: newStatus })
}

const navigateDoctorDetails = (item: TGetPatient) => {
 router.push(`/admin/doctor-details/${item.user.id}`)
}
</script>

<style scoped></style>
