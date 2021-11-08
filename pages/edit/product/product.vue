<template>
	<view class="product">
		<view class="pic">
			<view class="biao_05">
				商品幻灯图(可拖动)
			</view>
			<view>
				<robby-image-upload :value="pics" :server-url="serverUrl" :form-data="formData" :server-url-delete-image="DelServelUrl"
				 @delete="delImage" @add="onImg" @move="onMove" :limit="3"></robby-image-upload>
			</view>
		</view>
		
		<view class="cu-form-group margin-top">
			<view class="title kuan">商品名称：</view>
			<input placeholder="请输入"  v-model="goods.goods_name"></input>
		</view>
		<view class="cu-form-group">
			<view class="title kuan">商品类型：</view>
			<view class="title" style="padding: 0;">
				<radio-group class="uni-list" style="display: flex;justify-content: flex-end;" @change="leixin_chage">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
						<view class="danxuan" >
							<radio class='margin-left-sm'   :value="item.value" ></radio> 
							<span style="padding-left:5px ;">{{item.name}}</span>
						</view>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="cu-form-group" v-if="mail == 0">
			<view class="title kuan">配送方式：</view>
			<view class="title" style="padding: 0;" @click="show_mail_list=true">
				<block v-for="(item,index) of peisong" :key="index">
					{{peisong[index]}}
				</block>
				<uni-icon type="arrowdown" size="20" color="#A7A7A7"></uni-icon>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title kuan">商品分类：</view>
			<view class="title" style="padding: 0;" @click="show_cate_list=true">
				{{category_name}}
				<uni-icon type="arrowdown" size="20" color="#A7A7A7"></uni-icon>
			</view>
		</view>
		<view class="cu-form-group" @click="jump_addgroup">
			<view class="title kuan">商品分组：</view>
			<view class="title" style="padding: 0;" @click="show_cate_list=true">
				{{group}}
				<uni-icon type="arrowdown" size="20" color="#A7A7A7"></uni-icon>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title kuan">商品促销语：</view>
			<input placeholder="请输入"  v-model="goods.description"></input>
		</view>
		<view class="guige" v-if="is_sku">
			<view class="cu-form-group ">
				<view class="title kuan">原价：</view>
				<input placeholder="请输入"  v-model="goods.market_price"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title kuan">普通用户价：</view>
				<input placeholder="请输入"  v-model="goods.price"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title kuan">VIP价：</view>
				<input placeholder="请输入"  v-model="goods.vip_price"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title kuan">分销提成：</view>
				<input placeholder="请输入"  v-model="goods.fx_tc"></input>
			</view>
		</view>
		<view>
			<view class="guige" v-for="(item,index) of pro_num" :key="index">
				<view class="cu-form-group ">
					<view class="title kuan">规格名称：</view>
					<input placeholder="请输入"   v-model="sku[index].name"></input>
				</view>
				<view class="cu-form-group ">
					<view class="title kuan">市场价：</view>
					<input placeholder="请输入"   v-model="sku[index].market_price" @input="get_market_price"></input>
				</view>
				<view class="cu-form-group ">
					<view class="title kuan">普通用户价：</view>
					<input placeholder="请输入"   v-model="sku[index].price" @input="get_price($event,index)"></input>
				</view>
				<view class="cu-form-group ">
					<view class="title kuan">VIP价：</view>
					<input placeholder="请输入"   v-model="sku[index].vip_price" @input="get_vip_price($event,index)"></input>
				</view>
				<view class="cu-form-group ">
					<view class="title kuan">分销提成：</view>
					<input placeholder="请输入"   v-model="sku[index].fx_tc" @input="get_fx($event,index)"></input>
				</view>
				<view class="stop" @click="close(index)"><img src="../../../imgs/stop.png" /></view>
			</view>
			<view class="cu-form-group " @click="tjge()">
				<view class="title "><uni-icon type="plus" size="18" color="red"></uni-icon><span></span>添加商品规格</view>
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title kuan">总库存：</view>
			<input placeholder="请输入"  v-model="goods.stock"></input>
		</view>
		<view class="cu-form-group " v-if="goods.leixin==0" @click="jump_yunfei">
			<view class="title kuan">运费：</view>
			<!-- <input placeholder="请输入"  v-model="goods.shipping_money"></input> -->
			<view class="title" style="padding: 0;" >
				<uni-icon type="arrowright" size="20" color="#A7A7A7"></uni-icon>
			</view>
		</view>
		<view class="cu-form-group align-start">
			<view class="title">商品详情介绍：</view>
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="请输入" v-model="goods.content"></textarea>
		</view>
		<view style="height: 15px;"></view>
		<view class="pic">
			<view class="biao_05">
				商品详情图片：(可拖动)
			</view>
			<robby-image-upload :value="c_pics" :server-url="serverUrl" :form-data="c_formData" :server-url-delete-image="DelServelUrl"
			 @delete="c_delImage" @add="c_onImg" @move="onMove_c" :limit="10"></robby-image-upload>
		</view> 
		<view class="H50"></view>
		<view class="p_btn">
			<!-- <cover-view class="btn-save">    -->
			<view class="flex flex-direction" v-if="!is_edit">
				<button @click="sub()" class="cu-btn bg-red margin-tb-sm lg">提交新增</button>
			</view>
			<view class="flex flex-direction" v-else>
				<button @click="sub_edit()" class="cu-btn bg-red margin-tb-sm lg">提交修改</button>
			</view>
		</view>
		<!-- 商品类型弹窗 -->
		<uni-popup :show="show_cate_list" type="top" mode="fixed" @hidePopup="show_cate_list=false">
			<view class="uni-list leixin">
				<radio-group @change="cate_change">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in category_list" :key="index">
						<view class="xuan">
							<radio :value="index+''" />
							<span style="padding-left: 5px;">{{item.category_name}}</span>
						</view>

					</label>
				</radio-group>
			</view>
		</uni-popup>


		<!-- 配送方式弹窗 -->
		<uni-popup :show="show_mail_list" type="top" mode="fixed" @hidePopup="show_mail_list=false">
			<view class="uni-list leixin">
				<checkbox-group @change="mail_change">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in mail_list" :key="index">
						<view class="xuan">
							<checkbox :value="index+''" />
							<span style="padding-left: 5px;">{{item.name}}</span>
						</view>
					</label>
				</checkbox-group>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	import uniPopup from "@/components/uni/uni-popup/uni-popup.vue"
	import robbyImageUpload from '@/components/plan-image-upload/up_img'
	import {
		Api_url
	} from '@/common/config'
	export default {
		data() {
			return {
				imgList: [],
				groupList: '',
				group_id: '',

				pics: [],
				photos: [],
				c_pics: [],
				c_photos: [],
				serverUrl: Api_url + 'up_img',
				DelServelUrl: Api_url + 'del_img',
				formData: {
					use: 'pro_banner',
					back: 'idurl'
				},
				c_formData: {
					use: 'pro_img',
					back: 'idurl'
				},
				sku: [],
				show_cate_list: false,
				show_mail_list: false,
				category_name: '',
				category_list: [],
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
					goods_name: '',
					shop_category_id: []
				},
				pro_num: [],
				guige: false,
				radioItems: [{
						name: '快递邮寄',
						value: '0'
					},
					{
						name: '到店核销',
						value: '1',
						// checked: 'true'
					}
				],
				market_price: '',
				price: '',
				vip_price: '',
				edit_group_id: '',
				fx_tc: '',
				mail: 1,
				mail_list: [{
						id: '1',
						name: 'A'
					},
					{
						id: '2',
						name: 'B'
					},
					{
						id: '3',
						name: 'C'
					}
				],
				peisong: '',
				pro_group_name:[],
				group_list: [{
						id: '1',
						name: '未分组'
					},
					{
						id: '2',
						name: 'A组'
					},
					{
						id: '3',
						name: 'B组'
					}
				],
				group: '未分组',


			};
		},
		components: {
			uniIcon,
			uniPopup,
			robbyImageUpload
		},
		computed: {
			is_sku() {
				if (this.pro_num.length > 0) {
					return false
				} else {
					return true
				}
			}
		},
		watch: {
			'goods.price'(news, old) {
				if (news * 1 > this.goods.market_price * 0.9) {
					this.$api.msg('用户价至少优惠10%')
					this.goods.price = this.goods.market_price * 0.9
				}
			},
			'goods.vip_price'(news, old) { 
				if (news * 1 > this.goods.price * 0.99) {
					this.$api.msg('VIP价需小于用户价')
					this.goods.vip_price = this.goods.price * 1 - 1
				}
			},
			'goods.fx_tc'(news, old) {
				if (news * 1 > this.goods.vip_price * 0.99) {
					this.$api.msg('提成不能大于VIP价')
					this.goods.fx_tc = this.goods.vip_price * 1 - 1
				}
			},

		},
		onLoad(options) {
			this._request()
			this.id = options.id
			this.get_groupList()


		},
		onShow() {
			const group_data = uni.getStorageSync('groupList')
			this.groupList = group_data.groupList
			this.group_id = group_data.group_id
			this.goods.shop_category_id = group_data.group_id
			if (!group_data.group_name) {
				this.group = '未分组'
			} else {
				this.group = group_data.group_name
			}
			uni.removeStorageSync('groupList');

		},
		methods: {
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			get_market_price(event) {
				this.market_price = event.target.value 
			},
			get_price(event, index) {
				const that = this
				this.price = event.target.value
				if (this.price * 1 > this.market_price * 0.9) {
					this.$api.msg('用户价至少优惠10%')
					that.sku[index].price = this.market_price * 0.9
					that.price = this.market_price * 0.9
				}
			},
			get_vip_price(event, index) {
				const that = this
				this.vip_price = event.target.value 
				if (this.vip_price * 1 > this.price * 0.99) {
					this.$api.msg('VIP价需小于用户价')
					that.sku[index].vip_price = this.price * 1 - 1
					that.vip_price = that.sku[index].vip_price
				}

			},
			get_fx(event, index) {
				const that = this
				this.fx_tc = event.target.value 
				if (this.fx_tc * 1 > this.vip_price * 0.99) {
					this.$api.msg('提成不能大于VIP价')
					that.sku[index].fx_tc = this.vip_price * 1 - 1
					that.fx_tc = that.vip_price * 1 - 1
				}
			},
			//--------------------------------------------------------------------------获取分组信息
			get_groupList(){
				this.groupList=this.$api.json.get_category
			},
			//----------------------------------------------------------------------------------获取分类
			_request(id) {
				this.category_list=this.$api.json.category
				if (this.id > 0) {
					this.get_pro(this.id)
				}
			},
			//---------------------------------------------------------------------------获取修改商品的数据
			get_pro(id) {
				let cate = this.category_list
				this.is_edit = true
				const that = this
				this.$api.http.get('shop/tgpro/' + id).then(res => {
					this.goods = res
					this.pics = res.banner_imgs_list
					this.photos = res.banner_imgs
					this.c_pics = res.c_imgs_list
					this.c_photos = res.c_imgs
					this.edit_group_id = res.shop_category_id
					if (res.sku.json) {
						this.sku = res.sku.json
					}
					for (let k in res.sku.json) {
						that.pro_num.push(1)
					}
					for (let k in cate) {
						if (cate[k]['category_id'] == res.category_id) {
							that.category_name = cate[k].category_name
						}
					}
					let group_name = []
					for (let k in that.groupList) {
						let v = that.groupList[k].id
						group_name[v] = that.groupList[k].name
					}
					
					for (var i = 0; i < that.edit_group_id.length; i++) {
						let num = that.edit_group_id[i]
						this.pro_group_name[i] = group_name[num]
					}
					if(!res.shop_category_id){
						this.group = '未分组'
					}else{
						this.group = this.pro_group_name +''
					}
					
					
					
					
				})
			},
			//--------------------------------------------------------------------------------跳转新增分组
			jump_addgroup() {
				uni.navigateTo({
					url: './addgroup/addgroup'
				})
			},
			
			onImg(e) {
				this.pics = e.allImages
				const obj = e.allImages
				for (let index in obj) {
					let id = obj[index].id
					this.photos[index] = id
				}
			},
			onMove(e) {
				this.pics = e
				const obj = e
				for (let index in obj) {
					let id = obj[index].id
					this.photos[index] = id
				} 
			},
			onMove_c(e) {
				this.c_pics = e
				const obj = e
				for (let index in obj) {
					let id = obj[index].id
					this.c_photos[index] = id
				} 
			},
			delImage(e) {
				let arr = []
				for (let k in e.allImages) {
					arr[k] = e.allImages[k].id
				}
				this.photos = arr
			},
			c_onImg(e) {
				this.c_pics = e.allImages
				const obj = e.allImages
				for (let index in obj) {
					let id = obj[index].id
					this.c_photos[index] = id
				}
			},
			c_delImage(e) {
				let arr = []
				for (let k in e.allImages) {
					arr[k] = e.allImages[k].id
				}
				this.c_photos = arr
			},
			leixin_chage(e) {
				this.goods.leixin = e.detail.value 
				this.mail = e.detail.value
				if (e.detail.value == 1) {
					this.peisong = ''
				}
			},
			//规格出现
			tjge() {
				this.pro_num.push('1'); 
				this.sku.push({
					name: '',
					price: '',
					vip_price: '',
					fx_tc: '',
					market_price: ''
				}) 
			},
			//规格消失
			close(index) {
				this.pro_num.splice(index, 1)
				this.sku.splice(index, 1)
				if (this.sku.length == 0 || this.pro_num.length == 0) {
					this.sku = []
					this.pro_num = []
				}
			}, 
			changeIndicatorDots(e) {
				this.isYasuo = !this.isYasuo
			},
			//选择分类
			cate_change(event) {
				const index = event.detail.value
				this.category_name = this.category_list[index].category_name
				this.goods.category_id = this.category_list[index].category_id
				this.show_cate_list = false
			},
			//选择配送方式
			mail_change(event) {
				const that = this
				const li = event.target.value.map(String) 
				let arr = []
				let arr2 = []
				for (let x in li) {
					let v = li[x]
					arr2[x] = that.mail_list[v].name + ''
				}
				this.peisong = arr2.join(" ")
			},


			previewImage() { //预览图片
				uni.previewImage({
					urls: this.imgList
				});
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
			//跳转到运费设置
			jump_yunfei(){
				uni.navigateTo({
					url: '/pages/edit/yunfei/yunfei'
				})
			}
		}
	}
</script>

<style lang="less">
	.pic {
		padding: 20upx 10upx;background-color: #fff;
	}
	.H50{height: 80px;}
	.kuan{width: 120px;text-align: right;}
	.input-view {
		font-size: 28upx;
	}

	.leixin {
		height: 300px;
		width: 50vw;
		overflow: hidden;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	.xuan {
		padding-bottom: 10px;
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
			padding: 10px 10px 0;font-size: 16px;
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
			width: 100%;
		}

		.guige {
			border: 1px solid #EDEDED;
			margin: 10px 20px 10px 10px;
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
