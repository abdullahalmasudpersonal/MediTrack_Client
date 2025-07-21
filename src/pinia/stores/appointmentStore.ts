import { defineStore } from 'pinia'
import { appointmentApi } from '../features/appointmentApi/AppointmentApi'

export interface Appointment {
 patient_name: string
 email: string
 gender: string
 phone_number: string
 doctor: string
 specialization: string
 consultation_type: string
 notes: string
 appointment_date: string
 appointment_time: string
}
export const useAppointmentStore = defineStore('appointment', {
 state: (): {
  appointment: Appointment | null
  loading: boolean
  error: string | null
 } => ({
  appointment: null,
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async createAppointmentStore(formData: Appointment) {
   this.loading = true
   try {
    const data = await appointmentApi.createAppointment(formData)
    this.appointment = data
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || "'Failed to create appointment'"
   } finally {
    this.loading = false
   }
  },
 },
})
