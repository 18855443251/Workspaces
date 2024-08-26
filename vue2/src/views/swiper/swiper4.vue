<!--
 * @Author: your name
 * @Date: 2021-06-03 16:14:06
 * @LastEditTime: 2021-08-02 11:14:35
 * @LastEditors: Please set LastEditors
 * @Description: 经营风险遍历
 * @FilePath: \root\mgBank\src\views\workbench\corporateClients\outBusiness\busicInfo.vue
-->
<template>
  <div class="view">
    <!-- 轮播 -->
    <takeNumber
      :dataList="informList"
      :actDialog="actDialog"
      :defaultIndex="defaultIndex"
    />
  </div>
</template>
<script>
import takeNumber from "./components/takeNumber";
export default {
  name: "VxMobile",
  components: {
    takeNumber,
  },
  data() {
    return {
      defaultIndex: 0,
      actDialog: {
        open: true,
      }, //跑马灯弹框是否展示
      informList: [
        {
          orgName: "南新支行",
          latitude: "28.799180",
          mobile: "13612345678",
          branchName: "赣昌农商银行",
          orgFullName: "赣昌农商银行南新支行",
          personNum: "1",
          type: "1",
          officeAddress: " 南昌县南新乡娄前街",
          companyNum: "0",
          branchCode: "10101",
          number: "A001",
          transType: "01",
          createTime: 1685345194000,
          phone: "0791-85881066",
          orgCode: "10106",
          businessType: "0",
          appointmentDate: "2023-05-29",
          status: "0",
          longitude: "116.070190",
        },
        {
          appointmentTimeStart: "09:00",
          orgName: "南新支行",
          reserveId: "101062023052900052",
          latitude: "28.799180",
          mobile: "13612345678",
          branchName: "赣昌农商银行",
          orgFullName: "赣昌农商银行南新支行",
          personNum: "1",
          type: "2",
          officeAddress: " 南昌县南新乡娄前街",
          appointmentTimeEnd: "10:00",
          companyNum: "0",
          branchCode: "10101",
          number: "101062023052900052",
          transType: "01",
          createTime: 1685346600000,
          phone: "0791-85881066",
          orgCode: "10106",
          businessType: "0",
          appointmentDate: "2023-05-30",
          status: "0",
          longitude: "116.070190",
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