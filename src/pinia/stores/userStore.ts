import { defineStore } from 'pinia'
import { userApi } from '../features/userApi/UserApi'

interface User {
 userId: string
 email: string
 role: string
 status: string
}
interface MyProfile {
 name: string
 phone_number: string
 address: string
 photo: string
 user: User
}

export const useUserStore = defineStore('user', {
 state: (): {
  myProfile: MyProfile | null
  loading: boolean
  error: string | null
 } => ({
  myProfile: null,
  loading: false,
  error: null as string | null,
 }),

 actions: {
  async getMyProfileStore() {
   this.loading = true
   try {
    const data = await userApi.getMyProfile()
    this.myProfile = data
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
