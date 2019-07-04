<template>
<!--MessageList.vue-->
   <div>
    <message v-for="(item,i) of list.data" :key="i"
      :imgurl="require('../../../assets/a_7.png')"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :id="item.id"
      :itemClick="clickItem"
      class="itemstyle"
    ></message>
   </div>  
</template>
<script>
//1:引入子组件
import  Message from './Message'
//1.1:引入json文件[数据]
//json 文件引入当前项目 js obj
import messagejson from "../json/messagelist.json"
export default {
   data(){
     return {
       list:messagejson
     }
   },//2:注册子组件
   methods:{
     clickItem(id){
       console.log(id);
     }
   },
   components:{
     "message":Message
   }
}
//3:调用子组件
</script>
<style scoped>
 /*消息组件外观*/
 .itemstyle{
   padding:5px;
   border-bottom:1px solid #d9d9d9
 }
</style>