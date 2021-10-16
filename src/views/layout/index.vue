<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar" :class="sidebar.opened ? 's-w' : 's-w2'"></Sidebar>
    <div class="main-container" :class="sidebar.opened ? 'm-left' : 'm-left2'">
      <Navbar class="navbar"></Navbar>
      <div class="main-con">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
//引入 头部和左侧的组件
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

import { mapGetters } from "vuex";

export default {
  name: "layout",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  components: { Navbar, Sidebar },
};
</script>
<style scoped lang="scss">
// lang="scss" 使用scss
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    overflow: hidden;
    background: rgb(84, 92, 100);
    color: #fff;
  }
  .s-w {
    width: 200px;
  }
  .s-w2 {
    width: 64px;
  }
  .main-container {
    clear: both;
    min-height: 100%;
    .navbar {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      background: lightyellow;
    }
    .main-con {
      width: 100%;
    }
  }
  .m-left {
    margin-left: 200px;
  }
  .m-left2 {
    margin-left: 64px;
  }
}
</style>