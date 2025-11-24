<template>
 <v-card class="pa-6" color="#1E1B45">
  <v-card-title class="text-h6 text-white mb-4" style="padding-left: 0; font-weight: bold">
   Update Personal Information
  </v-card-title>

  <v-form ref="formRef" v-model="formValid" @submit.prevent="submitForm">
   <v-row>
    <!-- Left -->
    <v-col cols="12" md="6">
     <v-text-field
      v-model="form.name"
      label="Name"
      density="comfortable"
      variant="outlined"
      class="mb-3"
      :rules="[rules.required]"
     />

     <v-text-field
      v-model="form.email"
      label="Email"
      density="comfortable"
      variant="outlined"
      class="mb-3"
      :rules="[rules.required]"
     />

     <v-text-field
      v-model="form.address"
      label="Address"
      density="comfortable"
      variant="outlined"
      class="mb-3"
     />

     <v-text-field
      v-model="form.role"
      label="Role"
      density="comfortable"
      variant="outlined"
      class="mb-3"
      disabled
     />
    </v-col>

    <!-- Right -->
    <v-col cols="12" md="6">
     <v-text-field
      v-model="form.userId"
      label="User ID"
      density="comfortable"
      variant="outlined"
      class="mb-3"
      disabled
     />

     <v-text-field
      v-model="form.phone_number"
      label="Contact"
      density="comfortable"
      variant="outlined"
      class="mb-3"
     />

     <v-text-field
      v-model="form.status"
      label="Status"
      density="comfortable"
      variant="outlined"
      class="mb-3"
      disabled
     />

     <v-text-field
      v-model="form.created_at"
      label="Join Date"
      density="comfortable"
      variant="outlined"
      class="mb-3"
      disabled
     />
    </v-col>
   </v-row>

   <div class="mt-4" style="display: flex; gap: 10px">
    <v-btn class="bg-green" type="submit">Save</v-btn>
    <v-btn class="bg-red" @click="$emit('cancel')">Cancel</v-btn>
   </div>
  </v-form>
 </v-card>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useUserStore } from '@/pinia/stores/userStore'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['saved', 'cancel'])

const rules = {
 required: (v: string) => !!v || 'Required',
}

const userStore = useUserStore()
const { myProfile } = storeToRefs(userStore)

const formRef = ref()
const formValid = ref(false)

const form = reactive({
 name: '',
 email: '',
 address: '',
 role: '',
 phone_number: '',
 status: '',
 userId: '',
 created_at: '',
})

// Load user data into form
watch(
 () => myProfile.value,
 (v) => {
  if (v) {
   form.name = v.name
   form.email = v.user.email
   form.address = v.address
   form.role = v.user.role
   form.phone_number = v.phone_number
   form.status = v.user.status
   form.userId = v.user.userId
   form.created_at = v.user.created_at
  }
 },
 { immediate: true },
)

const submitForm = async () => {
 const isValid = await formRef.value.validate()
 if (!isValid) return

 // await userStore.updateMyProfileStore(form)
 emit('saved')
}
</script>

<style scoped>
.text-white {
 color: white;
}
</style>
