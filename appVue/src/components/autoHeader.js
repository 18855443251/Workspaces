import Vue from 'vue'

let isPhone = window.innerWidth < 768;
let isSmall = window.innerWidth <= 375;

// 防抖函数
function debounce(func, wait = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export const autoHeader = {
  bind(el, binding, vnode) {

    let options = binding.value;
    console.log('autoHeader', options);
    const vm = vnode.context;
    // 创建防抖处理函数
    const debouncedUpdate = debounce(() => {
      computedColumnWidths(vm.columns, vm.tableList, options);
      vm.$nextTick(() => {
        // 确保 DOM 更新完成后再强制刷新
        vm.$forceUpdate();
      });
    }, 150);

    // 初始计算
    debouncedUpdate();

    // 监听数据变化
    const unwatch = vm.$watch('tableList', debouncedUpdate, { deep: true });


    // 获取表格头部元素
    const tableHeader = el.querySelector('.ant-table-header');
    if (!tableHeader) return;
    // 创建 ResizeObserver 监听表格头部尺寸变化
    const resizeObserver = new ResizeObserver(() => {
      const heightValue = tableHeader.getBoundingClientRect().height;
      // const widthValue = tableHeader.getBoundingClientRect().width;
      // let tableWidth = calculateTotalWidth(vm.columns);
      // if (tableWidth - widthValue > -50) {
      //   computedColumnWidths(vm.columns, vm.tableList, { maxWidth: 150 });
      // } else {
      //   computedColumnWidths(vm.columns, vm.tableList, { maxWidth: 300 });
      // }
      computedColumnWidths(vm.columns, vm.tableList);
      if (heightValue > 63) {
        tableHeader.style.setProperty('overflow', 'hidden', 'important');
      }
    });
    // 开始监听
    resizeObserver.observe(tableHeader);
  },
};

function calculateTotalWidth(columns) {
  if (!Array.isArray(columns)) {
    console.error('columns 必须是一个数组');
    return 0;
  }

  let totalWidth = 0;

  columns.forEach(column => {
    const { width } = column;
    if (width) totalWidth += parseInt(width);
  });

  return totalWidth;
}

// 注册全局指令
Vue.directive('auto-header', autoHeader);


Vue.prototype.$windowWidth = window.innerWidth - 50;
Vue.prototype.$isPhone = isPhone
Vue.prototype.$isSmall = isSmall


/**
 * 计算表格列的最佳宽度
 * @param {Array} columns - 表格列配置
 * @param {Array} tableList - 表格数据
 * @param {Object} options - 配置选项
 */
function computedColumnWidths(columns, tableList, options = {}) {
  const {
    minWidth = 100,
    maxWidth = isPhone ? 150 : 300,
    chineseCharWidth = 12,
    otherCharWidth = 10,
    padding = 20
  } = options;

  const widthMap = {};
  const chineseCharRegex = /[\u4e00-\u9fa5]/;

  // 计算文本的预估宽度
  function calculateTextWidth(text) {
    if (!text) return 0;
    let width = 0;
    for (const char of String(text)) {
      width += chineseCharRegex.test(char)
        ? chineseCharWidth
        : otherCharWidth;
    }
    return width + padding;
  }

  // 1. 基于表头标题计算基础宽度
  columns&&columns.forEach(column => {
    const { dataIndex, title } = column;
    if (!dataIndex) return;

    // 20是排序按钮的宽度
    const titleWidth = calculateTextWidth(title) + 20;
    widthMap[dataIndex] = Math.max(titleWidth, minWidth);
  });

  // 2. 基于内容最大长度调整宽度
  tableList&&tableList.forEach(row => {
    columns&&columns.forEach(column => {
      const { dataIndex } = column;
      if (!dataIndex) return;

      const cellValue = row[dataIndex];
      const cellText = cellValue === undefined || cellValue === null
        ? ''
        : String(cellValue);

      let contentWidth = calculateTextWidth(cellText);
      if (column.iconWidth) {
        contentWidth += column.iconWidth;
      }

      // 取当前宽度和内容宽度的最大值
      if (contentWidth > widthMap[dataIndex]) {
        widthMap[dataIndex] = contentWidth;
      }
    });
  });

  // 3. 应用最大宽度限制
  Object.keys(widthMap).forEach(dataIndex => {
    widthMap[dataIndex] = Math.min(widthMap[dataIndex], maxWidth);
  });

  // 应用计算的宽度到列配置
  columns&&columns.forEach(column => {
    column.width = widthMap[column.dataIndex];
    if (column.width) {
      // 固定宽度优先级最高
      column.width = column.width;
    }
    if (column.maxWidth) {
      // 应用自定义最大宽度
      column.width = Math.min(widthMap[column.dataIndex], column.maxWidth);
    }
  });
}








