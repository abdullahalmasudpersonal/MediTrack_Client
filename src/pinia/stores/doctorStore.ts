import { defineStore } from 'pinia'
import { doctorApi } from '../features/doctorApi/DoctorApi'

interface User {
 id: string
 userId: string
 email: string
 role: 'doctor' | 'admin' | 'patient'
 status: 'active' | 'inactive'
 last_login: string | null
 created_at: string
}

interface Availability {
 [day: string]: string
}

interface DoctorProfile {
 id: string
 user: User
 name: string
 phone_number: string
 gender: 'male' | 'female' | 'other'
 birthDate: string | null
 specialization: string
 license_number: string
 education: string
 experience_years: number
 hospital_affiliation: string | null
 availability: Availability
 consultation_type: 'online' | 'offline' | 'both'
 fees: string
 photo: string
 bio: string | null
 address: string
 updated_at: string
}

export const useDoctorStore = defineStore('doctor', {
 state: (): {
  allDoctor: DoctorProfile[] | null
  loading: boolean
  error: string | null
 } => ({
  allDoctor: [],
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async getAllDoctorStore() {
   this.loading = true
   try {
    const data = await doctorApi.getAllDoctor()
    this.allDoctor = data
    console.log(data, 'doctordata')
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to load all doctor'
   }
  },
 },
})
