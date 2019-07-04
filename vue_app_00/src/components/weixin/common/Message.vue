<template>
<!--Message.vue-->
  <div class="rootstyle"  @click="itemClick(id)">
    <div class="leftimgandtxt">
     <img :src="imgurl" class="imgstyle" />
     <div class="rightOfImg">
      <span class="title">{{title}}</span>
      <span class="subtitle">{{subtitle}}</span>
     </div>
   </div>
    <span class="sendtime">
       {{sendtime}}
    </span>
   </div>  
</template>
<script>
 export default {
   props:{
     //声明接收元素数据
     imgurl:{default:""},
     title:{default:""},
     subtitle:{default:""},
     sendtime:{default:""},
     id:{default:""},
     itemClick:{type:Function}
   },
   data(){
     return {}
   }
 }  
</script>
<style scoped>
/*1:根元素样式*/
.rootstyle{
  display:flex;
  /*水平方向两端对齐*/
  justify-content:space-between;
  /*垂直方向居中*/
  align-items:center;
}
/*2:图片与文本样式*/
.leftimgandtxt{
   display:flex;
}
/*3:图片样式*/
.imgstyle{
  width:50px;
  height:50px;
}
/*4:图片右侧文本*/
.rightOfImg{
   display:flex;
   flex-direction:column;
   justify-content:center;
   margin-left:7px;
}
/*主标题*/
.title{ 
  color:#000;font-size:17px;}
/*子标题*/
.subtitle{
  color:gray;margin-top:4px;
}
/*发送时间*/
.sendtime{
  color:gray;
}
</style>