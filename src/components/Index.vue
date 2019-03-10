<template>
  <div class="index">
    <nav class="top">
      <ul>
        <router-link  to="/index/" tag="li" class="mo">全部</router-link>
        <router-link to="/index/good" tag="li">精华</router-link>
        <router-link to="/index/share" tag="li">分享</router-link>
        <router-link to="/index/ask" tag="li">问答</router-link>
        <router-link to="/index/job" tag="li">招聘</router-link>
        <router-link to="/index/Weex" tag="li">Weex</router-link>
      </ul>
    </nav>
    <!-- 放子组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">

  // 引入基础的样式
  @import '../assets/sass/base.scss';
  // 顶部导航
  nav.top{
    position: fixed;
    top:rem(80px);
    left:0;
    width: 100%;
    height: rem(80px);
    background: #f6f6f6;
    ul{
      display: flex;
      align-items: center;
      justify-content:space-around;
      height: rem(80px);
      li{
        padding: 0 rem(20px);
        line-height:rem(55px);
        font-size: rem(30px);
        color:#8dbb39;
        border-radius: rem(8px);
        &.router-link-exact-active{
          background: #8dbb39;
          color:#fff;    
        }
      }
    }
  }


</style>
