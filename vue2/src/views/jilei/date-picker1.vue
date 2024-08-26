<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div>{{filterDate}}</div>
    <div class="test">
      <md-date-picker
        ref="datePicker"
        :title="'请选择时间'"
        type="custom"
        align="center"
        :default-date="maxDate"
        :min-date="minDate"
        :max-date="maxDate"
        :custom-types="['yyyy', 'MM']"
        v-model="isDateShow"
        @confirm="handleDateSelected"
        @hide="changeIconFlag = false"
      />
    </div>
  </div>
</template>
<script>
import { DatePicker } from "mand-mobile";
export default {
  name: "claneCache",
  components: { [DatePicker.name]: DatePicker },
  data() {
    return {
      maxDate: new Date(), // 最大可选日期
      isDateShow: true,
      filterDate:''
    };
  },
  computed: {
    minDate() {
      let cur = new Date();
      let month = cur.getMonth();
      let year = cur.getFullYear();
      return new Date(year - 5, month);
    },
  },

  created() {},
  methods: {
    handleDateSelected() {
      let date = this.$refs.datePicker.getFormatDate("yyyy-MM");
      this.filterDate = date;
    },
  },
};
</script>
<style scoped>
.test {
  background: red;
}
.qrCode_icon {
  width: 50px;
  height: 50px;
}
</style>