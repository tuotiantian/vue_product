<template>
  <div class="login_container">
    <!--xz/Login.vue-->
    <!--用户名-->
    <mt-field :placeholder="unameHolder" v-model="uname" class="myinput"></mt-field>
    <!--密码-->
    <mt-field :placeholder="upwdHolder" v-model="upwd" class="myinput"
    type="password"></mt-field>
    <!--登录按钮-->
    <mt-button size="large" class="mybutton" @click="login">登录</mt-button>
  </div>  
</template>
<script>
 export default {
   data(){
     return {
       unameHolder:"请输入用户名",
       upwdHolder:"请输入密码",
       uname:"tom",
       upwd:"123"
     }
   },methods:{
     login(){
       //完成登录
       //1:获取用户名和密码
       var u = this.uname;
       var p = this.upwd;
       //2:创建一个正则表达式
       //  字母数字下划3~12
var reg = /^[a-z0-9_]{3,12}$/i;
    //3:验证用户名 出错提示 53
    if(!reg.test(u)){
     this.$toast("用户名格式不正确");
    return;
    }
    //4:验证密码   出错提示
   if(!reg.test(p)){
    this.$toast("密码格式不正确");
    return;
   }
   //5:发送ajax请求 axios
   var url = "login";
   var obj = {uname:u,upwd:p};
   this.axios.get(url,{params:obj}).then(
     result=>{
     //1:判断服务器返回结果
     //2:code:>0 跳转Home1组件
     if(result.data.code > 0){
        this.$router.push("/Home1");
     }else{
        this.$messagebox("提示","用户名或密码有误");
     }
     //3:创建xz/Home1.vue组件
     //4:code<0
   });
   }
   }
 }   
</script>
<style scoped>
 .login_container{
   padding-top:40px;
   background-color:#ddd;
 }
</style>