import baseApi from '@/pinia/baseApi/baseApi'

export const userApi = {
 getAllUsers: async () => {
  const res = await baseApi.get('/user/')
  return res.data
 },

 getMyProfile: async () => {
  const res = await baseApi.get('/user/my-profile-data/')
  return res.data
 },
}
