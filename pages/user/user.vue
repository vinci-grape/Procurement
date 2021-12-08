<template>
	<view class="user_list">
		<view class="search">
			<uni-easyinput suffixIcon="search" v-model="request.keyword" placeholder="请输入内容" @iconClick="search" color="#A5A5A5"></uni-easyinput>
		</view>
		<scroll-view class="scroll-view_x" scroll-x style="width: auto;overflow:hidden;">
			<view class='tab'>
				<view :class="c_index==0?'tab_focus':'tab_normal'" @click="num(0)">全部</view>
				<block v-for="(item, index) of role_list">
					<view :class="c_index==(index+1)?'tab_focus':'tab_normal'" @click="num(index+1)">{{item}}</view>
				</block>
			</view>
		</scroll-view>
		<block v-for="(item, index) of user_list" v-if="c_index==0||role_map[item.role][1]==c_index - 1">
			<view class="list" @click="jump_password_change(item)">
				<view class="list_l"><!-- <img :src="item.pic"></img> --></view>
				<view class="list_r">
					<view class="list_r_01">{{item.username}}<span class="hui">{{role_map[item.role][0]}}</span></view>
					<view class="list_r_02">{{item.name}}</view>
				</view>
			</view>
		</block>
		<view class="p_btn">
			<view class="flex flex-direction" >
				<button @click="jump_user_append" class="cu-btn bg-red margin-tb-sm lg">新增用户</button>
			</view>
		</view>
	</view>
	
</template>

<script>	
	export default {
		data() {
			return {
				request: {
					keyword: '',
					page: '0',
					size: '1000000',
				},
				c_index: 0,
				user_list: '',
				role_list: '',
				role_map: '',
			};
		},
		onLoad() {
			this.init()
		},
		onPullDownRefresh(){
			this.init()
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			init() {
				this.$api.http.get('/user/findAll', this.request).then(res => {
					this.user_list = res.content
				})
				this.role_list=this.$api.json.role_list
				this.role_map = this.$api.json.role_map
			},
			jump_password_change(item) {
				uni.navigateTo({
					url: './password_change/password_change?id='+item.id+'&username='+item.username
				});
			},
			jump_user_append() {
				uni.navigateTo({
					url: './user_append/user_append'
				});
			},
			num(index) {
				this.c_index = index
			},
			search() {
				this.$api.http.get('/user/search', this.request).then(res => {
					this.user_list = res.content
				})
			}
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
			bottom: 0;
			width: 100%;
			z-index: 9999;
		}
	}
</style>
