import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DoctorLayout from '@/layouts/DoctorLayout.vue'
import PatientLayout from '@/layouts/PatientLayout.vue'
import { jwtDecode } from 'jwt-decode'
// import jwtDecode from 'jwt-decode'

const routes = [
 {
  path: '/',
  component: MainLayout,
  children: [
   { path: '', name: 'home', component: () => import('@/pages/home/HomePage.vue') },
   {
    path: 'doctor-list',
    name: 'doctorlist',
    component: () => import('@/pages/doctorList/DoctorList.vue'),
   },
   {
    path: 'services',
    name: 'services',
    component: () => import('@/pages/ourServices/ServicesPage.vue'),
   },
   { path: 'about', name: 'about', component: () => import('@/pages/about/AboutPage.vue') },
   { path: 'blog', name: 'blog', component: () => import('@/pages/blog/BlogPage.vue') },
   {
    path: 'contactus',
    name: 'contactus',
    component: () => import('@/pages/contactUs/ContactUsPage.vue'),
   },
  ],
 },
 {
  path: '/auth',
  component: AuthLayout,
  children: [
   { path: 'login', name: 'login', component: () => import('@/pages/login/LoginPage.vue') },
   {
    path: 'signup',
    name: 'signup',
    component: () => import('@/pages/login/SignupPage.vue'),
   },
  ],
 },
 {
  path: '/admin',
  component: AdminLayout,
  meta: { requiresAuth: true, role: 'admin' },
  children: [
   {
    path: '',
    name: 'admin-dashboard',
    component: () => import('@/pages/admin/dashboard/AdminDashboard.vue'),
   },
   {
    path: 'users',
    name: 'admin-users',
    component: () => import('@/pages/admin/users/AdminUsers.vue'),
   },
   {
    path: 'doctor-list',
    name: 'doctor-list',
    component: () => import('@/pages/admin/adminDoctor/DoctorList.vue'),
   },
   {
    path: 'create-doctor',
    name: 'create-doctor',
    component: () => import('@/pages/admin/adminDoctor/CreateDoctor.vue'),
   },
   {
    path: 'patient-list',
    name: 'patient-list',
    component: () => import('@/pages/admin/adminPatient/PatientList.vue'),
   },
   {
    path: 'admin-profile',
    name: 'admin-profile',
    component: () => import('@/pages/admin/profile/AdminProfile.vue'),
   },
  ],
 },
 {
  path: '/doctor',
  component: DoctorLayout,
  meta: { requiresAuth: true, role: 'doctor' },
  children: [
   {
    path: '',
    name: 'doctor-dashboard',
    component: () => import('@/pages/doctor/dashboard/DoctorDashboard.vue'),
   },
   {
    path: 'doctor-appointment',
    name: 'doctor-appointment',
    component: () => import('@/pages/doctor/doctorAppointment/DoctorAppointment.vue'),
   },
   {
    path: 'doctor-patient',
    name: 'doctor-patient',
    component: () => import('@/pages/doctor/doctorPatient/DoctorPatient.vue'),
   },
   {
    path: 'doctor-prescription',
    name: 'doctor-prescription',
    component: () => import('@/pages/doctor/doctorPrescription/DoctorPrescription.vue'),
   },
   {
    path: 'doctor-profile',
    name: 'doctor-profile',
    component: () => import('@/pages/doctor/profile/DoctorProfile.vue'),
   },
  ],
 },
 {
  path: '/patient',
  component: PatientLayout,
  meta: { requiresAuth: true, role: 'patient' },
  children: [
   {
    path: '',
    name: 'patient-dashboard',
    component: () => import('@/pages/patient/dashboard/PatientDashboard.vue'),
   },
   {
    path: 'patient-profile',
    name: 'patient-profile',
    component: () => import('@/pages/patient/profile/PatientProfile.vue'),
   },
  ],
 },
]

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes,
})

interface MyJwtPayload {
 user_id: string
 email: string
 role: string
 exp: number
 iat: number
}

// const user = JSON.parse(localStorage.getItem('user') || '{}')
// 🔐 Navigation Guard
router.beforeEach((to, from, next) => {
 const token = localStorage.getItem('access_token')
 const user = token ? jwtDecode<MyJwtPayload>(token) : null

 if (to.meta.requiresAuth) {
  if (!token) {
   next('/auth/login')
  } else if (to.meta.role && to.meta.role !== user?.role) {
   next('/auth/login') // অথবা এক্সেস ডিনাই পেইজ
  } else {
   next()
  }
 } else {
  next()
 }
})

export default router
