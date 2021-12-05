<template>
	<view class="user_list">
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in user" :key="item.name" v-if="item.sign_id==3">
					<view>
					</view>
					<view class="list">
						<radio class="radio" :value="item.name" :checked="index === current" />
						<view class="list_l"></view>
						<view class="list_r">
							<view class="list_r_01">{{item.username}}</view>
							<view class="list_r_02">{{item.name}}</view>
						</view>
					</view>
				</label>
			</radio-group>
		</view>
		<view class="p_btn">
			<view class="flex flex-direction" >
				<button @click="sub" class="cu-btn bg-red margin-tb-sm lg">确定分配</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choose: '',
				current: '',
				user: '',
				request: {
					role: 'BUYER',
					page: 0,
					size: 1000
				}
			};
		},
		onLoad() {
			this.$api.http.get('/user/findAllByRole', this.request).then(res => {
				this.user = res
			})
		},
		methods: {
			radioChange: function(evt) {
				this.choose=evt.detail.value
			},
			sub() {
				console.log(this.choose)
			}
		}
	}
</script>

<style lang="scss">
	.user_list {
		.radio {
			display: flex;
			padding: 10px;
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
