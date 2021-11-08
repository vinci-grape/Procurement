<template>
	<view class="choose">
		<view class="list" v-for="(item,index) of list" :key="index" @click="change(index)">
			<view class="list-l">
				<image src="@/imgs/shops.png"></image>
			</view>
			<view class="list-r">
				<view class="list-r-01">123asdsd</view>
				<view class="list-r-02">主体信息：未认证</view>
				<view class="list-r-03">
					<view class="list-r-03-01">微商城</view>
					<view class="list-r-03-01">已打烊</view>
				</view>
			</view>
			<block v-if="xuan==index">
				<view class="xuans" >
					<span class="status correct"></span>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3],
				xuan:''
			};
		},
		methods:{
			change(index){
				this.xuan=index
			}
		}
	}
</script>

<style lang="scss">
	page{background-color: #F8F8F8;}
.choose{
	.list{background-color: #fff;margin: 10px;border-radius: 8px;padding: 10px;display: flex;position: relative;
		.list-l{
			image {width: 50px;height: 50px;}
		}
		
		.list-r{padding-left: 10px;
			.list-r-01{font-size: 16px;padding: 5px 0;}
			.list-r-02{padding: 5px 0;}
			.list-r-03{display: flex;padding-top: 8px;
				.list-r-03-01{color: #B7B7B7;border: 1px solid #B7B7B7;border-radius: 3px;font-size: 12px;padding: 2px 4px;
				margin-right: 10px;}
			}
		}
		.xuans{position: absolute;top: 0;right: 0px;color: #fff;width: 37px;height: 37px;text-align: right;padding: 5px 2px 0 0;
		box-sizing: border-box;
		background: linear-gradient(45deg, transparent 50%, #F81919 0%);
		background-size: 36px 37px;
		border-top-right-radius: 8px;
		}
	}
	.correct:before {font-size: 16px;
	    content: '\2714';
	    color: #fff;
	}
}
</style>
