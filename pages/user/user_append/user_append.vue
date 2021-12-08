<template>
	<view class="product">
		<view class="top">
		</view>
		<view class="cu-form-group">
			<view class="title">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</view>
			<input placeholder="请输入账号"  v-model="user_form.username" focus maxlength="16"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</view>
			<input password="true" placeholder="包含数字和字母,长度在6～18位之间"  v-model="user_form.password" maxlength="18"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</view>
			<input placeholder="请输入姓名"  v-model="user_form.name"></input>
		</view>
		<view class="cu-form-group" @click="useOutClickSide">
			<view class="title">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份：</view>
	        <easy-select ref="easySelect" size="medium" @selectOne="selectOne" v-model="role"></easy-select>
	    </view>	
		<view class="H50"></view>
		<view class="p_btn">
			<view class=" flex flex-direction">
				<button class="cu-btn bg-red margin-tb-sm lg" @click="sub()">添加</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				role: '',
				// role: ['管理员', '销售员', '采购员', '仓管人员', '转运人员', '财务员'],
				user_form: {
					username: '',
					name: '',
					password: '',
					role: '',
				}
			};
		},
		methods: {
			init() {
				this.user_form.username = '',
				this.user_form.name = '',
				this.user_form.password = '',
				this.user_form.role = '',
				this.role = ''
			},
			selectOne(options) {
				this.role = options.label
				this.user_form.role = options.value
			},
			useOutClickSide() {
				this.$refs.easySelect.hideOptions && this.$refs.easySelect.hideOptions()
			},
			sub() {  
				//this.$api.http.post('shop_cms/add_shop_coupon', {
				//	username: this.user_form.stock_type,
				//	password: this.user_form.full,
				//	name: this.user_form.name,
				//	sign: this.user_form.reduce,
				//}).then(res => {
				//	
				
				//	uni.redirectTo({
				//		url:'../couponlist/couponlist'
				//	})
				//})
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
