<script setup lang="ts">
import ContinueToHomeBtn from './button/ContinueToHomeBtn.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('abdullah@gmail.com')
const password = ref('123456')
const router = useRouter()

const handleLogin = async () => {
 try {
  const response = await axios.post(`${import.meta.env.VITE_MEDITRACK_SERVER_LINK}/auth/login/`, {
   email: email.value,
   password: password.value,
  })
  const { access, refresh } = response?.data?.tokens || {} // adjust if nested under 'token'
  const user = response?.data?.user
  console.log(response, 'response')

  // Save tokens in localStorage (or cookie if needed)
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('access_token', access)
  localStorage.setItem('refresh_token', refresh)

  // ✅ Role অনুযায়ী রাউটিং
  if (user.role === 'admin') {
   router.push('/admin')
  } else if (user.role === 'doctor') {
   router.push('/doctor')
  } else if (user.role === 'patient') {
   router.push('/patient')
  } else {
   router.push('/login')
  }
 } catch (error) {
  console.log('error', error)
  // if (axios.isAxiosError(error)) {
  //  alert('Login failed: ' + (error.response?.data?.error || 'Unknown error'))
  // } else {
  //  alert('An unexpected error occurred')
  // }
 }
}
</script>

<template>
 <div class="login">
  <ContinueToHomeBtn />
  <div class="loginDiv">
   <form @submit.prevent="handleLogin">
    <div class="loginFormDiv">
     <h3 class="loginTitle">&nbsp;Login</h3>
     <input v-model="email" type="email" placeholder="Email" class="input" required />
     <div>
      <input v-model="password" type="password" placeholder="Password" class="input" required />
      <br />
      <p class="resetPassword" style="">Forget Password</p>
     </div>
     <input class="loginBtn" type="submit" value="Login" />
     <p class="changeAccount">
      Don't have an account
      <router-link style="text-decoration: none" :to="{ name: 'signup' }">
       <span> SignUp </span>
      </router-link>
     </p>
    </div>
   </form>
  </div>
 </div>
</template>

<style scoped>
.login {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;
 height: 100vh;
 background: linear-gradient(140deg, rgb(220, 212, 255) 70%, rgba(117, 119, 255, 0.527));
 background-image: url('@/assets/image/another/backgroud.svg');
 background-size: cover;
 background-position: center;
}
@media (max-width: 800px) {
 .login {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
 }
}
/* --------------------- */
.loginDiv {
 height: 350px;
 width: 300px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 background: rgba(176, 158, 255, 0.178);
 box-shadow:
  rgba(0, 0, 0, 0.16) 0px 3px 6px,
  rgba(0, 0, 0, 0.23) 0px 3px 6px;
 border-radius: 5px;
}
.loginFormDiv {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 20px;
}
.loginFormDiv input {
 height: 35px;
 width: 250px;
 border-radius: 30px;
 padding: 5px 10px;
 outline: none;
 box-shadow:
  rgba(9, 30, 66, 0.25) 0px 1px 1px,
  rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
}
/* Login title */
.loginTitle {
 color: rgb(27, 1, 99);
 /* margin-bottom: 10px; */
 font-size: 2rem;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* reset password  */
.resetPassword {
 font-size: 12px;
 text-align: end;
 margin-top: 5px;
 margin-bottom: -10px;
 color: rgb(41, 11, 173);
 cursor: pointer;
 transition: 0.2s ease-in;
}
.resetPassword:hover {
 color: rgb(255, 0, 0);
}
/* login button */
.loginBtn {
 color: rgb(41, 11, 173);
 font-weight: 600;
 background: rgba(176, 158, 255, 0.178);
 transition: 0.2s ease-in;
}
.loginBtn:hover {
 color: rgb(28, 0, 54);
 background: rgba(151, 128, 255, 0.39);
}
/* change account type */
.changeAccount {
 font-size: 13px;
 color: rgb(21, 3, 34);
 cursor: pointer;
}
.changeAccount span {
 color: rgb(41, 11, 173);
 font-weight: 800;
 transition: 0.2s ease-in;
}
.changeAccount span:hover {
 color: rgb(131, 0, 218);
}
</style>
