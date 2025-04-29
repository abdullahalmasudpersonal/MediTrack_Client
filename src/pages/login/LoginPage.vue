<script setup lang="ts">
import theme from '@/theme'
</script>

<template>
 <div class="login" :style="{ backgroundColor: theme.colors.background }">
  <div class="loginDiv">
   <div class="formDiv">
    <h3 style="margin-bottom: 30px">Login</h3>
    <input type="text" placeholder="Email" class="input" />
    <div>
     <input type="password" placeholder="Password" class="input" />
     <br />
     <p
      style="
       font-size: 12px;
       text-align: end;
       margin-top: 5px;
       margin-bottom: -10px;
       color: red;
       cursor: pointer;
      "
     >
      Forget Password
     </p>
    </div>
    <input type="submit" value="Login" />
    <p class="changeAccount">
     Don't have an account <span><RouterLink to="/auth/signup">SignUp</RouterLink></span>
    </p>
   </div>
  </div>
 </div>
</template>

<style scoped>
.login {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background: linear-gradient(140deg, rgb(225, 219, 255) 70%, rgb(184, 205, 255));
 /* background-image: url('@/assets/image/another/backgroud.svg');
 background-size: cover;
 background-position: center; */
}
.loginDiv {
 height: 400px;
 width: 300px;
 display: flex;
 justify-content: center;
 align-items: center;
 box-shadow:
  rgba(0, 0, 0, 0.16) 0px 3px 6px,
  rgba(0, 0, 0, 0.23) 0px 3px 6px;
 border-radius: 5px;
 /* background: rgba(255, 255, 255, 0.1);
 backdrop-filter: blur(10px);
 -webkit-backdrop-filter: blur(10px); */
}
.formDiv {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 20px;
}
.formDiv input {
 height: 35px;
 width: 250px;
 border-radius: 30px;
 padding: 5px 10px;
 outline: none;
 box-shadow:
  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
  rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
/* change account type */
.changeAccount {
 font-size: 13px;
 color: rgb(21, 3, 34);
 cursor: pointer;
}
.changeAccount span {
 color: rgb(41, 11, 173);
 font-weight: 600;
 transition: 0.3s ease-in;
}
.changeAccount span:hover {
 color: rgb(131, 0, 218);
}
</style>
