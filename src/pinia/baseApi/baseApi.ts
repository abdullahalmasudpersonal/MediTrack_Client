import axios from 'axios'

const baseApi = axios.create({
 baseURL: 'https://meditrack-backend-tdg6.onrender.com/api/', // আপনার Django বা Node.js API URL
 timeout: 10000,
 headers: {
  'Content-Type': 'application/json',
 },
})

// 👉 Interceptors optional (auth token যোগ করার জন্য)
baseApi.interceptors.request.use((config) => {
 const token = localStorage.getItem('access_token')
 if (token) {
  config.headers.Authorization = `Bearer ${token}`
 }
 return config
})

export default baseApi
