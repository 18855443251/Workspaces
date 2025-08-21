<template>
  <div class="v-page-box">
    <a-pagination
      :current="currentPage"
      :page-size.sync="pageSizeNum"
      :page-size-options="pageSizes"
      :total="total"
      :hide-on-single-page="hideOnSinglePage"
      :disabled="disabled"
      :show-total="total => `共 ${total} 条`"
      :show-size-changer="showSizeChanger"
      show-quick-jumper
      @change="handleCurPageChange"
      @showSizeChange="handleSizeChange"
    ></a-pagination>
  </div>
</template>

<script>
  export default {
    name: 'myPage',
    data() {
      return {
        pageSizeNum: 10
      }
    },
    props: {
      showSizeChanger: {
        type: Boolean,
        default: true
      },
      pageSize: { // 默认分页大小
        type: Number,
        default: 10
      },
      pageSizes: {
        type: Array,
        default: () => {
          return ['5','10', '15', '20']
        }
      },
      currentPage: { // 当前页
        type: Number,
        default: 1
      },
      total: { // 总数
        type: Number,
        default: 0
      },
      disabled: { // 是否禁用
        type: Boolean,
        default: false
      },
      hideOnSinglePage: { // 只有一页时是否隐藏
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleSizeChange (val1,val2) {
        this.$emit('update:pageSize', val2)
        this.$emit('showSizeChange')
      },
      handleCurPageChange (val) {
        this.$emit('update:currentPage', val)
        this.$emit('change')
      }
    },
    created () {
      this.pageSizeNum = this.pageSize
    }
  }
</script>
<style lang="less" scoped>
.v-page-box{
  padding:20px 0;
  text-align:right;
}
</style>