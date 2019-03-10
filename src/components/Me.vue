<template>
  <div class="me">
    <!-- <div class="title">我</div> -->
		<!-- <div class="play"> -->
		  <!-- Swiper -->
		  <!-- <div class="swiper-container"> -->
		    <!-- <div class="swiper-wrapper">
		      <div class="swiper-slide"><img src="../../static/images/n1.jpg" alt=""></div>
		      <div class="swiper-slide"><img src="../../static/images/n2.jpg" alt=""></div>
		      <div class="swiper-slide"><img src="../../static/images/n3.jpg" alt=""></div>
		      <div class="swiper-slide"><img src="../../static/images/n4.jpg" alt=""></div>
		    </div> -->
		    <!-- Add Pagination -->
		    <!-- <div class="swiper-pagination"></div> -->
		  <!-- </div>			 -->
		<!-- </div> -->
		<div class="tx">
			<div class="zl">
				<img src="../../static/images/tx.jpg" alt="">
				<p>Hades</p>
				<br>
				<p>微信号:qiyanbin</p>
			</div>
		</div>
		<div class="qb">
          <i class="iconfont icon-homepage_fill"></i>
					<span>钱包</span>
		</div>
		<div class="sc">
			 <i class="iconfont icon-homepage"></i>
					<span>收藏</span>
		</div>
		<div class="xc">
			 <i class="iconfont icon-addressbook_fill"></i>
					<span>相册</span>
		</div>
		<div class="xc">
			 <i class="iconfont icon-addressbook"></i>
					<span>卡包</span>
		</div>
		<div class="xc">
			 <i class="iconfont icon-qrcode_fill"></i>
					<span>表情</span>
		</div>
		<div class="qb">
			 <i class="iconfont icon-qrcode"></i>
					<span>设置</span>
		</div>

  </div>
</template>

<script>
// 引入 swiper 组件
import Swiper from 'swiper';
// 引入 swiper css的文件
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 钩子函数
  mounted: function () {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
    }); 
  },
}
</script>

<style scoped lang="scss">
  // 引入基础的样式
  @import '../assets/sass/base.scss';

	// .me{
	// 	width: rem(710px);
	// 	margin: rem(100px) auto;
	// 	.title{
	// 		text-align: center;
	// 		line-height: rem(100px);
	// 		font-size:rem(40px);
	// 	}
	// 	.play{
	// 		img{
	// 			width: 100%;
	// 		}

	// 		/deep/ .swiper-pagination-bullet{
	// 			width: rem(20px);
	// 			height: rem(20px);
	// 		}
	// 	}

	// }
	.me{
		width:100%;
		height:rem(1250px);
		background:#efeef3;
		// padding-top: rem(40px);
			i{
						font-size: rem(50px);
						line-height: rem(80px);
				}
			.tx{
				width: 100%;
				height: rem(200px);
				background: #fff;
					.zl{
						width: 100%;
						height: rem(150px);
						margin-top:rem(100px); 
							img{
								width: rem(150px);
								height: rem(150px);
								overflow: hidden;
								margin-left: rem(10px);
								float: left;
							}
							p{
								font-size: rem(30px);
							padding: rem(20px) rem(40px);
							display: inline-block;
							}
					}
			}
			.qb{
					width: 100%;
				height: rem(80px);
				background: #fff;
				margin-top: rem(40px);
				font-size: rem(30px);
			}
			.sc{
					width: 100%;
				height: rem(80px);
				background: #fff;
				margin-top: rem(40px);
				border-bottom: 2px solid #ccc;
				font-size: rem(30px);

			}
			.xc{
					width: 100%;
				height: rem(80px);
				background: #fff;
				// margin-top: rem(40px);
				border-bottom: 2px solid #ccc;
				font-size: rem(30px);


			}
	}


</style>
