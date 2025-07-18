import baseApi from '@/pinia/baseApi/baseApi'

export const doctorApi = {
 getAllDoctor: async () => {
  const res = await baseApi.get('/doctor/all-doctor/')
  return res.data
 },
}
