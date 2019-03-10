<template>
  <div class="gzh">
  	<img src="../../static/images/666.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Gzh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 钩子函数
  mounted: function () {
  	console.log(window.innerHeight);
  },
}
</script>

<style scoped lang="scss">
  // 引入基础的样式
  @import '../assets/sass/base.scss';

	.gzh img{
		width: rem(700px);
		display: block;
		margin: rem(100px) auto;
	}


</style>
