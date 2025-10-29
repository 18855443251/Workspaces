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
          title: "天机客户",
          children: [
            { title: "批次号", dataIndex: "batchNumber", key: "batchNumber" },
            { title: "分公司", dataIndex: "branch", key: "branch" },
            {
              title: "天机客户标",
              dataIndex: "customerMark",
              key: "customerMark",
            },
            {
              title: "天机客户名",
              dataIndex: "customerName",
              key: "customerName",
            },
            {
              title: "派发时间",
              dataIndex: "dispatchTime",
              key: "dispatchTime",
            },
            {
              title: "天机客户地",
              dataIndex: "customerLocation",
              key: "customerLocation",
            },
          ],
        },
        {
          title: "订单及其客户信息",
          children: [
            { title: "拜访人员", dataIndex: "visitor", key: "visitor" },
            { title: "订单号", dataIndex: "orderNumber", key: "orderNumber" },
            {
              title: "受理号码",
              dataIndex: "acceptNumber",
              key: "acceptNumber",
            },
            { title: "受理时间", dataIndex: "acceptTime", key: "acceptTime" },
            {
              title: "受理产品",
              dataIndex: "acceptProduct",
              key: "acceptProduct",
            },
            {
              title: "装机地址",
              dataIndex: "installationAddress",
              key: "installationAddress",
            },
            {
              title: "产权客户名",
              dataIndex: "propertyCustomerName",
              key: "propertyCustomerName",
            },
            {
              title: "产权客户证",
              dataIndex: "propertyCustomerCertificate",
              key: "propertyCustomerCertificate",
            },
            {
              title: "产权客户地",
              dataIndex: "propertyCustomerLocation",
              key: "propertyCustomerLocation",
            },
            {
              title: "转化结果",
              dataIndex: "conversionResult",
              key: "conversionResult",
            },
          ],
        },
      ],
      data: [
        {
          key: "1",
          batchNumber: "77",
          branch: "4747",
          customerMark: "474",
          customerName: "77",
          dispatchTime: "77",
          customerLocation: "474",
          visitor: "474",
          orderNumber: "47",
          acceptNumber: "77",
          acceptTime: "77",
          acceptProduct: "77",
          installationAddress: "77",
          propertyCustomerName: "77",
          propertyCustomerCertificate: "44",
          propertyCustomerLocation: "44",
          conversionResult: "77",
        },
        {
          key: "1",
          batchNumber: "77",
          branch: "4747",
          customerMark: "474",
          customerName: "77",
          dispatchTime: "77",
          customerLocation: "474",
          visitor: "474",
          orderNumber: "47",
          acceptNumber: "77",
          acceptTime: "77",
          acceptProduct: "77",
          installationAddress: "77",
          propertyCustomerName: "77",
          propertyCustomerCertificate: "44",
          propertyCustomerLocation: "44",
          conversionResult: "77",
        },
        {
          key: "1",
          batchNumber: "77",
          branch: "4747",
          customerMark: "474",
          customerName: "77",
          dispatchTime: "77",
          customerLocation: "474",
          visitor: "474",
          orderNumber: "47",
          acceptNumber: "77",
          acceptTime: "77",
          acceptProduct: "77",
          installationAddress: "77",
          propertyCustomerName: "77",
          propertyCustomerCertificate: "44",
          propertyCustomerLocation: "44",
          conversionResult: "77",
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
