<template>
  <div>
    修改商品

    <el-form
      :model="listQuery"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品分类:" prop="product_category_id">
        <el-cascader
          v-model="listQuery.product_category_id"
          :options="categoryOptions"
          @change="handleChange"
        ></el-cascader
      ></el-form-item>
      <el-form-item label="商品名称:" prop="name">
        <el-input v-model="listQuery.name"></el-input>
      </el-form-item>
      <el-form-item label="副标题:" prop="sub_title">
        <el-input v-model="listQuery.sub_title"></el-input>
      </el-form-item>
      <el-form-item label="商品品牌:" prop="brand_id">
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
      <el-form-item label="商品介绍:" prop="description">
        <el-input v-model="listQuery.description"></el-input>
      </el-form-item>
      <el-form-item label="图片链接地址:" prop="pic">
        <el-input v-model="listQuery.pic"></el-input>
      </el-form-item>
      <el-form-item label="商品货号:" prop="product_sn">
        <el-input v-model="listQuery.product_sn" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="商品售价:" prop="price">
        <el-input v-model="listQuery.price" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="市场价:" prop="original_price">
        <el-input
          v-model="listQuery.original_price"
          class="input-width"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品库存:" prop="stock">
        <el-input v-model="listQuery.stock" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="计量单位:" prop="unit">
        <el-input v-model="listQuery.unit" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="商品重量:" prop="weight">
        <el-input v-model="listQuery.weight" class="input-width"></el-input>克
      </el-form-item>
      <el-form-item label="排序:" prop="sort">
        <el-input v-model="listQuery.sort" class="input-width"></el-input>
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
//通过id  获取一条商品数据
import {
  fetchBrand,
  fetchCategory,
  updateProduct,
  getProductOne,
} from "@/api/product.js";
export default {
  name: "productadd",
  data: function () {
    return {
      //将要传给后台的数据
      listQuery: {
        brand_id: null, //商品品牌id
        brand_name: "", //商品品牌名称
        delete_status: 0, //删除标志位，默认填0，表示未删除
        description: "", //商品介绍
        name: "", //商品名称
        original_price: 0, //市场价
        pic: "", //商品图片的url地址
        price: 0, //商品售价
        product_category_id: null, //分类id
        product_category_name: "", //分类名称
        product_sn: "", //商品货号
        sort: 0, //排序
        stock: 0, //商品库存
        sub_title: "", //副标题
        unit: "", //计量单位
        weight: 0, //商品重量
        sale: 0, //商品销量
        publish_status: 0, //上架
        recommand_status: 0,
        new_status: 0,
        verify_status: 0,
      },
      //表单的验证
      rules: {
        product_category_id: [
          { required: true, message: "请选择分类", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在3-100个字符之间",
            trigger: "blur",
          },
        ],
        sub_title: [
          { required: true, message: "请输入副标题名称", trigger: "blur" },
        ],
        brand_id: [{ required: true, message: "请选择品牌", trigger: "blur" }],
        description: [
          { required: true, message: "请输入商品介绍", trigger: "blur" },
        ],
        pic: [
          { required: true, message: "请输入图片链接地址", trigger: "blur" },
        ],
      },
      brandOptions: [], //品牌下拉列表数据
      categoryOptions: [], //分类的下拉列表的数据
    };
  },
  created() {
    //获取一条商品信息
    console.log(this.$route.params.id);
    getProductOne({ id: this.$route.params.id }).then((res) => {
      console.log(res);
      this.listQuery = res.data;
    });

    //调用 品牌数据
    this.getBrand();
    //调用 商品分类的数据
    this.getCategory();
  },
  methods: {
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
    //如果级联下拉菜单切换了选中项时会触发
    handleChange(value) {
      console.log("级联菜单切换了", value);
      if (value !== null && value.length === 2) {
        this.listQuery.product_category_id = value[1];
      }
      console.log(this.listQuery.product_category_id);
    },
    //提交 表单
    submitForm(formName) {
      console.log("表单提交了");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //填写品牌名称
          this.brandOptions.forEach((i) => {
            if (i.id == this.listQuery.brand_id) {
              this.listQuery.brand_name = i.name;
            }
          });
          //填写分类名称
          this.categoryOptions.forEach((item) => {
            item.children.forEach((i) => {
              if (i.value == this.listQuery.product_category_id) {
                this.listQuery.product_category_name = i.label;
              }
            });
          });

          //表单验证通过
          console.log("表单验证通过", this.listQuery);
          //调用后台接口将数据传给 服务器，生成一条新的数据
          updateProduct(this.listQuery).then((res) => {
            console.log(res);
            if (res.msg == "修改成功") {
              this.$message({
                message: "成功修改商品",
                duration: 1000,
                type: "success",
              });
              this.$router.push("/pms/product");
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

<style>
.demo-ruleForm {
  width: 600px;
}
</style>