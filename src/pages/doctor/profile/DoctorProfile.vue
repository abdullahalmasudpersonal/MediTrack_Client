<template>
 <div>
  <div style="margin-bottom: 30px">
   <div class="doctor-profile-top-part-div1"></div>
   <div class="doctor-profile-top-part-div2">
    <img :src="myProfile?.photo || default_profile_img" />
    <div>
     <p class="doctor-name">{{ myProfile?.name || 'Loading...' }}</p>
     <div class="doctorRoleJoinDate">
      <div style="display: flex; gap: 5px; align-items: center">
       <v-icon size="20">mdi-account-cog</v-icon>
       <small style="font-size: 16px"> Doctor</small>
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
  <div class="doctor-bio">
   <h3 style="margin-bottom: 5px">Bio</h3>
   <p
    style="
     font-size: 16px;
     font-weight: 600;
     background-color: gray;
     padding: 10px;
     border-radius: 5px;
    "
   >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex debitis eligendi earum, fugit
    tenetur laudantium mollitia incidunt, dolores fuga eum in sapiente cumque a! Consequuntur,
    ratione velit! Ut, quibusdam. fugit tenetur laudantium mollitia incidunt, dolores fuga eum in
    sapiente cumque a! Consequuntur, ratione velit! Ut, quibusdam.
   </p>
  </div>
  <!--  -->
  <div class="doctor-profile-data">
   <h3 style="margin-bottom: 5px">About</h3>
   <v-row>
    <v-col cols="12" sm="6">
     <v-text-field
      label="Name"
      :model-value="myProfile?.name"
      variant="underlined"
      readonly
     ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
     <v-text-field
      label="Email"
      :model-value="myProfile?.user?.email"
      variant="underlined"
      readonly
     ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
     <v-text-field
      label="UserId"
      :model-value="myProfile?.user?.userId"
      variant="underlined"
      readonly
     ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
     <v-text-field
      label="Status"
      :model-value="myProfile?.user?.status"
      variant="underlined"
      readonly
     ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
     <v-text-field
      label="Phone"
      :model-value="myProfile?.phone_number"
      variant="underlined"
      readonly
     ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
     <v-text-field
      label="Address"
      :model-value="myProfile?.address"
      variant="underlined"
      readonly
     ></v-text-field>
    </v-col>
   </v-row>
  </div>
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
.doctor-profile-top-part-div1 {
 height: 250px;
 border-radius: 5px 5px 0px 0px;
 /* background: linear-gradient(-45deg, #492586, #3e1e88, #644e8a, #442d6d); */
 background: linear-gradient(-45deg, #673ab7, #512da8, #9575cd, #311b92);
 background-size: 400% 400%;
 animation: gradientShift 20s ease infinite;
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
.doctor-profile-top-part-div2 {
 height: 100px;
 background: linear-gradient(-45deg, #673ab7, #512da8, #9575cd, #311b92);
 animation: gradientShift 20s ease infinite;
 background-size: 400% 400%;
 /* background-blend-mode: screen, overlay; */
 border-radius: 0px 0px 5px 5px;
 padding: 0 10px 15px 25px;
 display: flex;
}
.doctor-profile-top-part-div2 img {
 width: 120px;
 height: 120px;
 border: 5px solid #512da8;
 border-radius: 5px;
 margin-top: -40px;
}
.doctor-name {
 margin: 13px auto 5px 15px;
 font-size: clamp(18px, 2vw, 24px);
 font-weight: 600;
 color: rgb(231, 231, 231);
}
.doctorRoleJoinDate {
 display: flex;
 gap: 20px;
 margin-left: 15px;
 align-items: center;
 color: rgb(175, 175, 175);
 font-weight: 600;
}
@media (max-width: 700px) {
 .doctor-profile-top-part-div1 {
  height: 150px;
 }
 .doctor-profile-top-part-div2 {
  height: 180px;
  padding: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .doctor-name {
  margin: 13px auto;
  text-align: center;
 }
 .doctorRoleJoinDate {
  margin-left: auto;
 }
}
/* doctor-about */
.doctor-bio {
 min-height: 100px;
 max-width: 690px;
 background-color: rgb(59, 59, 94);
 border-radius: 5px;
 padding: 15px;
}
/* doctor-profile-data */
.doctor-profile-data {
 min-height: 200px;
 max-width: 690px;
 background-color: rgb(73, 73, 90);
 border-radius: 5px;
 padding: 10px 15px;
 margin-top: 20px;
}
</style>
