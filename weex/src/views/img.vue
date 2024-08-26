<!--
 * @Author: your name
 * @Date: 2021-08-25 15:53:38
 * @LastEditTime: 2022-01-25 10:03:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weex\src\views\img.vue
-->
<template>
  <div class="login-view">
    <image
      :class="[item2.pictures?'many_img':'news-img']"
      :src="item2.pictureUrl"
      @load="imgError($event,item2,index2)"
      @click="reloading(item2,index2)"
    />
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      timeStamp: "",
    };
  },
  methods: {
    //捕获图片是否展示完成
    imgError(el, item, index) {
      //安卓是0和ios是true
      if (el.success === true || el.success === 0) {
        try {
          // 图片加载异常采用默认图片
          this.newsList[index].pictureUrl = "./imgs/fine/imgFall.png";
        } catch (error) {}
      }
    },
  },
};
</script>
<style scoped>
</style>
