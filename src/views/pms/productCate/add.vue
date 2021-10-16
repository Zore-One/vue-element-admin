<template>
  <div class="pro_con">
    <el-card class="box-card">
      <div class="clearfix">
        <i class="iconfont icon-sousuo-copy"> </i>
        <span> 添加商品分类</span>
      </div>
    </el-card>

    <el-form
      :model="listQuery"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="分类名称:" prop="name">
        <el-input v-model="listQuery.name"></el-input>
      </el-form-item>
      <el-form-item label="上级分类:" prop="name">
        <el-select v-model="listQuery.parent_id" placeholder="请选择">
          <el-option
            v-for="item in productCateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数量单位:" prop="product_unit">
        <el-input v-model="listQuery.product_unit"></el-input>
      </el-form-item>
      <el-form-item label="排序:" prop="sort">
        <el-input v-model="listQuery.sort"></el-input>
      </el-form-item>
      <el-form-item label="是否显示:" prop="show_status">
        <el-radio-group v-model="listQuery.show_status">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否显示在导航栏:" prop="nav_status">
        <el-radio-group v-model="listQuery.nav_status">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="关键词:" prop="keywords">
        <el-input v-model="listQuery.keywords"></el-input>
      </el-form-item>
      <el-form-item label="分类描述:" prop="description">
        <el-input v-model="listQuery.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createProductCate, fetchProductCateList } from "@/api/product.js";
export default {
  name: "productCateAdd",
  data() {
    return {
      listQuery: {
        description: "", //描述
        icon: "", //小图标
        keywords: "", //关键词
        name: "", //名称
        nav_status: 0, //是否显示在导航
        parent_id: 0, //上级节点id
        product_unit: "", //数量单位
        product_count: 0, //商品数量
        show_status: 0, //是否显示
        sort: 0, //排序
        level: 0, //0表示一级分类 1表示二级分类
      },
      rules: {
        name: [
          { required: true, message: "请输入商品分类名称", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在3-100个字符之间",
            trigger: "blur",
          },
        ],
      },
      productCateOptions: [], //上级分类的数据
    };
  },
  created() {
    //获取顶级分类信息
    this.getProductCate();
  },
  methods: {
    getProductCate: async function () {
      const res = await fetchProductCateList();
      console.log(res);
      //this.productCateOptions = res.data;

      this.productCateOptions.push({ value: 0, label: "顶级分类" });
      res.data.forEach((item) => {
        this.productCateOptions.push({ value: item.id, label: item.name });
      });
      console.log(this.productCateOptions);
    },

    //添加商品分类
    submitForm: function (formName) {
      console.log("表单提交了");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //如果添加的不是顶级分类的话，需要将level的值赋值为 1
          if (this.listQuery.parent_id != 0) {
            this.listQuery.level = 1;
          }

          //表单验证通过
          console.log("表单验证通过", this.listQuery);
          //调用后台接口将数据传给 服务器，生成一条新的数据
          createProductCate(this.listQuery).then((res) => {
            console.log(res);
            if (res.msg == "添加成功") {
              this.$message({
                message: "成功添加商品分类",
                duration: 1000,
                type: "success",
              });
              this.$router.push("/pms/productCate");
            }
          });
        } else {
          console.log("表单验证没通过");
          return false;
        }
      });
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