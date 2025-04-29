<template>
 <div class="header">
  <router-link to="/" style="text-decoration: none">
   <div style="display: flex; align-items: center">
    <img src="../../assets/image/logo/meditrack.png" class="logo" alt="logo" />
    <p
     style="
      font-weight: 700;
      font-size: 24px;
      /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
      margin: 0;
     "
    >
     <!-- &nbsp;  -->
     MediTrack
    </p>
   </div>
  </router-link>
  <div class="headerMenu">
   <ul>
    <li><router-link style="text-decoration: none" to="/services">Services</router-link></li>
    <li><router-link style="text-decoration: none" to="/about">About</router-link></li>
    <li><router-link style="text-decoration: none" to="/blog">Blog</router-link></li>
    <li><router-link style="text-decoration: none" to="/contactus">Contact Us</router-link></li>
   </ul>
  </div>
  <div class="headerMenu">
   <ul>
    <li><router-link style="text-decoration: none" :to="{ name: 'login' }">Login</router-link></li>
   </ul>
  </div>
 </div>
</template>

<style>
.header {
 height: 70px;
 background: rgb(224, 224, 224);
 padding: 10px;
 display: flex;
 align-items: center;
 justify-content: space-around;
}
.logo {
 height: 50px;
 width: 50px;
}
.headerMenu ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
}
.headerMenu ul li {
 padding: 5px 15px;
 font-weight: 600;
 /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
}
</style>
