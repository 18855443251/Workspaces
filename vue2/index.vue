<template>
  <div class="storage-container" id="storage-container">
    <div class="header" id="header">
      <van-icon name="clock-o" class="icon" />
      <span class="title">存量保存</span>
      <van-icon name="info-o" class="icon-info" />
    </div>
    <div class="content" id="content">
      <div class="content-item" id="content-item-left">
        <van-icon name="minus" class="icon-minus" />
        <span class="label">保有率</span>
        <span class="value">-</span>
      </div>
      <div class="content-item" id="content-item-right">
        <span class="label">存量产数</span>
        <span class="value">-</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      // 初始化数据
    };
  },
  methods: {
    // 这里可以添加方法
  }
};
</script>

<style>
.storage-container {
  width: 100%;
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color: #000080;
}

.icon {
  margin-right: 8px;
}

.icon-info {
  margin-left: auto;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.content-item {
  display: flex;
  align-items: center;
}

.label {
  margin-left: 8px;
  color: #333;
}

.value {
  margin-left: 16px;
  color: #333;
}
</style>