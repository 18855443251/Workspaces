 <template>
  <div>
    <div>{{ msgUser }}</div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ newName }}</div>
    <div v-for="(item, index) in idArr" :key="index">{{ item.label }}</div>
    <div>{{ pushFreqArr }}</div>
  </div>
</template>

<script>
import { user, pushFreqArr } from "./js/user.js";
export default {
  mixins: [user],
  props: {
    // data、prop和混入冲突，那么会以vue文件中的内容为主
    // 值为对象(components、methods 、computed、data)的选项，混入组件时选项会被合并，键冲突时优先组件，组件中的键会覆盖混入对象的。当数据对象（data变量）或者对象键名（方法methods、components、directives）出现同名选项时，总会以组件为准。

    name: {
      type: String,
      default: "vue李四",
    },
  },
  data() {
    return {
      msgUser: "vuemsgUser",
      newName: "",
      pushFreqArr,
    };
  },
  // watch: {
  //   msgUser: {
  //     handler(newVal, oldVal) {
  //       console.log("vuewatch");
  //     },
  //     immediate: true,
  //     deep: true,
  //   },
  // },
  // computed和混入冲突，那么会以vue文件中的内容为主
  computed: {
    age() {
      console.log("vue年龄");
      return "vue年龄";
    },
  },
  created() {
    console.log("vue文件后执行created");
    this.newName = this.formTest(6);
  },
  mounted() {
    // 混入的生命周期会优先于vue文件的生命周期执行
    console.log("vue文件后执行mounted");
  },
  //优先级：vue文件里的方法》局部混入方法》全局混入方法
  methods: {
    formTest(val) {
      if (val > 5) {
        return "王五";
      }
    },
  },
};
</script>

<style scoped></style>