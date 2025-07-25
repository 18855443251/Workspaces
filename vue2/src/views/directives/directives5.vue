<template>
  <div>
    <!-- 默认5秒防重复点击 -->
    <button v-loaddash @click="handleSubmit">提交（默认5秒）</button>
    
    <!-- 自定义3秒防重复点击 -->
    <button v-loaddash="3000" @click="handleSave">保存（3秒）</button>
    
    <!-- 用于普通div元素 -->
    <div 
      v-loaddash="1000" 
      @click="handleDivClick"
      style="padding: 10px; background: #f0f0f0; cursor: pointer;"
    >
      点击我（1秒防重复）
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      console.log('表单提交');
      // 模拟异步操作
      setTimeout(() => {
        console.log('提交完成');
      }, 2000);
    },
    
    handleSave() {
      console.log('数据保存');
    },
    
    handleDivClick() {
      console.log('Div被点击');
    }
  }
}
</script>

<style>
/* 可选：为不支持disabled属性的元素添加视觉反馈 */
/* .loaddash-disabled {
  opacity: 0.6;
  cursor: not-allowed;
} */
</style>