<template>
  <div class="app">
    <son4
      v-model="selectId"
    ></son4>
    <div>{{selectId}}</div>
  </div>
</template>

<script>
import son4 from './components/son4.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    son4,
  },
}
</script>

<style>
</style>