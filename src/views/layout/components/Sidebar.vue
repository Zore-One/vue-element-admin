<template>
  <div class="mymenu">
    sidebar:{{ sidebar.opened }}
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="!sidebar.opened"
    >
      <!-- :default-active="$route.path" -->
      <el-menu-item index="/home">
        <router-link to="/home">
          <i class="iconfont icon-home"></i>
          <span> 首页</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="/super" v-if="roleid == 1">
        <router-link to="/super">
          <i class="iconfont icon-home"></i>
          <span> 超级管理员</span>
        </router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-shangpin-tianchong"></i>
          <span> 商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pms/product">
            <router-link to="/pms/product">
              <i class="iconfont icon-liebiao1"></i>
              <span> 商品列表</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/pms/productadd">
            <router-link to="/pms/productadd">
              <i class="iconfont icon-tianjia"></i><span> 添加商品</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/pms/productCate">
            <router-link to="/pms/productCate">
              <i class="iconfont icon-fenlei1"></i><span> 商品分类</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/pms/productAttr">
            <router-link to="/pms/productAttr">
              <i class="iconfont icon-fenlei"></i><span> 商品类型</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/pms/brand">
            <router-link to="/pms/brand">
              <i class="iconfont icon-pinpaitemai"></i><span> 品牌管理</span>
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
//引入getters的辅助函数
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  mounted() {
    //当前页面的路径地址
    console.log(this.$route.path);
  },
  methods: {
    handleOpen: function () {
      console.log("菜单打开了");
    },
    handleClose: function () {
      console.log("菜单关闭了");
    },
  },
  computed: {
    ...mapGetters(["sidebar", "roleid"]),
  },
};
</script>

<style scoped lang="scss">
.mymenu {
  .el-menu {
    border-right: none;
  }
}
</style>