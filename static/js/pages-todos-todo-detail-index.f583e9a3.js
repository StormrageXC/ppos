(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todos-todo-detail-index"],{"19cd":function(t,e,i){"use strict";i.r(e);var a=i("b98c"),n=i("eb65");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("84fb");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"50c16286",null,!1,a["a"],r);e["default"]=s.exports},"1a41":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{operate_type:"",remarks:"",page_config:"netStockCheck",detail:{ipo_code:"HS001",ins_type_no:"1182",shareholder_code:"HSCODE001",ipo_winning_num:1e3,ipo_winning_price:"1,000",commission_deatil:"20,000"},fund:{fund_name:"恒生电子测试产品A",ins_money_string:"1,000,000",ins_type_name:"银转证",ins_money:1e6,ins_date:"2022-10-10 10:00:00",busiapply_status_name:"进行中",summary_to_bank:"本次交易意义重大",manger_message:"本次交易非常成功"},show:!1,bussinessForm:{},textareaConfig:{maxHeight:120,minHeight:120},buttons:[{type:"default",id:"rejectBA",text:"驳回",show:!0},{type:"default",id:"sendBackBA",text:"回退",show:!0},{type:"primary",id:"adoptBA",text:"通过",show:!0}],status:"",message:"",loading:!1}},created:function(){},mounted:function(){},methods:{operation:function(t){this.$refs.inputDialog.open()}},watch:{}};e.default=a},7536:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 自定义变量 */.bg-curve[data-v-50c16286]{height:%?100?%;border-radius:0 0 50% 50%;background-color:#3767fe;position:absolute;width:100%}uni-scroll-view[data-v-50c16286]{height:calc(100vh - %?100?%);padding:%?20?%;box-sizing:border-box}.content[data-v-50c16286]{padding:%?30?%;border-radius:5px;background:#fff;margin-bottom:%?30?%}.content[data-v-50c16286]:last-child{margin-bottom:0}.account[data-v-50c16286]{position:relative;padding:%?20?%;box-shadow:0 0 6px rgba(0,0,0,.1)}.account .title[data-v-50c16286]{font-size:14px}.info[data-v-50c16286]{font-size:12px;margin:%?8?% 0}.info .label[data-v-50c16286]{color:#999;width:%?150?%;display:inline-block}.info .value[data-v-50c16286]{color:#000;margin-left:%?10?%}.tip[data-v-50c16286]{margin:%?16?% 0 %?20?% 0}.balance .value[data-v-50c16286]{color:#ff5816}.balance .label[data-v-50c16286]{width:%?100?%}.connect[data-v-50c16286]{height:%?80?%;text-align:center;line-height:%?80?%;position:relative;color:#ff5816;font-size:12px}.connect[data-v-50c16286]::before, .connect[data-v-50c16286]::after{content:"";display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:rgba(255,88,22,.1)}.connect[data-v-50c16286]::before{width:%?40?%;height:%?40?%;border-radius:40%}.connect[data-v-50c16286]::after{width:%?10?%;height:%?80?%}.account[data-v-50c16286]::before, .account[data-v-50c16286]::after{display:block;position:absolute;right:0;top:0;box-sizing:border-box}.account[data-v-50c16286]::before{content:"";width:%?88?%;height:%?88?%;border-left:%?44?% solid transparent;border-bottom:%?44?% solid transparent;border-right:%?44?% solid #3767fe;border-top:%?44?% solid #3767fe}.account[data-v-50c16286]::after{display:block;content:"付";width:%?45?%;height:%?45?%;color:#fff;text-align:center;line-height:%?45?%;font-size:14px}.receiver[data-v-50c16286]::before{border-right:%?44?% solid #ff5816;border-top:%?44?% solid #ff5816}.receiver[data-v-50c16286]::after{content:"收"}.article-title[data-v-50c16286]{font-size:14px;margin-top:%?30?%}.article[data-v-50c16286]{font-size:12px;color:#999;word-break:break-all;margin:%?30?% 0}.flex[data-v-50c16286]{height:%?100?%}.flex > uni-view[data-v-50c16286]{flex:0.5;margin:0 %?20?%;align-items:center}.dialog[data-v-50c16286]{padding:%?20?%}.dialog .flex[data-v-50c16286]{height:%?120?%}.net-stock[data-v-50c16286], instruct-account[data-v-50c16286]{display:block;margin:%?30?% %?0?%}van-dialog van-icon[data-v-50c16286]{font-size:30px}.success van-icon[data-v-50c16286]{color:#3767fe}.fail van-icon[data-v-50c16286]{color:var(--red--)}.message[data-v-50c16286]{text-align:center;margin:%?70?% 0}.message uni-text[data-v-50c16286]{vertical-align:super;font-size:16px;margin-left:%?10?%}\r\n/* pages/todo/todo.wxss */.tag[data-v-50c16286]{background-color:rgba(73,102,245,.1);color:#4966f5;font-size:10px;width:-webkit-fit-content;width:fit-content;padding:%?6?% %?10?%;border-radius:3px;margin-right:%?15?%;white-space:nowrap}.flex[data-v-50c16286]{align-items:center}.title[data-v-50c16286]{font-size:16px;width:100%;text-overflow:ellipsis;overflow:hidden;margin:%?10?% 0}.money[data-v-50c16286]{font-size:20px;color:#ff5816;margin-top:%?18?%}.date-status[data-v-50c16286]{display:flex;justify-content:space-between}.tip[data-v-50c16286]{display:flex;align-items:center;font-size:12px;color:#999}.tip > uni-text[data-v-50c16286]{margin-right:%?30?%}.status[data-v-50c16286]{position:relative;color:#4966f5;font-size:12px;height:-webkit-fit-content;height:fit-content;padding:%?6?% %?10?%;border-radius:3px;right:%?15?%}.merge[data-v-50c16286]{margin:%?10?% 0 %?20?% 0;padding-bottom:%?25?%;border-bottom:1px solid #ededed}uni-button[data-v-50c16286]{color:#000!important;border:1px solid #000}uni-button[type=primary][data-v-50c16286]{color:#fff!important;background-color:#3767fe!important;border:1px solid #3767fe}',""]),t.exports=e},"84fb":function(t,e,i){"use strict";var a=i("922d"),n=i.n(a);n.a},"922d":function(t,e,i){var a=i("7536");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cb8c896e",a,!0,{sourceMap:!1,shadowMode:!1})},a8ac:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("1a41")),o=n.default;e.default=o},b98c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={instructAccount:i("b860").default,uniList:i("66cb").default,uniListItem:i("cd68").default,uniPopup:i("9078").default,uniPopupDialog:i("a670").default,uniEasyinput:i("100a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bg-curve"}),i("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-text",{staticClass:"tag"},[t._v("托管划款")]),i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.fund.fund_name))])],1),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.fund.ins_money))]),i("v-uni-view",{staticClass:"tip merge"},[i("v-uni-text",[t._v("划款金额")]),i("v-uni-text",[t._v("|")]),i("v-uni-text",[t._v(t._s(t.fund.ins_type_name))])],1),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.fund.ins_date))])],1),i("instruct-account",{staticClass:"instruct-account",attrs:{page_config:t.page_config,detail:t.detail}}),i("v-uni-view",{staticClass:"net-stock",attrs:{"v:if":"page_config === 'netStockCheck'"}},[i("uni-list",[i("uni-list-item",{attrs:{title:"股票代码",rightText:t.detail.ipo_code}}),"1183"===t.detail.ins_type_no?i("uni-list-item",{attrs:{title:"股东代码",rightText:t.detail.shareholder_code}}):t._e(),i("uni-list-item",{attrs:{title:"新股中签数量",rightText:t.detail.ipo_winning_num}}),i("uni-list-item",{attrs:{title:"新股中签价格",rightText:t.detail.ipo_winning_price}}),i("uni-list-item",{attrs:{title:"佣金",rightText:t.detail.commission_deatil}})],1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-view",{staticClass:"article-title"},[t._v("摘要")]),i("v-uni-view",{staticClass:"article"},[t._v(t._s(t.fund.summary_to_bank))])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"article-title"},[t._v("托管人留言")]),i("v-uni-view",{staticClass:"article"},[t._v(t._s(t.fund.manger_message||""))])],1)],1)],1),i("v-uni-view",{staticClass:"flex"},t._l(t.buttons,(function(e,a){return e.show?i("v-uni-view",{key:a,staticStyle:{flex:"0.5"}},[i("v-uni-button",{attrs:{round:!0,block:!0,type:e.type},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.operation(e)}}},[t._v(t._s(e.text))])],1):t._e()})),1),i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"处理意见",value:"对话框预置提示内容!",placeholder:"请输入内容"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogInputConfirm.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{width:"100%"},attrs:{slot:"default"},slot:"default"},[i("uni-easyinput",{attrs:{type:"textarea",focus:!0,placeholder:"请输入内容"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)}}})],1)],1)],1)],1)},o=[]},eb65:function(t,e,i){"use strict";i.r(e);var a=i("a8ac"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}}]);