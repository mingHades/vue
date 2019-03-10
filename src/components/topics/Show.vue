<template>
  <div class="show">
  	<h3 class="title">{{title}}</h3>
	<div class="author">
		<img :src="avatar_url" alt="">
		<p>{{loginname}}</p>
	</div>
	<div class="content" v-html="content">

	</div>
	


  </div>
</template>

<script>
// 引入 查询 主题详细信息的方法
import {getTopic} from '@/getdata/getTopics.js';

export default {
  name: 'Show',
  data () {
    return {
      // data:[]
      // 文章的标题
      title:'',
      // 用户图片
      avatar_url:'',
      // 用户名称
      loginname:'',
      // 文章内容
      content:''
    }
  },
  // 钩子函数
  mounted: function () {
  	// 获取文章 id
  	var id = this.$route.params.id;

  	getTopic(id).then((data)=>{
  		this.title = data.data.data.title;
  		this.avatar_url = data.data.data.author.avatar_url;
  		this.loginname = data.data.data.author.loginname;
  		this.content = data.data.data.content;

  	})

  },

}
</script>


<style scoped lang="scss">
  // 引入基础的样式
  @import '../../assets/sass/base.scss';
  .show{
    margin-top: rem(160px);
    margin-bottom: rem(100px);
	
	.title{
		font-size: rem(40px);
		text-align: center;
		// background: red;
		margin-top:  rem(180px);
		margin-bottom: rem(50px);
		color:#333;
	}

	.author{
		display: flex;
		justify-content: center;
		align-items: center;
		img{
			width: rem(80px);
			height: rem(80px);
		}
		p{
			font-size: rem(40px);
			color: green;
			margin-left: rem(40px);
		}
	}

	.content{
		width: rem(710px);
		margin: rem(20px) auto;

		// color:red;
		// a{
		// 	color:green;
		// }
	}
  }




</style>