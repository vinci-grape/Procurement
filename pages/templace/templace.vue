<template>
	<view class="templace">
		<view class="yun bg-white">
			<view class="yf">
				<view class="yf-01">
					<span>使用中</span> 全国包邮
				</view>
				<view class="yf-02 text-grey">计费方式：按件计费</view>
				<view class="yf-02 text-grey">模板类型：包邮</view>
			</view>
		</view>
		<view class="syqk bg-white">
			<button class="cu-btn lines-black margin-right-sm sm round" >详情</button>
			<button class="cu-btn lines-red sm round" >删除</button>
		</view>
		<view class="btn flex flex-direction " @click="jump">
			<button class="cu-btn bg-blue lg" >新建</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			jump(){
				uni.navigateTo({
					url:'/pages/templace/yunfei/yunfei'
				})
			}
		}
	}
</script>

<style lang="scss">
.templace{background-color: #F5F5F5;min-height: 100vh;padding-bottom: 60px;
	.yun{padding: 10px;border: 1px solid #F3F3F3;line-height: 20px;
		.yf-01{
			span{color: #5E98C4;padding: 0 5px;}
		}
		.yf-02{font-size: 12px;}
	}
	.syqk{padding: 7px 15px;display: flex;justify-content: flex-end;}
	.btn{position: fixed;bottom: 0;padding: 10px;width: 100%;z-index: 999;background-color: #F5F5F5;}
}
</style>
