<template>
  <div>
    <el-card class="box-card">
      <div class="clearfix box-title" slot="header">
        <span>0726电商后台管理系统</span>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名：" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          //调用了 store 中的 action（写了登录操作）
          this.$store.dispatch("LOGIN_AC", this.ruleForm).then((res) => {
            console.log(res);
            if (res.status == 200) {
              this.$message({
                message: "恭喜你，登录成功",
                type: "success",
                duration: 1000,
              });
              this.$router.push("/");
            }
          });
        } else {
          console.log("error submit!!");

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped lang="scss">
.box-card {
  width: 500px;
  height: 400px;
  margin: 100px auto;
  .box-title {
    background: #409eff;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    height: 80px;
    line-height: 80px;
  }
}
</style>