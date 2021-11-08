<template>
	<view class="two">
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num"  :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
		<view class="BH5"></view>
		<view class="price">
			<view class="price-01" :class="xuan==1?'xz':'' " @click="xuan=1">
				包月
				<view class="price-01-p text-blue">¥<span>600</span></view>
				<text>600元/月</text>
			</view>
			<view class="price-01" :class="xuan==2?'xz':'' " @click="xuan=2">
				包季
				<view class="price-01-p">¥<span>1599</span></view>
				<text>1599元/月</text>
			</view>
			<view class="price-01" :class="xuan==3?'xz':'' " @click="xuan=3">
				包年
				<view class="price-01-p text-blue">¥<span>5999</span></view>
				<text>5999元/月</text>
			</view>
		</view>
		<view class="btn flex flex-direction">
			<button class="cu-btn lg bg-blue" @click="next">立即支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				xuan:1,
				numList: [{
					name: '提交资质'
				}, {
					name: '选择入驻方式'
				}, {
					name: '等待审核'
				},  ],
				num: 1,
			};
		},
		methods:{
			next(){
				uni.navigateTo({
					url: '/pages/certification/three/three',
				});
			}
		}
	}
</script>

<style lang="scss">
.two{
	.BH5{background-color: #F3F5F4;height: 4px;}
	.price{display: flex;padding: 20px 10px;justify-content: space-between;
		.price-01{border: 2px solid #F8F8F8;border-radius: 3px;width: 32%;text-align: center;padding: 20px 0;font-weight: 600;
		font-size: 16px;
			.price-01-p{padding: 18px 0 13px;color: #FF5300;
				span{font-size: 20px;padding-left: 5px;}
			}
			text{color: #B0B1B5;font-size: 14px;font-weight: 500;}
		}
		.xz{border: 2px solid #FF5300;}
	}
	.H50{height: 50px;}
	.btn{position: fixed;bottom: 0; left:0;padding: 10px;width: 100%;background-color: #fff;z-index: 9;}
}
</style>
