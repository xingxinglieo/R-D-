import Vue from 'vue'
import App from './App'

//Vuex
import { store } from '@/store.js'
Vue.prototype.$store = store;

//顶部栏组件
import cuCustom from '@/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)
 
//提示组件 
import tip from '@/components/xing-tip.vue'
Vue.component('tip', tip);

//弹框组件
import modal from '@/components/xing-modal.vue'
Vue.component('modal', modal);

//涟漪组件
import ripple from '@/components/ripple.vue'
Vue.component('ripple',ripple);

//radio组件
import xingRadio from '@/components/xing-radio.vue'
Vue.component('xingRadio', xingRadio);

// 仿vue-router插件
import Router from '@/js_sdk/hhyang-uni-simple-router/index.js'
import routerConfig from '@/router-config.js'
Vue.use(Router)
const router = new Router(routerConfig);

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
