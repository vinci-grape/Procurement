<template>
	<view class="r_detail">
		<view class="head">
			<view class="head_l">
				<view class="head_l_01">配送中...</view>
				<view class="head_l_02">服务专员正在为您配送中</view>
			</view>
			<view class="head_r"><img src="../../../imgs/detail.jpg"></img></view>
		</view>
		<view class="address">
			<view class="address_l"><img src="../../../imgs/location.png"></img></view>
			<view class="address_r">
				<view class="address_r_01">
					<view>收货人：{{order_detail.address[0].name}}</view>
					<view>{{order_detail.address[0].tell}}</view>
				</view>
				<view class="address_r_02">收货地址：{{order_detail.address[0].address}}</view>
			</view>
		</view>
		<view class='tag-e'>
			<view class="goods " v-for="(item,index) of order_pro" :key="index">
				<view><img :src="item.pic"></img></view>
				<view class='goods_02'>
				  <view class='goods_title'>{{item.title}}</view>
				  <view class="goods_des">{{item.guige[0].name}}：{{item.guige[0].value}}</view>
				  <view class='good_p'>
					<view class="good_price">¥{{item.price}}</view>
					<view class='i'>x {{item.num}}</view>
				  </view>
				</view>
			</view>
		</view>
		<view class="total">总计：¥ {{order_detail.total}}</view>
		<view class="mess">
			<view class="mess_01">订单信息</view>
			<view class="mess_02">
				<view class="mess_02_1">
					<view class="mess_02_l">订单编号:</view>
					<view class="mess_02_r">{{order_detail.order_num}}</view>
				</view>
				<view class="mess_02_1">
					<view class="mess_02_l">支付时间:</view>
					<view class="mess_02_r">{{order_detail.pay_time}}</view>
				</view>
			</view>
		</view>
		<view class="foot" >
			<button class="cu-btn round bg-red" @click="jumprecord">账单</button><span></span>
			<button class="cu-btn round bg-red" @click="jumpsend">去发货</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_detail:'',
				order_pro:''
			};
		},
		onLoad() {  
			this._load()
		},
		methods:{
			_load(){ 
				this.order_detail=this.$api.json.order_detail
				this.order_pro=this.$api.json.order_pro
			},
			jumpsend(){
				uni.navigateTo({
					url:'../send/send'
				})
			},
			jumprecord(){
				uni.navigateTo({
					url:'../record/record'
				})
			}
		}
	}
</script>

<style lang="scss">
.r_detail{background-color:#F5F5F5;height: 100vh;
	.head{display: flex;justify-content: space-between;background-color: #F85043;padding: 10px 20px 0;
		.head_l{padding: 20px;color: #FDF1F0;
			.head_l_01{font-size: 16px;padding-bottom: 6px;}
			.head_l_02{font-size: 13px;}
		}
		.head_r img{height: 100px;width: 120px;}
	}
	.address{display: flex;padding:20px 15px;;background-color:#fff;margin-bottom: 10px;
		.address_l{padding-right: 20px;display: flex;flex-direction: column;justify-content: center;
			img{width: 20px;height: 20px;}
		}
		.address_r{flex-grow: 1;
			.address_r_01{display: flex;justify-content: space-between;font-size: 15px;font-weight: 600;padding-bottom: 8px;}
			.address_r_02{line-height: 20px;}
		}
	}
	.tag-e{background-color:#fff;margin-bottom: 10px;
		.goods{display: flex;font-size: 14px;width: 100%;background-color: #ffffff;padding: 10px;box-sizing: border-box;
		border-bottom: 1px solid #EEF0EF;
			img{width: 160rpx; height: 160rpx;}
			.goods_02{box-sizing: border-box;display: flex;flex-direction: column;height: 160rpx;flex-grow: 1;
			justify-content: space-between;padding-top: 10rpx;padding-left: 25px;}
			.goods_title{max-height: 40px;overflow: hidden;line-height: 20px;font-weight: 600;font-size: 15px;}
			.goods_des{color: #979797;}
			.good_p{display: flex;justify-content: space-between;
				.good_price{color: #F04E42;font-weight: 600;}
		}
		
		}
	} 
	.total{background-color: #fff;padding: 12px 15px;text-align: right;margin-bottom: 10px;font-size: 15px;}
	.mess{background-color: #fff;padding: 10px;margin-bottom: 10px;
		.mess_01{border-left: 2px solid #FD5153;padding-left: 10px;margin-bottom: 10px;font-size: 15px;font-weight: 600;}
		.mess_02{border-top: 1px solid #F8F8F8;padding: 10px;
			.mess_02_1{display: flex;line-height: 25px;
				.mess_02_l{width: 100px;}
			}
		}
	}
	.foot{position: fixed;bottom: 0px;left: 0px;z-index: 99;border-top: 1px solid #E4E4E4;width: 100%;background-color: #fff;
	justify-content: flex-end;padding: 10px 15px;display: flex;
		span{padding-left: 10px;}
	}
}
</style>
