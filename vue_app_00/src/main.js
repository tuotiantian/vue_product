import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方组件库在下面引入
//1:完整引入mint-ui
import MintUI from 'mint-ui' 
//2:单引引入mint-ui样式
import 'mint-ui/lib/style.css'
//3:将mint-ui注册vue
Vue.use(MintUI);
//4:引入图标字体样式文件
import "./font/iconfont.css"
//5:引入axios.js文件
import axios from "./axios"

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
