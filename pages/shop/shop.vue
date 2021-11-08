<template>
	<view class="shop">
		<view class="head">
			<view class="head-l">
				<img src="@/imgs/8.jpg"></img>
			</view>
			<view class="head-m">
				<view class="head-m-01">
					店名
					<span>5%费率</span>
				</view>
				<view class="head-m-02">店铺预览 <text class="lg cuIcon-right " ></text></view>
			</view>
			<view class="head-r">营业中 ▼</view>
		</view>
		<view class="dpxx">
			<view class="dpxx-01">
				<img src="@/imgs/mp.png"></img>
				<view>店铺信息</view>
			</view>
			<view class="dpxx-01">
				<img src="@/imgs/mp.png"></img>
				<view>商家简介</view>
			</view>
			<view class="dpxx-01">
				<img src="@/imgs/mp.png"></img>
				<view>分享店铺</view>
			</view>
		</view>
		<view class="pingfen">
			<view class="pf">
				<view class="pf-l">
					<span>4.5</span><br/>评分
				</view>
				<view class="pf-r">
					<view class="pf-r-01">
						<img src="@/imgs/good.png"></img> 好评<span>123123</span>
					</view>
					<view class="pf-r-02">
						<img src="@/imgs/cha.png"></img> 差评<span>23</span>
					</view>
				</view>
			</view>
			<view class="pingfen-r">
				<span>1528</span><br/>关注
			</view>
		</view>
		<view class="title">营销活动</view>
		
		<view class="yxhd">
			<view class="yxhd-01">
				<img src="@/imgs/8.jpg"></img>
				<p>优惠券</p>
				<view class="yxhd-01-dot">敬请期待</view>
			</view>
			<view class="yxhd-01">
				<img src="@/imgs/8.jpg"></img>
				<p>红包</p>
				<view class="yxhd-01-red">敬请期待</view>
			</view>
			<view class="yxhd-01">
				<img src="@/imgs/8.jpg"></img>
				<p>租赁跑道</p>
				<view class="yxhd-01-red">敬请期待</view>
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
.shop{
	.head{background-color: #E0451D;padding: 30px  0px 60px 15px;border-radius: 0 0 30px 30px;display: flex;margin-bottom: 70px;
		.head-l{padding-right: 10px;
			img{width: 60px;height: 60px;border-radius: 5px;}
		}
		.head-m{flex-grow: 1;
			.head-m-01{color: #fff;font-size: 16px;display: flex;line-height: 20px;margin: 5px 0 10px;
				span{background-color: #FFD65B;color: #000;font-size: 12px;display: block;padding: 0 5px;border-radius: 2px;
				margin-left: 5px;}
			}
			.head-m-02{margin: 5px 0;color: #F7A08B;line-height: 20px;
				
			}
		}
		.head-r{background-color:rgba(0,0,0,0.3);color: #FFCAC9;height: 30px;line-height: 30px;border-radius: 20px 0 0 20px;
		padding: 0 15px;font-size: 12px;margin-top: 15px;
		}
	}
	.dpxx{position: absolute;top: 115px;left: 15px;background-color: #fff;border-radius: 5px;padding: 15px 10px 10px;width: 93%;
	justify-content: space-around;display: flex;box-shadow: 0 3px 10px #EBEBEB;
		.dpxx-01{font-size: 14px;line-height: 30px;text-align: center;
			img{width: 30px;height: 30px;padding-bottom: 5px;}
		}
	}
	.pingfen{display: flex;justify-content: space-between;margin: 0px 15px 25px;
		.pf{width: 68%;box-shadow: 0 3px 10px #EBEBEB;background-color: #fff;box-sizing: border-box;padding: 10px;display: flex;border-radius: 3px;
			.pf-l{width: 25%;border-right: 2px solid #F9F9F9;text-align: center;padding-top: 25px;
				span{color: #ED3D48;font-size: 22px;font-weight: 600;line-height: 30px;}
			}
			.pf-r{padding: 0 10px;flex-grow: 1;
				.pf-r-01{border-bottom:2px solid #F9F9F9; padding: 7px 0;
					
				}
				img{width: 20px;height: 20px;padding: 7px 0;padding-right: 3px;}
				span{font-weight: 600;padding-left: 5px;font-size: 16px;}
			}
		}
		.pingfen-r{width: 30%;text-align: center;box-shadow: 0 3px 10px #EBEBEB;background-color: #fff;box-sizing: border-box;padding:35px 10px 0;
			span{color: #F5BB4D;font-size: 22px;font-weight: 600;line-height: 30px;}
		}
	}
	.title{font-size: 16px;font-weight: 600;padding: 5px 15px 10px;}
	.yxhd{padding: 10px 15px;display: flex;justify-content: space-between;
		.yxhd-01{width: 32%;box-shadow: 0px 0px 5px #EBEBEB;background-color: #fff;box-sizing: border-box;padding: 10px 0 0;text-align: center;
		border-radius: 5px;
			img{width: 50px;height: 50px;border-radius: 50%;padding: 7px 0;}
			.yxhd-01-dot{background-color: #000;color: #AFAFB2;border-radius: 0 0 5px 5px;height: 20px;line-height: 20px;font-size: 12px;margin-top: 7px;}
			.yxhd-01-red{background-color: #F83030;color: #FAC1BF;border-radius: 0 0 5px 5px;height: 20px;line-height: 20px;font-size: 12px;margin-top: 7px;}
		}
	}
}
</style>
