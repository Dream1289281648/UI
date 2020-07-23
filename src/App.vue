<template>
  <div id="app">
    <my-name></my-name>
    <bottom-nav></bottom-nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import BottomNav from "@/components/common/BottomNav.vue";
import MyName from "@/components/common/MyName.vue";

export default {
  components: {
    BottomNav,
    MyName,
  },
};
</script>
<style scoped>
#app {
  padding-top: 116px;
}
</style>