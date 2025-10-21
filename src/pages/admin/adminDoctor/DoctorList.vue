<template>
 <v-data-table :loading="loading" :headers="headers" :items="allDoctor || []" :items-per-page="10">
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
 { title: 'Email', key: 'user.email' },
 { title: 'Phone', key: 'phone_number' },
 { title: 'Specialization', key: 'specialization' },
 { title: 'Experience', key: 'experience_years' },
 { title: 'Hospital', key: 'hospital_affiliation' },
 { title: 'Fees', key: 'fees' },
 { title: 'Join', key: 'user.created_at' },
 //  { title: 'Actions', key: 'actions', sortable: false },
]

const fetchDoctors = async () => {
 await doctorStore.getAllDoctorStore(filters.value)
}

onMounted(fetchDoctors)
</script>

<style scoped>
.v-data-table {
 overflow-x: auto;
}
</style>
<!-- // const viewDoctor = (doctor: any) => {
//  console.log('View doctor:', doctor)
//  // এখানে তুমি ডিটেইলস ডায়লগ বা রাউট করতে পারো
// } -->
<!-- <v-row class="mb-4" align="center">
  <v-col cols="12" sm="5" md="4">
   <v-text-field
    v-model="filters.name"
    label="Search by Name"
    variant="outlined"
    clearable
    @input="fetchDoctors"
   />
  </v-col>

  <v-col cols="12" sm="5" md="4">
   <v-text-field
    v-model="filters.specialization"
    label="Filter by Specialization"
    variant="outlined"
    clearable
    @input="fetchDoctors"
   />
  </v-col>
 </v-row> -->
