<template>
  <div class="share">
    <topic-list :items="items"></topic-list>
    <!-- 下拉滑动分页 -->
    <infinite-loading class="loading" v-if="isShow" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// 引入 axios 模块（封装的ajax）
import {geTopicList} from '@/getdata/getTopics.js';
// 引入主题列表组件
import topicList from '@/components/topics/List';
// 下拉分页的组件
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Share',
  data () {
    return {
      // 话题数据
      items: [], 
      isShow:false
    }
  },
  // 钩子函数
  // 钩子函数
  mounted: function () {
    // ajax 请求数据 
   geTopicList({tab:'share'}).then((response) => {
      // 设置数据
      this.items = response.data.data;
      this.isShow=true;
    })
  },
  // 方法
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        geTopicList({tab:'share',limit:20,page:++this.page}).then((data)=>{
          // this.items = data.data.data;
          this.items = this.items.concat(data.data.data);
          // 触发 infiniteHandler 函数

          if(data.data.data.length==0){
            this.isShow = false;
            return;
          }
          $state.loaded();
        });
      }, 1000);
    },
  },
  // 加载组件
  components:{
    // 主题列表组件
    topicList,InfiniteLoading
  }
}
</script>
<style scoped lang="scss">
  // 引入基础的样式
  @import '../../assets/sass/base.scss';
  .share{
    margin-top: rem(160px);
    margin-bottom: rem(100px);
  }
</style>