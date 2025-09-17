<!-- SmartBreadcrumb.vue - 自动从路由生成面包屑 -->
<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li 
        v-for="(crumb, index) in crumbs" 
        :key="crumb.path"
        class="breadcrumb-item"
        :class="{ 'is-active': index === crumbs.length - 1 }"
      >
        <router-link 
          v-if="index < crumbs.length - 1" 
          :to="crumb.path"
          class="breadcrumb-link"
        >
          {{ crumb.label }}
        </router-link>
        <span v-else class="breadcrumb-current">{{ crumb.label }}</span>
        <span 
          v-if="index < crumbs.length - 1" 
          class="breadcrumb-separator"
        >
          >
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'SmartBreadcrumb',
  computed: {
    crumbs() {
      const pathArray = this.$route.path.split('/').filter(item => item);
      const breadcrumbs = [];
      
      let path = '';
      
      // 添加首页面包屑
      breadcrumbs.push({
        label: '首页',
        path: '/'
      });
      
      // 为每个路径段生成面包屑
      pathArray.forEach((segment, index) => {
        path += `/${segment}`;
        
        // 尝试从路由元信息获取标签或使用路径段
        const route = this.$router.resolve(path).route;
        const label = route.meta?.breadcrumb || 
                     route.meta?.title || 
                     this.capitalize(segment);
        
        breadcrumbs.push({
          label,
          path
        });
      });
      
      return breadcrumbs;
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  padding: 12px 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: #1890ff;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: #40a9ff;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #333;
  font-weight: 500;
}

.breadcrumb-separator {
  margin: 0 8px;
  color: #999;
}
</style>