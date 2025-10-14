import axios from 'axios'

const baseApi = axios.create({
 baseURL: import.meta.env.VITE_MEDITRACK_SERVER_LINK,
 // withCredentials: true,
 timeout: 10000,
 headers: {
  'Content-Type': 'application/json',
 },
})

// 👉 Interceptors optional (auth token যোগ করার জন্য)
baseApi.interceptors.request.use((config) => {
 const token = localStorage.getItem('access_token')
 if (token) {
  config.headers.Authorization = `${token}`
 }
 return config
})

export default baseApi
