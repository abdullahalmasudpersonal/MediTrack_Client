<template>
 <v-data-table
  :loading="loading"
  :headers="headers"
  :items="getAllAppointment || []"
  :items-per-page="10"
  class="text-center"
 >
  <template v-slot:[`item.created_at`]="{ item }">
   {{ formatDate(item.created_at || '') }}
  </template>
  <template v-slot:[`item.appointment_date`]="{ item }">
   {{ formatDate(item.appointment_date) }}
  </template>
 </v-data-table>
</template>

<script setup lang="ts">
import { formatDate } from '@/components/shared/formatDate'
import { useAppointmentStore } from '@/pinia/stores/appointmentStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const headers = [
 { title: 'Appointment_Number', key: 'appointment_number' },
 { title: 'Patient', key: 'patient_name' },
 { title: 'Email', key: 'email', align: 'center' },
 { title: 'Phone', key: 'phone_number', align: 'center' },
 { title: 'Specialization', key: 'specialization', align: 'center' },
 // { title: 'Hospital', key: 'hospital_affiliation', align: 'center' },
 { title: 'Fees', key: 'fees', align: 'center' },
 { title: 'Booking', key: 'created_at', align: 'center' },
 { title: 'Appointment Date', key: 'appointment_date', align: 'center' },
 { title: 'Slot', key: 'appointment_start_time', align: 'center' },
 { title: 'Status', key: 'status', align: 'center' },
 { title: 'Payment', key: 'payment_status', align: 'center' },
 { title: 'Reschedule', key: 'reschedule_count', align: 'center' },
 { title: 'Details', key: 'user.id', align: 'center' },
] as const

const appointmentStore = useAppointmentStore()
onMounted(async () => {
 await appointmentStore.getAllAppointmentStore()
})
const { getAllAppointment, loading } = storeToRefs(appointmentStore)
</script>

<style scoped></style>
