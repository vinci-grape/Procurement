<template>
	<view class="yunfei">
		<view class="mbxx b-b">模板信息</view>
		<view class="cu-form-group b-b">
			<view class="title">模板名称</view>
			<input placeholder="请输入" name="input" v-model="form.name"></input>
		</view>
		<view class="row b-b">
			<text class="tit">发货地</text>
			<view class="result" @click="toggleTab">{{resultInfo.result}}</view>
			<!-- <input class="input" type="text" v-model="form.city" placeholder="楼号、门牌" placeholder-class="placeholder" @tap="choose_region" /> -->
			<w-picker mode="region" :defaultVal="['北京市','市辖区','东城区']" @confirm="onConfirm" ref="region"></w-picker>
		
		</view>
		<view class="cu-form-group b-b">
			<view class="title">模板类型</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'包邮模板'}}
				</view>
			</picker>
		</view>
		<view class="BH8"></view>
		<view class="psdq ">配送地区</view>
		<view class="shun b-b">
			<radio value="r1"  style="transform:scale(0.5)" />
			包邮地区统一顺丰包邮，勾选即同意《顺丰包邮协议》
			<text class="lg text-gray cuIcon-question"></text>
		</view>
		<view class="sheng b-b">24省列表</view>
		<view class=" text-grey bao">包邮省市</view>
		<view class="padding-sm b-b">
			<view class="con bg-gray text-grey">1、2、3</view>
		</view>
		<view class="mbxx b-b">默认运费</view>
		<view class="table">
			<table width="100%" border>
				<tr>
					<td>首件</td>
					<td>运费</td>
					<td>续件</td>
					<td>运费</td>
				</tr>
				<tr>
					<td><input /></td>
					<td><input /></td>
					<td><input /></td>
					<td><input /></td>
				</tr>
			</table>
		</view>
		<view class="btn bg-white flex flex-direction">
			<button class="cu-btn bg-red lg" >保存</button>
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		data() {
			return {
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				resultInfo: {
					result: '请选择地区'
				},
				form: {
					name: '',
					province: '',
					city: '',
					county: '',
				},
			};
		},
		components:{
			wPicker
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
			},
			toggleTab() {
				this.$refs['region'].show();
			},
			onConfirm(val) {
				console.log(val);
				//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
				// switch(this.mode){
				// 	case "date":
				// 		break;
				// }
				this.resultInfo = val;
				// this.form.city = this.resultInfo.result
				this.form.province = val.checkArr[0]
				this.form.city = val.checkArr[1]
				this.form.county = val.checkArr[2]
				console.log(this.form)
			},
		}
	}
</script>

<style lang="scss">
.yunfei{
	.mbxx{font-weight: 600;padding:15px 10px;}
	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;
	
		.tit {
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
	
		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
	
		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.b-b{border-bottom: 1px solid #F9F9F9;}
	.BH8{background-color: #F5F5F5;height: 8px;}
	.psdq{font-weight: 600;padding: 10px 10px 5px;}
	.shun{padding: 0 10px 5px;font-size: 12px;}
	.sheng{padding: 15px 10px;}
	.bao{font-size: 12px;padding: 10px 10px 0;}
	.con{padding: 10px;border-radius: 3px;font-size: 12px;}
	.table table {border: 1px solid #F0F1F3;
		tr td{text-align: center;line-height: 35px;height: 35px;
			input{line-height: 35px;font-weight: 600;}
		}
	}
	.btn{padding: 40px 10px 0;}
}
</style>
