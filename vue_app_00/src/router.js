//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
//1:引入Exam01.vue 组件 39
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from
"./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Homework04 from "./components/exam/Homework04.vue"
import Exam05 from "./components/exam/Exam05.vue"
import ExamContainer06 from "./components/exam/ExamContainer06.vue"
import ExamContainer07 from "./components/exam/ExamContainer07.vue"
import ExamTabbar08 from "./components/exam/ExamTabbar08.vue"
import F10 from "./components/exam/F10.vue"
import Home from "./components/weixin/Home.vue"
import MessageList from "./components/weixin/common/MessageList.vue"
import Login from "./components/xz/Login.vue"
import Home1 from "./components/xz/Home1.vue"
import Product from "./components/xz/Product.vue"
import Cart from "./components/xz/Cart.vue"


Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Cart',component:Cart},
    {path:'/Product',component:Product},
    {path:'/Home1',component:Home1},
    {path:'/Login',component:Login},
    {path:'/MessageList',component:MessageList},
    {path:'/Home',component:Home},
    {path:'/F10',component:F10},
    {path:'/ExamTabbar08',component:ExamTabbar08},
    {path:'/ExamContainer07',component:ExamContainer07},
    {path:'/ExamContainer06',component:ExamContainer06},
    {path:'/Exam05',component:Exam05},
    {path:'/Homework04',component:Homework04},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam02',component:Exam02},
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01}
  ]
})
