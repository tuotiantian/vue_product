<template>
  <div class="weixin_container">
     <div class="page-wrap">
     <!--Home.vue-->
     <!--1:顶部标题栏子组件-->
     <titlebar
      leftTitle="微信(11)"
      :rightFirstImg="require('../../assets/ic_search.png')"
      :rightSecondImg="require('../../assets/ic_add.png')"
      :search="mysearch"
      :add3="myadd3" 
     ></titlebar>
    <!--2:防止顶部内溢出-->
    <!--保留(标题)48px;-->
  <div style="margin-top:48px"></div>
  <!--3:面板 1父面板 4子面板-->
  <mt-tab-container v-model="active">
   <mt-tab-container-item id="message">
     <messagelist>
     </messagelist>
   </mt-tab-container-item>
  </mt-tab-container>
  <!--4:底部导航条-->
  <mt-tabbar v-model="active"fixed>
   <mt-tab-item id="message" @click.native="changeState(0)">
      <tabbaricon
       :selectedImage="require('../../assets/ic_weixin_selected.png')"
       :normalImage="require('../../assets/ic_weixin_normal.png')"
       :focused="currentIndex[0].isSelect"
      ></tabbaricon>
      微信
   </mt-tab-item>
   <mt-tab-item id="contact" @click.native="changeState(1)">
      <tabbaricon
       :selectedImage="require('../../assets/ic_contacts_selected.png')"
       :normalImage="require('../../assets/ic_contacts_normal.png')"
       :focused="currentIndex[1].isSelect"
      ></tabbaricon>
      通讯录
   </mt-tab-item>
   <mt-tab-item id="find" @click.native="changeState(2)">
      <tabbaricon
       :selectedImage="require('../../assets/ic_find_selected.png')"
       :normalImage="require('../../assets/ic_find_normal.png')"
       :focused="currentIndex[2].isSelect"
      ></tabbaricon>
      发现
   </mt-tab-item>
   <mt-tab-item id="me" @click.native="changeState(3)">
      <tabbaricon
       :selectedImage="require('../../assets/ic_me_selected.png')"
       :normalImage="require('../../assets/ic_me_normal.png')"
       :focused="currentIndex[3].isSelect"
      ></tabbaricon>
      我
   </mt-tab-item>
  </mt-tabbar>
  </div>
  </div>  
</template>
<script>
//1:导入顶部导航条子组件
import TitleBar from "./common/TitleBar.vue"
import MessageList from "./common/MessageList.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
//3:调用顶部导航条子组件
export default {
     data(){
       return {
       //子组件id
       active:"message",
       //使用数据保存图片焦点状态
       currentIndex:[
         {isSelect:true},
         {isSelect:false},
         {isSelect:false},
         {isSelect:false}
       ]
       }
     },//2:注册顶部导航条子组件
     methods:{
       changeState(n){
         //1:n当前按钮下标
         //2:创建循环数据
for(var i=0;i<this.currentIndex.length;i++){
//3:如果当前下标与参数下标一致
 if(n==i){
   this.currentIndex[i].isSelect=true;
 }else{
   this.currentIndex[i].isSelect=false;
 }

         //4:其它元素 false
         }
       },
       mysearch(){
         console.log("搜索")
         },
       myadd3(){
         console.log("添加")
       }
     },
     components:{
      "titlebar":TitleBar,
      "messagelist":MessageList,
      "tabbaricon":TabBarIcon
     }
}  
</script>
<style scoped>
/*1:最外层父元素*/
.weixin_container{
  overflow:hidden;/*溢出隐藏*/
}
.page-wrap{
 overflow:auto;/*溢出显示轮动条*/
 /*底部导航条高度*/
 padding-bottom:60px;
} 
/*修改tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
/*修改tabbar 选中文字颜色 40*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color:transparent;
  color:#45c018;
}
</style>