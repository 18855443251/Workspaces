 <template>
  <div>
    <!-- 局部混入 -->
    <div>{{ msgUser }}</div>
    <div>{{ msgMenu }}</div>
  </div>
</template>

<script>
import { user,menu } from "./js/user.js";
export default {
  mixins: [user,menu],
  data() {
    return {};
  },
  watch: {
    msgMenu: {
      handler(newVal, oldVal) {
        console.log("vue文件watch");
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    console.log("vue文件created");
  },
  mounted() {
    console.log("vue文件mounted");
  },
  methods: {},
};
</script>

<style scoped></style>