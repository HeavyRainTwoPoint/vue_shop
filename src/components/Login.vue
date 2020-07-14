<template>
    <div class="login_container">
        <!-- 头像区域 -->
        <div class="login_box">
            <div class="avatar-box">
                <img src="../assets/logo.png" alt="">
            </div>

            <!-- 表单区域 -->
            <el-form ref="loginFormRef" class="login_form" :model="loginForm" :rules="loginFormRules">
                <!-- 输入区 -->
                <el-form-item prop='username'>
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" placeholder="用户名" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="密码" type="password" ></el-input>
                </el-form-item>
                <!-- 按钮区 -->
                <el-form-item class='btns'>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: "",
                password: ""
            },
            loginFormRules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur"},
                    { min: 3, max: 10, message: "长度在3-6个字符之间", trigger: "blur"}
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur"},
                     { min: 6, max: 6, message: "密码为6位！", trigger: "blur"}
                ]
            }
        }
    },
    methods: {
        resetLoginForm() {
            // console.log(this);
            this.$refs.loginFormRef.resetFields();
        },
        login() {
            this.$refs.loginFormRef.validate(valid => {
                //触发的表单校验可以接受一个回调函数，返回的值是Boolean型
                // console.log(valid);

                // 发起后端请求
                // this.$http.post("login", this.loginForm);

                // 通过上面的请求获取到的后端返回数据是一个Promise对象

                // 如果需要直接获取到data结果，可以这样：
                // 注意：上面的valid参数需要添加一个 async 关键字修饰
                // if(!valid) {
                //     return ;
                // }
                // 此处获取到的是包含大量数据的对象，
                // const res = await this.$http.post("login", this.loginForm);
                // 以下方式可以直接获取到后端返回的数据
                // const {data: res} = await this.$http.post("login", this.loginForm);
                if(valid) {
                    this.$message.success("登录成功！");
                    this.$router.push("/home");
                } else {
                    this.$message.error("登录失败！"); 
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .avatar-box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left:50%;
        transform: translate(-50%, -50%);
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
</style>>
