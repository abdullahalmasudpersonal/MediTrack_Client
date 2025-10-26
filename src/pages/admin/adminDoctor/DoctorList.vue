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

  <template v-slot:[`item.user.status`]="{ item }">
   <div style="display: flex; justify-content: center">
    <v-switch
     v-model="item.user.status"
     color="primary"
     false-value="inactive"
     true-value="active"
     hide-details
     @change="toggleDoctorStatus(item)"
    ></v-switch>
   </div>
  </template>
 </v-data-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDoctorStore, type TGetDoctor } from '@/pinia/stores/doctorStore'
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
 { title: 'Hospital', key: 'hospital_affiliation', align: 'center' },
 { title: 'Fees', key: 'fees', align: 'center' },
 { title: 'Join', key: 'user.created_at', align: 'center' },
 { title: 'Status', key: 'user.status', align: 'center' },
] as const

const fetchDoctors = async () => {
 await doctorStore.getAllDoctorStore(filters.value)
}
onMounted(fetchDoctors)

const toggleDoctorStatus = async (item: TGetDoctor) => {
 const newStatus = item.user.status
 await doctorStore.updateDoctorStatusStore(item.user.id, { status: newStatus })
}
</script>

<style scoped></style>
