
<template>
  <div class="cardBox_view">
     <slot name="tableList1" :tableList1="tableList1"></slot>
     <br/>
     <slot name="tableList2" :tableList2="tableList2"></slot>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      tableList1:[
        {
          name:"张三",
          desc:"好好"
        },
          {
          name:"李四",
          desc:"好快"
        }
      ],   
      tableList2:[
        {
          name:"王五",
          desc:"对的"
        },
          {
          name:"赵丽",
          desc:"看的"
        }
      ]
    };
  },

  methods: {},
};
</script>
<style scoped>
</style>
