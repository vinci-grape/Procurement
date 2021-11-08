import Vue from 'vue'
import App from './App'
import './assets/style/border.css'
import './assets/style/main.css'
import http from './common/axios.js'  
import json from './json2' //测试用数据

Vue.config.productionTip = false

App.mpType = 'app' 
//统一提示方便全局修改
const msg = (title,  icon='none',duration=2000, mask=false)=>{
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
} 
Vue.prototype.$api = {msg, json, http};  

const app = new Vue({
    ...App
})
app.$mount()
