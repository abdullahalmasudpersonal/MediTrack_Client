import { defineStore } from 'pinia'
import baseApi from '../baseApi/baseApi'

export const useAuthStore = defineStore('auth', {
 state: () => ({
  user: null,
  accessToken: localStorage.getItem('access_token') || null,
  refreshToken: localStorage.getItem('refresh_token') || null,
  isLoggedIn: !!localStorage.getItem('access_token'),
  error: null,
  loading: false,
 }),

 actions: {
  async login(payload: { email: string; password: string }) {
   this.loading = true
   this.error = null

   try {
    const res = await baseApi.post('auth/login/', payload)
    this.user = res.data.user
    this.accessToken = res.data.tokens.access
    this.refreshToken = res.data.tokens.refresh
    this.isLoggedIn = true

    localStorage.setItem('access_token', res.data.tokens.access)
    localStorage.setItem('refresh_token', res.data.tokens.refresh)
    localStorage.setItem('user', JSON.stringify(res.data.user))
    return res
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (err: any) {
    this.error = err.response?.data?.message || 'Login failedd'
   } finally {
    this.loading = false
   }
  },
  logout() {
   this.user = null
   this.accessToken = null
   this.refreshToken = null
   this.isLoggedIn = false

   localStorage.removeItem('access_token')
   localStorage.removeItem('refresh_token')
  },
 },
})
