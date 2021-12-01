<template>
	<view class="user_list">
		<view class="search">
			<uni-easyinput suffixIcon="search" v-model="search_value" placeholder="请输入内容" @iconClick="onClick" color="#A5A5A5"></uni-easyinput>
		</view>
		<scroll-view class="scroll-view_x" scroll-x style="width: auto;overflow:hidden;">
			<view class='tab'>
				<view :class="c_index==0?'tab_focus':'tab_normal'" @click="num(0)">全部</view>
				<block v-for="(item, index) of sign_list">
					<view :class="c_index==(index+1)?'tab_focus':'tab_normal'" @click="num(index+1)">{{item.category_name}}</view>
				</block>
			</view>
		</scroll-view>
		<block v-for="(item, index) of user_list" v-if="c_index==0||item.sign_id==c_index" >
			<view class="list" @click="jump_to_detail(item.id)">
				<view class="list_l"><img :src="item.pic"></img></view>
				<view class="list_r">
					<view class="list_r_01">{{item.name}}<span class="hui">{{item.sign}}</span></view>
					<view class="list_r_02">{{item.username}}</view>
				</view>
			</view>
		</block>
		<view class="p_btn">
			<view class="flex flex-direction" >
				<button @click="jump_user_manage" class="cu-btn bg-red margin-tb-sm lg">新增用户</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_value: '',
				c_index: 0,
				user_list: '',
				sign_list: '',
				sign: ''
			};
		},		
		onLoad() {  
			this.user_list=this.$api.json.user,
			this.sign_list=this.$api.json.sign_list,
			this.sign=this.$api.json.sign
			// this.$api.http.post("/login", this.account).then(res => {
			// 	// uni.setStorageSync()
			// 	uni.redirectTo({
			// 		url: '../user/user',
			// 	})
			// })
		},
		methods: {
			jump_to_detail(id) {
				console.log(id)
				uni.navigateTo({
					url: './user_edit/user_edit?id='+id
				});
			},
			jump_user_manage() {
				uni.navigateTo({
					url: './user_append/user_append'
				});
			},
			num(index) {
				this.c_index = index
			},
		}
	}
</script>

<style lang="scss">
	.user_list {
		.search {
			background: #FFFFFF;
			display: flex;
			width: 100%;
			box-sizing: border-box;
			padding: 10px;
		}
		.tab {
			padding: 10px 10%;
			display: flex;
			width: 100%;
			.tab_normal {
				padding-bottom: 5px;
				min-width: 80px;
				text-align: center;
			}
			.tab_focus {
				border-bottom: 2px solid red;
				padding-bottom: 5px;
				min-width: 80px;
				text-align: center;
			}
		}
		.list {
			display: flex;
			padding: 10px;
			border-bottom: 1px solid #EAEAEA;
			.list_l {
				padding: 0 10px 0 0;

				img {
					width: 50px;
					height: 50px;
					border-radius: 5px;
				}
			}
			.list_r {
				line-height: 25px;
				.list_r_01 {
					.hui {
						border: 1px solid #FF6D6D;
						border-radius: 3px;
						color: #ff6d6d;
						font-size: 12px;
						padding: 0 5px;
						margin-left: 8px;
					}
				}
				.list_r_02 {
					color: #ABABAB;
				}
			}
		}
		.p_btn {
			background: #FFFFFF;
			padding: 0 10px 0px;
			position: fixed;
			// bottom: 100rpx;
			bottom: 0;
			width: 100%;
			z-index: 9999;
		}
	}
</style>
