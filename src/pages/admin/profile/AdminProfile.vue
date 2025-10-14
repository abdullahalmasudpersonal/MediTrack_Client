<template>
 <div>
  <div style="margin-bottom: 30px">
   <div class="admin-profile-top-part-div1"></div>
   <div class="admin-profile-top-part-div2">
    <img :src="myProfile?.photo || default_profile_img" />
    <div>
     <p class="admin-name">{{ myProfile?.name || 'Loading...' }}</p>
     <div class="adminRoleJoinDate">
      <div style="display: flex; gap: 5px; align-items: center">
       <v-icon size="20">mdi-account-cog</v-icon>
       <small style="font-size: 16px"> Admin</small>
      </div>
      <p>
       <v-icon size="20">mdi-calendar</v-icon>
       <small style="font-size: 16px"> Joined April 2021</small>
      </p>
     </div>
    </div>
   </div>
  </div>
  <!--  -->
  <v-card class="pa-6" color="#002B50">
   <v-card-title class="text-h6 text-white mb-4" style="padding-left: 0; font-weight: bold">
    Personal Information
   </v-card-title>
   <v-row>
    <!-- ✅ Left Column -->
    <v-col cols="12" md="6">
     <v-row class="text-white">
      <v-col cols="6" class="font-weight-bold">Name</v-col>
      <v-col cols="6">{{ myProfile?.name }}</v-col>

      <v-col cols="6" class="font-weight-bold">Email</v-col>
      <v-col cols="6">{{ myProfile?.user?.email }}</v-col>

      <v-col cols="6" class="font-weight-bold">Address</v-col>
      <v-col cols="6">{{ myProfile?.address }}</v-col>

      <v-col cols="6" class="font-weight-bold">Role</v-col>
      <v-col cols="6">{{ myProfile?.user?.role }}</v-col>
     </v-row>
    </v-col>

    <!-- ✅ Right Column -->
    <v-col cols="12" md="6">
     <v-row class="text-white">
      <v-col cols="6" class="font-weight-bold">UserId</v-col>
      <v-col cols="6">{{ myProfile?.user?.userId }}</v-col>

      <v-col cols="6" class="font-weight-bold">Contact</v-col>
      <v-col cols="6">{{ myProfile?.phone_number }}</v-col>

      <v-col cols="6" class="font-weight-bold">Status</v-col>
      <v-col cols="6">{{ myProfile?.user?.status }}</v-col>

      <v-col cols="6" class="font-weight-bold">Join</v-col>
      <v-col cols="6">{{ myProfile?.user?.created_at }}</v-col>
     </v-row>
    </v-col>
   </v-row>
  </v-card>
 </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/pinia/stores/userStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import default_profile_img from '@/assets/image/profile/default-user_withBG.png'

const userStore = useUserStore()
const { myProfile } = storeToRefs(userStore)
onMounted(async () => {
 await userStore.getMyProfileStore()
})
</script>

<style scoped>
.admin-profile-top-part-div1 {
 height: 250px;
 border-radius: 5px 5px 0px 0px;
 /* background: linear-gradient(-45deg, #673ab7, #512da8, #604c83, #311b92); */
 /* background-size: 400% 400%; */
 /* animation: gradientShift 20s ease infinite; */
 background-image: url('../../../assets/image/profile/coverPhoto.jpg');
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
 background-color: #1a237e;
}
@keyframes gradientShift {
 0% {
  background-position: 0% 50%;
 }
 50% {
  background-position: 100% 50%;
 }
 100% {
  background-position: 0% 50%;
 }
}
.admin-profile-top-part-div2 {
 height: 100px;
 background: linear-gradient(-45deg, #442579, #3e1b91, #331d57, #311b92);
 animation: gradientShift 20s ease infinite;
 background-size: 400% 400%;
 border-radius: 0px 0px 5px 5px;
 padding: 0 10px 15px 25px;
 display: flex;
}
.admin-profile-top-part-div2 img {
 width: 120px;
 height: 120px;
 border: 5px solid #512da8;
 border-radius: 5px;
 margin-top: -40px;
}
.admin-name {
 margin: 13px auto 5px 15px;
 font-size: clamp(18px, 2vw, 24px);
 font-weight: 600;
 color: rgb(231, 231, 231);
}
.adminRoleJoinDate {
 display: flex;
 gap: 20px;
 margin-left: 15px;
 align-items: center;
 color: rgb(175, 175, 175);
 font-weight: 600;
}
@media (max-width: 700px) {
 .admin-profile-top-part-div1 {
  height: 150px;
 }
 .admin-profile-top-part-div2 {
  height: 180px;
  padding: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .admin-name {
  margin: 13px auto;
  text-align: center;
 }
 .adminRoleJoinDate {
  margin-left: auto;
 }
}
.v-card {
 border-radius: 12px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
 background-color: #241855 !important;
}

.font-weight-bold {
 color: #a7c7e7;
}
</style>
