import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Index from '@/components/Index'
import Gzh from '@/components/Gzh'
import Me from '@/components/Me'
// 引入 主题相关的组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'
import Weex from '@/components/topics/Weex'
// 详情页的组件
import Show from '@/components/topics/Show'

// import Loading from '@/components/Loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      // 子路由
      children:[
        {
          path:'/',
          name:'All',
          component:All
        },
        {
          path:'good',
          name: 'Good',
          component: Good
        },
        {
          path:'share',
          name: 'Share',
          component: Share
        },
        {
          path:'ask',
          name: 'Ask',
          component: Ask
        },
        {
          path:'job',
          name: 'Job',
          component: Job
        },
        {
          path:'weex',
          name: 'Weex',
          component:Weex 
        },
        // 内容页
        {
          path:'show/:id',
          name: 'Show',
          component:Show 
        }
      ]
    },
    {
      path: '/gzh',
      name: 'Gzh',
      component: Gzh
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    // loading
    // {
    //   path:'/loading',
    //   component: Loading
    // },
    // 路由跳转
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
