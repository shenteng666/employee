<template>
  <div>
    <el-form ref="forLoginForm" :model="User" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">个人信息管理</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="User.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="User.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" class="login-btn" @click="onSubmit(User)">登录</el-button>
      </el-form-item>
      <el-button type="text" size="medium" class="register-btn" @click="register">还没有账号?立即注册</el-button>

    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./controller.js"/>

<style>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 120px auto;
    padding: 35px 50px 15px 15px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
  .login-btn{
    width: 250px;
  }
  .register-btn{
    margin-left: 240px;
  }
</style>
