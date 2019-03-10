<template>
  <div class="list">
    <!-- loading 的组件 -->
    <!-- 
      items.length 如果是 0 就代表没有数据
     -->
    <loading v-if="!items.length"></loading>
    <ul class="items">
      <li class="item" v-for="item in items">
        <img  v-lazy="item.author.avatar_url" alt="">
        <div class="tab">
          <div v-if="item.top" class="top">置顶</div>
          <div v-else-if="item.good" class="top">精华</div>
          <div v-else>{{tab[item.tab]}}</div>
        </div>
        <router-link class="title" :to="'/index/show/'+item.id" tag="div">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入 loading 组件
import loading from '@/components/Loading';

export default {
  name: 'List',
  data () {
    return {
      // 分类的信息
      tab:{
        share:'分享',
        job:'招聘',
        weex:'weex',
        ask:'问答'
      }
    }
  },
  props:['items'],
  // 加载组件
  components:{
    // loading 组件
    loading
  }

}
</script>

<style scoped lang="scss">
  // 引入基础的样式
  @import '../../assets/sass/base.scss';
  // 引入 栏目列表的 样式
  @import '../../assets/sass/itemlist.scss';

  // .items{
  //   background:red;
  // }

</style>
