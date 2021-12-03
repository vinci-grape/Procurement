import {
	Api_url
} from './config'

export default {
	//post请求
	post(url, param) {
		return new Promise((cback, reject) => {
			uni.request({
				url: Api_url + url,
				data: param,
				method: 'post',
				header: {
					'token': uni.getStorageSync("token"),
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}).then(data => { // data为一个数组，数组第一项为错误信息，第二项为返回数据
				var [error, res] = data; 
				var res_code = res.data.status;
				if (res_code == 200){
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
					cback(res.data.data);
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
				// } else if(res_code == 201){
				// 	console.log('201:', res.data.message)
				// 	uni.showToast({
				// 		title: res.data.message,
				// 		icon:'none'
				// 	})
				// 	setTimeout(()=>{	
				// 		uni.removeStorageSync('token')
				// 		uni.reLaunch({
				// 			url:'/pages/login/login'
				// 		})
				// 	},1000)
				// 	return;
				// } else if (res_code == 400){
				// 	console.log('400:',res.data.msg)
				// 	let msg=res.data.msg?res.data.msg:'请求错误'
				// 	uni.showToast({
				// 		title:msg,
				// 		icon:'none'
				// 	})
				}
			}).catch(err => { 
				console.log('请求异常:',err); 	
				uni.showToast({
					title:'请求异常',
					icon:'none'
				})
			})
		})
	},
	get(url, param) {
		return new Promise((cback, reject) => {
			uni.request({
				url: Api_url + url,
				data: param,
				method:'get',
				header: {
					token: uni.getStorageSync("token"),
					'Content-Type': 'application/x-www-form-urlencoded'
				},
			}).then(data => {
				var [error, res] = data; 
				var res_code = res.data.status;
				if (res_code == 200){
					// uni.showToast({
					// 	title: res.data.message,
					// 	icon: 'none'
					// })
					cback(res.data.data);
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
				}				
			}).catch(err => { 
				console.log('请求异常:',err); 	
				uni.showToast({
					title:'请求异常',
					icon:'none'
				})
			})
		})
	},
	
	put(url, param) {
		return new Promise((cback, reject) => {
			uni.request({
				url: Api_url + url,
				data: param,
				method: 'put',
				header: {
					'token': uni.getStorageSync("token"),
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}).then(data => { // data为一个数组，数组第一项为错误信息，第二项为返回数据
				var [error, res] = data; 
				var res_code = res.data.status;
				if (res_code == 200){
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
					cback(res.data.data);
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
				}
			}).catch(err => { 
				console.log('请求异常:',err); 	
				uni.showToast({
					title:'请求异常',
					icon:'none'
				})
			})
		})
	},
}
