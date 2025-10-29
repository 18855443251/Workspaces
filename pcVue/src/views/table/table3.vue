<template>
  <div class="operation_log">
    <a-table
      :columns="columns"
      :data-source="data"
      :row-key="
        (record, index) => {
          return index;
        }
      "
      class="f_mr3_t"
      bordered
      :pagination="{
        showTotal: (total) => {
          return `共 ${total} 条记录`;
        },
        showSizeChanger: true, // 展示选择条数
        total: pageInfo.total, // 总条数
        defaultPageSize: pageInfo.pageSize, // 默认一页显示条数 10
        current: pageInfo.pageNumber,
        pageSizeOptions: pageSizeOptions, // 自定义显示条数['5', '10', '15', '20']
      }"
      @change="paginationChange"
    >
      <!-- 分公司 -->
      <template slot="company" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 派单合计总计 -->
      <template slot="total" slot-scope="text">
        <span>{{ text }}传参</span>
      </template>
      <!-- 客户已拜访 总计 -->
      <template slot="visited" slot-scope="text">
        <span>{{ text }}从</span>
      </template>
      <!-- 客户已用我网产品 -->
      <template slot="revisit" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 客户无意愿无需求 -->
      <template slot="no-demand" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 客户反馈价格高 -->
      <template slot="price-high" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 客户不存在 -->
      <template slot="not-exist" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 客户地址不存在 -->
      <template slot="no-address" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 发现商机 -->
      <template slot="opportunity" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 方案递交 -->
      <template slot="deal" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 落地成单 -->
      <template slot="total-order" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 真实 -->
      <template slot="real" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 虚假 -->
      <template slot="fake" slot-scope="text">
        <span>{{ text }}</span>
      </template>
      <!-- 未拜访 -->
      <template slot="unvisited" slot-scope="text">
        <span>{{ text }}</span>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "operationLog",
  components: {},
  data() {
    return {
      columns: [
        {
          title: "分公司",
          dataIndex: "company",
          key: "company",
          align: "center",
          width: "5%",
          scopedSlots: { customRender: "company" },
        },
        {
          title: "派单合计",
          children: [
            {
              title: "总计",
              dataIndex: "total",
              key: "total",
              align: "center",
              width: "5%",
              scopedSlots: { customRender: "total" },
            },
            {
              title: "客户已拜访",
              children: [
                {
                  title: "总计",
                  dataIndex: "visited",
                  key: "visited",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "visited" },
                },
                {
                  title: "客户已用我网产品",
                  dataIndex: "revisit",
                  key: "revisit",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "revisit" },
                },
                {
                  title: "需要再次拜访",
                  dataIndex: "revisit",
                  key: "revisit",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "revisit" },
                },
                {
                  title: "客户无意愿无需求",
                  dataIndex: "no-demand",
                  key: "no-demand",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "no-demand" },
                },
                {
                  title: "客户反馈价格高",
                  dataIndex: "price-high",
                  key: "price-high",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "price-high" },
                },
                {
                  title: "客户不存在",
                  dataIndex: "not-exist",
                  key: "not-exist",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "not-exist" },
                },
                {
                  title: "客户地址不存在",
                  dataIndex: "no-address",
                  key: "no-address",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "no-address" },
                },
              ],
            },
            {
              title: "发现商机",
              dataIndex: "opportunity",
              key: "opportunity",
              align: "center",
              width: "5%",
              scopedSlots: { customRender: "opportunity" },
            },
            {
              title: "方案递交",
              dataIndex: "deal",
              key: "deal",
              align: "center",
              width: "5%",
              scopedSlots: { customRender: "deal" },
            },
            {
              title: "落地成单",
              children: [
                {
                  title: "总计",
                  dataIndex: "total-order",
                  key: "total-order",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "total-order" },
                },
                {
                  title: "真实",
                  dataIndex: "real",
                  key: "real",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "real" },
                },
                {
                  title: "虚假",
                  dataIndex: "fake",
                  key: "fake",
                  align: "center",
                  width: "5%",
                  scopedSlots: { customRender: "fake" },
                },
              ],
            },
          ],
        },
        {
          title: "未拜访",
          dataIndex: "unvisited",
          key: "unvisited",
          align: "center",
          width: "5%",
          scopedSlots: { customRender: "unvisited" },
        },
      ],
      data: [
        {
          key: "1",
          company: "海口",
          total: 2000,
          visited: 1000,
          revisit: 200,
          "no-demand": 100,
          "price-high": 200,
          "not-exist": 100,
          "no-address": 200,
          opportunity: 100,
          deal: 100,
          "total-order": 100,
          real: 100,
          fake: 0,
          unvisited: 1000,
        },
        {
          key: "1",
          company: "三亚",
          total: 2000,
          visited: 1000,
          revisit: 200,
          "no-demand": 100,
          "price-high": 200,
          "not-exist": 100,
          "no-address": 200,
          opportunity: 100,
          deal: 100,
          "total-order": 100,
          real: 100,
          fake: 0,
          unvisited: 1000,
        },
        {
          key: "1",
          company: "文昌",
          total: 2000,
          visited: 1000,
          revisit: 200,
          "no-demand": 100,
          "price-high": 200,
          "not-exist": 100,
          "no-address": 200,
          opportunity: 100,
          deal: 100,
          "total-order": 100,
          real: 100,
          fake: 0,
          unvisited: 1000,
        },
        {
          key: "1",
          company: "会文",
          total: 2000,
          visited: 1000,
          revisit: 200,
          "no-demand": 100,
          "price-high": 200,
          "not-exist": 100,
          "no-address": 200,
          opportunity: 100,
          deal: 100,
          "total-order": 100,
          real: 100,
          fake: 0,
          unvisited: 1000,
        },
      ],
      pageInfo: {
        pageNumber: 1,
        total: 0,
        pageSize: 10,
      },
      pageSizeOptions: ["10", "20", "50", "100"],
    };
  },
  methods: {
    // 分页
    paginationChange(pagination) {
      this.pageInfo.pageNumber = pagination.current;
      this.pageInfo.pageSize = pagination.pageSize;
      this.qryKjGecustStatement();
    },
  },
};
</script>

<style lang="less" scoped>
.operation_log {
  padding: 20px;
}
.search_form {
  margin-bottom: 20px;
}
.ant-btn {
  margin-right: 20px;
}
</style>
