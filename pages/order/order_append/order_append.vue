<template>
	<view class="product">
		<view class="top"></view>
		<view class="cu-form-group">
			<view class="title">商品名称：</view>
			<input placeholder="请输入商品名称" v-model="order_form.product" focus></input>
		</view>
		<view class="cu-form-group">
			<view class="title">订&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金：</view>
			<input placeholder="请输入订金" v-model="order_form.deposit"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">销售价格：</view>
			<input placeholder="请输入销售价格" v-model="order_form.sale_price"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">成交价格：</view>
			<input placeholder="请输入成交价格" v-model="order_form.transaction_price"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</view>
			<input placeholder="请输入姓名" v-model="order_form.name"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">身份证号：</view>
			<input placeholder="请输入身份证号" v-model="order_form.id" maxlength="18"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">手机号码：</view>
			<input placeholder="请输入手机号码" v-model="order_form.phone"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">收货地址：</view>
			<input placeholder="请输入收货地址" v-model="order_form.address"></input>
		</view>
		<view class="H50"></view>
		<view class="p_btn">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red margin-tb-sm lg" @click="sub()">添加</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_form: {
					product: '',
					deposit: '',
					sale_price: '',
					transaction_price: ''
				},
				user_form: {
					name: '',
					id: '',
					phone: '',
					address: ''
				}
			};
		},
		methods: {
			sub() { 
				this.$api.http.post('/user/insert', this.user_form).then(res => {
					uni.showToast({
						title: '添加成功',
						icon: 'none'
					})
					this.init()
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F7F6FB;
	}
	.p_btn {
		background: #F7F6FB;
		padding: 0 10px 0px;
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 9999;
		
	}
	.u_input {
		font-size: 15px;
		background: #FFFFFF;
	} 
</style>
