<template>
   <div class="page-head">
     <span>{{leftTitle}}</span>
<div class="right-head">
 <div @click="search" class="searchdiv">
 <img :src="rightFirstImg" style="width:25px;"/>
 </div>
<div @click="add3" class="searchdiv" style="margin-left:20px;">
<img :src="rightSecondImg" style="width:25px;margin-right:15px;"/>
</div>
     </div>
   </div>  
</template>
<script>
  export default {
  //左侧文字 右侧两张图片
    props:{
     leftTitle:{default:""},
     rightFirstImg:{default:""},
     rightSecondImg:{default:""},
     search:{type:Function},
     add3:{type:Function}
    },
    data(){
      return {}
    }
  }  
</script>
<style scoped>
  /*1:最外层父元素*/
  .page-head{
    display:flex;/*弹性布局*/
    position:fixed;/*固定定位*/
    z-index:999;/*显示上面*/
    width:100%;/*与父元素相同*/
    /*与父元素相同*/
  justify-content:space-between;
    /*垂直居中*/
    align-items:center;
    background-color:#3e3a39;
    padding-left:7px;
    padding-right:7px;
    height:48px;
    color:#fff;
    font-size:18px

  }
  /*2:右侧图片区域*/
  .right-head{
    display:flex;
    /*默认子元素水平*/
  }
  /*3:图片*/
  .searchdiv{
    display:flex;
    align-items:center;/*垂直居中*/
    height:48px;
  }
</style>