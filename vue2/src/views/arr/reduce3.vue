<!--
 * @Author: your name
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2021-05-11 16:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\tankuan.vue
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in groupedFilialeDTOList" :key="index">
        {{ item.timeCoutCount }}: {{ item.names }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      filialeDTOList: [
        {
          name: "儋州",
          timeCoutCount: 1,
        },
        {
          name: "海口",
          timeCoutCount: 1,
        },
        {
          name: "三亚",
          timeCoutCount: 3,
        },
        {
          name: "白沙",
          timeCoutCount: 2,
        },
        {
          name: "陵水",
          timeCoutCount: 2,
        },
      ],
      groupedFilialeDTOList: [],
      test: [
        { timeCoutCount: 1, names: "儋州, 海口" },
        { timeCoutCount: 3, names: "三亚" },
        { timeCoutCount: 2, names: "白沙, 陵水" },
      ],
    };
  },
  created() {
    this.groupedFilialeDTOList = this.filialeDTOList.reduce((acc, current) => {
      const existing = acc.find(
        (item) => item.timeCoutCount === current.timeCoutCount
      );
      if (existing) {
        existing.names += `, ${current.name}`;
      } else {
        acc.push({ timeCoutCount: current.timeCoutCount, names: current.name });
      }
      return acc;
    }, []);
    // 排序：将name属性中不包含逗号的对象排到前面
    this.groupedFilialeDTOList.sort((a, b) => {
      const aHasComma = a.names.includes(",");
      const bHasComma = b.names.includes(",");
      if (!aHasComma && bHasComma) return -1;
      if (aHasComma && !bHasComma) return 1;
      return 0;
    });
  },
  methods: {},
};
</script>

<style scoped>
.view {
  padding: 0 32px;
}
.title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 600;
}
p {
  color: #333333;
  font-weight: 600;
  font-size: 28px;
  margin: 20px;
}
.desc {
  font-size: 28px;
  text-indent: 20px;
  line-height: 60px;
}
.fujian {
  display: flex;
  font-size: 28px;
  line-height: 60px;
}
.fujian_left {
  width: fit-content;
  margin-right: 20px;
}
.fujian_right {
  flex: 1;
  color: blue;
}
.link {
  text-decoration: underline;
  margin-top: 20px;
}
</style>
