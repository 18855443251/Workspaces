    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 16:48:14
 * @LastEditors: Please set LastEditors
 * @Description:业务早报
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div class="nav_content" v-for="(item,index) in businessList" :key="index">
      <changeText :sourceText="item.title" :key="index"></changeText>
    </div>
  </div>
</template>
<script>
import changeText from "@/components/changeText";
export default {
  components: {
    changeText,
  },
  data() {
    return {
      businessList: [
        {
          title:
            '<span style="color: #999999 ;">[业务量]</span>昨日业务量 <span style="color: #178fff;">0</span> 笔，新增客户 <span style="color: #178fff;">0</span> 户，流失客户 <span style="color: #178fff;">0</span> 户。',
          typeId: "business",
          supId: "MPB",
          sortNum: 1,
          pclinkAddress: "business",
        },
        {
          title:
            '<span style="color: #999999 ;">[存款变动]</span>昨日存款变动 <span style="color: #178fff;">万元</span>，其中流失 <span style="color: #178fff;">万元</span>，新增 <span style="color: #178fff;">万元</span>。',
          typeId: "deposit",
          supId: "MPB",
          sortNum: 2,
          pclinkAddress: "deposit",
        },
        {
          title:
            '<span style="color: #999999 ;">[信用卡]</span>昨日有 <span style="color: #178fff;">0</span> 张信用卡激活并有效动账，截止昨日近6月共有 <span style="color: #178fff;">0</span> 张激活后未动账。',
          typeId: "credit",
          supId: "MPB",
          sortNum: 3,
          pclinkAddress: "credit",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
</style>
