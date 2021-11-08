<template>
	<view class="evaluate">
		<block v-for="(item, index) of list" :key="index">
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
							<!-- <text  class='cuIcon-bad '></text> -->
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
				<view class="con-3">
					<view>
						<view class='con_1_r'>2020-9-2</view>
					</view>
					<view class="con-3-r" @click="jump_reply">
						<text  class='cuIcon-message '></text>回复
					</view>
				</view>
			</view>
			<view class="BH10"></view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3]
			};
		},
		methods:{
			jump_reply(){
				uni.navigateTo({
					url:'/pages/evaluate/reply/reply'
				})
			}
		}
	}
</script>

<style lang="scss">
.evaluate{
	.BH10{background-color: #F8F8F8;height: 10px;}
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
	.con-3{display: flex;justify-content: space-between;
		.con-3-r{color: #A6A8AC;font-size: 12px;
			text{padding-right: 5px;font-size: 15px;}
		}
	}
}
</style>
