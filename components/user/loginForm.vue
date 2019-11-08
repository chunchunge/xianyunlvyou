<template>
  <el-form :model="form" ref="form" :rules="rules">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="from-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>
    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "", // 登录用户名/手机
        password: "" // 登录密码
      },
      // 表单规则
      rules: {
        //   输入不能为空
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleLoginSubmit() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  padding: 25px;
}
.form-item {
  margin-bottom: 20px;
}
.font-text {
  font-size: 12px;
  color: #409eff;
  text-align: center;
  line-height: 1;
}
.submit {
  width: 100%;
  margin-top: 10px;
}
</style>