<template>
  <div>
    <list class="jilu">
      <cell>
        <div
          :class="[item.hideShow == '1' ? 'jilu_item1' : 'jilu_item2']"
          v-for="(item, index) in payrollEntry"
          :key="index"
          @click="editPayee1(item)"
          @swipe="goRight($event, index)"
        >
          <div class="jilu_item_left">
            <text>{{item.name}}</text>
          </div>
          <div class="jilu_item_middle">
            <text>{{item.money}}</text>
          </div>
          <div class="jilu_item_right">
            <text class="delete" @click="deleteItem(item, index)">删除</text>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payrollEntry: [
        {
          name: "张三",
          money: "55",
          hideShow: "1",
        },
      ],
    };
  },
  methods: {
    editPayee1() {
      this.jump("/login");
    },
    // 左滑显示删除
    goRight(e, y) {
      if (e.direction == "left") {
        this.payrollEntry[y].hideShow = "2";
      } else if (e.direction == "right") {
        this.payrollEntry[y].hideShow = "1";
      }
    },
    // 删除收款人
    deleteItem(item, index) {
      this.payrollEntry.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.jilu_item1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
  height: 188px;
  overflow: hidden;
}
.jilu_item2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
  overflow: hidden;
  height: 188px;
  left: -300px;
}
.jilu_item_left {
  width: 118px;
  height: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
}
.jilu_item_middle {
  width: 632px;
  height: 188px;
  filter: blur(0px);
  display: flex;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(234, 234, 234, 1);
  padding-right: 30px;
  background-color: rgb(220, 223, 48);
}
.jilu_item_right {
  width: 300px;
  height: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.delete {
  width: 300px;
  height: 188px;
  text-align: center;
  line-height: 162px;
  font-size: 28px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  background-color: red;
}
</style>
