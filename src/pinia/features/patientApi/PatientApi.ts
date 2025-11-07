import baseApi from '@/pinia/baseApi/baseApi'

export const patientApi = {
 getAllPatient: async () => {
  const res = await baseApi.get('/patient/all-patient/')
  return res
 },
}
