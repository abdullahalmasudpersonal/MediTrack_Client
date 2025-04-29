import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DoctorLayout from '@/layouts/DoctorLayout.vue'
import PatientLayout from '@/layouts/PatientLayout.vue'

const routes = [
 {
  path: '/',
  component: MainLayout,
  children: [
   { path: '', name: 'home', component: () => import('@/pages/home/HomePage.vue') },
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
  ],
 },
 {
  path: '/doctor',
  component: DoctorLayout,
  children: [
   {
    path: '',
    name: 'doctor-dashboard',
    component: () => import('@/pages/doctor/dashboard/DoctorDashboard.vue'),
   },
  ],
 },
 {
  path: '/patient',
  component: PatientLayout,
  children: [
   {
    path: '',
    name: 'patient-dashboard',
    component: () => import('@/pages/patient/dashboard/PatientDashboard.vue'),
   },
  ],
 },
]

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes,
})

export default router
