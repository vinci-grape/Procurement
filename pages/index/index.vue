<template>
	<view class="index">
		<view class="more">
			<view class='mo'>
				<view class='mo_01'>数据交易</view>
				<navigator url="/pages/statistics/statistics"> 
				<view class='mo_02'>更多 <uni-icon type="arrowright" size="15" color="#D6D6D6"></uni-icon>
				</view>
				</navigator>
			</view>
		</view>
		<view class="shuju">
			<view class="shuju_01">
					<view>今日订单/金额</view>
					<view class="shuju_01_s" v-if="count_order.today[0].today_money_total">{{count_order.today[0].today_num_total}} / ¥{{count_order.today[0].today_money_total}}</view>
					<view class="shuju_01_s" v-else>0 / ¥0</view>
			</view>
			<view class="shuju_01 no">
				<view>昨日订单/金额</view> 
				<view class="shuju_01_s" v-if="count_order.yesterday[0].yesterday_money_total">{{count_order.yesterday[0].yesterday_num_total}} /
				 ¥{{count_order.yesterday[0].yesterday_money_total}}</view>
				 <view class="shuju_01_s" v-else>0 / ¥0</view>
			</view>
			
			<view class="shuju_01">
				<view>总订单数</view>
				<view class="shuju_01_s ">{{count_order.total[0].all_num_total}}</view>
			</view>
			<view class="shuju_01 no">
				<view>总销售金额</view>
				<view class="shuju_01_s" v-if="count_order.total[0].all_money_total">¥ {{count_order.total[0].all_money_total}}</view>
				 <view class="shuju_01_s" v-else>0 </view>
			</view>
		</view>
		<view class="BH"></view>
		<view class="six">
			<!-- <view class="jiu_01">
				<navigator url="/pages/edit/pro_manage/pro_manage">
					<view><img src="../../imgs/6.png" /></view>
					<view>商品管理</view>
				</navigator>
			</view> -->
			<view class="jiu_01">
				<navigator url="">
					<view><img src="../../imgs/6.png" /></view>
					<view>商品管理</view>
				</navigator>
			</view>
			<view class="jiu_01">
				<navigator url="/pages/order/order">
					<view><img src="../../imgs/8.png" /></view>
					<view>订单管理</view>
				</navigator>
			</view>
			<view class="jiu_01">
				<navigator url="/pages/statistics/statistics"> 
					<view><img src="../../imgs/date.png" /></view>
					<view>财务数据</view>
				</navigator>
			</view>
			<view class="jiu_01 ">
				<navigator url="/pages/user/user">
					<view><img src="../../imgs/people.png" /></view>
					<view>用户管理</view>
				</navigator>
			</view> 
		</view>
		<view class="BH"></view>
		<view class="more">
			<view class='mo'>
				<view class='mo_01'>拓展版面 
					 </view>
				<view class='mo_02'></view>
			</view>
		</view>
		<view class="list">
			<view class="list_01" @click="jump_choose"></view>
			<view class="list_01"></view>
		</view>
		<view class="H50"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count_order:{}
			}
		},
		components: {
		},
		onLoad() {  
			this.count_order=this.$api.json.count_order
		},
		methods: {
		}
	}
</script>


<style lang="scss">
	.index {
		background:#fff;
		.H50{
			height:50px;
		}
		.head {
			background:  linear-gradient(to bottom, #52c693, #27a26c);
			text-align: center;
			padding: 20px 0 10px;
			color: #fff;
			font-size: 14px;
		}

		.jiu {
			padding: 10px;
			display: flex;
			flex-wrap: wrap;
			color: #fff;
		}

		.jiu_01 {
			width: 33%;
			text-align: center;
			padding: 15px 10px 15px;
			box-sizing: border-box;
			font-size: 12px;
		}

		.jiu_01 img {
			width: 32px;
			height: 32px;
			margin-bottom: 10px;
		}

		.mo {
			padding: 10px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #f0f0f0;
			line-height: 20px;
		}

		.mo_01 {
			padding-left: 10px;
			box-sizing: border-box;
			width: 80%;
			height: 20px;
			overflow: hidden;
			border-left: 3px solid #EC521B;
			font-size: 14px;
			font-weight: bold;
		}

		.mo_01 span {
			color: #8E8E8E;
			font-weight: 100;
			font-size: 12px;
			padding-left: 10px;
		}

		.mo_02 {
			color: #D6D6D6;
		}

		.shuju {
			display: flex;
			flex-wrap: wrap;
		}

		.shuju_01 {
			width: 50%;
			text-align: center;
			padding: 18px 10px;
			box-sizing: border-box;
			font-size: 14px;
			line-height: 25px;
			font-size: 14px;
			border-right: 1px solid #f0f0f0;
			border-bottom: 1px solid #f0f0f0;
		}

		.shuju_01_s {
			color: #EB511B;
			font-weight: 800;
			font-size: 16px;
		}

		.no {
			border-right: none;
		}

		.BH {
			background-color: #F1F1F1;
			height: 5px;
		}

		.six {
			padding: 10px;
			display: flex;
			flex-wrap: wrap;
		}

		.list_01 {
			padding: 15px 10px 8px;
			border-bottom: 1px solid #F4F4F4;
			font-size: 12px;
		}
	}
</style>
