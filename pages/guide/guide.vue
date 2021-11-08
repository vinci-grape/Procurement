<template>
	<view class="guide">
		<view class="gd ">
			<view class="gd-l">
				<img src="@/imgs/xiao.png"></img>
			</view>
			<view class="gd-r">
				<view class="gd-r-tit">注册小程序</view>
				<view class="gd-con">在使用前，您需要拥有自己得微信小程序账号，在小程序注册有两种方式，通过已认证的微信公众号快速申请&独立新申请，
				注册引导<span>请戳这里</span></view>
			</view>
		</view>
		<view class="gd ">
			<view class="gd-l">
				<img src="@/imgs/shou.png"></img>
			</view>
			<view class="gd-r">
				<view class="gd-r-tit">授权小程序</view>
				<view class="gd-con">在将店铺小程序发布前，需将您注册的小程序授权给我们，授权<span>请戳这里</span></view>
			</view>
		</view>
		<view class="gd ">
			<view class="gd-l">
				<img src="@/imgs/kai.png"></img>
			</view>
			<view class="gd-r">
				<view class="gd-r-tit">开通服务</view>
				<view class="gd-con">在将店铺小程序发布前，需开通我们的相关服务，开通服务<span>请戳这里</span></view>
			</view>
		</view>
		<view class="gd ">
			<view class="gd-l">
				<img src="@/imgs/kai.png"></img>
			</view>
			<view class="gd-r">
				<view class="gd-r-tit">发布小程序</view>
				<view class="gd-con">多样化模板、组件化装饰、张氏属于您自己得小程序店铺，<span>去装饰</span></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.guide{background-color: #F7F7F9;min-height: 100vh;padding-top: 1px;
	.gd{background-color: #fff;margin:15px 10px;border-radius: 5px;padding: 15px 10px;box-shadow: 0px 0px 5px #EAEAEA;display: flex;
		.gd-l{padding: 0 10px 0 0px;
			img{width: 30px;height: 30px;}
		}
		.gd-r{
			.gd-r-tit{font-size: 16px;line-height: 30px;padding-bottom: 5px;}
			.gd-con{font-size: 12px;color: #7C7C7C;line-height: 16px;
				span{color: #6C77CE;}
			}
		}
	}
}
</style>
