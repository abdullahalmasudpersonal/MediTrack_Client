<!-- <template>
 <v-container class="py-16" fluid>
  <v-row justify="center">
   <v-col cols="12" md="10" lg="8">
    <v-card elevation="4" class="pa-4 rounded">
     <v-card-title class="text-h6 font-weight-bold">Create Appointment</v-card-title>
     <v-card-text>
      <v-form ref="form" v-model="formValid" @submit.prevent="submitForm">
       <v-row dense>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.patient_name"
          label="Patient Name"
          :rules="[rules.required]"
          outlined
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.email"
          label="Email"
          :rules="[rules.required, rules.email]"
          outlined
          dense
         />
        </v-col>

        <v-col cols="12" md="6">
         <v-select
          v-model="form.gender"
          label="Gender"
          :items="genderOptions"
          :rules="[rules.required]"
          outlined
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.phone_number"
          label="Phone Number"
          :rules="[rules.required, rules.phone]"
          outlined
          dense
         />
        </v-col>

        <v-col cols="12" md="6">
         <v-select
          v-model="form.specialization"
          label="Specialization"
          :items="specializationOptions"
          :rules="[rules.required]"
          outlined
          dense
          disabled
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
         <v-select v-model="form.status" label="Status" :items="statusOptions" outlined dense />
        </v-col>
        <v-col cols="12" md="6">
         <v-select
          v-model="form.payment_status"
          label="Payment Status"
          :items="paymentOptions"
          outlined
          dense
         />
        </v-col>

        <v-col cols="12" md="6">
         <v-select
          v-model="form.doctor"
          label="Doctor"
          :items="doctorOptions"
          item-title="name"
          item-value="id"
          outlined
          dense
          disabled
         />
        </v-col>

        <v-col cols="12">
         <v-textarea v-model="form.notes" label="Notes" outlined rows="2" auto-grow />
        </v-col>

        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.appointment_date"
          label="Date"
          type="date"
          :rules="[rules.required]"
          outlined
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.appointment_time"
          label="Time"
          type="time"
          :rules="[rules.required]"
          outlined
          dense
         />
        </v-col>
       </v-row>
       <v-btn type="submit" color="primary" block class="mt-4" :disabled="!formValid">
        Submit
       </v-btn>
      </v-form>
     </v-card-text>
    </v-card>
   </v-col>
  </v-row>
 </v-container>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'

interface DoctorOption {
 id: string
 name: string
}

interface FormData {
 patient_name: string
 email: string
 gender: string
 phone_number: string
 specialization: string
 consultation_type: string
 status: string
 payment_status: string
 notes: string
 appointment_date: string
 appointment_time: string
 doctor: string
}

const formValid = ref(false)

const form: Ref<FormData> = ref({
 patient_name: '',
 email: '',
 gender: '',
 phone_number: '',
 specialization: '',
 consultation_type: 'offline',
 status: 'pending',
 payment_status: 'unpaid',
 notes: '',
 appointment_date: '',
 appointment_time: '',
 doctor: '',
})

const rules = {
 required: (v: string) => !!v || 'This field is required',
 email: (v: string) => /.+@.+\..+/.test(v) || 'Invalid email',
 phone: (v: string) => /^((\+8801|01)\d{9})$/.test(v) || 'Invalid Bangladeshi number',
}

const genderOptions = [
 { title: 'Male', value: 'male' },
 { title: 'Female', value: 'female' },
]

const specializationOptions: string[] = [
 'cardiology',
 'dermatology',
 'neurology',
 'pediatrics',
 'orthopedics',
 'gynecology',
 'psychiatry',
 'general',
 'surgery',
 'radiology',
 'ent',
 'urology',
 'oncology',
 'ophthalmology',
 'anesthesiology',
]

const consultationOptions: string[] = ['online', 'offline', 'video']
const statusOptions: string[] = ['pending', 'confirmed', 'cancelled', 'completed']
const paymentOptions: string[] = ['unpaid', 'paid', 'refunded']

const doctorOptions: DoctorOption[] = [
 { id: '1', name: 'Dr. Hasan' },
 { id: '2', name: 'Dr. Amina' },
]

const submitForm = () => {
 if (!formValid.value) return
 console.log('Submitting form:', form.value)
 // এখানে API রিকোয়েস্ট পাঠানো যাবে (e.g., axios.post)
}
</script>

<style scoped>
.v-card-title {
 border-bottom: 1px solid #eee;
 margin-bottom: 1rem;
}
</style> -->
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
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.doctor"
          label="Doctor"
          item-title="name"
          :rules="[rules.required]"
          dense
         />
        </v-col>
        <v-col cols="12" md="6">
         <v-text-field
          v-model="form.specialization"
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
// import type { Ref } from 'vue'
import { useAppointmentStore } from '@/pinia/stores/appointmentStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

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
// const form: Ref<FormData> = ref({
//  patient_name: '',
//  email: '',
//  gender: '',
//  phone_number: '',
//  specialization: '',
//  consultation_type: 'offline',
//  status: 'pending',
//  payment_status: 'unpaid',
//  notes: '',
//  appointment_date: '',
//  appointment_time: '',
//  doctor: '',
// })

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
const appointmentStore = useAppointmentStore()
// const { appointment, loading, error } = storeToRefs(appointmentStore)

const submitForm = async () => {
 if (!formValid.value) return
 console.log('Submitting form:', form.value)
 const response = await appointmentStore.createAppointmentStore(form.value)
 console.log('Appointment Created:', response)
 // এখানে API রিকোয়েস্ট পাঠানো যাবে (e.g., axios.post)
}
</script>

<style scoped></style>
