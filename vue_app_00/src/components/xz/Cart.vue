<template>
<!--购物车组件-->
    <div class="cart">
        <div class="selectALL">
            <!--全选-->
            全选
            <input type="checkbox" @change="selectAll"/>
        </div>
        <div class="cart-item " v-for="(item,i) of list" :key="i">
            <!--商品列表-->
            <div class="leftImgText">
                <input type="checkbox" v-model="item.cb"/>
                <img :src="'http://127.0.0.1:3000/img/'+item.img_url"/>
                <div class="price">
                     <span>{{item.price}}</span>
                </div>
            </div>
            <!-- 删除选中商品 -->
            <mt-button :data-id="item.id" @click="delItem">删除</mt-button>
        </div>
        <div>
            <mt-button>
            <!-- 删除选中商品 -->
            </mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        delItem(e){
            //1.获取当前商品id
            var id = e.target.dataset.id;
            console.log(id)
            //2.显示交互确认框27
            //3.如果用户选择"确认"
            this.$messagebox.confirm("是否删除指定数据").then(
                action=>{
                    var url = "delItem";
                    var obj = {id:id};
                    this.axios.get(url,{params:obj}).then(result=>{
                        //重新加载数据相当刷新
                        this.loadMore();
                    })
                }).catch(err=>{
                    return;
                })

                // 4.发送ajax删除数据
                //5.如果用户选择"取消"
        },
        selectAll(e){
            var cb=e.target.checked;
            for(var item of this.list){
                item.cb = cb
            }
        },
        loadMore(){
            //1:创建url
            var url ="cart";
            //发送ajax请求
            this.axios.get(url).then(result=>{
                //this.list = result.data.data;
                //1.获取服务器数组
                var rows=result.data.data;
                //2.创建循环为数组中每个对象添加cb属性,cb控制商品前复选框
                for(var  item of rows){
                    item.cb = false;
                }
                //3:将新数据保存
                this.list = rows;
            })
        }
    }
}
</script>
<style scoped>
    /*最外层弹性布局*/
    .cart-item{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .leftImgText{
        /*默认子元素水平对齐*/
        display:flex;
    }
    .leftImgText img{
        width :50px;
        height: 50px;
    }
    .price{
        margin-left: 25px;
    }
</style>

 