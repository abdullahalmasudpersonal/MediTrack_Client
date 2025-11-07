<template>
 <v-container class="py-16">
  <v-row justify="center">
   <v-col cols="12" md="10" lg="8">
    <v-card elevation="4" class="pa-4 rounded">
     <v-card-title class="text-h6 font-weight-bold">Create Appointment</v-card-title>
     <v-card-text>
      <v-form ref="formRef" v-model="formValid" @submit.prevent="submitForm">
       <v-row dense>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="doctorName"
          label="Doctor"
          :rules="[rules.required]"
          dense
          disabled
          :loading="loadingDoctor"
         />
         <!-- </template> -->
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.specialization"
          disabled
          label="Specialization"
          :rules="[rules.required]"
          dense
          class="specialization_capitalize_text"
          :loading="loadingDoctor"
         />
        </v-col>
        <v-col cols="12">
         <v-text-field
          v-model="form.patient_name"
          label="Patient Name"
          :rules="[rules.required]"
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.email"
          label="Email"
          :rules="[rules.required, rules.email]"
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-select
          v-model="form.gender"
          label="Gender"
          :items="genderOptions"
          :rules="[rules.required]"
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.phone_number"
          label="Phone Number"
          :rules="[rules.required, rules.phone]"
          dense
         />
        </v-col>

        <v-col cols="12" md="6">
         <v-select
          v-model="form.consultation_type"
          label="Consultation Type"
          :items="consultationOptions"
          outlined
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.appointment_date"
          label="Date"
          type="date"
          :rules="[rules.required]"
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-select
          v-model="form.appointment_time"
          :items="availableSlots"
          label="Time"
          :rules="[rules.required]"
          dense
          outlined
          clearable
          :disabled="loadingSchedule"
          :loading="loadingSchedule"
         />
        </v-col>
        <v-col cols="12">
         <v-textarea
          v-model="form.notes"
          label="Notes"
          rows="3"
          maxlength="160"
          clearable
          auto-grow
         />
        </v-col>
       </v-row>
       <v-btn type="submit" color="primary" block class="mt-4" :loading="submitLoading">
        Submit
       </v-btn>
      </v-form>
     </v-card-text>
    </v-card>
   </v-col>
  </v-row>
  <v-snackbar
   v-model="snackbarStore.show"
   :color="snackbarStore.color"
   timeout="3000"
   location="top right"
   elevation="4"
  >
   {{ snackbarStore.message }}
  </v-snackbar>
 </v-container>
</template>

<script setup lang="ts">
import { useAppointmentStore } from '@/pinia/stores/appointmentStore'
import { useDoctorStore } from '@/pinia/stores/doctorStore'
import { useScheduleStore } from '@/pinia/stores/scheduleStore'
import { useSnackbarStore } from '@/pinia/stores/snackbarStore'
import { storeToRefs } from 'pinia'
import { computed, onMounted, watch } from 'vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const formValid = ref(false)
const route = useRoute()
const router = useRouter()
const loadingDoctor = ref(true)
const loadingSchedule = ref(false)
const formRef = ref()

const rules = {
 required: (v: string) => !!v || 'This field is required',
 email: (v: string) => /.+@.+\..+/.test(v) || 'Invalid email',
 phone: (v: string) => /^((\+8801|01)\d{9})$/.test(v) || 'Invalid Bangladeshi number',
}

const consultationOptions: string[] = ['online', 'offline', 'video']
const genderOptions = [
 { title: 'Male', value: 'male' },
 { title: 'Female', value: 'female' },
]

const form = ref({
 patient_name: '',
 email: '',
 gender: '',
 phone_number: '',
 doctor: '',
 specialization: '',
 consultation_type: 'offline',
 notes: '',
 appointment_date: '',
 appointment_time: '',
 appointment_start_time: '',
 appointment_end_time: '',
})

///////////// Load doctor data ///////////
const doctorName = ref('')
const doctorStore = useDoctorStore()

onMounted(async () => {
 const doctorId = route.params.id as string
 loadingDoctor.value = true
 try {
  await doctorStore.getSingleDoctorStore(doctorId)

  if (singleDoctor.value) {
   doctorName.value = singleDoctor.value.name
   form.value.doctor = singleDoctor.value.id
   form.value.specialization = singleDoctor.value.specialization
  }
 } finally {
  loadingDoctor.value = false
 }
})
const { singleDoctor } = storeToRefs(doctorStore)

////////////// Load Schedule slots ///////////////
const scheduleStore = useScheduleStore()
watch(
 () => form.value.appointment_date,
 async (newDate) => {
  if (!newDate || !singleDoctor.value) {
   scheduleStore.clearSchedules()
   return
  }
  loadingSchedule.value = true
  scheduleStore.clearSchedules()
  const doctorId = singleDoctor.value.id // ✅ doctorId from store
  try {
   await scheduleStore.getScheduleStore(doctorId, new Date(newDate))
  } catch (error) {
   console.error('Failed to load schedule:', error)
  } finally {
   // ✅ লোডিং শেষ
   loadingSchedule.value = false
  }
 },
)
const { schedules } = storeToRefs(scheduleStore)
const availableSlots = computed(() => {
 if (!schedules.value) return []
 // শুধু যেগুলো booked নয় সেগুলো filter করতে চাও
 return schedules.value.slots
  .filter((slot) => !slot.is_booked)
  .map((slot) => `${slot.start_time} - ${slot.end_time}`)
})

watch(
 () => form.value.appointment_time,
 (val) => {
  if (!val) {
   form.value.appointment_start_time = ''
   form.value.appointment_end_time = ''
   return
  }
  const [start, end] = val.split(' - ')
  form.value.appointment_start_time = start
  form.value.appointment_end_time = end
 },
)

////////// Appointment submit form ////////////////
const submitLoading = ref(false)
const appointmentStore = useAppointmentStore()
const snackbarStore = useSnackbarStore()

const submitForm = async () => {
 if (!formValid.value) return
 submitLoading.value = true
 try {
  const response = await appointmentStore.createAppointmentStore(form.value)
  if (response?.success) {
   snackbarStore.showMessage('Appointment created successfully!', 'success')
   router.push('/patient/patient-appointment')
  } else {
   snackbarStore.showMessage(response?.message || 'Failed to create appointment!', 'error')
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 } catch (error: any) {
  console.error('Error creating appointment:', error)
  snackbarStore.showMessage(error.response?.data?.message || 'Something went wrong!', 'error')
 } finally {
  submitLoading.value = false
 }
}
</script>

<style scoped>
.specialization_capitalize_text input {
 text-transform: capitalize;
}
.specialization_capitalize_text :deep(input) {
 text-transform: capitalize !important;
}
</style>
