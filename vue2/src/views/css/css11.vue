
<template>
  <div class="claneCache_view">
    <!-- 水平 垂直居中 -->
    <div class="tess">
      <img src="@/assets/img/close.png" class="row-img" />
    </div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.tess {
  width: 200px;
  height: 200px;
  border: 1px solid rgb(16, 159, 80);
  position: relative;
}
.row-img {
  background: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>