(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={home:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;s.push([6,"chunk-vendors","chunk-common"]),a()})({"04d3":function(t,e,a){"use strict";var i=a("dc85"),n=a.n(i);n.a},6:function(t,e,a){t.exports=a("e04b")},dc85:function(t,e,a){},e04b:function(t,e,a){"use strict";a.r(e);a("c975"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:{fadeIn:t.aniAct}},[a("div",{ref:"homeSlider",staticClass:"home-slider"}),a("div",{staticClass:"home-content"},[a("div",{staticClass:"btn-group line-spt-bott"},[t._m(0),a("div",{staticClass:"btn",on:{click:function(e){t.$comm.openPopFrame("confirm_pop",{content:"确认退出",script:"$vm.logOut()",frameName:t.frameName})}}},[t._v("退出")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(1),a("div",{staticClass:"btn",on:{click:function(e){t.$comm.openPopFrame("confirm_pop",{content:"是否清除缓存?",script:"$vm.clearCache()",frameName:t.frameName})}}},[t._v("清除缓存")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(2),a("div",{staticClass:"btn",on:{click:t.openFramePop}},[t._v("frame 弹窗")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(3),a("div",{staticClass:"btn",on:{click:function(e){return t.openWin("normal_header_win","普通win")}}},[t._v("普通win")]),a("div",{staticClass:"btn",on:{click:function(e){return t.openSpecialHeaderWin("special_header_win","special_header","特殊win")}}},[t._v("特殊win")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(4),a("div",{staticClass:"btn",on:{click:function(e){return t.openDateSelect("date",!0,!1)}}},[t._v("日期选择")]),a("div",{staticClass:"btn",on:{click:function(e){return t.openDateSelect("date",!0,!1,"2019-12-12")}}},[t._v("有初始日期的日期选择")]),a("div",{staticClass:"btn",on:{click:function(e){return t.openDateSelect("date",!0,!1,"2019-12-12","2019-12-22")}}},[t._v("有初始日期和结束日期的日期选择")]),a("div",{staticClass:"btn",on:{click:function(e){return t.openDateSelect("date",!1,!1,t.currDate)}}},[t._v("单个日期选择")]),a("div",{staticClass:"btn",on:{click:function(e){return t.openDateSelect("date",!1,!0)}}},[t._v("禁用日期")]),a("div",{staticClass:"date-row ft-italic"},[t._v("Date: "+t._s(t.date||"--"))])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(5),a("div",{staticClass:"btn",on:{click:function(e){return t.openAreaPicker()}}},[t._v("省市区选择")]),a("div",{staticClass:"area-row ft-italic"},[t._v("Area: "+t._s(t.area||"--"))])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(6),a("div",{staticClass:"btn",on:{click:function(e){return t.switchTab(1)}}},[t._v("上拉加载下拉刷新")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(7),a("div",{staticClass:"row-ing-wap"},[a("div",{staticClass:"img-row"},[a("div",{staticClass:"browser-img",staticStyle:{"background-image":"url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098669093&di=4c3a62144d4e32dc0c0864efdeee2f1d&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F90479357.jpeg)"},on:{click:function(e){return t.photoBrowser(0)}}})]),a("div",{staticClass:"img-row"},[a("div",{staticClass:"browser-img",staticStyle:{"background-image":"url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098987302&di=b0f7b454007c927ad3c1611fb86910e9&imgtype=jpg&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-10%2F071555922.jpg)"},on:{click:function(e){return t.photoBrowser(1)}}})])])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(8),a("div",{staticClass:"btn",on:{click:function(e){return t.openWin("example_fixed_bottom","绝对定位底部的元素")}}},[t._v("查看示例")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(9),a("div",{staticClass:"btn",on:{click:function(e){return t.switchTab(2)}}},[t._v("查看示例")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(10),a("div",{staticClass:"btn",on:{click:function(e){return t.dynamicPermissionsCase()}}},[t._v("打开相机")])]),a("div",{staticClass:"btn-group line-spt-bott"},[t._m(11),a("div",{staticClass:"btn",on:{click:function(e){return t.editPicExample()}}},[t._v("编辑图片")]),a("div",{staticClass:"area-row"},[t.editResult?a("img",{staticClass:"edit-res-pic",attrs:{src:t.editResult,alt:""}}):a("span",{staticClass:"ft-italic"},[t._v("请选择图片进行编辑")])])]),t._m(12),t._m(13)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("1. ")]),t._v("app退出示例，关闭frameGroup打开登陆页 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("2. ")]),t._v("清除app缓存 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("3. ")]),t._v("打开带透明蒙层的frame弹窗（当页面有frame弹窗时先关闭frame弹窗再关闭页面） ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("4. ")]),t._v("公共头部和特殊头部页面的实现 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("5. ")]),t._v("一个选择日期的例子 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("6. ")]),t._v("一个选择省市区的例子，使用模块UIActionSelector，可以在common.js里自定义UIActionSelector的样式 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("7. ")]),t._v("上拉加载下拉刷新示例 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("8. ")]),t._v("图片查看器，使用photoBrowser模块，可以在common.js里自修改配置 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("9. ")]),t._v("ios绝对定位底部的元素键盘弹出示例 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("10. ")]),t._v("瀑布流布局、图片缓存示例 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("11. ")]),t._v("动态授权实例"),a("br"),t._v(" 在Android上使用动态权限，要求APP编译的目标SDK（即targetSdkVersion）为23及以上（对应为android6.0及以上系统） "),a("br"),t._v(" (如果已经获取到了相机权限请先在系统设置里关闭) "),a("br"),a("br"),t._v(" 如何自定义编译targetSdkVersion值以及使用动态动态权限： "),a("br"),t._v(" 请参考 https://community.apicloud.com/bbs/thread-110959-1-2.html ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("12. ")]),t._v("图片编辑、裁剪示例"),a("br"),t._v(" 使用模块 FNImageClip 裁剪图片 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group line-spt-bott"},[a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("13. ")]),t._v("开发环境下资源引用方式 "),a("br"),t._v(' 当你在 JavaScript、CSS 或 *.vue 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 <img src="...">、css内的background: url(...) 和 CSS @import 的资源 URL 都会被解析为一个模块依赖。 '),a("br"),t._v(" 因此此类资源请放在assets文件夹内，在publish下的文件只是简单的复制，请使用编译后的文件关系引用(即实际app内文件引用方式) ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group"},[a("div",{staticClass:"area-row"},[a("span",{staticClass:"sei-no"},[t._v("14. ")]),t._v("页面头部(除去状态栏)默认高度为 44px ")])])}],o=(a("99af"),{name:"home",data:function(){return{aniAct:!1,homeData:{},slideObj:null,date:"",area:"",editResult:""}},computed:{currDate:function(){return(new Date).format("yyyy-MM-dd")},frameName:function(){return api.frameName}},mounted:function(){var t=this;t.aniAct=!0,t.listenChooseDateRes(),t.$comm.pullDown((function(){t.showProgress("请稍候..."),t.getHomeData()})),t.getHomeData()},methods:{refreshAni:function(){this.aniAct=!1,setTimeout((function(){api.execScript({name:"root",script:"$vm.switchTabAtAniInit()"})}),0)},initHomeSlide:function(t){var e=this,a=e.$refs.homeSlider.offsetHeight,i=api.require("UIScrollPicture");return i.open({rect:{x:0,y:0,w:api.winWidth,h:a},data:{paths:t,captions:[""]},styles:{caption:{height:10,color:"rgba(0, 0, 0, 0)",size:10,bgColor:"rgba(0, 0, 0, 0)",position:"overlay",alignment:"left"},indicator:{dot:{w:8,h:8,r:4,margin:4},align:"center",color:"rgba(255, 255, 255, .6)",activeColor:"#fff"}},placeholderImg:"widget://image/placeH_pic.png",contentMode:"scaleToFill",interval:4,auto:!1,fixedOn:api.frameName,loop:!0,fixed:!1},(function(t,a){if(t&&"click"==t.eventType){var i=1;e.$comm.openWin({name:"normal_header_win",pageParam:{title:"详情",id:i}})}})),i},openWin:function(t,e){this.$comm.openWin({name:t,pageParam:{title:e}})},openSpecialHeaderWin:function(t,e,a){this.$comm.openWin({name:t,headerName:e,pageParam:{title:a}})},getHomeData:function(){var t=this;setTimeout((function(){t.hideProgress();var e=["./image/slide3.png","./image/slide2.png","./image/slide1.png"];api.refreshHeaderLoadDone(),t.slideObj?t.slideObj.reloadData({data:{paths:e}}):t.slideObj=t.initHomeSlide(e)}),800)},logOut:function(){var t=this;t.rmStorage("token"),api.execScript({name:"root",script:"$vm.openLoginWhenTokenInvalid()"}),api.closeToWin({name:"root",animation:{type:"movein",subType:"from_left",duration:300}})},openFramePop:function(){this.$comm.openPopFrame("confirm_pop",{content:"frame 弹窗"})},openDateSelect:function(t,e,a,i,n){this.$comm.openWin({name:"choose_date",pageParam:{title:"日期选择",strKey:t,isDisabledDate:a,disabledDateBefore:"",disabledDateAfter:"",isRangDate:e,start:i||"",end:n||""}})},listenChooseDateRes:function(){var t=this;api.addEventListener({name:"dateselect"},(function(e,a){e&&(e.value.isRang?t[e.value.strKey]="".concat(e.value.start,"~").concat(e.value.end):t[e.value.strKey]=e.value.start)}))},openAreaPicker:function(){var t=this;t.$comm.openActionSelect({datas:"widget://res/city.json",col:3},(function(e){"ok"==e.eventType&&(t.area="".concat(e.level1,"/").concat(e.level2,"/").concat(e.level3))}))},switchTab:function(t){api.execScript({name:"root",script:"$vm.switchTab("+t+")"})},photoBrowser:function(t){var e=["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098669093&di=4c3a62144d4e32dc0c0864efdeee2f1d&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F90479357.jpeg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098987302&di=b0f7b454007c927ad3c1611fb86910e9&imgtype=jpg&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-10%2F071555922.jpg"];this.$comm.openPhotoBrowser({images:e,activeIndex:t},(function(t,e){"click"===t.eventType&&e.close()}))},clearCache:function(){var t=this;t.showProgress("请稍后..."),api.clearCache((function(){t.hideProgress(),api.toast({msg:"清除完成"})}))},dynamicPermissionsCase:function(){var t=this,e="camera",a=api.hasPermission({list:[e]});a[0].granted?t.$comm.openPopFrame("confirm_pop",{content:"已允许打开相机权限，请前往 设置>应用>权限管理 关闭后重试",showCancel:!1}):t.$comm.testAndReqPermission(e).then((function(e){t.premToOpenCamera()}))},premToOpenCamera:function(){api.getPicture({sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",quality:100,saveToPhotoAlbum:!1})},editPicExample:function(){var t=this;api.actionSheet({title:"",cancelTitle:"取消",style:{fontNormalColor:"#97a38d",fontPressColor:"#97a38d"},buttons:["相机","图片库"]},(function(e,a){if(e){if(3===e.buttonIndex)return;var i="camera";2===e.buttonIndex&&(i="library"),t.$comm.testAndReqPermission("camera"===i?"camera":"photos").then((function(e){api.getPicture({sourceType:i,encodingType:"jpg",mediaValue:"pic",destinationType:"url",quality:100,saveToPhotoAlbum:!1},(function(e,a){e.data&&t.$comm.openWin({name:"edit_img",headerName:"edit_img_header",pageParam:{title:"图片编辑",winName:api.winName,frameName:api.frameName,path:e.data,clipH:200,clipW:200}})}))}))}}))},getEditResult:function(t){this.editResult=t}}}),r=o,c=(a("04d3"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,null,null),p=l.exports,u=a("e688");Object(u["a"])(),i["a"].config.productionTip=!1;var m=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),d=null;m?window.apiready=function(){d=new i["a"]({render:function(t){return t(p)}}).$mount("#app"),d.$nextTick((function(){d.$appPageReady()})),window.$vm=d.$children[0]}:d=new i["a"]({render:function(t){return t(p)}}).$mount("#app")}});