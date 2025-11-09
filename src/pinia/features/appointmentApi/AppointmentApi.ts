import baseApi from '@/pinia/baseApi/baseApi'
import type { Appointment } from '@/pinia/stores/appointmentStore'

export const appointmentApi = {
 createAppointment: async (payload: Appointment) => {
  const res = await baseApi.post('/appointment/create-appointment/', payload)
  return res.data
 },
 getAllAppointment: async () => {
  const res = await baseApi.get('/appointment/get-all-appointment/')
  return res.data
 },
}
