<template>
  <div class="increase_area" @click="$emit('iconclick')">
    <image class="icon" :src="`./imgs/${src}.png`" />
    <text class="title" v-if="title">{{title}}</text>
    <div class="red_point" v-if="isUnread"></div>
  </div>
</template>

<script>
export default {
  props: ["src", "title", "isUnread"],
};
</script>

<style scoped>
.red_point {
  height: 12px;
  width: 12px;
  background-color: #d6162f;
  border-radius: 6px;
  /* margin-bottom: 30px; */
  position: absolute;
  top: 0;
  right: 0;
}
.increase_area {
  height: 68px;
  width: 48px;
  justify-content: center;
  align-items: center;
}
.icon {
  height: 48px;
  width: 48px;
}
.title {
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  color: #ffffff;
}
</style>