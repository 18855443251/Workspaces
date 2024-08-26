 <template>
  <div>
    <!-- 局部混入 -->
    <div>{{ msgUser }}</div>
    <div>{{ msgMenu }}</div>
  </div>
</template>

<script>
const user = {
  data() {
    return {
      msgUser: "mixins user",
    };
  },
};
const menu = {
  data() {
    return {
      msgMenu: "mixins menu",
    };
  },
};
export default {
  mixins: [user, menu],
  data() {
    return {
      test: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>