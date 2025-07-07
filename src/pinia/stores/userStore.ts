import { defineStore } from 'pinia'
import { userApi } from '../features/userApi/UserApi'

export const useUserStore = defineStore('user', {
 state: () => ({
  users: [] as unknown[],
  userProfile: null as unknown,
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async getMyProfileStore() {
   this.loading = true
   try {
    const data = await userApi.getMyProfile()
    this.userProfile = data
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Failed to load profile'
   } finally {
    this.loading = false
   }
  },
 },
})
