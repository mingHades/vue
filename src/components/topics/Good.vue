<template>
  <div class="good">
    <!-- 主题列表 -->
    <topic-list :items="items"></topic-list>
    <!-- 下拉滑动分页 -->
    <infinite-loading class="loading" v-show="isShow" @infinite="infiniteHandler"></infinite-loading>
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
  name: 'Good',
  data () {
    return {
      // 话题数据
      items: [],
      page:1,
      isShow:false
    }
  },
  // 钩子函数
  mounted: function () {
    // 请求主题列表数据
    geTopicList({tab:'good'}).then((data)=>{
      this.items = data.data.data;
      this.isShow = true;
    });
  },
  // 方法
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        geTopicList({tab:'good',limit:20,page:++this.page}).then((data)=>{
          // this.items = data.data.data;
          this.items = this.items.concat(data.data.data);
          // 下一页已经 没有数据了
          if(data.data.data.length==0){
            // 让 loading 隐藏
            this.isShow = false;
            // 停止执行函数
            return;
          }
          $state.loaded();
        });
        // 触发 infiniteHandler 函数
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
  .good{
    margin-top: rem(160px);
    margin-bottom: rem(100px);
  }

</style>