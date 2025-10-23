<template>
 <v-data-table
  :loading="loading"
  :headers="headers"
  :items="allDoctor || []"
  :items-per-page="10"
  class="text-center"
 >
  <template v-slot:[`item.name`]="{ item }">
   <div style="display: flex; align-items: center">
    <v-avatar size="40" style="border: 1px solid gray">
     <v-img :src="item.photo" alt="Doctor Photo" />
    </v-avatar>
    <span style="margin-left: 5px">{{ item.name }}</span>
   </div>
  </template>

  <template v-slot:[`item.user.created_at`]="{ item }">
   {{ formatDate(item.user.created_at) }}
  </template>
 </v-data-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDoctorStore } from '@/pinia/stores/doctorStore'
import { formatDate } from '@/components/shared/formatDate'

const doctorStore = useDoctorStore()
const { allDoctor, loading } = storeToRefs(doctorStore)

const filters = ref({
 specialization: '',
 name: '',
})

const headers = [
 { title: 'Name', key: 'name' },
 { title: 'Email', key: 'user.email', align: 'center' },
 { title: 'Phone', key: 'phone_number', align: 'center' },
 { title: 'Specialization', key: 'specialization', align: 'center' },
 { title: 'Experience', key: 'experience_years', align: 'center' },
 { title: 'Hospital', key: 'hospital_affiliation', align: 'center' },
 { title: 'Fees', key: 'fees', align: 'center' },
 { title: 'Join', key: 'user.created_at', align: 'center' },
] as const

const fetchDoctors = async () => {
 await doctorStore.getAllDoctorStore(filters.value)
}

onMounted(fetchDoctors)
</script>

<style scoped></style>
