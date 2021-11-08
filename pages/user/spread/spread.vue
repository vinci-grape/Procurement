<template>
	<view class="spread">
		<view class="head">
			<img class="img" src="@/imgs/head.jpg"></img>
		</view>
		<view class="title">如花</view>
		<view class="er">
			<img src="@/imgs/8.jpg"></img>
		</view>
		<view class="btn"><view class="butt">保存二维码</view></view>
		<view class="gui">
			<view>1.将此页面二维码保存并发送给您的好友</view>
			<view>2.好友识别二维码通过手机号进行注册</view>
			<view>3.好友进行实名认证后返推荐奖励给您账户</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="scss">
.spread{
	.head{background-color: #FD8259;height: 150px;position: relative;
		.img{width: 65px;height: 65px;border-radius: 50px;border: 1px solid #C896A6;position: absolute;left: 50%;bottom: -30px;
		margin-left: -32.5px;}
	}
	.title{text-align: center;padding: 40px 0 30px;font-size: 18px;font-weight: 600;}
	.er{text-align: center;
		img{width: 180px;height: 180px;border: 2px solid #F6D7B1;padding: 2px;margin: 0px 0 25px;}
	}
	.btn{display: flex;font-size: 13px;justify-content: center;
		.butt{background-color: #FB6471;height: 25px;line-height: 25px;border-radius: 20px;width: 140px;text-align: center;color: #fff;}
	}
	.gui{color: #9E9E9E;font-size: 12px;padding: 40px 0 0 75px;line-height: 20px;}
}
</style>
