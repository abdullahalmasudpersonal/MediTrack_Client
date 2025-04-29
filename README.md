# testing_porject

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### vue boilarplate template

vbase-3-ts-setup

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
{
path: '/',
component: MainLayout,
// meta: { layout: 'main' },
children: [
{ path: '', name: 'home', component: () => import('@/pages/home/HomePage.vue') },
{ path: 'about', name: 'about', component: () => import('@/pages/about/AboutPage.vue') },
],
},
{
path: '/auth',
component: AuthLayout,
meta: { layout: 'auth' },
children: [
{ path: 'login', name: 'login', component: () => import('@/pages/login/LoginPage.vue') },
{ path: 'register', name: 'register', component: () => import('@/pages/login/SignupPage.vue') },
],
},
{
path: '/admin',
component: AdminLayout,
meta: { layout: 'admin' },
// children: [
// {
// path: '',
// name: 'admin-dashboard',
// component: () => import('@/pages/admin/dashboard/AdminDashboard.vue'),
// },
// {
// path: 'users',
// name: 'admin-users',
// component: () => import('@/pages/admin/users/AdminUsers.vue'),
// },
// ],
},
{
path: '/doctor',
component: DoctorLayout,
meta: { layout: 'doctor' },
// children: [
// {
// path: '',
// name: 'doctor-dashboard',
// component: () => import('@/pages/doctor/dashboard/DoctorDashboard.vue'),
// },
// ],
},
{
path: '/patient',
component: PatientLayout,
meta: { layout: 'patient' },
// children: [
// {
// path: '',
// name: 'patient-dashboard',
// component: () => import('@/pages/patient/dashboard/PatientDashboard.vue'),
// },
// ],
},
],
})
