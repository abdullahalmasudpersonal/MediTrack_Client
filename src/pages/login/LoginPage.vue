<script setup lang="ts">
import ContinueToHomeBtn from './button/ContinueToHomeBtn.vue'
</script>

<template>
 <div class="login">
  <ContinueToHomeBtn />
  <div class="loginDiv">
   <form>
    <div class="loginFormDiv">
     <!-- <div style="display: flex; align-items: center; margin-bottom: 10px">
      <img src="@/assets/image/logo/meditrack.png" class="logo" alt="logo" />
      <h3 class="loginTitle">&nbsp;Login</h3>
     </div> -->
     <h3 class="loginTitle">&nbsp;Login</h3>
     <input type="email" placeholder="Email" class="input" required />
     <div>
      <input type="password" placeholder="Password" class="input" required />
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
