(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail"],{"48c6":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".detail .tit[data-v-5833eaac]{padding:15px 10px;border-bottom:1px solid #eef0ef;font-size:16px}.detail .tag-e .goods[data-v-5833eaac]{display:flex;width:100%;background-color:#fff;padding:10px;box-sizing:border-box;background-color:#fafafa;border-bottom:1px solid #eef0ef}.detail .tag-e .goods img[data-v-5833eaac]{width:%?160?%;height:%?160?%}.detail .tag-e .goods_02[data-v-5833eaac]{width:80%;box-sizing:border-box;display:flex;flex-direction:column;height:%?160?%;justify-content:space-between;padding-top:%?10?%;padding-left:%?20?%}.detail .tag-e .goods_title[data-v-5833eaac]{height:60px;overflow:hidden;line-height:20px;font-weight:600}.detail .tag-e .good_p[data-v-5833eaac]{display:flex;justify-content:space-between}.detail .tag-e .good_p .good_price[data-v-5833eaac]{color:#f04e42;font-weight:600}.detail .list[data-v-5833eaac]{padding:0 10px;font-size:15px}.detail .list .list_01[data-v-5833eaac]{border-bottom:1px solid #eef0ef;display:flex;justify-content:space-between;padding:15px 3px}.detail .list .list_01 .list_01_r[data-v-5833eaac]{color:#959796}",""]),t.exports=i},"57b1":function(t,i,e){"use strict";e.r(i);var a=e("5d5a"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=s.a},"5d5a":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{id:"",order:""}},onLoad:function(t){this.id=t.id,this.get_order()},methods:{get_order:function(){var t=this;this.$api.http.post("shop/get_one_order",{id:this.id}).then((function(i){t.order=i}))}}};i.default=a},"7c3a":function(t,i,e){"use strict";var a=e("b1bb"),s=e.n(a);s.a},"9f82":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"detail"},[e("v-uni-view",{staticClass:"tit"},[t._v("订单编号："+t._s(t.order.order_num))]),e("v-uni-view",{staticClass:"tag-e"},[e("v-uni-view",{staticClass:"goods "},[e("v-uni-view",[e("img",{attrs:{src:t.order.goods_picture}})]),e("v-uni-view",{staticClass:"goods_02"},[e("v-uni-view",{staticClass:"goods_title"},[t._v(t._s(t.order.message))]),e("v-uni-view",{staticClass:"good_p"},[e("v-uni-view",{staticClass:"good_price"},[t._v("¥"+t._s(t.order.goods_money))]),e("v-uni-view",{staticClass:"i"},[t._v("x "+t._s(t.order.num))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"list_01"},[e("v-uni-view",{staticClass:"list_01_l"},[t._v("下单时间")]),e("v-uni-view",{staticClass:"list_01_r"},[t._v(t._s(t.order.pay_time))])],1),e("v-uni-view",{staticClass:"list_01"},[e("v-uni-view",{staticClass:"list_01_l"},[t._v("总金额")]),e("v-uni-view",{staticClass:"list_01_r"},[t._v(t._s(t.order.order_money))])],1),e("v-uni-view",{staticClass:"list_01"},[e("v-uni-view",{staticClass:"list_01_l"},[t._v("收货地址")]),e("v-uni-view",{staticClass:"list_01_r"},[t._v(t._s(t.order.receiver_address))])],1)],1)],1)},o=[]},adb4:function(t,i,e){"use strict";e.r(i);var a=e("9f82"),s=e("57b1");for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);e("7c3a");var d,n=e("f0c5"),r=Object(n["a"])(s["default"],a["b"],a["c"],!1,null,"5833eaac",null,!1,a["a"],d);i["default"]=r.exports},b1bb:function(t,i,e){var a=e("48c6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("8f12bd0e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);