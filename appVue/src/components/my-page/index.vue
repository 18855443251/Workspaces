<!-- 分页组件 -->
<template>
  <div class="my_page">
    <button @click="handlePrevPage" :disabled="currentPage === 1">
      <span class="FullDesignIcons ico_arrow_l"></span>
    </button>
    <input
      type="number"
      v-model="currentPage"
      @keydown.enter="goToPage"
      :max="totalPages"
      :min="1"
    />
    <span>/ {{ totalPages }}</span>
    <button @click="handleNextPage" :disabled="currentPage === totalPages">
      <span class="FullDesignIcons ico_arrow_r"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "myPage",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToPage() {
      if (this.currentPage > 0 && this.currentPage <= this.totalPages) {
        this.$emit("update:currentPage", this.currentPage);
      } else {
        this.currentPage = 1; // 如果输入的页码无效，重置为第一页
      }
    },
    handlePrevPage() {
      if (this.currentPage > 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },
    handleNextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.my_page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #ffffff;
  padding: 10px 0;
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input {
    text-align: center;
    margin-right: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>