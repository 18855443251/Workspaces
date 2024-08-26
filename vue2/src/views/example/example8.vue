 <template>
  <div>
    <div @click="startBtn">开始</div>
    <div @click="stopBtn">停止</div>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "开始你的表演",
      time: null,
    };
  },
  methods: {
    startBtn() {
      if (this.time != null) return;
      this.time = setInterval(() => {
        let start = this.message.substring(0, 1);
        let end = this.message.substring(1);
        this.message = end + start;
      }, 400);
    },
    stopBtn() {
      clearInterval(this.time);
      this.time=null
    },
  },
};
</script>

<style scoped></style>