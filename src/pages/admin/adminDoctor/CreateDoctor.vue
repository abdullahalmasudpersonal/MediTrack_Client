<template>
 <v-container>
  <v-card class="pa-5" max-width="800" elevation="3">
   <v-card-title class="text-h5 font-weight-bold">Doctor Registration</v-card-title>
   <v-card-text>
    <v-form v-model="valid" @submit.prevent="handleSubmit">
     <v-row dense>
      <v-col cols="12" md="6">
       <v-text-field label="Full Name" v-model="form.name" :rules="[rules.required]" />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="Email" v-model="form.email" :rules="[rules.required, rules.email]" />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="Phone Number" v-model="form.phone" :rules="[rules.required]" />
      </v-col>

      <v-col cols="12" md="6">
       <v-select
        label="Gender"
        v-model="form.gender"
        :items="['male', 'female', 'other']"
        :rules="[rules.required]"
       />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field
        label="Password"
        v-model="form.password"
        type="password"
        :rules="[rules.required]"
       />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="Education" v-model="form.education" />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="Specialization" v-model="form.specialization" />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="Years of Experience" v-model="form.experience_years" type="number" />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="Date of Birth" v-model="form.date_of_birth" type="date" />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="License Number" v-model="form.license_number" />
      </v-col>

      <v-col cols="12" md="6">
       <v-text-field label="Fees (৳)" v-model="form.fees" prefix="৳" type="number" />
      </v-col>

      <v-col cols="12">
       <v-text-field label="Address" v-model="form.address" />
      </v-col>

      <!-- Availability (simplified) -->
      <v-col cols="12" md="4" v-for="(time, day) in form.availability" :key="day">
       <v-text-field :label="`Availability (${day})`" v-model="form.availability[day]" />
      </v-col>

      <v-col cols="12">
       <v-btn type="submit" color="primary" :disabled="!valid">Submit</v-btn>
      </v-col>
     </v-row>
    </v-form>
   </v-card-text>
  </v-card>
 </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const valid = ref(false)

const form = reactive({
 name: '',
 email: '',
 password: '',
 phone: '',
 gender: '',
 date_of_birth: '',
 education: '',
 experience_years: '',
 specialization: '',
 license_number: '',
 address: '',
 fees: '',
 availability: {
  monday: '',
  wednesday: '',
  friday: '',
 },
})

const rules = {
 required: (v: unknown) => !!v || 'This field is required',
 email: (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
}

function handleSubmit() {
 if (valid.value) {
  console.log('Form Submitted:', form)
  // API call here
 }
}
</script>
