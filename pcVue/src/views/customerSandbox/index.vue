<template>
  <div class="customer_sandbox">
    <div class="sandbox_header">
      <div class="header_left">海南中小微客户沙盘平台</div>
      <!-- <div class="header_right"></div> -->
    </div>
    <div class="sandbox_content">
      <div class="content_left">
        <div class="title">地址结构</div>
        <a-input-search
          v-model="searchValue"
          placeholder="多个关键词请用空格分开"
          style="width: 200px"
          allowClear
          @search="onSearch"
        />
        <div class="address_tree">
          <a-spin tip="加载中" :spinning="treeSpinning">
            <a-tree
              :load-data="onLoadData"
              :tree-data="treeData"
              @select="onSelect"
              @expand="onExpand"
              v-if="treeData.length > 0"
            >
              <template #title="node">
                <span> {{ node.name }}</span
                ><span class="desc">{{ node.levelName }}</span></template
              >
            </a-tree>
            <my-page
              v-if="total > 0"
              :total="total"
              :current-page.sync="currentPage"
              @change="handleCurPageChange"
              :showSizeChanger="false"
              style="display: inline-block; white-space: nowrap"
            ></my-page>
          </a-spin>
        </div>
      </div>
      <div class="content_right">
        <div class="title">地址详细信息</div>
        <a-spin tip="加载中" :spinning="rightSpinning">
          <template v-if="nodeId">
            <div class="address_info">
              <div class="info_row">
                <span class="label">地址名称</span>
                <span class="value">{{ transNull(detailObj.fullName) }}</span>
              </div>
              <div class="info_row">
                <span class="label">地址层级</span>
                <span class="value">{{ transNull(detailObj.levelName) }}</span>
              </div>
            </div>
            <!-- 客户标签 -->
            <template v-if="detailObj.levelNumber > '4'">
              <div class="title block">客户标签</div>
              <div class="customer_tags">
                <div
                  class="tag_item"
                  v-for="(item, index) in tagList"
                  :key="index"
                >
                  <span @click="handleDeleteTag(index)">
                    {{ item.name }}
                  </span>
                  <a-icon
                    type="minus-circle"
                    theme="filled"
                    @click="handleDeleteTag(index)"
                  />
                </div>
                <div class="tag_item">
                  <a-dropdown
                    :trigger="['click']"
                    placement="bottomLeft"
                    v-model="tagVisible"
                    :getPopupContainer="
                      (triggerNode) => {
                        return triggerNode.parentNode;
                      }
                    "
                  >
                    <span class="tag-name"> 添加标签 </span>
                    <a-menu slot="overlay">
                      <a-menu-item
                        v-for="(menuItem, menuIndex) in menuList"
                        :key="menuIndex"
                      >
                        <a-checkbox
                          :checked="menuItem.checked"
                          @change="handleCheckboxChange(menuItem)"
                          >{{ menuItem.name }}</a-checkbox
                        >
                      </a-menu-item>
                      <a-menu-item>
                        <a-button type="primary" @click="handleSaveTags"
                          >保存</a-button
                        >
                        <a-button @click="handleResetTags">重置</a-button>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </div>
              </div>
            </template>
            <template v-if="detailObj.levelNumber == '5'">
              <div class="title block">建筑物属性</div>
              <a-select
                v-model="architectureValue"
                placeholder="请选择建筑物属性"
                allowClear
                show-search
                :filter-option="filterOption"
                style="width: 400px"
              >
                <a-select-option
                  v-for="item in architectureList"
                  :key="item.value"
                  :value="item.value"
                  >{{ item.name }}</a-select-option
                >
              </a-select>
              <div class="title block">关联网络</div>
              <a-input
                size="large"
                autocomplete="off"
                placeholder="请选择关联网络"
                v-model="gridObj.gridUnitName"
                readOnly
                @click="gridVisible = true"
                style="width: 400px"
              />
              <span @click="handleDelete">&nbsp;&nbsp;删除</span>
              <grid-table
                :nodeId="nodeId"
                :gridVisible="gridVisible"
                :gridObj="gridObj"
                @handleOk="handleOk"
                @handleCancel="gridVisible = false"
              ></grid-table>
            </template>
            <div class="button_group" v-if="detailObj.levelNumber > '4'">
              <a-button type="primary" @click="handleSave">保存</a-button>
              <a-button @click="handleReset">重置</a-button>
            </div>
            <!-- 客户信息 -->
            <template v-if="isLeaf && customerList.length > 0">
              <div class="title block">客户信息</div>
              <div class="customer_info">
                <div
                  class="customer_list"
                  v-for="(item, index) in customerList"
                  :key="index"
                >
                  <div class="name">
                    客户名称&nbsp;&nbsp;{{ item.contactPersonName }}
                  </div>
                  <div class="customer_item">
                    <div
                      class="info_item"
                      v-for="(subItem, subIndex) in item.subList"
                      :key="subIndex"
                    >
                      <span class="label">{{ subItem.label }}</span>
                      <span class="value">{{ subItem.value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="isLeaf && customerPotentialList.length > 0">
              <div class="title block">潜客商机信息</div>
              <div class="customer_info">
                <div
                  class="customer_list"
                  v-for="(item, index) in customerPotentialList"
                  :key="index"
                >
                  <div class="name">
                    客户名称&nbsp;&nbsp;{{ item.contactPersonName }}
                  </div>
                  <div class="customer_item">
                    <div
                      class="info_item"
                      v-for="(subItem, subIndex) in item.subList"
                      :key="subIndex"
                    >
                      <span class="label">{{ subItem.label }}</span>
                      <span class="value">{{ subItem.value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
          <div class="no_data" v-else>
            <img src="@/assets/images/no_data.png" alt="no_data" />
            <div class="desc">没有匹配结果</div>
            <div>请选择一个地址节点查看详细信息</div>
          </div>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {
  queryTreeList,
  queryPageList,
  queryDetail,
  submitSave,
  encrypt,
  decrypt,
} from "@/api/customerSandbox";
import myPage from "@/components/myPage";
import gridTable from "./gridTable";
export default {
  name: "customerSandbox",
  components: { myPage, gridTable },
  data() {
    return {
      moment,
      searchValue: "", // 搜索关键词
      treeData: [], //地址结构树形列表
      // 461000000000000229452257
      // 461000000000000229452256
      nodeId: "", //地址结构树形节点id
      isLeaf: true, //地址结构树形false:有下级 true无下级
      currentPage: 1, //地址结构搜索分页默认第一页
      total: 0, //地址结构搜索分页总条数
      treeSpinning: false, //地址结构loading
      rightSpinning: false, //右侧loading
      detailObj: {}, //右侧地址详细信息
      tagList: [], //客户标签列表
      tagValueList: [], //客户标签已选中的值
      tagVisible: false, //客户标签下拉框提示框
      menuList: [], //客户标签下拉框列表
      architectureList: [], //建筑物属性下拉框
      architectureValue: undefined, //建筑物属性已选中的值
      gridVisible: false, //关联网络表格是否展示
      gridObj: {}, //关联网络表格选中的值
      customerActiveKey: 0, //客户信息切换下标
      customerTabList: [], //客户信息切换列表
      customerList: [], //客户信息列表
      customerPotentialActiveKey: 0, //潜客商机信息切换下标
      customerPotentialTabList: [], //潜客商机信息切换列表
      customerPotentialList: [], // 潜客商机信息列表
      // 客户信息列表映射对象
      customerObj: {
        businessNumber: "客户联系人业务号码",
        customerIncome: "客户收入",
        isMobileBusiness: "是否办理移动业务",
        isBroadbandBusiness: "是否办理宽带业务",
        isFttrBusiness: "是否办理FTTR业务",
        isDedicatedLineBusiness: "是否办理专线业务",
        isSkyWingHomeBusiness: "是否办理天翼看家业务",
        isQuantumSecretTalkBusiness: "是否办理量子密话业务",
        isMobileSatelliteBusiness: "是否办理移动卫星业务",
        isCloudPcBusiness: "是否办理云电脑业务",
        isEnterpriseNetworkingBusiness: "是否办理商企组网业务",
        isNewStrategyGroupPurchaseProjectBusiness: "是否办理新战略集采项目业务",
        isMicroIctBusiness: "是否办理小微ICT业务",
        contactPersonName: "客户联系人姓名",
        phoneNumber: "联系电话",
        phoneNumber: "员工人数",
        standardAddress: "标准地址(9级)",
        industryType: "行业类型",
      },
      // 潜客商机信息列表映射对象
      customerPotentialObj: {
        contactPersonName: "负责人姓名",
        contactPersonPhoneNumber: "负责人联系电话",
        broadbandServiceProvider: "宽带运营商",
        monthlyCommunicationFee: "月通信费",
        contractExpirationDate: "合同到期时间",
        industryType: "行业类型",
      },
      pingjieParams: "",
      staffId: "",
    };
  },
  created() {
    // 查询树形列表
    this.queryTreeList();
    var url = window.location.href;
    var queryStart = url.indexOf("?");
    if (queryStart === -1) {
      encrypt({}).then((res) => {
        this.pingjieParams = res;
        url = window.location.href + "?" + this.pingjieParams;
        queryStart = url.indexOf("?");
        this.getStaffId(url, queryStart);
      });
    } else {
      this.getStaffId(url, queryStart);
    }
  },
  methods: {
    // 获取登录信息
    getStaffId(url, queryStart) {
      var encrypParam = "";
      encrypParam = url.slice(queryStart + 1);
      decrypt({
        code: encrypParam,
      }).then((res) => {
        if (res.user && res.user.staffId) {
          this.staffId = res.user.staffId;
        } else {
          this.$message.error("未获取到用户账号信息");
        }
      });
    },
    // 查询树形列表
    queryTreeList() {
      this.treeSpinning = true;
      queryTreeList({
        nodeId: "",
        levelNumber: "",
      })
        .then((res) => {
          this.treeSpinning = false;
          this.treeData = res;
        })
        .catch((err) => {
          this.treeSpinning = false;
        });
    },
    onLoadData(treeNode) {
      return new Promise((resolve) => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        this.treeSpinning = true;
        queryTreeList({
          nodeId: treeNode.dataRef.nodeId,
          levelNumber: treeNode.dataRef.levelNumber,
        }).then((res) => {
          this.treeSpinning = false;
          if (res && res.length > 0) {
            treeNode.dataRef.children = res[0].children;
          }
        });
        resolve();
      });
    },
    // 点击展开
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
    },
    // 点击选择
    onSelect(selectedKeys, { node }) {
      let { nodeId, isLeaf } = node.dataRef;
      this.nodeId = nodeId;
      this.isLeaf = isLeaf;
      // 查询地址详情
      this.queryDetail();
    },
    // 查询地址详情
    queryDetail() {
      this.rightSpinning = true;
      this.detailObj = {}; //右侧地址详细信息
      this.tagList = []; //客户标签列表
      this.tagValueList = []; //客户标签已选中的值
      this.tagVisible = false; //客户标签下拉框提示框
      this.menuList = []; //客户标签下拉框列表
      this.architectureList = []; //建筑物属性下拉框
      this.architectureValue = undefined; //建筑物属性已选中的值
      this.gridVisible = false; //关联网络表格是否展示
      this.gridObj = {}; //关联网络表格选中的值
      this.customerActiveKey = 0; //客户信息切换下标
      this.customerTabList = []; //客户信息切换列表
      this.customerList = []; //客户信息列表
      this.customerPotentialActiveKey = 0; //潜客商机信息切换下标
      this.customerPotentialTabList = []; //潜客商机信息切换列表
      this.customerPotentialList = []; // 潜客商机信息列表
      queryDetail({
        nodeId: this.nodeId,
      }).then((res) => {
        this.rightSpinning = false;
        if (res.object) {
          this.detailObj = res.object;
          // 客户标签下拉框
          this.menuList = res.object.tagList || [];
          // 客户标签已选中的值
          this.tagValueList = res.object.tagValueList || [];
          // 客户标签列表
          this.menuList.forEach((item) => {
            if (this.tagValueList.includes(item.value)) {
              this.$set(item, "checked", true);
              // 已选择的客户标签
              this.tagList.push(item);
            }
          });
          // 建筑物属性下拉框
          this.architectureList = res.object.architectureList || [];
          // 建筑物属性已选中的值
          this.architectureValue = res.object.architectureValue || undefined;
          // 关联网络
          this.gridObj = res.object.grid || {};
          // 客户信息
          res.object.customerList &&
            res.object.customerList.forEach((item) => {
              this.customerList.push({
                contactPersonName: item.contactPersonName,
                subList: this.mapInfo(item, this.customerObj),
              });
            });
          // 潜客商机信息
          res.object.customerPotentialList &&
            res.object.customerPotentialList.forEach((item) => {
              this.customerPotentialList.push({
                contactPersonName: item.contactPersonName,
                subList: this.mapInfo(item, this.customerPotentialObj),
              });
            });
        }
      });
    },
    mapInfo(obj, mapObj) {
      return Object.keys(mapObj).map((key) => ({
        label: mapObj[key].title || mapObj[key],
        value: mapObj[key].customRender
          ? mapObj[key].customRender(obj[key])
          : obj[key],
      }));
    },
    // 客户标签下拉框复选框
    handleCheckboxChange(item) {
      this.$set(item, "checked", !item.checked);
    },
    // 保存客户标签
    handleSaveTags() {
      this.tagValueList = [];
      this.tagList = [];
      this.tagVisible = false;
      this.menuList.forEach((item) => {
        if (item.checked) {
          this.tagValueList.push(item.value);
          this.tagList.push(item);
        }
      });
    },
    // 重置客户标签
    handleResetTags() {
      // 重置逻辑
      this.menuList.forEach((item) => {
        this.$set(item, "checked", false);
      });
    },
    // 删除客户标签
    handleDeleteTag(index) {
      this.tagList.splice(index, 1);
      this.tagValueList.splice(index, 1);
      this.menuList.forEach((item) => {
        if (this.tagValueList.includes(item.value)) {
          this.$set(item, "checked", true);
        } else {
          this.$set(item, "checked", false);
        }
      });
    },
    // 下拉框搜索过滤
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    // tab切换
    handleCustomerChange(val) {
      this.customerActiveKey = val;
    },
    handleCustomerPotentialChange(val) {
      this.customerPotentialActiveKey = val;
    },
    // 点击搜索按钮
    onSearch() {
      this.treeData = [];
      this.currentPage = 1;
      this.total = 0;
      if (this.searchValue) {
        this.queryPageList();
      } else {
        this.queryTreeList();
      }
    },
    queryPageList() {
      this.treeSpinning = true;
      queryPageList({
        keyList: this.searchValue ? this.searchValue.split(" ").join(",") : "",
        pageSize: "10",
        page: this.currentPage,
      }).then((res) => {
        this.treeSpinning = false;
        this.treeData = res.list;
        this.total = res.total;
        if (res.list && res.list.length == 0) {
          this.$message.error("没有匹配结果");
        }
      });
    },
    // 点击分页
    handleCurPageChange() {
      this.queryPageList();
    },
    // 保存关联网络
    handleOk(event) {
      this.gridVisible = false;
      this.gridObj = event;
    },
    // 删除关联网络
    handleDelete() {
      this.gridObj = {};
    },
    // 保存提交
    handleSave() {
      if (this.gridObj.gridUnitName && !this.architectureValue) {
        this.$message.warning("请选择建筑物属性");
        return;
      }
      let params = {
        nodeId: this.nodeId,
        levelNumber: this.detailObj.levelNumber,
        name: this.detailObj.name,
        fullName: this.detailObj.fullName,
        staffId: this.staffId,
      };
      // 建筑物属性和关联网络
      if (this.detailObj.levelNumber == "5") {
        params.grid = this.gridObj;
        params.architectureValue = this.architectureValue;
      }
      // 客户标签
      if (this.detailObj.levelNumber > "4") {
        params.tagValueList = this.tagValueList;
      }
      submitSave(params).then((res) => {
        if (res.code == "200") {
          this.$message.success(res.message);
          this.queryDetail();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    handleReset() {
      this.queryDetail();
    },
  },
};
</script>

<style lang="less" scoped>
.customer_sandbox {
  background: #f5f5f5;
  .sandbox_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: rgba(32, 34, 41, 1);
    color: #aeaeae;
    padding: 0 20px;
    .header_left {
      font-size: 14px;
      font-weight: 400;
    }
  }
  .sandbox_content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    height: calc(100vh - 60px);

    .content_left {
      min-width: 10%;
      max-width: 25%;
      background: #ffffff;
      padding: 16px;
      overflow: auto;
      .title {
        font-size: 14px;
        color: #0a1534;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .address_tree {
        height: 500px;
        position: relative;
        margin: 10px 0;
        .ant-spin {
          position: absolute;
          left: 30%;
          top: 20%;
        }
        .tree {
          height: 100%;
          .tree-node {
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
            cursor: pointer;
          }
        }
        .desc {
          background: rgba(201, 201, 201, 1);
          padding: 2px 6px;
          border-radius: 2px;
          font-size: 12px;
          margin-left: 3px;
          color: #ffffff;
        }
      }
    }
    .content_right {
      margin-left: 20px;
      flex: 1;
      background: #fff;
      padding: 0 16px;
      overflow: hidden;
      overflow: auto;

      .title {
        font-size: 14px;
        color: #0a1534;
        font-weight: 700;
        margin: 15px 0;
      }
      .block {
        margin: 15px 0;
        &::before {
          content: "";
          display: inline-block;
          width: 4px;
          height: 13px;
          background-color: rgba(24, 144, 255, 1);
          border-radius: 2px;
          margin-right: 6px;
        }
      }

      .address_info {
        padding: 20px;
        background: rgba(242, 242, 242, 1);
        .info_row {
          margin-bottom: 10px;
          .label {
            font-size: 14px;
            color: rgba(120, 130, 150, 0.8);
            font-weight: 400;
            margin-right: 10px;
          }
          .value {
            font-size: 14px;
            color: #4c596d;
            font-weight: 400;
          }
        }
      }
      .customer_tags {
        display: flex;
        margin-bottom: 20px;
        .tag_item {
          padding: 8px;
          font-size: 14px;
          color: #788296;
          font-weight: 400;
          border: 1px solid rgba(32, 34, 41, 1);
          margin-right: 10px;
          &:last-child {
            border: 1px dotted #1890ff;
            color: #1890ff;
          }
        }
      }
      .button_group .ant-btn {
        margin-right: 20px;
        margin-top: 20px;
      }
      .add_tag {
        padding: 20px;
        border: 1px dotted blue;
      }
      .customer_info {
        max-height: 1000px;
        overflow: hidden;
        overflow-y: scroll;
        .customer_list {
          background: #f2f2f2;
          padding: 16px;
          margin-bottom: 10px;
          .name {
            font-size: 16px;
            color: #0a1534;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .customer_item {
            display: flex;
            flex-wrap: wrap;
            .info_item {
              flex: 0 1 25%;
              margin-bottom: 10px;
              .label {
                font-size: 14px;
                color: rgba(120, 130, 150, 0.8);
                font-weight: 400;
                margin-right: 10px;
                text-align: right;
              }
              .value {
                font-size: 14px;
                color: #4c596d;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
  }
  .desc {
    color: #939bab;
    font-size: 14px;
    margin: 10px 0;
  }
  .no_data {
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #4c596d;
  }
  /deep/.ant-dropdown .ant-btn {
    margin-right: 20px;
  }
}
</style>
