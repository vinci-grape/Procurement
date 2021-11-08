<template>
	<view class="three">
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num"  :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
		<view class="BH5"></view>
		<view class="con">
			<img src="@/imgs/she.png"></img>
			<view class="tit">审核中</view>
			<view class="des text-gray">认证审核服务将在支付后3个工作日内完成，认证结果将会推送到您的系统消息中</view>
			<view class="padding-top">如认证失败可重新认证，不在收取入驻费用</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numList: [{
					name: '提交资质'
				}, {
					name: '选择入驻方式'
				}, {
					name: '等待审核'
				},  ],
				num: 2,
			};
		}
	}
</script>

<style lang="scss">
.three{
	.BH5{background-color: #F3F5F4;height: 4px;}
	.con{text-align: center;padding: 70px 20px 0;font-weight: 600;
		img{width: 80px;}
		.tit{font-size: 16px;padding: 20px 0;}
		.des{line-height: 20px;}
	}
}
</style>
