<template>
  <div class="loading">
  	<img src="../../static/images/loading.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loading',
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
	img{
		width: 100%;
		margin-top: rem(150px);
	}

</style>
