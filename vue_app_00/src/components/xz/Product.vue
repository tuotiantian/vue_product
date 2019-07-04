<template>
   <div class="product_app">
     <!--Product.vue-->
     <div class="goods-item" v-for="(item,i) of list" :key="i">
       <img :src="'http://127.0.0.1:3000/img/'+item.img_url"/>
       <h6>{{item.title}}</h6>
       <div class="info">
         <span class="now">{{item.price}}</span>
       </div>
     </div>
     <!--按钮-->
      <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button> 
   </div>  
</template>
<script>
  export default {
    data(){
      return {
        list:[],
        pno:0,
        ps:4
      }
    },
    methods:{
      loadMore(){//加载更多的数据
        var url = "product";
        this.pno++;
        //创建参数对象
        var obj = {pno:this.pno,pageSize:this.ps};
        this.axios.get(url,{params:obj}).then(result=>{
          /*加载更多*/
          var rows = this.list.concat(result.data.data);this.list =rows;
        })
      }
    },
    created() {
       this.loadMore();
    },
  }  
</script>
<style>
  /*最外层父元素*/
  .product_app{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4px;
  }
  .product_app .goods-item{
    width:49%;
    border:1px solid #ccc;
    box-sizing: border-box;
    margin:2px 0;
    padding:2px;
    display: flex;
    flex-direction:column;
    min-height:247px;
    border-radius: 5px;
  }
  /*商品图片,充满父元素*/
  .product_app .goods-item img{
    width: 100%;
  }
</style>
