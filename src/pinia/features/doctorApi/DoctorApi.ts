import baseApi from '@/pinia/baseApi/baseApi'
import type { TCreateDoctor } from '@/pinia/stores/doctorStore'

export const doctorApi = {
 getAllDoctor: async (filters?: { specialization?: string; name?: string }) => {
  const res = await baseApi.get('/doctor/all-doctor/', { params: filters })
  return res.data
 },
 getSingleDoctor: async (id: string) => {
  const res = await baseApi.get(`/doctor/single-doctor/${id}/`)
  return res.data
 },
 createDoctor: async (payload: TCreateDoctor) => {
  const res = await baseApi.post(`/user/create_doctor/`, payload)
  return res.data
 },
 updateDoctorStatus: async (user_id: string, status: string) => {
  console.log(user_id, 'user_ids', status, 'stuats datas')
  const res = await baseApi.patch(`/doctor/update-doctor-status/${user_id}/`, status)
  return res.data
 },
}
