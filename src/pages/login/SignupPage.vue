<template>
 <div class="signup">
  <ContinueToHomeBtn />
  <div class="singupDiv">
   <form>
    <div class="signupFormDiv">
     <!-- <div style="display: flex; align-items: center">
      <img src="@/assets/image/logo/meditrack.png" class="logo" alt="logo" />
      <h3 class="signupTitle">&nbsp;SignUp</h3>
     </div> -->
     <h3 class="signupTitle">&nbsp;SignUp</h3>
     <input type="text" placeholder="Full Name" class="input" required />
     <input type="email" placeholder="Email" class="input" required />
     <input type="number" inputmode="numeric" placeholder="Phone" class="input" required />
     <input type="password" placeholder="Password" class="input" required />
     <input class="signupBtn" type="submit" value="SignUp" />
     <p class="changeAccountLogin">
      Alrady have an account
      <router-link style="text-decoration: none" :to="{ name: 'login' }">
       <span> Login </span>
      </router-link>
     </p>
    </div>
   </form>
  </div>
 </div>
</template>

<script setup lang="ts">
import ContinueToHomeBtn from './button/ContinueToHomeBtn.vue'
</script>

<style scoped>
.signup {
 display: flex;
 flex-direction: row;
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
 .signup {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
 }
}
/* ----------- */
.singupDiv {
 height: 400px;
 width: 300px;
 display: flex;
 justify-content: center;
 align-items: center;
 background: rgba(176, 158, 255, 0.178);
 box-shadow:
  rgba(0, 0, 0, 0.16) 0px 3px 6px,
  rgba(0, 0, 0, 0.23) 0px 3px 6px;
 border-radius: 5px;
}
.signupFormDiv {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 20px;
}
.signupFormDiv input {
 height: 35px;
 width: 250px;
 border-radius: 30px;
 padding: 5px 10px;
 outline: none;
 box-shadow:
  rgba(9, 30, 66, 0.25) 0px 1px 1px,
  rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
}
/* Disable Input field type number increase/decrease arrow buttons */
input[type='number'] {
 -moz-appearance: textfield; /* Firefox */
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
 -webkit-appearance: none; /* Chrome, Safari, Edge */
 margin: 0;
}
/* signup Title */
.signupTitle {
 color: rgb(27, 1, 99);
 /* margin-bottom: 10px; */
 font-size: 2rem;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* SignUp Button */
.signupBtn {
 color: rgb(41, 11, 173);
 font-weight: 600;
 background: rgba(176, 158, 255, 0.178);
 transition: 0.2s ease-in;
}
.signupBtn:hover {
 color: rgb(28, 0, 54);
 background: rgba(151, 128, 255, 0.39);
}
/* change account login */
.changeAccountLogin {
 font-size: 13px;
 color: rgb(21, 3, 34);
 cursor: pointer;
}
.changeAccountLogin span {
 color: rgb(41, 11, 173);
 font-weight: 800;
 transition: 0.2s ease-in;
}
.changeAccountLogin span:hover {
 color: rgb(131, 0, 218);
}
</style>
