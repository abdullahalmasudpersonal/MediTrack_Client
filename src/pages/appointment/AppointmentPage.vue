<template>
 <v-container class="py-16">
  <v-row justify="center">
   <v-col cols="12" md="10" lg="8">
    <v-card elevation="4" class="pa-4 rounded">
     <v-card-title class="text-h6 font-weight-bold">Create Appointment</v-card-title>
     <v-card-text>
      <v-form v-model="formValid" @submit.prevent="submitForm">
       <v-row dense>
        <v-col cols="12" md="6">
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
        <v-col cols="12" md="6" v-if="singleDoctor">
         <v-text-field
          v-model="doctorName"
          disabled
          label="Doctor"
          :rules="[rules.required]"
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.specialization"
          disabled
          label="Specialization"
          :rules="[rules.required]"
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
         <v-text-field
          v-model="form.appointment_time"
          label="Time"
          type="time"
          :rules="[rules.required]"
          dense
         />
        </v-col>
        <v-col cols="12">
         <v-textarea
          v-model="form.notes"
          label="Notes"
          rows="2"
          maxlength="160"
          clearable
          auto-grow
         />
        </v-col>
       </v-row>
       <v-btn type="submit" color="primary" block class="mt-4"> Submit </v-btn>
      </v-form>
     </v-card-text>
    </v-card>
   </v-col>
  </v-row>
 </v-container>
</template>

<script setup lang="ts">
import { useAppointmentStore } from '@/pinia/stores/appointmentStore'
import { useDoctorStore } from '@/pinia/stores/doctorStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const genderOptions = [
 { title: 'Male', value: 'male' },
 { title: 'Female', value: 'female' },
]
const consultationOptions: string[] = ['online', 'offline', 'video']
const rules = {
 required: (v: string) => !!v || 'This field is required',
 email: (v: string) => /.+@.+\..+/.test(v) || 'Invalid email',
 phone: (v: string) => /^((\+8801|01)\d{9})$/.test(v) || 'Invalid Bangladeshi number',
}
const formValid = ref(false)

// interface FormData {
//  patient_name: string
//  email: string
//  gender: string
//  phone_number: string
//  specialization: string
//  consultation_type: string
//  status: string
//  payment_status: string
//  notes: string
//  appointment_date: string
//  appointment_time: string
//  doctor: string
// }

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
})

/////////// Load doctor data ///////////
const doctorName = ref('')
const doctorStore = useDoctorStore()
const { singleDoctor } = storeToRefs(doctorStore)
onMounted(async () => {
 const doctorId = route.params.id as string
 await doctorStore.getSingleDoctorStore(doctorId)
 if (singleDoctor.value) {
  doctorName.value = singleDoctor.value.name
  form.value.doctor = singleDoctor.value.user.id
  form.value.specialization = singleDoctor.value.specialization
 }
})

////////// Appointment submit form ////////////////
const appointmentStore = useAppointmentStore()
// const { appointment, loading, error } = storeToRefs(appointmentStore)

const submitForm = async () => {
 if (!formValid.value) return
 console.log('Submitting form:', form.value)
 const response = await appointmentStore.createAppointmentStore(form.value)
 console.log('Appointment Created:', response)
}
</script>

<style scoped></style>
