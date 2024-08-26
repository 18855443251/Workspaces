 
<template>
  <div class="empty">
    <image :src="addJNImgBaseUrl('nodata.png')" class="empty-img" />
  </div>
</template>
<script>
export default {
  name: "emptyData",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty-img {
  width: 680px;
  height:430px;
  margin-top: 400px;
}
</style>