<template>
	<view class="create">
		<view class="pic">
			<view class="scroll_box" >
			  <scroll-view class="scroll-view_x" scroll-x style="width: auto;overflow:hidden;" >
			   <view class='sw'>
				<block  v-for="(item,index) of list" :key="index">
				  <view class="pic-01">
				  	<img :src="item"></img>
				  </view>
				</block>
			   </view>
			  </scroll-view>
			</view>
		</view>
		<view class="tex">不调意点换风格试试，点击文家，宝贝都可以再次更换，</view>
		<view class="foot">
			<view class="cu-bar tabbar bg-white">
				<view class="action">
					<view class="cuIcon-cu-image">
						<text  class='cuIcon-colorlens '></text>
					</view>
					<view class="text-gray">换背景</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<text  class='cuIcon-upblock '></text>
					</view>
					<view class="text-gray">发布</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<text  class='cuIcon-refresh '></text>
					</view>
					<view class="text-gray">换风格</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[require('@/imgs/11.jpg'),require('@/imgs/12.jpg'),require('@/imgs/13.jpg')]
			};
		}
	}
</script>

<style lang="scss">
.create{
	.pic{
		.sw{display: flex;width: 100%;padding: 15px 0 15px 15px;}
		.pic-01{
			img{width: 80vw;height: 450px;margin-right: 20px;}
		}
	}
	.tex{padding: 25px 5px;text-align: center;color: #E0E0E0;font-size: 12px;}
	.foot{position: fixed;left: 0;bottom: 0;width: 100%;border-top: 1px solid #F0F0F0;}
}
</style>
