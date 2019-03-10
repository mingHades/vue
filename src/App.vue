<template>
  <div id="app">
    <div class="banner">
      <span class="vtitle"><img src="../static/images/logo.png" alt=""></span>
    </div>
    <router-view/>
    <nav class="bottom">
      <ul>
        <router-link to="/index" tag="li" :class=' resPath=="index"?"xz":"" '>
          <span class="iconfont " :class=' resPath=="index"?"icon-homepage_fill":"icon-homepage" '></span>
          <p>首页</p>
        </router-link>
        <router-link to="/gzh" tag="li"  :class=' resPath=="gzh"?"xz":"" '>
          <span class="iconfont" :class=' resPath=="gzh"?"icon-qrcode_fill":"icon-qrcode" '></span>
          <p>公众号</p>  
        </router-link>
        <router-link to="/me" tag="li" :class=' resPath=="me"?"xz":"" '>
          <span class="iconfont " :class=' resPath=="me"?"icon-addressbook_fill":"icon-addressbook" '></span>
          <p>我们</p> 
        </router-link>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    // 路径
    resPath:function(){
      var arr = this.$route.path.split('/');
      return arr[1];
    }

  }
}
</script>

<style lang="scss">
  // 引入基础的样式
  @import './assets/sass/base.scss';

  // banner 部分
  .banner{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: rem(80px);
    background: #444;
    text-align: center;
    span{
      font-size: rem(40px);
      color:#fff;
      line-height: rem(80px);
        img{
        width: rem(85px);
        height: rem(20px);
        display: inline-block;
      }
    }
   
  }

  // 底部导航
  nav.bottom{
      position: fixed;
      bottom: 0;
      left: 0;
      background: #fefefe;
      color:#505050;
      width: 100%;
      height: rem(90px);
      border-top: rem(1px) solid #b3b3b3;
      ul{
          display: flex;
          li{
              width: 33.33%;
              height: rem(90px);
              text-align: center;
              span{
                  font-size: rem(45px);
                  line-height: rem(56px);
              }
              p{
                  font-size: rem(24px);
                  line-height: rem(24px);
              }
            &.xz{
              color:#fff;
              background: #333;
            }
          }
      }
  }

  
  // .router-link-exact-active{
  //   color:red;
  // }


</style>
