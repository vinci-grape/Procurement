<template>
	<view class="member">
		<view class="head">
			<view class="head-l">
				<img src="@/imgs/8.jpg"></img>
			</view>
			<view class="head-m">
				普通会员<br/><span>13888888888</span>
			</view>
			<view class="head-r">
				<text class="lg cuIcon-comment" ></text> 消息
			</view>
		</view>
		<view class="BH10"></view>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tab" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}{{index}}
			</view>
		</scroll-view>
		<view class="beizhu">添加顾客备注，下次导购更轻松哦~</view>
		<view class="cu-timeline">
			<view class="cu-time">昨天</view>
			<view class="cu-item cur">
				<view class="content shadow-blur">
					<text>2019-1-23 22:22  店长</text><br/> 【广州市】快件已到达地球
				</view>
			</view>
			<view class="cu-item ">
				<view class="content ">
					<text>2019-1-23 22:22  店长</text><br/>
					这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
				</view>
			</view>
			<view class="cu-item ">
				<view class="content ">
					<text>2019-1-23 22:22  店长</text><br/>
					这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
				</view>
			</view>
			
		</view>
		<view class="H50"></view>
		<view class="btn padding flex flex-direction">
			<button class="cu-btn bg-red lg">销售开单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				tab:['顾客记录','历史消费']
			};
		},
		methods:{
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss">
.member{
	.head{padding:20px 10px;display: flex;
		.head-l img{width: 45px;height: 45px;border-radius: 50%;}
		.head-m{padding: 0 10px;flex-grow: 1;padding-top: 5px;line-height: 20px;}
		.head-r{padding-top: 18px;
			text{padding-right: 5px;color: #B7C7D4;}
		}
	}
	.BH10{height: 10px;background-color: #F3F3F3;}
	.beizhu{font-size: 12px;padding: 20px 10px;}
	.H50{height: 60px;}
	.btn{position: fixed;bottom: 0px;left: 0;background-color: #fff;width: 100%;}
}
</style>
