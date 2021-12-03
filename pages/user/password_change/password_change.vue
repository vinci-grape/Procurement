<template>
	<view class="product">
		<view class="top">
		</view>
		<view class="cu-form-group">
			<view class="title">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</view>
			<input v-model="user_form.username" disabled="true"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</view>
			<input password="true" placeholder="请输入密码 (8-16位)"  v-model="user_form.password" maxlength="16" @focus="Listeningfocus"></input>
		</view>
		<!-- <view class="cu-form-group">
			<view class="title">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</view>
			<input placeholder="请输入姓名"  v-model="user_form.name"></input>
		</view> -->
		<!-- <view class="cu-form-group" @click="useOutClickSide">
			<view class="title">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份：</view>
	        <easy-select ref="easySelect" size="medium" @selectOne="selectOne" v-model="role"></easy-select>
	    </view>	 -->
		<view class="H50"></view>
		<view class="p_btn">
			<view class=" flex flex-direction">
				<button class="cu-btn bg-red margin-tb-sm lg" @click="update()">修改</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				role: '',
				user_form: {
					username: '',
					name: '',
					password: '',
					role: '',
				}
			};
		},
		methods: {
			Listeningfocus() {
				this.user_form.password = ''
			},
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
			update() {  
				console.log(this.user_form.role)
				this.$api.http.put('/user/updatePassword', this.user_form).then(res => {
					uni.showToast({
						title: '修改成功',
						icon: 'none'
					})
					this.init()
				})
			}
		},
		onLoad: function (option) {
			option.id = 0
			this.user_form = this.$api.json.user[option.id]
			this.role = this.$api.json.user[option.id].role
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
