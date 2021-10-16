<template>
  <div class="navbar-con">
    <div class="navbar-left">
      <i
        class="iconfont icon-hanbaobao hbb"
        :class="{ 'is-active': !sidebar.opened }"
        @click="changeSidebar"
      ></i>
      <myBreadcrumb></myBreadcrumb>
    </div>
    <div class="navbar-xiala">
      <span> 欢迎 {{ name }} 登录后台管理系统</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="@/assets/images/mz_small_icon.png" />
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><router-link to="/">首页</router-link></el-dropdown-item
          >
          <!-- 在组件上绑定原生事件 native -->
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
//  引入 面包屑的组件
//根据  vue.config.js 的配置，@/components  可以简写为 @c
import myBreadcrumb from "@c/myBreadcrumb/index.vue";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  components: {
    myBreadcrumb,
  },
  methods: {
    changeSidebar() {
      //修改 左侧菜单的状态值，需要 调用  store 中的actions
      this.$store.dispatch("TOGGLE_SIDEBAR_AC");
    },
    logout() {
      console.log(42);
      //调用一下  vuex 中 action
      this.$store.dispatch("LOGOUT_AC");
      //强制刷新页面
      //location.reload();
      this.$router.go(0);
    },
  },
  computed: {
    ...mapGetters(["sidebar", "name"]),
  },
};
</script>

<style scoped lang="scss">
.navbar-con {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .navbar-left {
    display: flex;
    margin-left: 20px;
    .icon-hanbaobao {
      margin-right: 10px;
    }
    .hbb {
      transform: rotate(0deg);
      transition: 1s;
      transform-origin: 50% 50%;
    }
    .is-active {
      transform: rotate(90deg);
    }
  }
  .navbar-xiala {
    img {
      width: 45px;
      margin-top: 2px;
    }
  }
}
</style>