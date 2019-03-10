<template>
  <div class="job">
		<!-- 主题列表 -->
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
  name: 'Job',
  data () {
    return {
    	// 主题列表
      items:[],
      isShow:false
    }
  },
  // 钩子函数
  mounted: function () {
    // 请求主题列表数据
    geTopicList({tab:'job'}).then((data)=>{
      this.items = data.data.data;
      this.isShow = true;
    });
  },
  // 方法
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        geTopicList({tab:'job',limit:20,page:++this.page}).then((data)=>{
          // this.items = data.data.data;
          this.items = this.items.concat(data.data.data);
          if(data.data.data.length==0){
            this.isShow = false;
            return;
          }
          // 触发 infiniteHandler 函数
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
  .job{
    margin-top: rem(160px);
    margin-bottom: rem(100px);
  }
</style>
