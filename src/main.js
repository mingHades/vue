import Vue from 'vue'
import App from './App'
import router from './router'

// 引入懒加载模块
import VueLazyload from 'vue-lazyload'
// 配置懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 当你请求的图片 请求失败 就会使用 error 里的图片替换
  error: require('../static/images/mo.jpg'),
  // 当我们正在请求图片的时候，会用 loading 里的图片替换
  loading: require('../static/images/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
