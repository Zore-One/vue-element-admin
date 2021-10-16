<template>
  <div class="pro_con">
    <el-card class="box-card">
      <div class="clearfix">
        <span> 商品分类列表</span>
        <el-button
          style="float: right"
          type="primary"
          size="mini"
          @click="goadd"
          >添加</el-button
        >
        <el-button
          style="float: right"
          type="primary"
          size="mini"
          v-if="parent_id != 0"
          @click="goParentLevel"
          >返回上一级</el-button
        >
      </div>
    </el-card>

    <el-table :data="cateList" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="类型名称" width="180">
      </el-table-column>
      <el-table-column label="级别">
        <template slot-scope="scope">
          {{ scope.row.level | levelF }}
        </template>
      </el-table-column>
      <el-table-column prop="product_count" label="商品数量"> </el-table-column>
      <el-table-column prop="product_unit" label="数量单位"> </el-table-column>
      <el-table-column label="是否显示">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.show_status"
            :active-value="1"
            :inactive-value="0"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="showNextLevel(scope.row.id)"
            size="mini"
            :disabled="scope.row.level != 0"
            >查看下级</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="listQuery.pageNum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="listQuery.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { fetchProductCateList } from "@/api/product.js";
export default {
  name: "productCate",
  data: function () {
    return {
      cateList: [],
      listQuery: {
        pageNum: 1,
        pageSize: 10,
      },
      total: 0,
      parent_id: 0, //默认0  表示 顶级分类
    };
  },
  //async await  generator 的语法糖，可以将异步操作转同步操作
  created() {
    this.getProductCateList();
  },
  filters: {
    levelF: function (value) {
      return value ? "二级" : "一级";
    },
  },
  methods: {
    getProductCateList: async function () {
      //分页的数据需要传到 后台
      var res = await fetchProductCateList(this.listQuery, this.parent_id);
      this.cateList = res.data;
      this.total = res.total; //总条数
    },
    //跳转到添加页面
    goadd: function () {
      //js里面的路由跳转
      this.$router.push("/pms/productCateAdd");
    },
    //修改每一页的数据条数
    handleSizeChange(val) {
      console.log("修改页面条数的函数运行了", val);
      this.listQuery.pageSize = val;
      this.listQuery.pageNum = 1;
      //获取数据
      this.getProductCateList();
    },
    //修改当前页的页码
    handleCurrentChange(val) {
      console.log("修改当前页的页码的函数运行了", val);
      //将页码信息 保存到  listQuery
      this.listQuery.pageNum = val;
      //再次获取数据
      this.getProductCateList();
    },
    //查看下级
    showNextLevel: function (id) {
      this.parent_id = id;
      //重新获取数据
      this.getProductCateList();
    },
    //返回上一级
    goParentLevel: function () {
      this.parent_id = 0;
      //重新获取数据
      this.getProductCateList();
    },
  },
};
</script>

<style scoped lang="scss">
.pro_con {
  padding: 10px;
  .box-card {
    margin-bottom: 10px;
  }
}
</style>