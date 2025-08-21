<template>
  <div>
    <a-config-provider :locale="$zhCN">
      <keep-alive :include="[]">
        <router-view class="router-view"></router-view>
      </keep-alive>
    </a-config-provider>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {},
};
</script>
