import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const list = ref([]);
    function increment() {
      count.value++;
    }
    function subcrement() {
      count.value--;
    }
    const doubleCount = computed(() => count.value * 2);
    const getList = async () => {
      const {
        data: { data },
      } = await axios.get("http://geek.itheima.net/v1_0/channels");
      list.value = data.channels;
    };
    function $reset() {
      count.value = 0;
    }
    return { count, increment, subcrement, doubleCount, getList, list, $reset };
  },

  // . store仓库中，persist: true 开启
  {
    persist: {
      key: "gaimingzi",
      paths: ["count"],
      storage: sessionStorage,
    },
  }
);
