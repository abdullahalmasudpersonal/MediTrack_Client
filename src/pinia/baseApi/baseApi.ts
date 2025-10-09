import axios from 'axios'

const baseApi = axios.create({
 // baseURL: 'http://127.0.0.1:8000/api/', // আপনার Django বা Node.js API URL
 baseURL: 'https://meditrack-backend-tdg6.onrender.com/api/', // আপনার Django বা Node.js API URL
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
