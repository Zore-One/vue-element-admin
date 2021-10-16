<template>
  <div>
    商品类型
    <el-table :data="attrList" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="类型名称" width="180">
      </el-table-column>
      <el-table-column prop="attribute_count" label="属性数量">
      </el-table-column>
      <el-table-column prop="param_count" label="参数数量"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small"
            >编辑</el-button
          >
          <el-button type="error" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//引入 商品类型的  获取数据的 函数
import { fetchProductAttrList } from "@/api/product.js";
export default {
  name: "productAttr",
  data: function () {
    return {
      attrList: [],
    };
  },
  async created() {
    var res = await fetchProductAttrList();
    this.attrList = res.data;
    //获取数据
    // fetchProductAttrList().then((res) => {
    //   console.log(res);
    //   this.attrList = res.data;
    // });
  },
  methods: {
    //编辑的函数
    handleClick: function (row) {
      console.log(row);
      //console.log("/pms/productAttrUpdate/" + row.id + "/" + row.name);
      this.$router.push("/pms/productAttrUpdate/" + row.id + "/" + row.name);
      //this.$router.push("/pms/productAttrUpdate/1/aaa");
    },
  },
};
</script>

<style>
</style>