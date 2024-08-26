<template>
  <div>
    <div class="gg">
      <div>div11111111</div>
      <div class="test">div22222222</div>
      <!-- <div>div33333333</div>
      <div>div44444444</div>
      <div>div55555555</div> -->
    </div>
  </div>
</template>
<script>
import tab from "@/components/tab";
export default {
  components: {
    tab,
  },
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // this.test()
    // console.log(this.outer()); //20
    //调用
    console.log(this.out());
  },
  methods: {
    test() {
      var oDiv = document.getElementsByTagName("div");
      for (var i = 0; i < oDiv.length; i++) {
        console.log(oDiv.length);
        oDiv[i].onclick = function () {
          console.log(i); //10
        };
      }
    },
    outer() {
      var num = 10;
      function inner() {
        return (num += 10);
      }
      return inner();
    },
    out() {
      function count() {
        let i = 0;
        function fn() {
          i++;
          console.log(`函数被调用了${i}次`);
        }
        return fn;
      }
      const fun = count();
      console.log(fun)
      fun()
    },
  },
};
</script>

<style scoped>
.gg {
  display: flex;
  flex-direction: row;
}
div {
  margin-right: 60px;
}
.test {
  margin-left: 20px;
}
</style>
