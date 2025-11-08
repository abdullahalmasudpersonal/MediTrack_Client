<template>
 <v-data-table
  :loading="loading"
  :headers="headers"
  :items="allDoctorForAdmin || []"
  :items-per-page="10"
  class="text-center"
 >
  <template v-slot:[`item.name`]="{ item }">
   <div style="display: flex; align-items: center">
    <v-avatar size="40" style="border: 1px solid gray">
     <v-img :src="item.photo || ''" alt="Doctor Photo" />
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
     color="deep-purple-darken-3"
     false-value="inactive"
     true-value="active"
     hide-details
     :loading="statusLoading[item.user.id] === true"
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
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDoctorStore, type TGetDoctor } from '@/pinia/stores/doctorStore'
import { formatDate } from '@/components/shared/formatDate'
import { useRouter } from 'vue-router'

const router = useRouter()
const doctorStore = useDoctorStore()
const { allDoctorForAdmin, loading } = storeToRefs(doctorStore)
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
 { title: 'Details', key: 'user.id', align: 'center' },
] as const

const fetchDoctors = async () => {
 await doctorStore.getAllDoctorForAdminStore(filters.value)
}
onMounted(fetchDoctors)

///////// Update doctor active status ///////////
// const statusLoading = ref(false)
const statusLoading = ref<Record<string, boolean>>({})
const toggleDoctorStatus = async (item: TGetDoctor) => {
 statusLoading.value[item.user.id] = true
 const newStatus = item.user.status
 try {
  await doctorStore.updateDoctorStatusStore(item.user.id, { status: newStatus })
 } finally {
  statusLoading.value[item.user.id] = false
 }
}

const navigateDoctorDetails = (item: TGetDoctor) => {
 router.push(`/admin/doctor-details/${item.user.id}`)
}
</script>

<style scoped></style>
