<template>
 <v-container>
  <v-form v-model="valid" @submit.prevent="handleSubmit" ref="formRef">
   <v-text-field label="Name" v-model="form.name" :rules="[rules.required]" />
   <v-text-field label="Email" v-model="form.email" :rules="[rules.required, rules.email]" />
   <v-text-field
    v-model="form.password"
    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :type="showPassword ? 'text' : 'password'"
    @click:append-inner="showPassword = !showPassword"
    :rules="[rules.required, rules.password]"
    label="Password"
   />

   <v-text-field
    label="Phone Number"
    v-model="form.phone_number"
    :rules="[rules.required, rules.phone]"
   />

   <v-select
    label="Gender"
    v-model="form.gender"
    :items="genderOptions"
    :rules="[rules.required]"
   />

   <v-text-field label="License Number" v-model="form.license_number" :rules="[rules.required]" />

   <v-select
    label="Specialization"
    v-model="form.specialization"
    :items="specializationOptions"
    item-title="title"
    item-value="value"
    :rules="[rules.required]"
   />

   <v-text-field label="Education" v-model="form.education" />
   <v-text-field label="Experience (Years)" type="number" v-model.number="form.experience_years" />
   <v-text-field label="Hospital Affiliation" v-model="form.hospital_affiliation" />

   <v-select
    label="Consultation Type"
    v-model="form.consultation_type"
    :items="consultationTypeOptions"
   />

   <v-text-field label="Fees" type="number" v-model.number="form.fees" />
   <v-textarea label="Bio" v-model="form.bio" />
   <v-text-field label="Address" v-model="form.address" :rules="[rules.required]" />
   <v-date-input label="Birth Date" v-model="form.birthDate" />

   <v-btn type="submit" color="primary" class="mt-4">Create Doctor</v-btn>
  </v-form>
 </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPassword = ref(false)

interface DoctorForm {
 name: string
 email: string
 password: string
 phone_number: string
 gender: string
 birthDate: string | null
 specialization: string
 license_number: string
 education: string
 experience_years: number | null
 hospital_affiliation: string
 consultation_type: string
 fees: number
 bio: string
 address: string
}

const valid = ref(false)
const formRef = ref<HTMLFormElement | null>(null)

const form = ref<DoctorForm>({
 name: '',
 email: '',
 password: '',
 phone_number: '',
 gender: '',
 birthDate: null,
 specialization: '',
 license_number: '',
 education: '',
 experience_years: null,
 hospital_affiliation: '',
 consultation_type: 'offline',
 fees: 0.0,
 bio: '',
 address: '',
})

const genderOptions = [
 { title: 'Male', value: 'male' },
 { title: 'Female', value: 'female' },
]

const specializationOptions = [
 { title: 'Cardiology', value: 'cardiology' },
 { title: 'Dermatology', value: 'dermatology' },
 { title: 'Neurology', value: 'neurology' },
 { title: 'Pediatrics', value: 'pediatrics' },
 { title: 'Orthopedics', value: 'orthopedics' },
 { title: 'Gynecology', value: 'gynecology' },
 { title: 'Psychiatry', value: 'psychiatry' },
 { title: 'General Medicine', value: 'general' },
 { title: 'Surgery', value: 'surgery' },
 { title: 'Radiology', value: 'radiology' },
 { title: 'ENT (Ear, Nose, Throat)', value: 'ent' },
 { title: 'Urology', value: 'urology' },
 { title: 'Oncology', value: 'oncology' },
 { title: 'Ophthalmology', value: 'ophthalmology' },
 { title: 'Anesthesiology', value: 'anesthesiology' },
]
const consultationTypeOptions = ['online', 'offline', 'video']

const rules = {
 required: (v: unknown) => !!v || 'এই ঘরটি আবশ্যক',
 email: (v: string) => /.+@.+\..+/.test(v) || 'সঠিক ইমেইল দিন',
 password: (v: string) => (v && v.length >= 6) || 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে',
 phone: (v: string) =>
  /^(\+8801|01)\d{9}$/.test(v) ||
  "ফোন নম্বর অবশ্যই '+8801xxxxxxxxx' অথবা '01xxxxxxxxx' ফরম্যাটে হতে হবে।",
}

const handleSubmit = async () => {
 if (valid.value) {
  try {
   const response = await fetch(
    'https://meditrack-backend-tdg6.onrender.com/apiuser/create_doctor/',
    {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(form.value),
    },
   )

   if (!response.ok) {
    const err = await response.text()
    throw new Error(err)
   }

   const data = await response.json()
   alert('Doctor created successfully.')
   console.log(data)
   formRef.value?.reset()
  } catch (error) {
   console.error('Error:', error)
   alert('Doctor create failed.')
  }
 }
}
</script>
