<template>
  <div>
    <div class="main" v-if="fruitList.length > 0">
      <div class="table">
        <!-- 购物车头部 -->
        <div class="thead">
          <div class="tr">
            <div class="th">选中</div>
            <div class="th th-pic">图片</div>
            <div class="th">单价</div>
            <div class="th num-th">个数</div>
            <div class="th">小计</div>
            <div class="th">操作</div>
          </div>
        </div>
        <!-- 身体 -->
        <div class="tbody">
          <div
            v-for="(item, index) in fruitList"
            :key="item.id"
            class="tr"
            :class="{ active: item.isChecked }"
          >
            <div class="td">
              <input type="checkbox" v-model="item.isChecked" />
            </div>
            <div class="td"><img :src="item.icon" alt="" /></div>
            <div class="td">{{ item.price }}</div>
            <div class="td">
              <div class="my-input-number">
                <button
                  :disabled="item.num <= 1"
                  class="decrease"
                  @click="sub(item.id)"
                >
                  -
                </button>
                <span class="my-input__inner">{{ item.num }}</span>
                <button class="increase" @click="add(item.id)">+</button>
              </div>
            </div>
            <div class="td">{{ item.num * item.price }}</div>
            <div class="td"><button @click="del(item.id)">删除</button></div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <!-- 全选 -->
        <label class="check-all">
          <input type="checkbox" v-model="isAll" />
          全选
        </label>
        <div class="right-box">
          <!-- 所有商品总价 -->
          <span class="price-box"
            >总价&nbsp;&nbsp;:&nbsp;&nbsp;¥&nbsp;<span class="price">{{
              totalPrice
            }}</span></span
          >
          <!-- 结算按钮 -->
          <button class="pay">结算( {{ totalCount }} )</button>
        </div>
      </div>
    </div>
    <!-- 空车 -->
    <div class="empty" v-else>🛒空空如也</div>
  </div>
</template>

<script>
const defaultArr = [
  {
    id: 1,
    icon: "http://autumnfish.cn/static/火龙果.png",
    isChecked: true,
    num: 2,
    price: 6,
  },
  {
    id: 2,
    icon: "http://autumnfish.cn/static/荔枝.png",
    isChecked: false,
    num: 7,
    price: 20,
  },
  {
    id: 3,
    icon: "http://autumnfish.cn/static/榴莲.png",
    isChecked: false,
    num: 3,
    price: 40,
  },
  {
    id: 4,
    icon: "http://autumnfish.cn/static/鸭梨.png",
    isChecked: true,
    num: 10,
    price: 3,
  },
  {
    id: 5,
    icon: "http://autumnfish.cn/static/樱桃.png",
    isChecked: false,
    num: 20,
    price: 34,
  },
];
export default {
  name: "home",
  data() {
    return {
      // 水果列表
      fruitList: JSON.parse(localStorage.getItem("list")) || defaultArr,
    };
  },
  computed: {
    // 默认计算属性：只能获取不能设置，要设置需要写完整写法
    // isAll () {
    //   // 必须所有的小选框都选中，全选按钮才选中 → every
    //   return this.fruitList.every(item => item.isChecked)
    // }

    // 完整写法 = get + set
    isAll: {
      get() {
        console.log('获取')
        return this.fruitList.every((item) => item.isChecked);
      },
      set(value) {
         console.log(value,'设置')
        // 基于拿到的布尔值，要让所有的小选框 同步状态
        this.fruitList.forEach((item) => (item.isChecked = value));
      },
    },
    // 统计选中的总数 reduce
    totalCount() {
      return this.fruitList.reduce((sum, item) => {
        if (item.isChecked) {
          // 选中 → 需要累加
          return sum + item.num;
        } else {
          // 没选中 → 不需要累加
          return sum;
        }
      }, 0);
    },
    // 总计选中的总价 num * price
    totalPrice() {
      return this.fruitList.reduce((sum, item) => {
        if (item.isChecked) {
          return sum + item.num * item.price;
        } else {
          return sum;
        }
      }, 0);
    },
  },
  methods: {
    del(id) {
      this.fruitList = this.fruitList.filter((item) => item.id !== id);
    },
    add(id) {
      // 1. 根据 id 找到数组中的对应项 → find
      const fruit = this.fruitList.find((item) => item.id === id);
      // 2. 操作 num 数量
      fruit.num++;
    },
    sub(id) {
      // 1. 根据 id 找到数组中的对应项 → find
      const fruit = this.fruitList.find((item) => item.id === id);
      // 2. 操作 num 数量
      fruit.num--;
    },
  },
  watch: {
    fruitList: {
      deep: true,
      handler(newValue) {
        // 需要将变化后的 newValue 存入本地 （转JSON）
        localStorage.setItem("list", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style scoped>
.my-input-number {
  position: relative;
  display: inline-block;
  width: 140px;
  line-height: 38px;
}
.my-input-number span {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.my-input-number .my-input {
  display: block;
  position: relative;
  font-size: 14px;
  width: 100%;
}
.my-input-number .my-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
}
.my-input-number .my-input-number__decrease,
.my-input-number .my-input-number__increase {
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 40px;
  height: auto;
  text-align: center;
  background: #f5f7fa;
  color: #606266;
  cursor: pointer;
  font-size: 13px;
}
.my-input-number .my-input-number__decrease {
  left: 1px;
  border-radius: 4px 0 0 4px;
  border-right: 1px solid #dcdfe6;
}
.my-input-number .my-input-number__increase {
  right: 1px;
  border-radius: 0 4px 4px 0;
  border-left: 1px solid #dcdfe6;
}
.my-input-number .my-input-number__decrease.is-disabled,
.my-input-number .my-input-number__increase.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
.app-container {
  padding-bottom: 300px;
  width: 800px;
  margin: 0 auto;
}
@media screen and (max-width: 800px) {
  .app-container {
    width: 600px;
  }
}
.app-container .banner-box {
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 10px;
}
.app-container .banner-box img {
  width: 100%;
}
.app-container .nav-box {
  background: #ddedec;
  height: 60px;
  border-radius: 10px;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.app-container .nav-box .my-nav {
  display: inline-block;
  background: #5fca71;
  border-radius: 5px;
  width: 90px;
  height: 35px;
  color: white;
  text-align: center;
  line-height: 35px;
  margin-right: 10px;
}

.breadcrumb {
  font-size: 16px;
  color: gray;
}
.table {
  width: 100%;
  text-align: left;
  border-radius: 2px 2px 0 0;
  border-collapse: separate;
  border-spacing: 0;
}
.th {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s ease;
}
.th.num-th {
  flex: 1.5;
}
.th {
  text-align: center;
}
.th:nth-child(4),
.th:nth-child(5),
.th:nth-child(6),
.th:nth-child(7) {
  text-align: center;
}
.th.th-pic {
  flex: 1.3;
}
.th:nth-child(6) {
  flex: 1.3;
}

.th,
.td {
  position: relative;
  padding: 16px 16px;
  overflow-wrap: break-word;
  flex: 1;
}
.pick-td {
  font-size: 14px;
}
.main,
.empty {
  border: 1px solid #f0f0f0;
  margin-top: 10px;
}
.tr {
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #ebeef5;
}
.tr.active {
  background-color: #bac0c9;
}
.td {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table img {
  width: 100px;
  height: 100px;
}

button {
  outline: 0;
  box-shadow: none;
  color: #fff;
  background: #d9363e;
  border-color: #d9363e;
  color: #fff;
  background: #d9363e;
  border-color: #d9363e;
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
}
button.pay {
  background-color: #3f85ed;
  margin-left: 20px;
}

.bottom {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  border: 1px solid #f0f0f0;
  border-top: none;
  padding-left: 20px;
}
.right-box {
  display: flex;
  align-items: center;
}
.check-all {
  background: #3f85ed;
  cursor: pointer;
}
.price {
  color: hotpink;
  font-size: 30px;
  font-weight: 700;
}
.price-box {
  display: flex;
  align-items: center;
}
.empty {
  padding: 20px;
  text-align: center;
  font-size: 30px;
  color: #909399;
}
.my-input-number {
  display: flex;
}
.my-input-number button {
  height: 40px;
  color: #333;
  border: 1px solid #dcdfe6;
  background-color: #f5f7fa;
}
.my-input-number button:disabled {
  cursor: not-allowed !important;
}
.my-input-number .my-input__inner {
  height: 40px;
  width: 50px;
  padding: 0;
  border: none;
  border-top: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
}
</style>
