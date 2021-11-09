<template>
	<view class="product">
		<view class="top">
		</view>
		<view class="cu-form-group">
			<view class="title">新增用户</view>
		</view>
		<view class="cu-form-group">
			<view class="title">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</view>
			<input placeholder="请输入账号"  v-model="coupon_form.name"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</view>
			<input placeholder="请输入密码(8-16位)"  v-model="coupon_form.reduce"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份：</view>
			<picker-view @change="bindPickerChange" :value="index" :range="sign">
				<view>{{sign[index]}}</view>
			</picker-view>
		</view>
		<view class="cu-form-group" @click="useOutClickSide">
			<view class="title">身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份：</view>
	        <easy-select ref="easySelect" size="medium" :value="selecValue" @selectOne="selectOne"></easy-select>
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
	import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	import uniPopup from "@/components/uni/uni-popup/uni-popup.vue" 
	import {
		Api_url
	} from '@/common/config'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			const currentDate_end = this.getDate_end({
				format: true
			})
			return {
				sign: ['管理员', '销售员', '采购员', '仓管人员', '转运人员', '财务员'],
				current: 0,
				index: 0,
				coupon_form: {
					sign: '',
					full: '',
					reduce: '',
					name: '',
					stock: '',
					goods_ids: [],
					start_time: '',
					end_time: '',
					stock_type: '',
					day: ''

				},
				product_cate: '',
				set: 0,
				category_id: 1,
				date: currentDate,
				date_end: currentDate_end,
				time: '12:01',
				threshold: 1,
				sku: [],
				temp: [],
				show_cate_list: false,
				show_mail_list: false,
				category_name: '固定时间',
				category_list: [{
						category_id: '1',
						category_name: '固定时间'
					},
					{
						category_id: '2',
						category_name: '领卷当日开始计算有效期'
					}
				],
				id: 0,
				is_edit: false,
				goods: {
					banner_imgs: [],
					goods_name: '',
					category_id: '',
					description: '',
					price: '',
					vip_price: '',
					market_price: '',
					leixin: '1', //类型0快递 1核销
					fx_tc: '', //分销提成
					sales: '',
					stock: '',
					content: '',
					goods_name: ''
				},
				mail: 1,
				mail_list: [{
						id: '1',
						name: '全部商品',
						value:'0'
					},
					{
						id: '2',
						name: '指定商品可用'
					}
				],
				peisong: '',
				group: '未分组',
			};
		},
		components: {
			uniIcon,
			uniPopup, 
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		watch: {},
		onLoad(options) {
			this.id = options.id
		},
		onShow() {
			let goods_ids = uni.getStorageSync('pro_id_list') 
			this.coupon_form.goods_ids = goods_ids 
			uni.removeStorageSync('pro_id_list')
		},
		methods: {
			DateChange(e) {
				this.date = e.detail.value
			},
			DateChangeend(e) {
				this.dateend = e.detail.value
			},
			//----------------------------------------------------------使用设置
			setting() {
				this.set = 1
			},
			//-------------------------------------------------------------选择使用次数
			radioChange: function(evt) {
				for (let i = 0; i < this.sign.length; i++) {
					if (this.sign[i].value === evt.target.value) {
						this.current = i; 
						this.coupon_form.sign = this.sign[i].value
						break;
					}
				}
			},
			//-----------------------------------------------------------优惠券开始日期
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let month_end = date.getMonth() + 2;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//-----------------------------------------------------优惠券结束时间
			getDate_end(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 2;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 20;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;

				return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
				this.date = e.target.value
				var time = Date.parse(this.date)
				this.coupon_form.start_time = time / 1000 //获取时间戳
			},
			bindDateChange_end: function(e) {
				this.date_end = e.target.value
				var time = Date.parse(this.date_end)
				this.coupon_form.end_time = time / 1000 
			},
			//-------------------------------------------------改变switch状态
			switch1Change() {
				if (this.threshold == 1) {
					this.threshold = 0
					this.coupon_form.full = 0
				} else {
					this.threshold = 1
				}
			},

			//---------------------------------------------------------------提交
			sub() {  
				if(!this.coupon_form.stock){
					this.coupon_form.stock_type = '0'
				}else{
					this.coupon_form.stock_type = '1'
				}
				if (this.category_id == 2) {
					this.$api.http.post('shop_cms/add_shop_coupon', {
						stock_type: this.coupon_form.stock_type,
						full: this.coupon_form.full,
						name: this.coupon_form.name,
						reduce: this.coupon_form.reduce,
						sign: this.coupon_form.sign,
						goods_ids: this.coupon_form.goods_ids,
						day: this.coupon_form.day
					}).then(res => {
						this.$api.msg('添加成功')
						uni.redirectTo({
							url:'../couponlist/couponlist'
						})
					})
				} else {
					this.$api.http.post('shop_cms/add_shop_coupon', {
						stock_type: this.coupon_form.stock_type,
						full: this.coupon_form.full,
						name: this.coupon_form.name,
						reduce: this.coupon_form.reduce,
						sign: this.coupon_form.sign,
						goods_ids: this.coupon_form.goods_ids,
						start_time: this.coupon_form.start_time,
						end_time: this.coupon_form.end_time,
					}).then(res => { 
						this.$api.msg('添加成功')
						uni.redirectTo({
							url:'../couponlist/couponlist'
						})
					})
				}


			}, 
			changeIndicatorDots(e) {
				this.isYasuo = !this.isYasuo
			},
			//选择分类
			cate_change(event) {
				const index = event.detail.value
				this.category_id = this.category_list[index].category_id
				this.category_name = this.category_list[index].category_name
				this.show_cate_list = false
			}, 
			mail_change(event) {
				const index = event.detail.value
				this.product_cate = this.mail_list[index].name
				this.show_mail_list = false
				if (this.mail_list[index].id == 1) {
					this.coupon_form.goods_ids = [0]
				}
				if (this.mail_list[index].id == 2) {
					uni.navigateTo({
						url: '../couponxuan/couponxuan'
					})
				}
			},
			buy(type) {
				this.$api.http.post('user/pay_vip', {
					type
				}).then(res => {
					this.$api.msg('购买成功')
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/user/user'
						})
					}, 1500)
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F7F6FB;
	}
	.danxuan{width: 100px;
		span{padding:2px 0 0 10px;}
	}
	.pic {
		padding: 20upx 10upx;
	}

	.input-view {
		font-size: 28upx;
	}

	.leixin {
		// height: 300px;
		width: 50vw;
		overflow: hidden;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	.xuan {
		padding-bottom: 10px;
		padding-top: 10px;
	}

	.close-view {
		text-align: center;
		line-height: 14px;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: #FF5053;
		color: #FFFFFF;
		position: absolute;
		top: -6px;
		right: -4px;
		font-size: 12px;
	}

	.product {
		background-color: #F7F6FB;
		height: 100%;

		.head {
			position: relative;
			padding: 0 5px;
		}

		.head img {
			width: 100%;
			height: 150px;
		}

		.btn {
			position: absolute;
			top: 10px;
			right: 5px;
		}

		.btn button {
			font-size: 10px;
			color: red;
			border: none;
			border-radius: 20px;
			background-color: #CBCBCB;
			padding: 5px;
		}

		.top {
			box-shadow: 0 0 8px 5px #EDEDED;
			height: 1px;
			background-color: #EDEDED;
		}

		.pro_tit {
			padding: 15px 10px 10px;
			border-bottom: 1px solid #EDEDED;
		}

		.BH {
			height: 5px;
			background-color: #F2F2F2;
		}

		.biao {
			background-color: #fff;
			margin: 10px;
			border-radius: 5px;
			border: 1px solid #EAEAEA;
		}

		.biao span {
			color: red;
			padding-right: 5px;
		}

		.biao textarea {
			width: 100%;
			border-bottom: 1px solid #EDEDED;
			padding: 10px;
			height: 100px;
		}

		.biao_01 {
			padding: 10px 10px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;
		}

		.biao_01_l {
			padding-top: 7px;
			flex-shrink: 0;
		}

		.biao_01_1 {
			padding-top: 5px;
		}

		.biao_01_r {
			flex-grow: 1;
		}

		.biao_01_r text {
			padding-right: 10px;
		}

		.biao_02_r select {
			padding: 0 10px;
			line-height: 25px;
			min-width: 80px;
			text-align: center;
		}

		.biao_01_m {
			border-right: 1px solid #EDEDED;
		}

		.biao_02 {
			padding: 13px 10px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;
			justify-content: space-between;
		}

		.biao_03 {
			padding: 13px 10px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;
		}

		.biao_04 {
			display: flex;
			padding: 10px 10px 10px;
			border-bottom: 1px solid #EDEDED;
		}

		.biao_04_l {
			display: flex;
			width: 50%;
			line-height: 30px;
			padding-right: 10px;
		}

		.biao_04_l_i {
			flex-shrink: 1;
		}

		.biao_04_l_1 {
			flex-shrink: 0;
		}

		.biao_05 {
			padding: 10px 10px 0;
		}

		.jgkc {
			padding: 15px 10px;
			border-bottom: 1px solid #EDEDED;
		}

		.p_btn {
			background: #F7F6FB;
			padding: 0 10px 0px;
			position: fixed;
			bottom: 0;
			width: 100%;
			z-index: 9999;
		}

		.pro_btn {
			background-color: #E5E5E5;
			padding: 10px;
			text-align: center;
			border-radius: 20px;
			background-color: #DF421D;
			color: #fff;
			width: 94%;
		}

		.guige {
			border: 1px solid #EDEDED;
			margin: 10px 20px 5px 10px;
			position: relative;
		}

		.stop {
			position: absolute;
			right: -15px;
			top: 60px;
		}

		.stop img {
			width: 30px;
			height: 30px;
		}

		.uni-input-input,
		.uni-input {
			height: 30px;
			line-height: 30px;
		}
	}
</style>
