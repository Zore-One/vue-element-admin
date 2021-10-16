<template>
  <div class="product-con">
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <span><i class="iconfont icon-sousuo-copy"> </i> 筛选搜索</span>
        <el-button
          style="float: right"
          type="primary"
          size="small"
          @click="onSubmit"
          >查询</el-button
        >
        <el-button
          style="float: right"
          type="button"
          size="small"
          @click="onReset"
          >重置</el-button
        >
      </div>
      <div>
        <!-- :model 表单都绑定了哪些数据 -->
        <el-form
          ref="form"
          :inline="true"
          :model="listQuery"
          label-width="80px"
        >
          <el-form-item label="商品名称:">
            <el-input v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item label="货号:">
            <el-input v-model="listQuery.product_sn"></el-input>
          </el-form-item>
          <el-form-item label="审核状态:">
            <el-select
              v-model="listQuery.verify_status"
              placeholder="审核状态"
              class="input-w"
            >
              <el-option label="未审核" value="0"></el-option>
              <el-option label="已审核" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品品牌:">
            <el-select
              v-model="listQuery.brand_id"
              placeholder="商品品牌"
              class="input-w"
            >
              <el-option
                v-for="item in brandOptions"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品分类:">
            <el-cascader
              v-model="listQuery.product_category_id"
              :options="categoryOptions"
              @change="handleChange"
            ></el-cascader
          ></el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="clearfix">
        <span><i class="iconfont icon-dingdan1"> </i>商品数据列表</span>
        <el-button style="float: right" type="primary" size="small"
          >添加</el-button
        >
      </div>
    </el-card>
    <!-- 使用表格显示数据  :data 表格想要显示的数据-->
    <el-table :data="productList" border style="width: 100%" class="listtable">
      <el-table-column prop="id" label="编号"> </el-table-column>
      <el-table-column label="商品图片">
        <template slot-scope="scope"><img :src="scope.row.pic" /> </template>
      </el-table-column>

      <el-table-column prop="name" label="商品名称"> </el-table-column>
      <el-table-column label="价格/货号">
        <template slot-scope="scope">
          <div>价格：{{ scope.row.price }}</div>
          <div>货号：{{ scope.row.product_sn }}</div>
        </template>
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          {{ scope.row.verify_status | verify }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="updateProduct(scope.row.id)"
            >编辑</el-button
          >
          <el-button type="danger" size="mini" @click="delProduct(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 
    size-change 修改每页显示的条数
    current-change 修改当前页页码
    current-page 当前的页码  默认 给他一个1
    page-sizes  当前的每页数据  ，能够切换
    page-size  当前每页有多少条
    total    数据的总条数
    -->
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
//1.引入 axios
//import axios from "axios";

//引入 获取的数据
/*
fetchProductList 函数在  product.js 中 输出时没有使用  default  ；在其他文件中引入时需要使用 {}
如果 输出时使用了 default ，引入时不需要使用 {}
*/
import {
  fetchProductList,
  fetchBrand,
  fetchCategory,
  delProduct,
} from "@/api/product.js";

export default {
  name: "product",
  data: function () {
    return {
      productList: [],
      //这是传给后台的参数
      listQuery: {
        pageSize: 10, //默认每页显示10条
        pageNum: 1, //默认当前页是第一页
        name: null, //商品名称
        product_sn: null, //商品货号
        verify_status: null, //审核状态
        brand_id: null, //品牌的id
        product_category_id: null, //分类的二级id
      },
      total: 0, //总条数
      brandOptions: [], //品牌下拉列表数据
      categoryOptions: [], //分类的下拉列表的数据
    };
  },
  //在钩子函数中获取数据
  created() {
    //调用商品列表数据
    this.getProductList();
    //调用 品牌数据
    this.getBrand();
    //调用 商品分类的数据
    this.getCategory();
  },
  filters: {
    verify: function (value) {
      return value ? "已审核" : "未审核";
    },
  },
  methods: {
    //获取列表数据
    getProductList() {
      //调用数据时需要传参  ，参数里面的值是  每页显示多少条和当前页的页码
      fetchProductList(this.listQuery).then((res) => {
        console.log(res);
        this.productList = res.product;
        this.total = res.total;
      });
    },

    //获取品牌数据
    getBrand() {
      fetchBrand().then((res) => {
        console.log(res);
        this.brandOptions = res.data;
      });
    },
    //获取商品分类的数据并重组
    getCategory() {
      fetchCategory().then((res) => {
        console.log(res);
        var data = res.data;
        //重组数据
        data.forEach((item) => {
          let children = [];
          //添加分类的子级数据
          item.children.forEach((i) => {
            children.push({ value: i.id, label: i.name });
          });
          this.categoryOptions.push({
            value: item.id,
            label: item.name,
            children: children,
          });
        });
        console.log(this.categoryOptions);
      });
    },

    //修改每一页的数据条数
    handleSizeChange(val) {
      console.log("修改页面条数的函数运行了", val);
      this.listQuery.pageSize = val;
      this.listQuery.pageNum = 1;
      //获取数据
      this.getProductList();
    },
    //修改当前页的页码
    handleCurrentChange(val) {
      console.log("修改当前页的页码的函数运行了", val);
      //将页码信息 保存到  listQuery
      this.listQuery.pageNum = val;
      //再次获取数据
      this.getProductList();
    },

    //查询 商品
    onSubmit() {
      console.log("查询的函数运行了");
      console.log(this.listQuery);
      //重新获取数据
      this.getProductList();
    },
    //重置查询条件
    onReset() {
      this.listQuery = {
        pageSize: 10, //默认每页显示10条
        pageNum: 1, //默认当前页是第一页
        name: null, //商品名称
        product_sn: null, //商品货号
      };
      //重新获取数据
      this.getProductList();
    },
    //如果级联下拉菜单切换了选中项时会触发
    handleChange(value) {
      console.log("级联菜单切换了", value);
      if (value !== null && value.length === 2) {
        this.listQuery.product_category_id = value[1];
      }
      console.log(this.listQuery.product_category_id);
    },
    //跳转到 修改页面
    updateProduct: function (id) {
      console.log(id);
      this.$router.push("/pms/productUpdate/" + id);
    },
    //删除的函数
    delProduct: function (id) {
      console.log(id);
      //1.删除前需要提示
      this.$confirm("此操作将永久删除该条商品数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delProduct({ id: id }).then((res) => {
            console.log(res);
            if (res.type == "success") {
              this.$message({
                type: "success",
                message: "删除成功!",
                duration: 2000,
              });
              //2.删除后需要刷新数据
              //重新获取数据
              this.getProductList();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
            duration: 2000,
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
.product-con {
  padding: 10px;
  margin-bottom: 100px;
  .input-w {
    width: 100px;
  }
  .listtable {
    margin-top: 10px;

    img {
      width: 50px;
    }
  }
  .box-card {
    margin-bottom: 10px;
  }
}
</style>