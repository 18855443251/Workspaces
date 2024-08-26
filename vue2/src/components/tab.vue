<template>
  <div>
    <div class="fn-myFinance-tab">
      <div
        v-for="(item, index) in tabList"
        :key="index"
        @click="switchTab(index)"
      >
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabList: {
      type: Array,
      default: []
    },
    value: {
      type: Number,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    switchTab(index) {
      for (let a in this.tabList) {
        if (a == index) {
          this.$set(this.tabList[a], "type", true);
            this.$emit("input", index);
        } else {
          this.$set(this.tabList[a], "type", false);
        }
      }
    }
  },
  watch: {
    value: {
      handler: function(newVal) {
        for (let a in this.tabList) {
          if (a == newVal) {
            this.$set(this.tabList[a], "type", true);
          } else {
            this.$set(this.tabList[a], "type", false);
          }
        }
      },
      immediate: true
    }
  }
};
</script>
