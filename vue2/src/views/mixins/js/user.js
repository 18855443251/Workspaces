export const user = {
  props: {
    name: {
      type: String,
      default: "张三",
    },
  },
  data() {
    return {
      idArr: [
        { value: "1", label: "居民身份证" },
        { value: "2", label: "户口簿" },
      ],
      msgUser: "mixins user",
    };
  },
  watch: {
    msgUser: {
      handler(newVal, oldVal) {
        console.log("混入先执行watch");
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    age() {
      console.log("混入年龄");
      return "混入年龄";
    },
  },
  created() {
    // 混入的生命周期会优先于vue文件的生命周期执行
    console.log("混入先执行created");
    // 异步的情况下vue文件的生命周期先执行
    // setTimeout(() => {
    //   console.log("混入异步");
    // }, 1000);
  },
  mounted() {
    // 混入的生命周期会优先于vue文件的生命周期执行
    console.log("混入先执行mounted");
  },
  methods: {
    formTest(val) {
      if (val > 5) {
        return "赵六";
      }
    },
  },
};
export const menu = {
  data() {
    return {
      msgMenu: "mixins menu",
    };
  },
};
export const pushFreqArr = [
  {
    value: 1,
    label: "1次",
  },
];
