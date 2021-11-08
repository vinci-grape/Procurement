<template>
	<view class="replay">
		<view class='con' >
			<view class='con_1'>
				<view class='con_1_l'>
					<img src="@/imgs/cate4.jpg"></img>
					<view class='name'>
						大壮<span></span>
						
					</view>
				</view>
				<view class='con_1_r'>
					<view class="ping">
						<text  class='cuIcon-evaluate '></text>好评
						<!-- <tui-rate :current="current" @change="changedd" active="#F37B1D" :disabled="true"></tui-rate> -->
					</view>
				</view>
			</view>
			<view class='con_2'>
				超大儿童游戏帐篷钻洞爬行隧道球池游戏屋室内外折叠帐篷爬行玩具
				<view class="img">
					<block >
						<img src="@/imgs/pro3.png" ></img>
						<img src="@/imgs/pro3.png" ></img>
						<img src="@/imgs/pro3.png" ></img>
						<img src="@/imgs/pro3.png" ></img>
					</block>
				</view>
			</view>
			
		</view>
		<view class="H200"></view>
		<view class="textar">
			<view class="textar-01">
				回复内容
			</view>
			<textarea></textarea>
			<view class="flex flex-direction" >
				<button  class="cu-btn bg-red margin-tb-sm lg">提交</button>
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
.replay{
	.textar{padding: 10px;position: fixed;left: 0;bottom: 0px;width: 100%;box-sizing: border-box;background-color: #fff;
		.textar-01{color: #CDCDCF;line-height: 25px;}
		textarea{border: 2px solid #EEEEF0;width: 100%;height: 100px;}
	}
	.H200{height: 200px;}
	.con {
		background-color: #fff;
		padding: 10px;
	}
	
	.con_1 {
		display: flex;
		justify-content: space-between;
	}
	
	.con_1_l {
		display: flex;
		line-height: 20px;
	}
	
	.con_1_l img {
		height: 40px;
		width: 40px;
		border-radius: 30px;
		margin-right: 10px;
	}
	
	.name {
		font-size: 16px;line-height: 40px;
		span {
			padding-left: 5px;
		}
	}
	
	.con_1_r {
		color: #B3B3B3;
		font-size: 12px;
	}
	
	.ping {
		line-height: 40px;
		text{padding-right: 6px;font-size: 15px;}
	}
	.con_2 {
		padding: 5px 0px 10px 50px;
	
		.img {
			padding-top: 8px;
	
			img {
				width: 24vw;
				height: 19vw;
				border-radius: 5px;
				margin: 0 2vw 10px 0;
			}
		}
	}
}
</style>
