<template>
	<view class="one">
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num"  :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
		<view class="BH5"></view>
		<view class="padding-sm">
			<view class="position">
				<view class="title"><span>*</span>商家名称</view>
				<view class="padding-top-xs"><input placeholder="请输入商家名称" name="input"></input></view>
			</view>
			<view class="position">
				<view class="title"><span>*</span>商家名称</view>
				<view class="text-blue padding-top-xs">请选择</view>
			</view>
		</view>
		<view class="BH5"></view>
		<view class="bian ">
			<view class="title"><span>*</span>身份证<text class="text-gray">（请上传经营者身份证照片）</text></view>
			<view class="shangc">
				<view class="sc-l">
					<view class="sc-l-img"><img src="@/imgs/shen.png"></img></view><br/>
					身份证正面
				</view>
				<view class="sc-l">
					<view class="sc-l-img"><img src="@/imgs/shen.png"></img></view><br/>
					身份证反面
				</view>
			</view>
		</view>
		<view class="bian ">
			<view class="title"><span>*</span>营业执照<text class="text-gray">（请上传最新中国大陆营业执照正面照）</text></view>
			<view class="yyzz">
				<img src="@/imgs/shen.png"></img>
			</view>
		</view>
		<view class="H50"></view>
		<view class="btn flex flex-direction">
			<button class="cu-btn lg bg-blue" @click="next">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numList: [{
					name: '提交资质'
				}, {
					name: '选择入驻方式'
				}, {
					name: '等待审核'
				},  ],
				num: 0,
			};
		},
		methods:{
			next(){
				uni.navigateTo({
					url: '/pages/certification/two/two',
				});
			}
		}
	}
</script>

<style lang="scss">
.one{
	.BH5{background-color: #F3F5F4;height: 4px;}
	.title{padding: 5px 0 15px;font-weight: 600;
		span{color: #E74949;padding-right: 5px;}
	}
	.position{display: flex;justify-content: space-between;padding: 5px 0 0;
		input{text-align: right;}
	}
	.bian{border-bottom: 1px solid #F7F7F7;padding: 10px 10px 20px;}
	.shangc{display: flex;justify-content: space-between;
		.sc-l{width: 48%;text-align: center;color: #A1A1A1;
			.sc-l-img{background-color: #F7F7F7;padding: 10px 0;
				img{width: 140px;height: 85px;}
			}
		}
	}
	.yyzz{background-color: #F7F7F7;padding: 15px;text-align: center;
		img{width: 160px;height: 100px;}
	}
	.H50{height: 50px;}
	.btn{position: fixed;bottom: 0; left:0;padding: 10px;width: 100%;background-color: #fff;z-index: 9;}
}
</style>
