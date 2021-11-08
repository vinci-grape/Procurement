<template>
	<view class="content">
		<view>
			<scroll-view scroll-y class="page">
				
				<view style="height: 20px;"></view>
				<view class="nav-list" >
					<navigator hover-class='none' :url="item.url" class="nav-li" navigateTo :class="'bg-'+item.color"
					 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
						<view class="nav-title">{{item.title}}</view>
						<view class="nav-name">{{item.name}}</view>
						<text :class="'cuIcon-' + item.cuIcon"></text>
					</navigator>
				</view>
				<view class="cu-tabbar-height"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
						title: '后台',
						name: '后台',
						color: 'cyan',
						cuIcon: 'roundcheckfill',
						url:"/pages/index/index"
					},
					{
						title: '分销 ',
						name: '分销',
						color: 'olive',
						cuIcon: 'formfill',
						url:"/pages/user/reseller/reseller"
					},
				],
			};
		},
		onShow(){
			this._load()
		},
		methods:{
			_load(){
				
			}
		},		
		onShareAppMessage(res) { 
			return {
				title: '',
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
		
	}
	.bg-huihui {
	    background-color: #d6d6d6;
	    color: #ffffff;
	}
	
		.nav-list {
			display: flex;
			flex-wrap: wrap;
			padding: 0px 40upx 0px;
			justify-content: space-between;
		}
	
		.nav-li {
			padding: 30upx;
			border-radius: 12upx;
			width: 45%;
			margin: 0 2.5% 40upx;
			background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
			background-size: cover;
			background-position: center;
			position: relative;
			z-index: 1;
		}
	
		.nav-li::after {
			content: "";
			position: absolute;
			z-index: -1;
			background-color: inherit;
			width: 100%;
			height: 100%;
			left: 0;
			bottom: -10%;
			border-radius: 10upx;
			opacity: 0.2;
			transform: scale(0.9, 0.9);
		}
	
		.nav-li.cur {
			color: #fff;
			background: rgb(94, 185, 94);
			box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
		}
	
		.nav-title {
			font-size: 32upx;
			font-weight: 300;
		}
	
		.nav-name {
			font-size: 28upx;
			text-transform: Capitalize;
			margin-top: 20upx;
			position: relative;
		}
	
		.nav-li text {
			position: absolute;
			right: 30upx;
			top: 30upx;
			font-size: 52upx;
			width: 60upx;
			height: 60upx;
			text-align: center;
			line-height: 60upx;
		}
	
		.text-light {
			font-weight: 300;
		}
	
		@keyframes show {
			0% {
				transform: translateY(-50px);
			}
	
			60% {
				transform: translateY(40upx);
			}
	
			100% {
				transform: translateY(0px);
			}
		}
	
		@-webkit-keyframes show {
			0% {
				transform: translateY(-50px);
			}
	
			60% {
				transform: translateY(40upx);
			}
	
			100% {
				transform: translateY(0px);
			}
		}
</style>