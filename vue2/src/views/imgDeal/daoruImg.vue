<!--
 * @Author: your name
 * @Date: 2020-10-29 11:08:39
 * @LastEditTime: 2021-07-29 16:53:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\imgDeal\daoruImg.vue
-->
<template>
  <div>
    <div>图片</div>
    <img :src="addJNImgBaseUrl('agree.png')" alt="logo" class="logo-icon" />
    <img :src="imgSrc + 'agree.png'" alt="logo" class="logo-icon" />
    <img :src="$imgSrc + 'agree.png'" alt="logo" class="logo-icon" />
    <img src="@/assets/img/agree.png" class="back" alt />
    <img src="http://192.168.52.151:7770/agree.png" class="back" alt />
    <img :src="testSrc + 'agree.png'" alt="logo" class="logo-icon" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      imgSrc: "http://192.168.52.151:7770/",
    };
  },
  created() {
   
  },
  methods: {},
};
</script>

<style scoped>
.logo-icon {
  width: 50px;
  height: 50px;
}
</style>
