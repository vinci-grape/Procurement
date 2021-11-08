<template>
	<view class="send">
		<view class="title bg-white padding">共3件包裹待发货</view>
		<view class="fhmb margin-sm bg-white padding-sm">
			<view class="fhmb-tit">发货面板</view>
			<view class="fhmb-01">
				<view class="fhmb-01-l text-gray">配送方式</view>
				<view class="fhmb-01-m text-bold">快递公司配送</view>
				<view class="fhmb-01-r"><text class="lg cuIcon-right text-gray" ></text></view>
			</view>
			<view class="fhmb-01">
				<view class="fhmb-01-l text-gray">快递公司</view>
				<view class="fhmb-01-m text-gray">快递公司配送</view>
				<view class="fhmb-01-r"><text class="lg cuIcon-right text-gray" ></text></view>
			</view>
			<view class="fhmb-01">
				<view class="fhmb-01-l text-gray">快递单号</view>
				<view class="fhmb-01-m "><input placeholder="请输入单号" name="input"></input></view>
			</view>
		</view>
		<view class="fhmb margin-sm bg-white padding-sm">
			<view class="fhmb-tit">收货人信息</view>
			<view class="shr">
				<view class="shr-l"><text class="lg cuIcon-profile" ></text></view>
				<view class="shr-r">
					<view class="shr-r-01">人名<span></span>1238888888</view>
					<view class="text-gray">地址：</view>
				</view>
			</view>
			<view class="shr">
				<view class="shr-l"><text class="lg cuIcon-comment" ></text></view>
				<view class="shr-r">
					<view class="shr-r-01">买家留言</view>
					<view class="text-gray">留言</view>
				</view>
			</view>
		</view>
		<view class="fhmb margin-sm bg-white padding-sm">
			<view class="fhmb-tit">订单信息</view>
			<view class="container" v-for="(item,index) of [1,2]" :key="index">
			  <view class="pic" ><img src="@/imgs/8.jpg" /></view>
			  <view class="desc">
			    <view class="title">名字</view>    
			    <view>60m</view> 
			    <view class="price-btn">  
			        <view>¥12<text>¥12</text> </view>
			        <view class="text-gray">x32</view>  
			    </view>
			  </view>
			</view>
			<view class="padding-xs"></view>
			<view class="ddbh text-gray">
				<view class="ddbh-l padding-top-xs">订单编号：</view>
				<view class="ddbh-m padding-top-xs">21313213213213213213</view>
				<view class="ddbh-r padding-left">
					<button class="cu-btn round lines-gray sm">复制</button>
				</view>
			</view>
			<view class="ddbh text-gray">
				<view class="ddbh-l">下单时间：</view>
				<view class="ddbh-m">2019-5-9 18:00:09</view>
				<view class="ddbh-r"></view>
			</view>
		</view>
		<view class="btn">
			<button class="cu-btn round bg-red " ><span class="padding-left padding-right">确认发货</span></button>
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
.send{background-color: #F9F9F9;min-height: 100vh;
	.title{font-weight: 600;text-align: center;font-size: 16px;}
	.fhmb{font-size: 15px;border-radius: 5px;box-shadow: 0px 0px 5px #EDEDED;
		.fhmb-tit{border-left: 3px solid #E0451D;padding-left: 7px;font-weight: 600;margin: 5px 0 10px;}
		.fhmb-01{display: flex;padding: 15px 0;
			.fhmb-01-l{width: 80px;}
			.fhmb-01-m{flex-grow: 1;
				input{margin-top: -3px;}
			}
			.fhmb-01-r{width: 25px;text-align: right;}
		}
	}
	.shr{display: flex;padding: 20px 0 10px;
		.shr-l{padding: 0 10px;font-size: 20px;}
		.shr-r{
			.shr-r-01{font-size: 16px;font-weight: 600;padding-bottom: 15px;
				span{padding-left: 10px;}
			}
		}
	}
	.container {
	  display: flex;line-height: 20px;
	  flex-direction: row;
	  justify-content: space-between;
	  padding: 10px 22rpx;
	  border-bottom: 1px solid #F4F4F4;
	  background: #fff;
	  .pic {
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    vertical-align: middle;
	  }
	  
	  .pic img{
	    width: 70px;
	    height: 70px;
	    border-radius: 10rpx;
	  }
	  
	  .desc {
	    display: flex;color: #8B8B8B;
	    flex-direction: column;
	    justify-content: space-between;
	    flex-grow: 1;
	    padding: 0 0 0 15px;
	    text-align: left;font-size: 12px;
	  }
	  .title {font-weight: bold;color: #333;overflow: hidden;font-size: 14px;text-align: left;
	  height: 20px;white-space: nowrap;text-overflow: ellipsis;}
	  .price-btn {
	    display: flex;
	    flex-direction: row; 
	    justify-content: space-between;font-size: 14px;
	    align-items: center;color:#ea0000;font-weight: 600;
	    
	  }
	  .price-btn text{text-decoration:line-through;font-weight: 100;
	    padding-left: 10px;color: #AAAAAA;
	    
	  }
	}
	.ddbh{display: flex;padding: 5px 0;}
	.btn{padding: 20px;text-align: center;}
}
</style>
