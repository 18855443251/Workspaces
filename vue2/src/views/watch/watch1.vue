<template>
  <div class="page">
    <input type="text" v-model="form.name" />
    <input type="text" v-model="form.sex" />
    <input type="text" v-model="form.age" />
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      form: {
        name: "张三",
        age: "26",
        sex: "男",
      },
    };
  },
  computed: {
    // watch监听form，新值和旧值相同问题解决
    newForm() {
      return JSON.parse(JSON.stringify(this.form));
    },
  },
  watch: {
    // deep 属性是 watch 选项的一个属性，用于深度观察一个对象的变化。
    // ，深度观察对象会导致性能下降，因为每次对象发生变化时都需要递归遍历对象的所有属性。因此，在使用 deep 属性时应该谨慎，并仅在必要时使用。
    // 如果你需要观察对象内部属性的变化，就需要使用 deep 属性。
    // newForm: {
    //   handler(newV, oldV) {
    //     console.log(newV, "newV");
    //     console.log(oldV, "oldV");
    //   },
    //   immediate: true,
    //   deep: true, //会损耗性能
    // },
    "form.age": {
      handler(newV, oldV) {
        console.log(newV, "newV");
        console.log(oldV, "oldV");
      },
      immediate: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  padding-top: 88px;
}
.content2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-top: 2px;
  border-top: 1px #eaeaea solid;
}

.tab_box2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px #eaeaea solid;
  width: 684px;
  margin-top: 25px;
}

.tab_two {
  font-family: Source Han Sans CN;
  font-weight: bold;
  font-size: 28px;
  color: #333333;
  padding: 8px;
}

.tab_click2 {
  border-bottom: 4px solid #f4b236;
}

.content3 {
  background-color: #ffffff;
  color: #333333;
  font-size: 28px;
  font-family: Source Han Sans CN;
  margin-bottom: 30px;
}

.list_box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title_list {
  display: flex;
  justify-content: flex-start;
  text-align: start;
  align-items: center;
  background-color: #f6f6f6;
  width: 686px;
  height: 80px;
  border: 1px #dedede solid;
  margin-top: 15px;
}

.title_list:nth-child(2) {
  margin-left: 0px;
}

.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  width: 686px;
  height: 80px;
  border-left: 1px #dedede solid;
  border-right: 1px #dedede solid;
  border-bottom: 1px #dedede solid;
}

.list_1 {
  text-align: center;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list_2 {
  width: 275px;
  margin-left: 50px;
}

.list_3 {
  width: 151px;
}

.list_4 {
  width: 150px;
}

.index {
  width: 40px;
  height: 40px;
  border: 1px #dedede solid;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}

.index_1 {
  background-image: linear-gradient(0deg, #ffca28 0%, #ffa302 100%);
  color: #ffffff;
  border: none !important;
}

.index_2 {
  background-image: linear-gradient(0deg, #d6d5d6 0%, #939396 100%);
  color: #ffffff;
  border: none !important;
}

.index_3 {
  background-image: linear-gradient(0deg, #cd9c6d 0%, #bd814c 100%);
  color: #ffffff;
  border: none !important;
}

.number_style {
  font-family: Objectivity;
}

.tips_box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
</style>