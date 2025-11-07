import type { TGetPatient } from '@/types/patient.types'
import { defineStore } from 'pinia'
import { patientApi } from '../features/patientApi/PatientApi'

export const usePatientStore = defineStore('patient', {
 state: (): {
  allPatient: TGetPatient[] | null
  loading: boolean
  error: string | null
 } => ({
  allPatient: [],
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async getAllPatient() {
   this.loading = true
   try {
    const data = await patientApi.getAllPatient()
    this.allPatient = data.data
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to load all doctor'
    return err.response?.data
   } finally {
    this.loading = false
   }
  },
 },
})
