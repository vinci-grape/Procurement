(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-edit-yfmoban-yfmoban"],{"0049":function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{list:[1,2,3],yfmoban:""}},onLoad:function(){this.yfmoban=this.$api.json.yfmoban}};a.default=i},"48e0":function(n,a,t){"use strict";t.r(a);var i=t("59b5"),s=t("707f");for(var f in s)"default"!==f&&function(n){t.d(a,n,(function(){return s[n]}))}(f);t("c58d");var e,c=t("f0c5"),o=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"64f211dc",null,!1,i["a"],e);a["default"]=o.exports},"59b5":function(n,a,t){"use strict";var i;t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return f})),t.d(a,"a",(function(){return i}));var s=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("v-uni-view",{staticClass:"yfmoban"},[t("v-uni-view",{staticClass:"list"},[t("v-uni-view",{staticClass:"list_l"},[n._v("模板名称")]),t("v-uni-view",{staticClass:"list_r"},[n._v(n._s(n.yfmoban.name))])],1),t("v-uni-view",{staticClass:"list"},[t("v-uni-view",{staticClass:"list_l"},[n._v("使用范围")]),t("v-uni-view",{staticClass:"list_r"},[n._v(n._s(n.yfmoban.fanwei))])],1),n._l(n.yfmoban.quyu,(function(a,i){return t("v-uni-view",{key:i,staticClass:"fan"},[t("v-uni-view",{staticClass:"fan_01"},[n._v("可配送区域")]),t("v-uni-view",{staticClass:"fan_02"},[n._v(n._s(a.province))]),t("v-uni-view",{staticClass:"fan_03"},[t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("首件")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.shou)),t("span",[n._v("件")])])],1),t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("运费")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.s_price)),t("span",[n._v("元")])])],1),t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("续件")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.xu)),t("span",[n._v("件")])])],1),t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("续费")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.x_price)),t("span",[n._v("元")])])],1)],1)],1)}))],2)},f=[]},"707f":function(n,a,t){"use strict";t.r(a);var i=t("0049"),s=t.n(i);for(var f in i)"default"!==f&&function(n){t.d(a,n,(function(){return i[n]}))}(f);a["default"]=s.a},"7bb4":function(n,a,t){var i=t("24fb");a=i(!1),a.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.yfmoban[data-v-64f211dc]{background-color:#f3f4f6;min-height:100vh;padding-top:1px;font-size:16px}.yfmoban .list[data-v-64f211dc]{background-color:#fff;margin:20px 0 5px;padding:19px 15px;display:flex;justify-content:space-between;border-bottom:1px solid #ededef;border-top:1px solid #ededef}.yfmoban .list .list_r[data-v-64f211dc]{color:#777}.yfmoban .fan[data-v-64f211dc]{margin:15px 0 10px;background-color:#fff;padding:0 15px;line-height:40px}.yfmoban .fan .fan_02[data-v-64f211dc]{border-top:1px solid #f5f5f5;color:#9a9a9a}.yfmoban .fan .fan_03[data-v-64f211dc]{display:flex;flex-wrap:wrap;justify-content:space-between}.yfmoban .fan .fan_03 .fan_01_01[data-v-64f211dc]{width:50%;display:flex;justify-content:space-between;box-sizing:border-box;border-top:1px solid #f5f5f5}.yfmoban .fan .fan_03 .fan_01_01 span[data-v-64f211dc]{color:#9c9c9c;padding:0 10px 0 5px}',""]),n.exports=a},b6ce:function(n,a,t){var i=t("7bb4");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var s=t("4f06").default;s("1acdc819",i,!0,{sourceMap:!1,shadowMode:!1})},c58d:function(n,a,t){"use strict";var i=t("b6ce"),s=t.n(i);s.a}}]);