<!--
 * @Author: your name
 * @Date: 2021-06-03 16:20:23
 * @LastEditTime: 2021-07-05 14:34:27
 * @LastEditors: Please set LastEditors
 * @Description: 工商信息
 * @FilePath: \root\mgBank\src\views\workbench\corporateClients\outBusiness\components\beneficiary.vue
-->
<template>
  <!-- 失信被执行人 -->
  <div class="view">
    <div>测试1</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      controllerList: [
        {
          data_dt: "",
          case_id: "",
          context: "",
          court: "",
          datetime: "",
          state: "",
          company: "",
          creditcode: "",
        },
      ],
      map: {
        data_dt: "数据日期",
        case_id: "案件代码",
        // context: "执行内容",
        court: "法院",
        datetime: "具体日期",
        state: "执行状态",
        company: "企业名称",
        creditcode: "统一社会信用号",
      },
    };
  },
};
</script>
<style scoped>
</style>