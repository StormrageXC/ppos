(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todos-todo-detail-index"],{"325c":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.formatDate=n,i.request=a,e("99af"),e("caad"),e("2532");e("bf11");function a(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="h5",a="1.0",n=i.method,s=i.interfaceName,o=void 0===s?"wechatH5Api":s,r=i.data,l=i.success,c=i.error,d={req_sys_type:e,req_sys_version:a,token:uni.getStorageSync("token")};t="/ppos/hsamo.ppos.auth/v/",uni.request({method:n||"POST",url:"".concat(t).concat(o),data:Object.assign(d,r),success:function(t){"00000000"===t.data.resp_code?"function"===typeof l&&l(t.data.result):"99990005"===t.data.resp_code?location.hash.includes("/pages/login/index")?"function"===typeof c&&c(t.data):uni.navigateTo({url:"/pages/login/index"}):"function"===typeof c&&c(t.data)}})}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";if("string"===typeof t)return t;var e=t.getFullYear(),a=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,n=t.getDate()<10?"0"+t.getDate():t.getDate();return e+i+a+i+n}},"372a":function(t,i,e){"use strict";e.r(i);var a=e("5e02"),n=e("bc28");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("b048");var o,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"57bf4e18",null,!1,a["a"],o);i["default"]=l.exports},"3c2a":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d3b7"),e("159b"),e("3ca3"),e("ddb0"),e("2b3d"),e("9861");var a=e("325c"),n=e("7520"),s={data:function(){return{page_title:"指令详情",formData:{remark:""},rules:{remark:{rules:[{required:!0,errorMessage:"处理意见不能为空"}]}},detail:{},download_lock:!1,confirm_lock:!1,fileList:[],show:!1,textareaConfig:{maxHeight:120,minHeight:120},action:"",buttons:[{type:"default",id:"rejectBA",text:"拒绝",action:"-1",show:!0},{type:"default",id:"sendBackBA",text:"驳回",action:"1",show:!0},{type:"primary",id:"adoptBA",text:"通过",action:"0",show:!0}],status:"",message:"",loading:!1,page_from:""}},created:function(){this.$route.query.page_from&&(this.page_from=this.$route.query.page_from,this.page_title="todos"===this.page_from?"待办详情":"指令详情"),this.getInsInfo(),this.getInsFileList()},mounted:function(){},methods:{getInsInfo:function(){var t=this,i=this.$route.query.ins_id;(0,a.request)({data:{api:"API0000251",param:{ins_id:i}},success:function(i){t.detail=i}})},getInsFileList:function(){var t=this,i=this.$route.query.ins_id;(0,a.request)({data:{api:"API0000264",param:{ins_id:i}},success:function(i){t.fileList=i,i&&i.forEach((function(i){i.file_type=i.file_name.split(".").pop(),i.file_size_show=t.calculateFileSize(i.file_size)}))}})},calculateFileSize:function(t){return t>1048576?(t/1024/1024).toFixed(2)+"MB":(t/1024).toFixed(0)+"kb"},downloadItem:function(t){var i=this;this.download_lock?uni.showToast({title:"文件下载中，请勿重复操作",icon:"none"}):(this.download_lock=!0,(0,a.request)({data:{api:"API0000263",param:{uuid:t.uuid}},success:function(e){var a=uni.base64ToArrayBuffer(e.file),s=new Blob([a],{type:"application/vnd.ms-excel;charset=utf-8"}),o=document.createElement("a"),r=URL.createObjectURL(s);"pdf"===t.file_type||"PDF"===t.file_type?n.call("webroute.openFile",{url:r,title:e.file_name,suffixUrl:""}):(o.style.display="none",o.href=r,o.download=e.file_name,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)),i.download_lock=!1},error:function(t){i.download_lock=!1}}))},operation:function(t){this.action=t.action,this.$refs.inputDialog.open()},close:function(){this.formData.remark="",this.$refs.inputDialog.close()},confirm:function(){var t=this,i=this.$route.query,e=i.ins_id,n=i.task_id;if("0"===this.action){if(this.confirm_lock)return;this.confirm_lock=!0,(0,a.request)({data:{api:"API0000260",param:{ins_id:e,task_id:n,action:this.action,remark:this.formData.remark}},success:function(i){t.formData.remark="",uni.showToast({title:"处理成功",icon:"none"}),t.$refs.inputDialog.close(),uni.setStorageSync("refresh-todos",!0),uni.switchTab({url:"/pages/todos/index"}),t.confirm_lock=!1},error:function(i){t.formData.remark="",t.$refs.inputDialog.close(),uni.showToast({title:i.resp_message,icon:"none"}),t.confirm_lock=!1}})}else this.$refs.insForm.validate().then((function(i){t.confirm_lock||(t.confirm_lock=!0,(0,a.request)({data:{api:"API0000260",param:{ins_id:e,task_id:n,action:t.action,remark:t.formData.remark}},success:function(i){t.formData.remark="",uni.showToast({title:"处理成功",icon:"none"}),t.$refs.inputDialog.close(),uni.setStorageSync("refresh-todos",!0),uni.switchTab({url:"/pages/todos/index"}),t.confirm_lock=!1},error:function(i){t.formData.remark="",t.$refs.inputDialog.close(),uni.showToast({title:i.resp_message,icon:"none"}),t.confirm_lock=!1}}))})).catch((function(t){console.log("res",t)}))}},watch:{}};i.default=s},"5bb4":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bg-curve[data-v-12f3d128]{height:%?100?%;border-radius:0 0 50% 50%;background-color:linear-gradient(90deg,#54557d,#3a3b4b);position:absolute;width:100%}uni-scroll-view[data-v-12f3d128]{height:calc(100vh - %?100?%);padding:%?20?%;box-sizing:border-box}.content[data-v-12f3d128]{padding:%?20?% %?40?%;border-radius:5px;background:#fff;margin-bottom:%?30?%}.content[data-v-12f3d128]:last-child{margin-bottom:0}.account[data-v-12f3d128]{position:relative;padding:%?20?%;box-shadow:0 0 6px rgba(0,0,0,.1)}.account .title[data-v-12f3d128]{font-size:14px}.info[data-v-12f3d128]{font-size:13px;margin:%?8?% 0}.info .label[data-v-12f3d128]{color:#999;width:%?140?%;display:inline-block}.info .value[data-v-12f3d128]{color:#000;margin-left:%?10?%}.tip[data-v-12f3d128]{margin:%?16?% 0 %?20?% 0}.balance .value[data-v-12f3d128]{color:linear-gradient(270deg,#c9915e,#fbd0a9)}.balance .label[data-v-12f3d128]{width:%?100?%}.connect[data-v-12f3d128]{height:%?80?%;text-align:center;line-height:%?80?%;position:relative;color:linear-gradient(270deg,#c9915e,#fbd0a9);font-size:13px}.article-title[data-v-12f3d128]{font-size:14px;margin-top:%?30?%}.article[data-v-12f3d128]{font-size:13px;color:#999;word-break:break-all;margin:%?30?% 0}.flex > uni-view[data-v-12f3d128]{flex:0.5;margin:0 %?20?%;align-items:center}.dialog[data-v-12f3d128]{padding:%?20?%}.dialog .flex[data-v-12f3d128]{height:%?120?%}.net-stock[data-v-12f3d128], instruct-account[data-v-12f3d128]{display:block;margin:%?30?% %?0?%}van-dialog van-icon[data-v-12f3d128]{font-size:30px}.success van-icon[data-v-12f3d128]{color:linear-gradient(90deg,#54557d,#3a3b4b)}.fail van-icon[data-v-12f3d128]{color:var(--red--)}.message[data-v-12f3d128]{text-align:center;margin:%?70?% 0}.message uni-text[data-v-12f3d128]{vertical-align:super;font-size:16px;margin-left:%?10?%}\n/* pages/todo/todo.wxss */.tag[data-v-12f3d128]{background-color:#fcebdc;color:#8b5e53;font-size:10px;width:-webkit-fit-content;width:fit-content;padding:%?6?% %?10?%;border-radius:3px;margin-right:%?15?%;white-space:nowrap}.flex[data-v-12f3d128]{align-items:center}.title[data-v-12f3d128]{font-size:16px;width:100%;text-overflow:ellipsis;overflow:hidden;margin:%?10?% 0}.money[data-v-12f3d128]{font-size:16px;color:linear-gradient(270deg,#c9915e,#fbd0a9)}.date-status[data-v-12f3d128]{display:flex;justify-content:space-between}.tip[data-v-12f3d128]{display:flex;align-items:center;font-size:13px;color:#999;margin:0}.tip > uni-text[data-v-12f3d128]{margin-right:%?30?%}.merge[data-v-12f3d128]{margin:%?10?% 0 %?20?% 0;padding-bottom:%?25?%;border-bottom:1px solid rgba(0,0,0,.07)}uni-button[data-v-12f3d128]{color:#000!important;border:1px solid #000}uni-button[type=primary][data-v-12f3d128]{color:#fff!important;background-color:linear-gradient(90deg,#54557d,#3a3b4b)!important;border:1px solid linear-gradient(90deg,#54557d,#3a3b4b)}.file-item[data-v-12f3d128]{display:flex;width:100%;background-color:linear-gradient(90deg,#54557d,#3a3b4b)!important;border:1px solid linear-gradient(90deg,#54557d,#3a3b4b)}.file-item-img[data-v-12f3d128]{width:48px;height:48px}.file-name-size[data-v-12f3d128]{width:calc(100% - 58px);padding:7px 0 0 10px;color:#007aff}.file-name[data-v-12f3d128]{font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file-size[data-v-12f3d128]{font-size:13px;color:#999}.info[data-v-12f3d128]{flex-wrap:wrap;margin-top:%?15?%}.info .des[data-v-12f3d128]{width:50%;font-size:13px;margin:0}.info .des uni-text[data-v-12f3d128]{color:#a8a8ac;margin-top:%?10?%;display:inline-block}',""]),t.exports=i},"5e02":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uniIcons:e("fedc").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"account"},["收"===t.detail.ins_direction?e("v-uni-view",{staticClass:"zjh"},[e("v-uni-view",{staticClass:"pay-account"},[e("v-uni-image",{staticClass:"account-img",attrs:{src:"/static/images/pay.png"}}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.detail.that_acco_name))])],1),e("v-uni-view",{staticClass:"tip merge"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("账号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.that_acco_no))])],1),"1063"===t.detail.ins_type_no||"1065"===t.detail.ins_type_no||"1067"===t.detail.ins_type_no||"1069"===t.detail.ins_type_no||"1094"===t.detail.ins_type_no?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("经纪商名称")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.broker_name))])],1):e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("开户行")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.that_sys_bank_name))])],1),t.detail.that_sys_bank_no?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("大额支付号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.that_sys_bank_no))])],1):t._e()],1)],1):e("v-uni-view",[e("v-uni-view",{staticClass:"tgh"},[e("v-uni-view",{staticClass:"pay-account"},[e("v-uni-image",{staticClass:"account-img",attrs:{src:"/static/images/pay.png"}}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.detail.this_acco_name))])],1),e("v-uni-view",{staticClass:"tip merge"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("托管账号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.this_acco_no))])],1),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("开户行")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.this_sys_bank_name))])],1),t.detail.this_sys_bank_no?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("大额支付号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.this_sys_bank_no))])],1):t._e()],1)],1)],1)],1),e("v-uni-view",{staticClass:"connect"},[e("uni-icons",{attrs:{type:"pulldown",size:"20"}})],1),e("v-uni-view",{staticClass:"account"},["付"===t.detail.ins_direction?e("v-uni-view",{staticClass:"zjh"},[e("v-uni-view",{staticClass:"receive-account"},[e("v-uni-image",{staticClass:"account-img",attrs:{src:"/static/images/receive.png"}}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.detail.that_acco_name))])],1),e("v-uni-view",{staticClass:"tip"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("账号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.that_acco_no))])],1),"1062"===t.detail.ins_type_no||"1064"===t.detail.ins_type_no||"1066"===t.detail.ins_type_no||"1068"===t.detail.ins_type_no||"1094"===t.detail.ins_type_no?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("经纪商名称")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.broker_name))])],1):e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("开户行")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.that_sys_bank_name))])],1),t.detail.that_sys_bank_no?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("大额支付号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.that_sys_bank_no))])],1):t._e()],1)],1):e("v-uni-view",{staticClass:"tgh"},[e("v-uni-view",{staticClass:"receive-account"},[e("v-uni-image",{staticClass:"account-img",attrs:{src:"/static/images/receive.png"}}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.detail.this_acco_name))])],1),e("v-uni-view",{staticClass:"tip "},[e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("托管账号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.this_acco_no))])],1),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("开户行")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.this_sys_bank_name))])],1),t.detail.this_sys_bank_no?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"label"},[t._v("大额支付号")]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.detail.this_sys_bank_no))])],1):t._e()],1)],1)],1)],1)},s=[]},"619f":function(t,i,e){"use strict";e.r(i);var a=e("a1ca"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"64a8":function(t,i,e){var a=e("86f0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("6fc1b236",a,!0,{sourceMap:!1,shadowMode:!1})},"6c1a":function(t,i,e){"use strict";e.r(i);var a=e("a49a"),n=e("619f");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("8b22");var o,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"12f3d128",null,!1,a["a"],o);i["default"]=l.exports},"86f0":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-57bf4e18]:last-child{margin-bottom:0}.account[data-v-57bf4e18]{position:relative;padding:%?15?%;box-shadow:0 0 6px rgba(0,0,0,.1)}.info[data-v-57bf4e18]{margin:%?5?% %?0?%;font-size:13px}.info .label[data-v-57bf4e18]{color:#999;width:%?140?%;display:inline-block}.info .value[data-v-57bf4e18]{color:#000;margin-left:%?10?%}.tip[data-v-57bf4e18]{margin:%?10?% 0 %?20?% 0;display:block!important}.balance[data-v-57bf4e18]{padding-top:%?20?%;border-top:1px solid rgba(0,0,0,.07)}.balance .value[data-v-57bf4e18]{color:linear-gradient(270deg,#c9915e,#fbd0a9)}.balance .label[data-v-57bf4e18]{width:%?100?%}.connect[data-v-57bf4e18]{height:%?80?%;text-align:center;line-height:%?80?%;position:relative;color:linear-gradient(270deg,#c9915e,#fbd0a9);font-size:13px}.article-title[data-v-57bf4e18]{font-size:14px;margin-top:%?30?%}.article[data-v-57bf4e18]{font-size:13px;color:#999;word-break:break-all;margin:%?30?% 0}.flex[data-v-57bf4e18]{height:%?100?%}.flex > uni-view[data-v-57bf4e18]{flex:0.5;margin:0 %?20?%;align-items:center}.dialog[data-v-57bf4e18]{padding:%?20?%}.dialog .flex[data-v-57bf4e18]{height:%?120?%}.merge[data-v-57bf4e18]{margin:%?10?% 0 %?0?% 0;padding-bottom:%?25?%}uni-text.error[data-v-57bf4e18]{position:absolute;font-size:%?20?%;padding-left:%?60?%;bottom:%?-40?%;color:#f74040}.account-img[data-v-57bf4e18]{width:28px;height:28px}.account .title[data-v-57bf4e18]{width:calc(100% - 38px);font-size:13px;margin-left:%?20?%}.pay-account[data-v-57bf4e18]{display:flex;align-items:center}.receive-account[data-v-57bf4e18]{display:flex;align-items:center}',""]),t.exports=i},"8b22":function(t,i,e){"use strict";var a=e("8cd8"),n=e.n(a);n.a},"8cd8":function(t,i,e){var a=e("5bb4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("0f342c90",a,!0,{sourceMap:!1,shadowMode:!1})},a1ca:function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("3c2a")),s=n.default;i.default=s},a38d:function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("ee40")),s=n.default;i.default=s},a49a:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={pageWrap:e("156c").default,instructAccount:e("372a").default,uniList:e("0222").default,uniListItem:e("2963").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("page-wrap",{attrs:{title:t.page_title}},[e("v-uni-view",[e("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-text",{staticClass:"tag"},[t._v("托管划款")]),e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.detail.fund_name))])],1),e("v-uni-view",{staticClass:"flex info merge"},[e("v-uni-view",{staticClass:"des"},[e("v-uni-view",{staticClass:"money"},[t._v(t._s(t.detail.ins_money))]),e("v-uni-text",[t._v("划款金额")])],1),e("v-uni-view",{staticClass:"des"},[e("v-uni-view",[t._v(t._s(t.detail.ins_type_name))]),e("v-uni-text",[t._v("划款类别")])],1)],1),e("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.detail.ins_date))])],1),e("instruct-account",{staticClass:"instruct-account",attrs:{detail:t.detail}}),"1182"===t.detail.ins_type_no||"1183"===t.detail.ins_type_no?e("v-uni-view",{staticClass:"net-stock"},[e("uni-list",[e("uni-list-item",{attrs:{title:"股票代码",rightText:t.detail.ipo_code}}),t.detail.shareholder_code?e("uni-list-item",{attrs:{title:"股东代码",rightText:t.detail.shareholder_code}}):t._e(),t.detail.ipo_winning_num?e("uni-list-item",{attrs:{title:"新股中签数量",rightText:t.detail.ipo_winning_num}}):t._e(),t.detail.ipo_winning_price?e("uni-list-item",{attrs:{title:"新股中签价格",rightText:t.detail.ipo_winning_price}}):t._e(),t.detail.commission_deatil?e("uni-list-item",{attrs:{title:"佣金",rightText:t.detail.commission_deatil}}):t._e()],1)],1):t._e(),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",[e("v-uni-view",{staticClass:"article-title"},[t._v("摘要")]),e("v-uni-view",{staticClass:"article"},[t._v(t._s(t.detail.reason_for_payment))])],1),e("v-uni-view",[e("v-uni-view",{staticClass:"article-title"},[t._v("给托管人留言")]),e("v-uni-view",{staticClass:"article"},[t._v(t._s(t.detail.msg_for_truste))])],1)],1),e("v-uni-view",t._l(t.fileList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"content"},[e("v-uni-view",{staticClass:"file-item"},["pdf"===i.file_type||"PDF"===i.file_type?e("v-uni-image",{staticClass:"file-item-img",attrs:{src:"/static/images/file-pdf.png"}}):"xls"===i.file_type||"xlsx"===i.file_type?e("v-uni-image",{staticClass:"file-item-img",attrs:{src:"/static/images/file-excel.png"}}):"doc"===i.file_type||"docx"===i.file_type?e("v-uni-image",{staticClass:"file-item-img",attrs:{src:"/static/images/file-word.png"}}):e("v-uni-image",{staticClass:"file-item-img",attrs:{src:"/static/images/file-other.png"}}),e("v-uni-view",{staticClass:"file-name-size"},[e("v-uni-view",{staticClass:"file-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downloadItem(i)}}},[t._v(t._s(i.file_name))]),e("v-uni-view",{staticClass:"file-size"},[t._v(t._s(i.file_size_show))])],1)],1)],1)})),1)],1)],1)],1)},s=[]},b048:function(t,i,e){"use strict";var a=e("64a8"),n=e.n(a);n.a},bc28:function(t,i,e){"use strict";e.r(i);var a=e("a38d"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},bf11:function(t,i){t.exports={br:"r",hr:"r",p:"r",h1:"r",h2:"r",h3:"r",h4:"r",h5:"r",h6:"r",abbr:"r",address:"r",b:"r",bdi:"r",bdo:"r",blockquote:"r",cite:"r",code:"r",del:"r",ins:"r",dfn:"r",em:"r",strong:"r",samp:"r",kbd:"r",var:"r",i:"r",mark:"r",pre:"r",q:"r",ruby:"r",rp:"r",rt:"r",s:"r",small:"r",sub:"r",sup:"r",time:"r",u:"r",wbr:"r",select:"r",option:"r",optgroup:"r",fieldset:"r",datalist:"r",legend:"r",output:"r",iframe:"r",img:"r",figure:"r",figcaption:"r",source:"r",track:"r",a:"r",nav:"r",link:"r",ul:"r",ol:"r",li:"r",dl:"r",dt:"r",dd:"r",menu:"r",command:"r",table:"r",caption:"r",th:"r",td:"r",tr:"r",thead:"r",tbody:"r",tfoot:"r",col:"r",colgroup:"r",div:"r",main:"r",span:"r",header:"r",footer:"r",section:"r",article:"r",aside:"r",details:"r",dialog:"r",summary:"r",meter:"r",head:"r",meta:"r",base:"r",area:"r",script:"r",noscript:"r",embed:"r",object:"r",param:"r",body:"page",html:"page"}},ee40:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"instruct-account",props:{page_config:{type:String,default:""},detail:{type:Object}},data:function(){return{balance_tgh:0,triggered:!0,transparent:!0}},methods:{onPulling:function(t){console.log("onpulling",t)},onRefresh:function(){var t=this;this._freshing=!0,setTimeout((function(){t.triggered=!1,t._freshing=!1}),3e3)},onRestore:function(){this.triggered="restore",console.log("onRestore")},onAbort:function(){console.log("onAbort")}}};i.default=a}}]);