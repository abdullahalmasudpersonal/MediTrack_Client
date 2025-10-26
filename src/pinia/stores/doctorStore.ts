import { defineStore } from 'pinia'
import { doctorApi } from '../features/doctorApi/DoctorApi'

export interface TUser {
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

export interface TGetDoctor {
 id: string
 user: TUser
 name: string
 phone_number: string
 gender: 'male' | 'female' | 'other'
 birthDate: string | null
 specialization: string
 license_number: string
 education: string
 experience_years: number
 hospital_affiliation: string | null
 availability: Availability | null
 fees: number
 photo: string
 bio: string | null
 address: string
 updated_at: string
}

export interface TCreateDoctor {
 name: string
 email: string
 password: string
 phone_number: string
 gender: string
 birthDate: string | null
 specialization: string
 license_number: string
 education: string
 experience_years: number
 hospital_affiliation: string | null
 availability: Availability | null
 fees: number
 photo: string
 bio: string | null
 address: string
}

export const useDoctorStore = defineStore('doctor', {
 state: (): {
  allDoctor: TGetDoctor[] | null
  singleDoctor: TGetDoctor | null
  doctor: TCreateDoctor | null
  loading: boolean
  error: string | null
 } => ({
  allDoctor: [],
  singleDoctor: null,
  doctor: null,
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async getAllDoctorStore(filters?: { specialization?: string; name?: string }) {
   this.loading = true
   try {
    const data = await doctorApi.getAllDoctor(filters)
    this.allDoctor = data.data
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to load all doctor'
    return err.response?.data
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
    // return err.response?.data
   } finally {
    this.loading = false
   }
  },
  async createDoctorStore(doctorData: TCreateDoctor) {
   this.loading = true
   try {
    const data = await doctorApi.createDoctor(doctorData)
    this.doctor = data
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to create doctor'
    return err.response?.data
   } finally {
    this.loading = false
   }
  },
  async updateDoctorStatusStore(user_id: string, payload: { status: string }) {
   try {
    const data = await doctorApi.updateDoctorStatus(user_id, payload)
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    console.error('Failed to update doctor status:', err)
   } finally {
    this.loading = false
   }
  },
 },
})
