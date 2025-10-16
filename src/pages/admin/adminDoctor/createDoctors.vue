<template>
 <v-form ref="formRef" v-model="valid">
  <!-- ✅ Success Toast -->
  <v-snackbar v-model="showSuccess" color="green" timeout="3000" location="top end">
   {{ successMessage }}
  </v-snackbar>

  <!-- ❌ Error Toast -->
  <v-snackbar v-model="showError" color="red" timeout="3000" location="top end">
   {{ errorMessage }}
  </v-snackbar>
 </v-form>

 <v-card class="pa-6" elevation="2">
  <v-card-title class="text-h6 mb-4">Create Doctor</v-card-title>
  <v-form v-model="valid" @submit.prevent="handleSubmit" ref="formRef">
   <v-row dense>
    <!-- Left Column -->
    <v-col cols="12" md="6">
     <v-text-field label="Name" v-model="form.name" :rules="[rules.required]" />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field label="Email" v-model="form.email" :rules="[rules.required, rules.email]" />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field
      v-model="form.password"
      :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append-inner="showPassword = !showPassword"
      :rules="[rules.required, rules.password]"
      label="Password"
     />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field
      label="Phone Number"
      v-model="form.phone_number"
      :rules="[rules.required, rules.phone]"
     />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field
      label="Birth Date"
      v-model="form.birthDate"
      type="date"
      :rules="[rules.required]"
     />
    </v-col>

    <v-col cols="12" md="6">
     <v-select
      label="Gender"
      v-model="form.gender"
      :items="genderOptions"
      :rules="[rules.required]"
     />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field label="License Number" v-model="form.license_number" :rules="[rules.required]" />
    </v-col>

    <v-col cols="12" md="6">
     <v-select
      label="Specialization"
      v-model="form.specialization"
      :items="specializationOptions"
      item-title="title"
      item-value="value"
      :rules="[rules.required]"
     />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field label="Education" v-model="form.education" />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field
      label="Experience (Years)"
      type="number"
      v-model.number="form.experience_years"
     />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field label="Hospital Affiliation" v-model="form.hospital_affiliation" />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field label="Fees" type="number" v-model.number="form.fees" />
    </v-col>

    <v-col cols="12" md="6">
     <v-text-field label="Address" v-model="form.address" :rules="[rules.required]" />
    </v-col>

    <v-col cols="12" md="6">
     <v-textarea label="Bio" v-model="form.bio" rows="3" />
    </v-col>

    <v-col cols="12" md="6">
     <v-date-input label="Birth Date" v-model="form.birthDate" />
    </v-col>

    <v-col cols="12" class="text-center mt-4">
     <v-btn type="submit" color="primary" size="large" :disabled="loading">Create Doctor</v-btn>
    </v-col>
   </v-row>
  </v-form>
 </v-card>
</template>

<script lang="ts" setup>
import { useDoctorStore, type TCreateDoctor } from '@/pinia/stores/doctorStore'
import { ref } from 'vue'

const showPassword = ref(false)
const loading = ref(false)
const doctorStore = useDoctorStore()
const showSuccess = ref(false)
const showError = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const valid = ref(false)
const formRef = ref<HTMLFormElement | null>(null)

const form = ref<TCreateDoctor>({
 name: '',
 email: '',
 password: '',
 phone_number: '',
 gender: '',
 birthDate: '',
 specialization: '',
 license_number: '',
 education: '',
 experience_years: 0,
 hospital_affiliation: '',
 availability: {
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
  sunday: '',
 },
 fees: 0,
 bio: '',
 address: '',
 photo: '',
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
  loading.value = true
  try {
   const res = await doctorStore.createDoctorStore(form.value)
   if (res.success) {
    successMessage.value = res.message || 'Doctor created successfully!'
    showSuccess.value = true
    formRef.value?.reset()
   } else {
    if (res.error) {
     let errorObj = res.error
     if (typeof res.error === 'string') {
      try {
       const jsonString = res.error
        .replace(/'/g, '"')
        .replace(/ErrorDetail\(string=/g, '')
        .replace(/, code=.*?\)/g, '')
       errorObj = JSON.parse(jsonString)
      } catch (e) {
       console.warn('Error parsing response.error:', e)
      }
     }
     if (errorObj && typeof errorObj === 'object') {
      const firstErrorField = Object.keys(errorObj)[0]
      let firstErrorMessage = errorObj[firstErrorField]?.[0]
      if (firstErrorMessage) {
       firstErrorMessage = firstErrorMessage.charAt(0).toUpperCase() + firstErrorMessage.slice(1)
       errorMessage.value = firstErrorMessage
      } else {
       errorMessage.value = res.message || 'Something went wrong!'
      }
     } else {
      errorMessage.value = res.message || 'Something went wrong!'
     }
     showError.value = true
    }
   }
  } catch (error) {
   console.error('Error:', error)
   showError.value = true
  } finally {
   loading.value = false
  }
 }
}
</script>

<style scoped>
.v-card {
 border-radius: 10px;
}
</style>
