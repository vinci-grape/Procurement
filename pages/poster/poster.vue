<template>
	<view class="poster">
		<view class="title">创作海报从来没有如此简单!</view>
		<view class="sui">
			<image src="../../imgs/1.jpg"></image>
		</view>
		<view class="p_btn">
			<view class="flex flex-direction" >
				<button @click="jump_bao" class="cu-btn bg-red margin-tb-sm lg">马上选宝贝开始</button>
			</view>
		</view>
		<view class="chakan">查看已创建海报及数据 ></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			jump_bao(){
				uni.navigateTo({
					url:'/pages/couponxuan/couponxuan?type=poster'
				})
			}
		}
	}
</script>

<style lang="scss">
.poster{
	.title{text-align: center;padding: 50px 10px 0px;font-size: 18px;}
	.sui{padding: 120px 80px ;
		image{width: 100%;height: 100px;}
	}
	.p_btn {
		padding: 0 10px 0px;
	}
	.chakan{text-align: center;padding: 50px 10px 0;color: #808080;}
}
</style>
