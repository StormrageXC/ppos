(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todos-todo-detail-index"],{"14d0":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bg-curve[data-v-db8224ac]{height:%?100?%;border-radius:0 0 50% 50%;background-color:#3767fe;position:absolute;width:100%}uni-scroll-view[data-v-db8224ac]{height:calc(100vh - %?100?%);padding:%?20?%;box-sizing:border-box}.content[data-v-db8224ac]{padding:%?30?%;border-radius:5px;background:#fff;margin-bottom:%?30?%}.content[data-v-db8224ac]:last-child{margin-bottom:0}.account[data-v-db8224ac]{position:relative;padding:%?20?%;box-shadow:0 0 6px rgba(0,0,0,.1)}.account .title[data-v-db8224ac]{font-size:14px}.info[data-v-db8224ac]{font-size:12px;margin:%?8?% 0}.info .label[data-v-db8224ac]{color:#999;width:%?150?%;display:inline-block}.info .value[data-v-db8224ac]{color:#000;margin-left:%?10?%}.tip[data-v-db8224ac]{margin:%?16?% 0 %?20?% 0}.balance .value[data-v-db8224ac]{color:#ff5816}.balance .label[data-v-db8224ac]{width:%?100?%}.connect[data-v-db8224ac]{height:%?80?%;text-align:center;line-height:%?80?%;position:relative;color:#ff5816;font-size:12px}.connect[data-v-db8224ac]::before, .connect[data-v-db8224ac]::after{content:"";display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:rgba(255,88,22,.1)}.connect[data-v-db8224ac]::before{width:%?40?%;height:%?40?%;border-radius:40%}.connect[data-v-db8224ac]::after{width:%?10?%;height:%?80?%}.account[data-v-db8224ac]::before, .account[data-v-db8224ac]::after{display:block;position:absolute;right:0;top:0;box-sizing:border-box}.account[data-v-db8224ac]::before{content:"";width:%?88?%;height:%?88?%;border-left:%?44?% solid transparent;border-bottom:%?44?% solid transparent;border-right:%?44?% solid #3767fe;border-top:%?44?% solid #3767fe}.account[data-v-db8224ac]::after{display:block;content:"付";width:%?45?%;height:%?45?%;color:#fff;text-align:center;line-height:%?45?%;font-size:14px}.receiver[data-v-db8224ac]::before{border-right:%?44?% solid #ff5816;border-top:%?44?% solid #ff5816}.receiver[data-v-db8224ac]::after{content:"收"}.article-title[data-v-db8224ac]{font-size:14px;margin-top:%?30?%}.article[data-v-db8224ac]{font-size:12px;color:#999;word-break:break-all;margin:%?30?% 0}.flex[data-v-db8224ac]{height:%?100?%}.flex > uni-view[data-v-db8224ac]{flex:0.5;margin:0 %?20?%;align-items:center}.dialog[data-v-db8224ac]{padding:%?20?%}.dialog .flex[data-v-db8224ac]{height:%?120?%}.net-stock[data-v-db8224ac], instruct-account[data-v-db8224ac]{display:block;margin:%?30?% %?0?%}van-dialog van-icon[data-v-db8224ac]{font-size:30px}.success van-icon[data-v-db8224ac]{color:#3767fe}.fail van-icon[data-v-db8224ac]{color:var(--red--)}.message[data-v-db8224ac]{text-align:center;margin:%?70?% 0}.message uni-text[data-v-db8224ac]{vertical-align:super;font-size:16px;margin-left:%?10?%}\n/* pages/todo/todo.wxss */.tag[data-v-db8224ac]{background-color:rgba(73,102,245,.1);color:#4966f5;font-size:10px;width:-webkit-fit-content;width:fit-content;padding:%?6?% %?10?%;border-radius:3px;margin-right:%?15?%;white-space:nowrap}.flex[data-v-db8224ac]{align-items:center}.title[data-v-db8224ac]{font-size:16px;width:100%;text-overflow:ellipsis;overflow:hidden;margin:%?10?% 0}.money[data-v-db8224ac]{font-size:20px;color:#ff5816;margin-top:%?18?%}.date-status[data-v-db8224ac]{display:flex;justify-content:space-between}.tip[data-v-db8224ac]{display:flex;align-items:center;font-size:12px;color:#999}.tip > uni-text[data-v-db8224ac]{margin-right:%?30?%}.status[data-v-db8224ac]{position:relative;color:#4966f5;font-size:12px;height:-webkit-fit-content;height:fit-content;padding:%?6?% %?10?%;border-radius:3px;right:%?15?%}.merge[data-v-db8224ac]{margin:%?10?% 0 %?20?% 0;padding-bottom:%?25?%;border-bottom:1px solid #ededed}uni-button[data-v-db8224ac]{color:#000!important;border:1px solid #000}uni-button[type=primary][data-v-db8224ac]{color:#fff!important;background-color:#3767fe!important;border:1px solid #3767fe}',""]),t.exports=a},"3c2a":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{operate_type:"",remarks:"",page_config:"netStockCheck",detail:{ipo_code:"HS001",ins_type_no:"1182",shareholder_code:"HSCODE001",ipo_winning_num:1e3,ipo_winning_price:"1,000",commission_deatil:"20,000"},fund:{fund_name:"恒生电子测试产品A",ins_money_string:"1,000,000",ins_type_name:"银转证",ins_money:1e6,ins_date:"2022-10-10 10:00:00",busiapply_status_name:"进行中",summary_to_bank:"本次交易意义重大",manger_message:"本次交易非常成功"},show:!1,bussinessForm:{},textareaConfig:{maxHeight:120,minHeight:120},buttons:[{type:"default",id:"rejectBA",text:"驳回",show:!0},{type:"default",id:"sendBackBA",text:"回退",show:!0},{type:"primary",id:"adoptBA",text:"通过",show:!0}],status:"",message:"",loading:!1}},created:function(){},mounted:function(){},methods:{operation:function(t){this.$refs.inputDialog.open()}},watch:{}};a.default=i},"619f":function(t,a,e){"use strict";e.r(a);var i=e("a1ca"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"6c1a":function(t,a,e){"use strict";e.r(a);var i=e("7cc2"),n=e("619f");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("8a93");var d,c=e("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"db8224ac",null,!1,i["a"],d);a["default"]=s.exports},"7cc2":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={instructAccount:e("372a").default,uniList:e("0222").default,uniListItem:e("2963").default,uniPopup:e("7822").default,uniPopupDialog:e("9dc7").default,uniEasyinput:e("8b07").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"bg-curve"}),e("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-text",{staticClass:"tag"},[t._v("托管划款")]),e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.fund.fund_name))])],1),e("v-uni-view",{staticClass:"money"},[t._v(t._s(t.fund.ins_money))]),e("v-uni-view",{staticClass:"tip merge"},[e("v-uni-text",[t._v("划款金额")]),e("v-uni-text",[t._v("|")]),e("v-uni-text",[t._v(t._s(t.fund.ins_type_name))])],1),e("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.fund.ins_date))])],1),e("instruct-account",{staticClass:"instruct-account",attrs:{page_config:t.page_config,detail:t.detail}}),e("v-uni-view",{staticClass:"net-stock",attrs:{"v:if":"page_config === 'netStockCheck'"}},[e("uni-list",[e("uni-list-item",{attrs:{title:"股票代码",rightText:t.detail.ipo_code}}),"1183"===t.detail.ins_type_no?e("uni-list-item",{attrs:{title:"股东代码",rightText:t.detail.shareholder_code}}):t._e(),e("uni-list-item",{attrs:{title:"新股中签数量",rightText:t.detail.ipo_winning_num}}),e("uni-list-item",{attrs:{title:"新股中签价格",rightText:t.detail.ipo_winning_price}}),e("uni-list-item",{attrs:{title:"佣金",rightText:t.detail.commission_deatil}})],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",[e("v-uni-view",{staticClass:"article-title"},[t._v("摘要")]),e("v-uni-view",{staticClass:"article"},[t._v(t._s(t.fund.summary_to_bank))])],1),e("v-uni-view",[e("v-uni-view",{staticClass:"article-title"},[t._v("托管人留言")]),e("v-uni-view",{staticClass:"article"},[t._v(t._s(t.fund.manger_message||""))])],1)],1)],1),e("v-uni-view",{staticClass:"flex"},t._l(t.buttons,(function(a,i){return a.show?e("v-uni-view",{key:i,staticStyle:{flex:"0.5"}},[e("v-uni-button",{attrs:{round:!0,block:!0,type:a.type},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.operation(a)}}},[t._v(t._s(a.text))])],1):t._e()})),1),e("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[e("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"处理意见",value:"对话框预置提示内容!",placeholder:"请输入内容"},on:{confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.dialogInputConfirm.apply(void 0,arguments)}}},[e("v-uni-view",{staticStyle:{width:"100%"},attrs:{slot:"default"},slot:"default"},[e("uni-easyinput",{attrs:{type:"textarea",focus:!0,placeholder:"请输入内容"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.input.apply(void 0,arguments)}}})],1)],1)],1)],1)},o=[]},"8a93":function(t,a,e){"use strict";var i=e("ad3d"),n=e.n(i);n.a},a1ca:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("3c2a")),o=n.default;a.default=o},ad3d:function(t,a,e){var i=e("14d0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2dfbbf5a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);