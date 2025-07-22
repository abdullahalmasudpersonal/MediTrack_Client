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
  singleDoctor: DoctorProfile | null
  loading: boolean
  error: string | null
 } => ({
  allDoctor: [],
  singleDoctor: null,
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async getAllDoctorStore(filters?: { specialization?: string; name?: string }) {
   this.loading = true
   try {
    const data = await doctorApi.getAllDoctor(filters)
    this.allDoctor = data
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to load all doctor'
   } finally {
    this.loading = false
   }
  },
  async getSingleDoctorStore(id: string) {
   this.loading = true
   try {
    const data = await doctorApi.getSingleDoctor(id)
    this.singleDoctor = data
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to load doctor profile'
   } finally {
    this.loading = false
   }
  },
 },
})
